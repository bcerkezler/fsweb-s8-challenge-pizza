import Header from "../components/Header";
import "../styles/success.css";

function Success() {
  return (
    <div className="success-page">
      <Header />

      <main className="success-content">
        <p className="success-small-text">
          lezzetin yolda
        </p>

        <h1>
          SİPARİŞ ALINDI
        </h1>

        <div className="success-line"></div>

        <div className="success-info">
          <h3>Position Absolute Acı Pizza</h3>

          <p>Boyut: Orta</p>
          <p>Hamur: İnce</p>
        </div>

        <div className="success-total">
          <h3>Sipariş Toplamı</h3>

          <div>
            <span>Seçimler</span>
            <span>25.00₺</span>
          </div>

          <div>
            <span>Toplam</span>
            <span>110.50₺</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Success;