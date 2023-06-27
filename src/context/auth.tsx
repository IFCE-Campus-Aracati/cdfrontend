import { ReactNode, createContext, useEffect, useState } from "react";
import { Api } from "../Api";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";

interface contextProvider {
    children?: ReactNode
}

interface CargoTypes {
    id_cargo: number
    cargo: string
}

interface PedidoTypes {
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

interface AnonymousPedidoTypes {
    id_pedidoAnonimo: number
    maquina: string
    material: string
    prioridade: string
    estado: string
    descricao: string
    cor: string
    comentario: string
    codigo: string
    arquivo: string
}

interface User {
    id_usuario: number
    nome: string
    email: string
    id_cargo: CargoTypes
}

interface localUser {
    token: string
    user: User
}

interface contextData {
    user: User | null
    order: PedidoTypes | null
    loading: boolean
    anonymousOrder: AnonymousPedidoTypes | null
    signIn: (email: string, password: string) => Promise<void>
    signUp: (name: string, email: string, password: string, cargo: number) => Promise<void>
    createOrder: (material: string, prioridade: string, maquina: string, arquivo: File, horario: number, descricao: string, comentario: string, cor?: string) => Promise<void>
    findUserOrder: (estado: string) => Promise<PedidoTypes[]>
    findUserAllOrder: () => Promise<PedidoTypes[]>
    deleteOrderById: (id_pedido: number) => Promise<void>
    updateOrder: (id_pedido: number, material: string, prioridade: string, maquina: string, arquivo: File, horario: number, descricao: string, comentario: string, estado: string, cor?: string) => Promise<void>
    setUserOrder: (data: PedidoTypes) => Promise<void>
    createAnonymousOrder: (material: string, maquina: string, arquivo: File, horario: number, descricao: string, comentario: string, cor?: string) => Promise<string>
    findAnonymousOrderByCode: (code: string) => Promise<AnonymousPedidoTypes | null>
    deleteAnonymousOrderByCode: (code: string) => Promise<void>
    setAnonymousOrders: (data: AnonymousPedidoTypes) => Promise<void>
    editAnonymousOrderByCode: (code: string, material: string, maquina: string, arquivo: File | null, horario: number, descricao: string, comentario: string, cor?: string) => Promise<void>
    findAllUsers: () => Promise<User[]>
    adminDeleteUser: (userId: number) => Promise<void>
    adminEditUser: (userId: number, name: string, email: string, id_cargo: number) => Promise<void>
    adminFindAllOrder: () => Promise<PedidoTypes[]>
    adminEditOrder: (id_pedido: number, material: string, maquina: string, estado: string, horario: number, cor?: string) => Promise<void>
    adminDeleteOrder: (id_pedido: number) => Promise<void>
    downloadArchive: (filename: string) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext<contextData>({} as contextData);

export const AuthProvider = ({ children }: contextProvider) => {

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [order, setOder] = useState<PedidoTypes | null>(null)
    const [anonymousCode, setAnonymousCode] = useState('');
    const [anonymousOrder, setAnonymousOrder] = useState<AnonymousPedidoTypes | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        const validateToken = async () => {
            const userStorage = localStorage.getItem("@codecrafters:user");

            if (userStorage) {
                try {
                    const userData = JSON.parse(userStorage);

                    setUser(userData.user);
                    setToken(userData.token);
                    if (userData.user.id_cargo.id_cargo == 1) {
                        navigate("/admin/users");
                    } else {
                        navigate("/user/production");
                    }
                } catch (error) {
                    console.error("Erro ao obter dados", error);
                }

            } else {
                setLoading(false);
            }

        };

        validateToken();
    }, []);

    const signIn = async (email: string, password: string) => {
        const data = await Api.post("login", {
            email: email,
            senha: password
        })

        if (data.data.user && data.data.token) {
            setUser(data.data.user)
            setStorage(data.data);

            if (data.data.user.id_cargo.id_cargo === 1) {
                navigate("/admin/users");
            } else {
                navigate("/user/production");
            }
        }

    }

    const signUp = async (name: string, email: string, password: string, cargo: number) => {
        Api.post("usuario", {
            nome: name,
            email: email,
            senha: password,
            cargo: cargo
        }).then((response) => {

        }).catch((error) => {
            console.log(error)
        })
    }

    const createOrder = async (material: string, prioridade: string, maquina: string, arquivo: File | null, horario: number, descricao: string, comentario: string, cor?: string) => {
        await Api.post("pedido/create", {
            material: material,
            prioridade: prioridade,
            maquina: maquina,
            file: arquivo,
            cor: cor,
            descricao: descricao,
            comentario: comentario,
            id_horaDisponivel: horario,
            id_autorAutorizador: null,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const findUserOrder = async (estado: string) => {
        const response: AxiosResponse<PedidoTypes[]> = await Api.get("pedido/get");
        const pedidos: PedidoTypes[] = response.data;
        const pedidosFiltrados: PedidoTypes[] = pedidos.filter((pedido) => pedido.estado === estado);
        return pedidosFiltrados;
    };

    const findUserAllOrder = async () => {
        const response = await Api.get("pedido/get");
        const pedidos = response.data;
        return pedidos;
    };

    const deleteOrderById = async (id_pedido: number) => {
        await Api.delete(`pedido/delete/${id_pedido}`);
    };

    const updateOrder = async (id_pedido: number, material: string, prioridade: string, maquina: string, arquivo: File, horario: number, descricao: string, comentario: string, estado: string, cor?: string) => {
        await Api.put(`/pedido/update/${id_pedido}`, {
            material: material,
            maquina: maquina,
            arquivo: arquivo,
            prioridade: prioridade,
            cor: cor,
            descricao: descricao,
            comentario: comentario,
            id_horaDisponivel: horario,
        }).then(() => {
            navigate('/user/production');
        })
    }

    const setUserOrder = async (data: PedidoTypes) => {
        setOder(data);
    }

    const createAnonymousOrder = async (material: string, maquina: string, arquivo: File | null, horario: number, descricao: string, comentario: string, cor?: string) => {
        await Api.post("/pedidoanonimo/create", {
            material: material,
            maquina: maquina,
            file: arquivo,
            cor: cor,
            descricao: descricao,
            comentario: comentario,
            id_horaDisponivel: horario,
            id_autorAutorizador: null,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            setAnonymousCode(response.data.codigo)
        })
        return anonymousCode;
    }

    const findAnonymousOrderByCode = async (code: string) => {
        await Api.get(`/pedidoanonimo/listPedidoByCodigo/${code}`).then((response) => {
            response.data.map((data: AnonymousPedidoTypes) => {
                setAnonymousOrder(data)
            })
        });

        return anonymousOrder;
    }

    const deleteAnonymousOrderByCode = async (code: string) => {
        await Api.delete(`/pedidoanonimo/delete/${code}`).then(() => {
            setAnonymousOrder(null);
            navigate('non-user/home')
        });
    }

    const setAnonymousOrders = async (data: AnonymousPedidoTypes) => {
        setAnonymousOrder(data);
        navigate('non-user/editorder');
    }

    const editAnonymousOrderByCode = async (code: string, material: string, maquina: string, arquivo: File | null, horario: number, descricao: string, comentario: string, cor?: string) => {
        await Api.put(`/pedidoanonimo/update/${code}`, {
            material: material,
            maquina: maquina,
            file: arquivo,
            cor: cor,
            descricao: descricao,
            comentario: comentario,
            id_horaDisponivel: horario,
            id_autorAutorizador: null,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(() => {
            navigate('non-user/home')
        })
    }

    const findAllUsers = async () => {
        const response = await Api.get("adminUser/listUser");
        const users = response.data;
        return users;
    }

    const adminDeleteUser = async (userId: number) => {
        await Api.delete(`/adminUser/delete/${userId}`).then(() => {
            navigate('/admin/users');
        });
    }

    const adminEditUser = async (userId: number, name: string, email: string, id_cargo: number) => {
        await Api.put(`/adminUser/update/${userId}`, {
            nome: name,
            email: email,
            id_cargo: id_cargo
        })
    }

    const adminFindAllOrder = async () => {
        const response = await Api.get("adminPedidos/listPedido");
        const pedidos = response.data;
        return pedidos;
    }

    const adminEditOrder = async (id_pedido: number, material: string, maquina: string, estado: string, horario: number, cor?: string) => {
        await Api.put(`/adminPedidos/update/${id_pedido}`,{
            material: material,
            estado: estado,
            maquina: maquina,
            cor: cor,
            id_horaDisponivel: horario,
        }).then((response) => {
            console.log(response);
        })
    }

    const adminDeleteOrder = async (id_pedido: number) => {
        await Api.delete(`/adminPedidos/delete/${id_pedido}`);
    }

    const downloadArchive = async(filename: string) => {
        await Api.get(`/files/${filename}`).then(() =>{

        });
    }

    const setStorage = async (data: localUser) => {
        await localStorage.setItem("@codecrafters:user", JSON.stringify(data));
    }

    const signOut = async () => {
        await localStorage.clear();
        setUser({} as User);
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signUp,
            signOut,
            createOrder,
            findUserOrder,
            findUserAllOrder,
            deleteOrderById,
            order,
            setUserOrder,
            updateOrder,
            createAnonymousOrder,
            findAnonymousOrderByCode,
            anonymousOrder,
            deleteAnonymousOrderByCode,
            setAnonymousOrders,
            editAnonymousOrderByCode,
            findAllUsers,
            adminDeleteUser,
            adminEditUser,
            adminFindAllOrder,
            adminEditOrder,
            adminDeleteOrder,
            downloadArchive
        }} >
            {
                children
            }
        </AuthContext.Provider>
    )
}