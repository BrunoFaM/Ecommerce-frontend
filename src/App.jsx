import './App.css'

import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <h1>Hello Router</h1>,
  },
]);


  return <RouterProvider router={router} />
}

export default App
