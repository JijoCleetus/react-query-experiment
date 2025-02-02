import { createBrowserRouter } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Product/>,
        errorElement:<h3>Error Occured</h3>
    },
    {
        path:'/product',
        element:<Product/>,
    },
    {
        path:'/product/:id',
        element:<ProductDetails />,
    }
])

export default router