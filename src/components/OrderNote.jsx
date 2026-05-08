function OrderNote({ formData, handleChange }) {
  return (
    <section className="note-section">
      <h3>Sipariş Notu</h3>

      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
    </section>
  );
}

export default OrderNote;