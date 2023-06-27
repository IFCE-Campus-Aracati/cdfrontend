import { useEffect, useState } from "react";
import { UserTable } from "../../../Components/UserTable";
import { useAuth } from "../../../context/useAuth";
import { Container } from "./styles";

interface OrderProps {
    id_pedido: number
    maquina: string
    material: string
    prioridade: string
    estado: string
    descricao: string
    cor: string
    comentario: string
    arquivo: string
  }

export function UserInProductionOrders(){
    const { findUserOrder } = useAuth();
    const [orderData, setOrderData] = useState<OrderProps[]>([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            const pedidos = await findUserOrder('produzindo');
            setTimeout(() => {
                setOrderData(pedidos);
              }, 100);
        };

        fetchPedidos();
    }, []);
    return(

        <Container>
            <UserTable dataOrder={orderData} />
        </Container>
    );
}