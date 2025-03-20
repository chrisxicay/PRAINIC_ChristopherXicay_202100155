import {createBrowserRouter} from 'react-router-dom';
import Login from '../pages/login';
import HomeAdmin from '../pages/admin/home';
import HomeProfesor from '../pages/profesor/home';
import HomeEstudiante from '../pages/estudiante/home';
import AdminLayout from '../layout/adminlayout';   
import ProfesorLayout from '../layout/profesorlayout';
import EstudianteLayout from '../layout/estudiantelayout';



export const routes = createBrowserRouter ([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'home',
                element: <HomeAdmin />
            }
        ]
    },
    {
        path: '/profesor',
        element: <ProfesorLayout />,
        children: [
            {
                path: 'home',
                element: <HomeProfesor />
            }
        ]
    },
    {
        path: '/estudiante',
        element: <EstudianteLayout />,
        children: [
            {
                path: 'home',
                element: <HomeEstudiante />
            }
        ]
    }
])