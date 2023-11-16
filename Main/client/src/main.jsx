import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signip',
                element: <Signup />
            },
            {
                path: '/sell',
                element: <Sell/>
            },
            {
                path: '/buy',
                element: <Buy />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
