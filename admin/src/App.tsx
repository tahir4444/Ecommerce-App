import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { ProductList, ProductEdit, ProductCreate } from './resources/products';
import { UserList, UserEdit, UserCreate } from './resources/users';
import { OrderList, OrderEdit } from './resources/orders';
import Dashboard from './components/Dashboard';
import authProvider from './providers/authProvider';

const dataProvider = simpleRestProvider('http://localhost:5000/api');

const App = () => (
  <Admin 
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
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

export default App; 