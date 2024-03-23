function Header() {
  return (
    <header className="bg-black font-bold">
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