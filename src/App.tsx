import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

import router from './Router';
import Loader from './component/Loader';
import { LoaderContext } from './context/LoaderContext';
import { useContext, useState } from 'react';
import { LoaderContextProps } from './types/loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO : need to optimize the way loader is showing.
  const start = () => {
    setIsLoading(true);
  }

  const stop = () => setIsLoading(false);
  const [loader] = useState<LoaderContextProps>({
    isLoading: false,
    start,
    stop
  })

  return (
    <>
      {
        isLoading && <Loader />
      }
      <LoaderContext.Provider value={loader}>
        <RouterProvider router={router}>
        </RouterProvider>
      </LoaderContext.Provider>

    </>
  )
}

export default App
