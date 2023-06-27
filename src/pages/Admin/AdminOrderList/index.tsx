import { useEffect, useState } from "react";
import { AdminNavigationBar } from "../../../Components/AdminNavigationBar";
import { AdminOrderListTable } from "../../../Components/AdminOrderListTable";
import { Container } from "./styles";
import { useAuth } from "../../../context/useAuth";

interface TableProps {
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

export function AdminOrderList() {

    const { adminFindAllOrder } = useAuth();
    const [orderData, setOrderData] = useState<TableProps[] | null>([]);

    useEffect(() => {
        const fetchPedidosPendentes = async () => {
            const pedidos = await adminFindAllOrder();
            setTimeout(() => {
                setOrderData(pedidos);
            }, 100);
        };
        fetchPedidosPendentes();
    }, []);

    if (orderData === null) {
        return <div>Carregando...</div>;
    }
    return (
        <Container>
            <AdminOrderListTable data ={orderData}/>
        </Container>
    );
}