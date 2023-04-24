import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar"
import { Link } from "react-router-dom";

const Layout = () => {
    return(
           <div className="App">
    <Navbar />
      <header className="App-header">
      <h1>Urubots.</h1>
      <Outlet />
      </header>
    </div>


    )
}

export default Layout;