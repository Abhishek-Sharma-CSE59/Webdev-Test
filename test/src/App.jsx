import React from 'react'
import { createBrowserRouter , Outlet , RouterProvider} from 'react-router-dom'

import Home from "../src/assets/Pages/Home"
import Dashboard from "../src/assets/Pages/Dashboard"

const Layout = () =>{
  return(
    <>
      <nav className='bg-gray-900 text-white p-5 flex justify-between items-center shadow-md'>
        <h1 className='text-2xl font-bold'>User Dashboard</h1>
        <div className='space-x-4'>
          <ul className='flex space-x-4'>
            <li><a href="/" className='text-gray-300 hover:text-white transition'>Home</a></li>
            <li><a href="/Dashboard" className='text-gray-300 hover:text-white transition'>Dashboard</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path:"/Dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App