import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import SelectMarque from './pages/SelectMarque.jsx'; 
import Insertionmarque from './pages/InsertionMarque.jsx'; 
import UpdateMarque from './pages/UpdateMarque.jsx';
import SelectVoiture from './pages/SelectVoiture.jsx'; 
import Insertionvoiture from './pages/InsertionVoiture.jsx'; 
import UpdateVoiture from './pages/UpdateVoiture.jsx';


const routes = createBrowserRouter([
{
 path:'/',
 element: <App>
  <Outlet/>
 </App> ,
 children: [

{
	path: 'selectmarque',
	element: <SelectMarque/> },
{
	path: 'insertionmarque',
	element: <Insertionmarque/>
}, 
{
	path: 'updatemarque/:idmarque',
	element: <UpdateMarque/>
}, 
{
	path: 'selectvoiture',
	element: <SelectVoiture/> },
{
	path: 'insertionvoiture',
	element: <Insertionvoiture/>
}, 
{
	path: 'updatevoiture',
	element: <UpdateVoiture/>
}, 
 ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
