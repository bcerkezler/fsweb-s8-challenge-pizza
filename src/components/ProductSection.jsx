import "../styles/home.css";

import pizza1Img from "../assets/images/iteration-2-images/pictures/food-1.png";
import pizza2Img from "../assets/images/iteration-2-images/pictures/food-2.png";
import burgerImg from "../assets/images/iteration-2-images/pictures/food-3.png";

import ramen from "../assets/images/iteration-2-images/icons/1.svg";
import pizza from "../assets/images/iteration-2-images/icons/2.svg";
import burger from "../assets/images/iteration-2-images/icons/3.svg";
import fries from "../assets/images/iteration-2-images/icons/4.svg";
import fastfood from "../assets/images/iteration-2-images/icons/5.svg";
import drink from "../assets/images/iteration-2-images/icons/6.svg";

function ProductSection() {
  const products = [
    {
      image: pizza1Img,
      title: "Terminal Pizza",
      rating: "4.9",
      comments: "(200)",
      price: "60₺",
    },
    {
      image: pizza2Img,
      title: "Position Absolute Acı Pizza",
      rating: "4.9",
      comments: "(200)",
      price: "85₺",
    },
    {
      image: burgerImg,
      title: "useEffect Tavuklu Burger",
      rating: "4.9",
      comments: "(200)",
      price: "75₺",
    },
  ];

  const tabs = [
    { icon: ramen, text: "Ramen" },
    { icon: pizza, text: "Pizza", active: true },
    { icon: burger, text: "Burger" },
    { icon: fries, text: "French fries" },
    { icon: fastfood, text: "Fast food" },
    { icon: drink, text: "Soft drinks" },
  ];

  return (
    <section className="product-section">
      <p className="section-kicker">en çok paketlenen menüler</p>

      <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>

      <div className="product-tabs">
        {tabs.map((tab) => (
          <button key={tab.text} className={tab.active ? "active" : ""}>
            <img src={tab.icon} alt={tab.text} />
            <span>{tab.text}</span>
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.title}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="product-info">
              <span>{product.rating}</span>
              <span>{product.comments}</span>
              <strong>{product.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
