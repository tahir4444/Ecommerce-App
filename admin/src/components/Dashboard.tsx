import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Title } from 'react-admin';

const Dashboard = () => (
    <Card>
        <Title title="Dashboard" />
        <CardHeader title="Welcome to the Admin Panel" />
        <CardContent>
            <p>
                This is your dashboard where you can manage products, users, and orders.
                Use the menu on the left to navigate to different sections.
            </p>
        </CardContent>
    </Card>
);

export default Dashboard; 