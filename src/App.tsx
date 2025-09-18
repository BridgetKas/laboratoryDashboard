import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import  LayOut from './Layout/layOut'
import DashBoard from './Home/home'
import Dashboard2 from './dashboard2/dashboard2'

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
        path:'/what-we-do',
        element:<Dashboard2/>
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
