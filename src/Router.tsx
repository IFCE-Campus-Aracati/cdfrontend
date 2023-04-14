import { Route, Routes } from "react-router-dom";
import { UserTheme } from "./layouts/UserTheme";
import { UserAllOrders } from "./pages/UserAllOrders";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Solitacoes } from "./pages/Solitacoes";
import { Confirm_Orders } from "./pages/Confirm_Orders";
import { NoUserAcceptedOrders } from "./pages/NoUserAcceptedOrders";
import { NoUserRejectedOrders } from "./pages/NoUserRejectedOrders";
import { NoUserInAnalysisOrders } from "./pages/NoUserInAnalysisOrders";
import { NoUserInProductionOrders } from "./pages/NoUserInProductionOrders";
import { NoUserAllOrders } from "./pages/NoUserAllOrders";
import { UserAcceptedOrders } from "./pages/UserAcceptedOrders";
import { UserRejectedOrders } from "./pages/UserRejectedOrders";
import { UserInAnalysisOrders } from "./pages/UserInAnalysisOrders";
import { UserInProductionOrders } from "./pages/UserInProductionOrders";
import { NonUserTheme } from "./layouts/NonUserTheme";

export function Router() {
    return (
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/solitacoes" element={<Solitacoes />} />
                <Route path="/confirm_orders" element={<Confirm_Orders/>} />
            </Route>

            <Route path="/non-user" element={<NonUserTheme/>}>
                <Route path="/non-user/accepted" element={<NoUserAcceptedOrders />} />
                <Route path="/non-user/rejected" element={<NoUserRejectedOrders/>} />
                <Route path="/non-user/analysis" element={<NoUserInAnalysisOrders/>} />
                <Route path="/non-user/production" element={<NoUserInProductionOrders/>} />
                <Route path="/non-user/allOrders" element={<NoUserAllOrders/>} />
            </Route>

            <Route path="/user"  element={<UserTheme/>}>
                <Route path="/user/accepted" element={<UserAcceptedOrders/>} />
                <Route path="/user/rejected" element={<UserRejectedOrders/>} />
                <Route path="/user/analysis" element={<UserInAnalysisOrders/>} />
                <Route path="/user/production" element={<UserInProductionOrders/>} />
                <Route path="/user/allOrders" element={<UserAllOrders/>} />
            </Route>
        </Routes>
    );
}