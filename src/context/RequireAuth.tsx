import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

interface RoleProps {
    role: 1 | 2
}

export const RequireAuth = ({role}: RoleProps) => {
    const auth = useAuth();

    if(!auth.user && !auth.loading){
        return <Navigate to={"/signin"} /> 
    }

    const checkUserPermission = role == auth.user?.id_cargo.id_cargo;

    if(!checkUserPermission){
        return auth.user?.id_cargo.id_cargo == 1 ? <Navigate to={"/admin/users"} /> : <Navigate to={"/user/production"}/>
    }

    return <Outlet/>;
}