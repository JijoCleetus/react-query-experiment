import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

import router from './Router';

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
