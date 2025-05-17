import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Title } from 'react-admin';

const Dashboard = () => (
    <Card>
        <Title title="Welcome to the Admin Dashboard" />
        <CardHeader title="E-commerce Platform Admin" />
        <CardContent>
            <p>This is your admin dashboard where you can manage:</p>
            <ul>
                <li>Products - Add, edit, and manage product inventory</li>
                <li>Users - Manage user accounts and permissions</li>
                <li>Orders - Track and process customer orders</li>
            </ul>
        </CardContent>
    </Card>
);

export default Dashboard; 