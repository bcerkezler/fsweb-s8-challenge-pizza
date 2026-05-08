function QuantitySelector({ formData, setFormData }) {
  function decreaseQuantity() {
    if (formData.quantity > 1) {
      setFormData({
        ...formData,
        quantity: formData.quantity - 1,
      });
    }
  }

  function increaseQuantity() {
    setFormData({
      ...formData,
      quantity: formData.quantity + 1,
    });
  }

  return (
    <div className="quantity-selector">
      <button type="button" onClick={decreaseQuantity}>
        -
      </button>

      <span>{formData.quantity}</span>

      <button type="button" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default QuantitySelector;