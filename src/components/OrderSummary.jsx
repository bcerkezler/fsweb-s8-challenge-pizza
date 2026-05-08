function OrderSummary({ formData, isFormValid }) {
  const pizzaPrice = 85.5;
  const toppingPrice = 5;

  const choicesTotal = formData.toppings.length * toppingPrice;
  const total = (pizzaPrice + choicesTotal) * formData.quantity;

  return (
    <div className="order-summary">
      <div className="summary-box">
        <h3>Sipariş Toplamı</h3>

        <div className="summary-row">
          <span>Seçimler</span>
          <span>{choicesTotal.toFixed(2)}₺</span>
        </div>

        <div className="summary-row total-row">
          <span>Toplam</span>
          <span>{total.toFixed(2)}₺</span>
        </div>
      </div>

      <button type="submit" className="order-button" disabled={!isFormValid}>
        SİPARİŞ VER
      </button>
    </div>
  );
}

export default OrderSummary;
