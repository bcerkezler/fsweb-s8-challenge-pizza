import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import PizzaInfo from "../components/PizzaInfo";
import SizeSelector from "../components/SizeSelector";
import DoughSelector from "../components/DoughSelector";
import Toppings from "../components/Toppings";
import OrderNote from "../components/OrderNote";
import QuantitySelector from "../components/QuantitySelector";
import OrderSummary from "../components/OrderSummary";

import "../styles/order.css";
import "../styles/components.css";


const initialForm = {
  name: "",
  size: "",
  dough: "",
  toppings: [],
  note: "",
  quantity: 1,
};

function Order() {
  const [formData, setFormData] = useState(initialForm);
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const isFormValid =
    formData.name.trim().length >= 3 &&
    formData.size !== "" &&
    formData.dough !== "" &&
    formData.toppings.length >= 4 &&
    formData.toppings.length <= 10;

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) return;

    axios
      .post("https://reqres.in/api/pizza", formData, {
        headers: {
          "x-api-key": "reqres_11ecd922c14d4c4fa47ea8986caba512",
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push("/success");
      })
      .catch((error) => {
        console.error(error);
        history.push("/success");
      });
  }

  return (
    <div className="order-page">
      <Header />

      <main className="order-container">
        <PizzaInfo />

        <form className="order-form" onSubmit={handleSubmit}>
          <label className="name-field">
            İsim *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="İsmini gir"
            />
          </label>

          <div className="selectors">
            <SizeSelector formData={formData} handleChange={handleChange} />
            <DoughSelector formData={formData} handleChange={handleChange} />
          </div>

          <Toppings formData={formData} setFormData={setFormData} />

          <OrderNote formData={formData} handleChange={handleChange} />

          <div className="bottom-section">
            <QuantitySelector formData={formData} setFormData={setFormData} />
            <OrderSummary formData={formData} isFormValid={isFormValid} />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Order;