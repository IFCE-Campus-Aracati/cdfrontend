import { OrderContainer } from "./styles";
import { useAuth } from "../../../context/useAuth";
import { UserTable } from "../../../Components/UserTable";
import { useState, useEffect } from "react";

interface TableProps {
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

export function UserAllOrders() {
  const { findUserAllOrder } = useAuth();
  const [orderData, setOrderData] = useState<TableProps[] | null>([]);

  useEffect(() => {
    const fetchPedidosPendentes = async () => {
      const pedidos = await findUserAllOrder();
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
    <OrderContainer>
      <UserTable dataOrder={orderData} />
    </OrderContainer>
  )
}