import { Link } from "react-router-dom";
import logo from "../assets/images/iteration-1-images/logo.svg";


function Header() {
  return (
    <header className="order-header">
      <img src={logo} alt="Teknolojik Yemekler" />

      <div className="breadcrumb">
        <Link to="/">Anasayfa</Link>
        <span> - </span>
        <span>Sipariş Oluştur</span>
      </div>
    </header>
  );
}

export default Header;