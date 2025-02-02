import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './index.css'

export interface ProductData {
  title: string;
  id: number;
  description: string;
  image: string;
}

function App() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error("Error fetching data");
      return response.json()
    }
  })



  return (
    <>
      {
        products && products.map((product: ProductData) => (
          <div className="card">
            <img src={product.image} alt="Avatar" />
            <div className="container">
              <h4><b>{product.title}</b></h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))
      }
      {/* <button disabled={newPostMutation.isPending} onClick={() => newPostMutation.mutate('new post')}>Add</button> */}
    </>
  )
}

export default App
