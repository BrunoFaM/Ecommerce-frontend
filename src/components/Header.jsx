import  SwipeableDrawer from "@mui/material/SwipeableDrawer"
import { useState } from "react";

function  openDrawerHandler() {
 console.log("open");
}

function closeDrawerHandler(){
 console.log('close')
}

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-black font-bold">
        <button onClick={() => setOpen(!isOpen)}  >open</button>
        <SwipeableDrawer className="w-9 bg-slate-500" onOpen={openDrawerHandler} onClose={closeDrawerHandler} open={isOpen}  >
          <ul >
            <li>hola</li>
            <li>como</li>
            <li>estas</li>
          </ul>
        </SwipeableDrawer>
        <h1 className="text-green-600 text-3xl p-4 font-mono">
            Twentytrheef
        </h1>
        <div className=" text-gray-300 bg-gray-900  ">
        <ul className="flex justify-around p-3">
            <li>Tienda</li>
            <li>Posts</li>
            <li>Sobre mi</li>
        </ul>
    </div>
    </header>
  )
}

export default Header