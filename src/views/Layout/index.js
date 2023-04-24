import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar/navbar"


const Layout = () => {
  return (
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