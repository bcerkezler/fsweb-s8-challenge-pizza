import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/success.css";

function Success({ orderData }) {
  const pizzaPrice = 85.5;
  const toppingPrice = 5;

  if (!orderData) {
    return (
      <div className="success-page">
        <Header />
        <main className="success-content">
          <h1>Sipariş bilgisi bulunamadı</h1>
        </main>
      </div>
    );
  }

  const choicesTotal = orderData.toppings.length * toppingPrice;
  const total = (pizzaPrice + choicesTotal) * orderData.quantity;

  return (
    <div className="success-page">
      <Header />

      <main className="success-content">
        <p className="success-small-text">lezzetin yolda</p>

        <h1>SİPARİŞ ALINDI</h1>

        <div className="success-line"></div>

        <div className="success-info">
          <h3>Position Absolute Acı Pizza</h3>

          <p>
            <strong>İsim:</strong> {orderData.name}
          </p>
          <p>
            <strong>Boyut:</strong> {orderData.size}
          </p>
          <p>
            <strong>Hamur:</strong> {orderData.dough}
          </p>
          <p>
            <strong>Adet:</strong> {orderData.quantity}
          </p>
          <p>
            <strong>Ek Malzemeler:</strong> {orderData.toppings.join(", ")}
          </p>
        </div>

        <div className="success-total">
          <h3>Sipariş Toplamı</h3>

          <div>
            <span>Seçimler</span>
            <span>{choicesTotal.toFixed(2)}₺</span>
          </div>

          <div>
            <span>Toplam</span>
            <span>{total.toFixed(2)}₺</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Success;
