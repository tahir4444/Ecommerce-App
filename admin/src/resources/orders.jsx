import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    DateInput,
    NumberInput,
    ReferenceInput,
} from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="email" />
            </ReferenceField>
            <NumberField source="totalAmount" options={{ style: 'currency', currency: 'USD' }} />
            <TextField source="status" />
            <DateField source="createdAt" />
            <EditButton />
        </Datagrid>
    </List>
);

export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="email" />
            </ReferenceInput>
            <NumberInput source="totalAmount" />
            <SelectInput source="status" choices={[
                { id: 'pending', name: 'Pending' },
                { id: 'processing', name: 'Processing' },
                { id: 'shipped', name: 'Shipped' },
                { id: 'delivered', name: 'Delivered' },
                { id: 'cancelled', name: 'Cancelled' },
            ]} />
            <DateInput source="createdAt" />
        </SimpleForm>
    </Edit>
); 