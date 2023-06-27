import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useAuth } from "../../../context/useAuth";
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
    arquivo:string
}

export function UserAcceptedOrders() {

    const { findUserOrder } = useAuth();
    const [orderData, setOrderData] = useState<OrderProps[]>([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            const pedidos = await findUserOrder('aprovado');
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
    )
}


