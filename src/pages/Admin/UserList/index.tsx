import { useEffect, useState } from "react";
import { AdminUserListTable } from "../../../Components/AdminUserListTable";
import { useAuth } from "../../../context/useAuth";
import { Container } from "./styles";

interface UserTypes {
    id_usuario: number;
    nome: string;
    email: string;
    id_cargo: CargoTypes;
}

interface CargoTypes {
    id_cargo: number;
    cargo: string;
}

export function UserList() {
    const { findAllUsers } = useAuth();

    const [userData, setUserData] = useState<UserTypes[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            await findAllUsers().then((response)=> {
                setUserData(response);
            });
        };

        fetchUsers();
    }, []);

    return (
        <Container>
            <AdminUserListTable data={userData} />
        </Container>
    );
}





