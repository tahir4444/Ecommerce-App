import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    EmailInput,
    BooleanInput,
    BooleanField,
    PasswordInput,
} from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <BooleanField source="isAdmin" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <EmailInput source="email" />
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <EmailInput source="email" />
            <PasswordInput source="password" />
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Create>
); 