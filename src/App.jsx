import './App.css'
import Header from './components/Header';

import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements
}from "react-router-dom"
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} >
          <Route index element={<Home />} />
        </Route>
    )
    
  );


  return <RouterProvider router={router} />
}

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App
