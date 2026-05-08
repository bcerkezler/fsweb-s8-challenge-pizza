import "../styles/home.css";

import ramen from "../assets/images/iteration-2-images/icons/1.svg";
import pizza from "../assets/images/iteration-2-images/icons/2.svg";
import burger from "../assets/images/iteration-2-images/icons/3.svg";
import fries from "../assets/images/iteration-2-images/icons/4.svg";
import fastfood from "../assets/images/iteration-2-images/icons/5.svg";
import drink from "../assets/images/iteration-2-images/icons/6.svg";

function CategoryBar() {
  const categories = [
    { icon: ramen, text: "YENİ! Kore" },
    { icon: pizza, text: "Pizza" },
    { icon: burger, text: "Burger" },
    { icon: fries, text: "Kızartmalar" },
    { icon: fastfood, text: "Fast food" },
    { icon: drink, text: "Gazlı İçecek" },
  ];

  return (
    <nav className="category-bar">
      {categories.map((category) => (
        <div className="category-item" key={category.text}>
          <img src={category.icon} alt={category.text} />
          <span>{category.text}</span>
        </div>
      ))}
    </nav>
  );
}

export default CategoryBar;
