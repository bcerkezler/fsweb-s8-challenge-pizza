function SizeSelector({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h3>Boyut Seç *</h3>

      <label>
        <input
          type="radio"
          name="size"
          value="S"
          checked={formData.size === "S"}
          onChange={handleChange}
        />
        S
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="M"
          checked={formData.size === "M"}
          onChange={handleChange}
        />
        M
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="L"
          checked={formData.size === "L"}
          onChange={handleChange}
        />
        L
      </label>
    </div>
  );
}

export default SizeSelector;