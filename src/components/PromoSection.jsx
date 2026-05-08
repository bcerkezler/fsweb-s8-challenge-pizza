import "../styles/home.css";

import { Link } from "react-router-dom";

import pizzaCard from "../assets/images/iteration-2-images/cta/kart-1.png";
import burgerCard from "../assets/images/iteration-2-images/cta/kart-2.png";
import courierCard from "../assets/images/iteration-2-images/cta/kart-3.png";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-left">
          <img src={pizzaCard} alt="Pizza Kampanya" />

          <div className="promo-content">
            <h2>
              Özel <br />
              Lezzetus
            </h2>

            <p>Position:Absolute Acı Burger</p>

            <Link to="/order" className="promo-button">
              SİPARİŞ VER
            </Link>
          </div>
        </div>

        <div className="promo-right">
          <div className="promo-card dark-card">
            <img src={burgerCard} alt="Burger Menü" />

            <div className="promo-content">
              <h3>Hackathlon Burger Menü</h3>

              <Link to="/order" className="promo-button">
                SİPARİŞ VER
              </Link>
            </div>
          </div>

          <div className="promo-card light-card">
            <img src={courierCard} alt="Kurye" />

            <div className="promo-content">
              <h3>
                <span>Çoooook</span> hızlı <br />
                npm gibi kurye
              </h3>

              <Link to="/order" className="promo-button">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
