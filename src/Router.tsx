import { Route, Routes } from "react-router-dom";
import { UserTheme } from "./layouts/UserTheme";
import { UserAllOrders } from "./pages/Client/UserAllOrders";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AnonymousCreateOrder } from "./pages/Anonymous/AnonymousCreateOrder";
import { Confirm_Orders } from "./pages/Confirm_Orders";
import { AnonymousHome } from "./pages/Anonymous/AnonymousHome";
import { UserAcceptedOrders } from "./pages/Client/UserAcceptedOrders";
import { UserRejectedOrders } from "./pages/Client/UserRejectedOrders";
import { UserInAnalysisOrders } from "./pages/Client/UserInAnalysisOrders";
import { UserInProductionOrders } from "./pages/Client/UserInProductionOrders";
import { NonUserTheme } from "./layouts/NonUserTheme";
import { RequireAuth } from "./context/RequireAuth";
import { UserCreateOrders } from "./pages/Client/UserCreateOrders";
import { UserProfile } from "./pages/Client/UserProfile";
import { AdminTheme } from "./layouts/AdminTheme";
import { UserList } from "./pages/Admin/UserList";
import { EditOrder } from "./pages/Client/EditOrder";
import { AnonymousOrder } from "./pages/Anonymous/AnonymousOrder";
import { AnonymouEditOrder } from "./pages/Anonymous/AnonymousEditOrder";
import { AdminProfile } from "./pages/Admin/AdminProfile";
import { AdminOrderList } from "./pages/Admin/AdminOrderList";

interface OrderProps {
    id_pedido: number
    maquina: string
    material: string
    prioridade: string
    estado: string
    descricao: string
    cor: string
    comentario: string
}

export function Router() {
    return (
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/confirm_orders" element={<Confirm_Orders />} />
            </Route>

            <Route path="/non-user" element={<NonUserTheme />}>
                <Route path="home" element={<AnonymousHome />} />
                <Route path="createorder" element={<AnonymousCreateOrder />} />
                <Route path="order" element={<AnonymousOrder />} />
                <Route path="editorder" element={<AnonymouEditOrder />} />
            </Route>

            <Route path="/user" element={<RequireAuth role={2} />}>
                <Route element={<UserTheme />} >
                    <Route path="accepted" element={<UserAcceptedOrders />} />
                    <Route path="rejected" element={<UserRejectedOrders />} />
                    <Route path="analysis" element={<UserInAnalysisOrders />} />
                    <Route path="production" element={<UserInProductionOrders />} />
                    <Route path="allOrders" element={<UserAllOrders />} />
                    <Route path="createorder" element={<UserCreateOrders />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="editorder" element={<EditOrder />} />
                </Route>
            </Route>

            <Route path="/admin" element={<RequireAuth role={1} />}>
                <Route element={<AdminTheme />}>
                    <Route path="users" element={<UserList />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="orderlist" element={<AdminOrderList/>} />
                </Route>
            </Route>
        </Routes>
    );
}