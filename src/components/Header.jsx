
import { Link } from "react-router-dom"
import Container from "./Container"
import { GrBasket } from "react-icons/gr";


const Header = () => {
  return (
   <header className="shadow">

    <Container designs={"flex justify-between items-center"}>
        <Link to={"/"} className="text-red-500 font-mono font-[900] text-2xl ">
          ThunkSepeti
          </Link>

<div className="flex items-center gap-4">
  <button className="border border-500 py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition">Giriş Yap</button>
  <button className="border border-500 py-1 px-3 text-red-500 hover:bg-red-500 hover:text-white rounded transition">Kayıt Ol</button>
  <Link to={"/cart"} className="hover:bg-red-500 p-3 rounded-full hover:bg-opacity-50 transition">
  <GrBasket />
  </Link>
</div>

    </Container>
   </header>
  )
}

export default Header

