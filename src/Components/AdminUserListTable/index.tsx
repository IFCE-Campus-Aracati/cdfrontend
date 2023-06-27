import { Pen, Trash, X } from "phosphor-react";
import { Table, ButtonContainer, IconButton, InfoContainer, TableBody, Td, Th, Thead, Tr, OverlayTitle, OverlayText, OverlayButtonContainer, EditUserContainer, EditUserContent, Close } from "./styles";
import { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/useAuth";
import { ConfirmOverlay } from "../ConfirmOverlay";
import { Button } from "../Button";
import { InputWithBorderBottom } from "../InputWithBorderBottom";
import { SelectWithBorderBottom } from "../SelectWithBorderBottom";

interface UserTypes {
    id_usuario: number
    nome: string
    email: string
    id_cargo: CargoTypes
}

interface CargoTypes {
    id_cargo: number
    cargo: string
}

interface UserList {
    data: UserTypes[]
}

export function AdminUserListTable({ data }: UserList) {
    const [editUserOverlay, setEditUserOverlay] = useState(false);
    const [userEdit, setUserEdit] = useState<UserTypes | null>(null);
    const [openOverlay, setOpenOverlay] = useState(false);
    const [idDelete, setIdDelete] = useState(0);
    const { adminDeleteUser, adminEditUser } = useAuth();
    const [filteredData, setFilteredData] = useState<UserTypes[]>([])

    const [name, setName] = useState(userEdit?.nome);
    const [email, setEmail] = useState(userEdit?.email);
    const [idCargo, setIdCargo] = useState(`${userEdit?.id_cargo.id_cargo}`);

    const options = [
        { key: '', value: "", label: 'Cargo', disabled: true, selected: true, hidden: true },
        { key: '1', value: "2", label: 'Professor' },
        { key: '2', value: "3", label: 'Aluno' },
        { key: '3', value: "4", label: 'Externo' }
    ]

    const deleteUser = (id_usuario: number) => {
        setOpenOverlay(true);
        setIdDelete(id_usuario);
    }

    const confirmDeleteUser = async (id_usuario: number) => {
        try {
            await adminDeleteUser(id_usuario).then(() => {
                const indexToRemove = data.findIndex(obj => obj.id_usuario === id_usuario);

                if (indexToRemove !== -1) {
                    data.splice(indexToRemove, 1);
                }
                toast.success(`Usuario deletado com sucesso`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });

        } catch (error) {
            toast.error(`Não foi possivel deletar usuario`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setIdDelete(0);
            setOpenOverlay(false);
        }
    };

    const editUser = (user: UserTypes) => {
        setEditUserOverlay(true);
        setUserEdit(user);
    }

    const handleEditUser = async (name?: string, email?: string, id_cargo?: string, userId?: number) => {
        try {
            console.log(userId, name, email, id_cargo)
            if (userId && name && email && id_cargo) {
                await adminEditUser(userId, name, email, parseInt(id_cargo)).then(() => {
                    toast.success(`Editado com sucesso`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                });
            }

        } catch (error) {
            toast.error(`Não foi possivel editar usuário`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } finally {
            setEditUserOverlay(true);
            setUserEdit(null);
        }
    }

    return (
        <Table border={1} >
            <Thead>
                <Th>ID</Th>
                <Th>Nome</Th>
                <Th>Email</Th>
                <Th>Cargo</Th>
            </Thead>
            <TableBody>
                <>
                    {data.map((data) => (
                        <Tr key={data.id_usuario} >
                            <Td>{data.id_usuario}</Td>
                            <Td>{data.nome}</Td>
                            <Td>{data.email}</Td>
                            <Td>{data.id_cargo.cargo}</Td>
                            <Td>
                                <InfoContainer>
                                    <ButtonContainer>
                                        <IconButton onClick={() => editUser(data)} ><Pen className="editIcon" /></IconButton>
                                        <IconButton onClick={() => deleteUser(data.id_usuario)} ><Trash className="deleteIcon" /></IconButton>
                                    </ButtonContainer>
                                </InfoContainer>
                            </Td>
                        </Tr>
                    ))}
                </>
            </TableBody>
            {
                openOverlay &&
                <ConfirmOverlay>
                    <OverlayTitle>Tem certeza que deseja excluir?</OverlayTitle>
                    <OverlayText>Ao <b>confirmar</b>, a conta do usuário será <b>excluída</b>.</OverlayText>
                    <OverlayButtonContainer>
                        <Button size="small" buttonType="accept" title="Confirmar" onClick={() => confirmDeleteUser(idDelete)}></Button>
                        <Button size="small" buttonType="reject" title="Cancelar" onClick={() => setOpenOverlay(!openOverlay)} ></Button>
                    </OverlayButtonContainer>
                </ConfirmOverlay>

            }

            {
                editUserOverlay &&
                <EditUserContainer>
                    <EditUserContent>
                        <InputWithBorderBottom placeholder="name" size="large" value={userEdit?.nome} type="text" onChange={(e) => setName(e.target.value)} />
                        <InputWithBorderBottom placeholder="email" size="large" value={userEdit?.email} type="text" onChange={(e) => setEmail(e.target.value)} />
                        <SelectWithBorderBottom size="large" data={options} onChange={(e) => setIdCargo(e.target.value)} />
                        <Button buttonType="accept" size="medium" title="Salvar" onClick={() => handleEditUser(name, email, idCargo, userEdit?.id_usuario)} ></Button>
                        <Close onClick={() => setEditUserOverlay(!editUserOverlay)} >
                            <X size={16} />
                        </Close>
                    </EditUserContent>
                </EditUserContainer>
            }
        </Table>
    )
}