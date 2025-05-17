import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        const { token, user } = await response.json();
        if (user.role !== 'admin') {
            throw new Error('Access denied');
        }
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return Promise.resolve();
    },
    
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    
    getPermissions: () => {
        const user = localStorage.getItem('user');
        if (!user) return Promise.reject();
        
        return Promise.resolve(JSON.parse(user).role);
    },
    
    getIdentity: () => {
        const user = localStorage.getItem('user');
        if (!user) return Promise.reject();
        
        const parsedUser = JSON.parse(user);
        return Promise.resolve({
            id: parsedUser._id,
            fullName: parsedUser.name,
            avatar: null,
        });
    },
};

export default authProvider; 