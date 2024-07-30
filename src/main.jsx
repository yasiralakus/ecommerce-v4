import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import Product, { loader } from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/magaza',
                element: <Shop />
            },
            {
                path: '/urun/:category/:id',
                element: <Product />,
                loader: loader
            },
            {
                path: '/sepet',
                element: <Cart />
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
