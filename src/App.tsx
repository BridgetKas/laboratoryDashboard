import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import  LayOut from './Layout/layOut'
import DashBoard from './Home/home'

const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    errorElement:<p>Ohh No</p>,
    children:[
      {
        path:'/',
        element:<DashBoard/>
      },
      
      {
        path:'/our-products',
        element:<p>This is products</p>
      },
      {
        path:'/about-us',
        element:<p>This is about</p>
      },
      {
        path:'/contact-us',
        element:<p>This is contact</p>
      }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
