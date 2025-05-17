import React, { useState, useEffect } from 'react';
import { Admin, Resource, Loading, Error } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProductList, ProductEdit, ProductCreate } from './resources/products';
import { UserList, UserEdit, UserCreate } from './resources/users';
import { OrderList, OrderEdit } from './resources/orders';
import Dashboard from './components/Dashboard';
import authProvider from './providers/authProvider';

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeDataProvider = async () => {
      try {
        // Test the connection to the backend
        const response = await fetch('http://localhost:5000/api/health');
        if (!response.ok) {
          throw new Error('Backend server is not responding');
        }
        
        const provider = simpleRestProvider('http://localhost:5000/api');
        setDataProvider(provider);
      } catch (err) {
        console.error('Failed to initialize data provider:', err);
        setError(err.message);
      }
    };

    initializeDataProvider();
  }, []);

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <h1 style={{ color: '#d32f2f', marginBottom: '20px' }}>Error</h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          {error === 'Failed to fetch' 
            ? 'Unable to connect to the backend server. Please make sure it is running at http://localhost:5000'
            : error}
        </p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry Connection
        </button>
      </div>
    );
  }

  if (!dataProvider) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
      }}>
        <Loading />
      </div>
    );
  }

  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      catchAll={Error}
      requireAuth
    >
      <Resource 
        name="products" 
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
      />
      <Resource 
        name="users" 
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource 
        name="orders" 
        list={OrderList}
        edit={OrderEdit}
      />
    </Admin>
  );
};

export default App;
