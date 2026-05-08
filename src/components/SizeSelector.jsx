function SizeSelector({ formData, handleChange }) {
  return (
    <div className="form-section size-section">
      <h3>Boyut Seç *</h3>

      <div className="size-options">
        {["S", "M", "L"].map((size) => (
          <label key={size} className="size-option">
            <input
              type="radio"
              name="size"
              value={size}
              checked={formData.size === size}
              onChange={handleChange}
            />

            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
