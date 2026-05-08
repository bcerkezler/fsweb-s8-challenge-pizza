import toppings from "../data/toppings";

function Toppings({ formData, setFormData }) {
  function handleToppingChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setFormData({
        ...formData,
        toppings: [...formData.toppings, value],
      });
    } else {
      setFormData({
        ...formData,
        toppings: formData.toppings.filter((item) => item !== value),
      });
    }
  }

  return (
    <section className="toppings-section">
      <h3>Ek Malzemeler</h3>
      <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <div className="toppings-grid">
        {toppings.map((topping) => (
          <label key={topping} className="topping-item">
            <input
              type="checkbox"
              value={topping}
              checked={formData.toppings.includes(topping)}
              onChange={handleToppingChange}
            />
            {topping}
          </label>
        ))}
      </div>
    </section>
  );
}

export default Toppings;