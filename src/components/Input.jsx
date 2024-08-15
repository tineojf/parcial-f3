function Input(propiedades) {
  const { type, name, id, label, placeholder, value, onChange } = propiedades;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Input;
