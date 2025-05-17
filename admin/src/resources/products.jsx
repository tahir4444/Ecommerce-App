import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ImageField,
    ImageInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="name" />
            <NumberField source="price" />
            <NumberField source="stock" />
            <TextField source="category.name" />
            <ImageField source="images" />
            <NumberField source="averageRating" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <ReferenceInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ImageInput source="images" multiple>
                <ImageField source="src" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <NumberInput source="price" />
            <NumberInput source="stock" />
            <ReferenceInput source="category" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ImageInput source="images" multiple>
                <ImageField source="src" />
            </ImageInput>
        </SimpleForm>
    </Create>
); 