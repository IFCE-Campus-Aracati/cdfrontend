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
}

export function UserRejectedOrders(){

    const { findUserOrder } = useAuth();
    const [orderData, setOrderData] = useState<OrderProps[]>([]);

    useEffect(() => {
        const fetchPedidosPendentes = async () => {
            const pedidosPendentes = await findUserOrder('reprovado');
            setOrderData(pedidosPendentes);
        };

        fetchPedidosPendentes();
    }, []);
    return(
        <Container>
            <UserTable dataOrder={orderData} />
        </Container>
    );
}