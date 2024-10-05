import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, githubInfoLoader, Home, User } from './components/index.js'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>

      <Route path="about" element={<About/>}>
        <Route loader={githubInfoLoader} path="info" element={<Github/>}/>
      </Route>
      
      <Route path="contact" element={<Contact/>}/>
      <Route loader={githubInfoLoader} path="github" element={<Github/>}/>
      <Route path='user/:id' element={<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
