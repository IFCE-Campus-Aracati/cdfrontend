import { useEffect, useState } from "react";
import { useAuth } from "../../../context/useAuth";
import { Container } from "./styles";
import { UserTable } from "../../../Components/UserTable";

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

export function UserInAnalysisOrders() {

    const { findUserOrder } = useAuth();
    const [orderData, setOrderData] = useState<OrderProps[]>([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            const pedidos = await findUserOrder('pendente');
            setTimeout(() => {
                setOrderData(pedidos);
              }, 100);
        };

        fetchPedidos();
    }, []);

    return (
        <Container>
            <UserTable dataOrder={orderData} />
        </Container>
    );
}