import { createBrowserRouter } from "react-router-dom";
// import Layout from '../components/Layout'
import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
	{
	  path: '',
	  element: <Layout/>,
	  children: [
		{
		  path: '',
		  element: <Home/>
		},
		{
		  path: 'about',
		  element: <About/>
		},
		
	  ]
	}
  ])
