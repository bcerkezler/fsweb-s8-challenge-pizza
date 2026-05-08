import "../styles/components.css";

import instagram1 from "../assets/images/iteration-2-images/footer/insta/li-0.png";
import instagram2 from "../assets/images/iteration-2-images/footer/insta/li-1.png";
import instagram3 from "../assets/images/iteration-2-images/footer/insta/li-2.png";
import instagram4 from "../assets/images/iteration-2-images/footer/insta/li-3.png";
import instagram5 from "../assets/images/iteration-2-images/footer/insta/li-4.png";
import instagram6 from "../assets/images/iteration-2-images/footer/insta/li-5.png";

import locationIcon from "../assets/images/iteration-2-images/footer/icons/icon-1.png";
import mailIcon from "../assets/images/iteration-2-images/footer/icons/icon-2.png";
import phoneIcon from "../assets/images/iteration-2-images/footer/icons/icon-3.png";

const instagramImages = [
  instagram1,
  instagram2,
  instagram3,
  instagram4,
  instagram5,
  instagram6,
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2 className="footer-logo">
            Teknolojik <br />
            Yemekler
          </h2>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <img src={locationIcon} alt="Location" />
              <p>341 Londonderry Road, İstanbul Türkiye</p>
            </div>

            <div className="footer-contact-item">
              <img src={mailIcon} alt="Mail" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>

            <div className="footer-contact-item">
              <img src={phoneIcon} alt="Phone" />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Hot Menu</h3>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>

        <div>
          <h3>Instagram</h3>
          <div className="instagram-grid">
            {instagramImages.map((image, index) => (
              <img key={index} src={image} alt={`Instagram ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}

export default Footer;
