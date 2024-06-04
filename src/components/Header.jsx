
import { Link } from "react-router-dom"
import Container from "./Container"



const Header = () => {
  return (
   <header className="shadow">

    <Container>
        <Link to={"/"} className="text-red-500 font-mono font-[900] text-2xl ">ThunkSepeti</Link>
    </Container>
   </header>
  )
}

export default Header

