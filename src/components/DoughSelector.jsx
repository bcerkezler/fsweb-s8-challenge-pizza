function DoughSelector({ formData, handleChange }) {
  return (
    <div className="form-section dough-section">
      <h3>Hamur Seç *</h3>

      <select name="dough" value={formData.dough} onChange={handleChange}>
        <option value="">Hamur Kalınlığı</option>
        <option value="İnce">İnce</option>
        <option value="Orta">Orta</option>
        <option value="Kalın">Kalın</option>
      </select>
    </div>
  );
}

export default DoughSelector;
