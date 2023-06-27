import { useEffect } from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'
import { Api } from '../../Api';



export function OrderList({ ...props }: any) {
    useEffect(() => {
        const getUsers = async () => {
            const response = await Api.get('cargo/get');
            console.log(response.data)
        }

        getUsers();
    }, [])
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
            </Datagrid>
        </List>
    );
}