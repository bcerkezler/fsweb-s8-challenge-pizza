import toppings from "../data/toppings";

function Toppings({
  formData,
  setFormData,
  toppingError,
  tooManyToppingsError,
}) {
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
      {toppingError && (
        <p className="form-error">En az 4 malzeme seçmelisiniz.</p>
      )}

      {tooManyToppingsError && (
        <p className="form-error">En fazla 10 malzeme seçebilirsiniz.</p>
      )}

      <div className="toppings-grid">
        {toppings.map((topping) => (
          <label key={topping} className="topping-item">
            <input
              type="checkbox"
              value={topping}
              checked={formData.toppings.includes(topping)}
              onChange={handleToppingChange}
            />

            <span className="custom-checkbox"></span>

            <span>{topping}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default Toppings;
