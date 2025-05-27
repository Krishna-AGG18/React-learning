import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Contact from './components/Contact.jsx'
import Thank from './components/Thank.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
    {
      path:"",
      element:<Home />
    },
  {
    path:"about",
    element: <About />
  },
  {
    path:"services",
    element: <Service />
  },
  {
    path:"contact",
    element: <Contact />
  },
  {
    path:"thankyou",
    element: <Thank />
  }
]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
