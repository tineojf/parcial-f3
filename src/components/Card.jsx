function Card(propiedades) {
  const { nombre, color } = propiedades;
  const backgroundColorForm = { backgroundColor: `#${color}` };
  const colorForm = { color: `#${color}` };

  const style = { width: "18rem" };

  return (
    <div className="card m-5">
      <div className="card-body">
        <div className="card">
          <div className="card-img-top" style={style}></div>
          <div className="card-body">
            <h5 className="card-title">Formulario enviado con éxito</h5>

            <p className="card-text">
              ¡Qué buen color! Si quieres probar otro, vuelve a intentarlo.
              Hasta pronto <strong style={colorForm}>{nombre}</strong>
            </p>

            <button
              type="disable"
              className="btn btn-lg"
              style={backgroundColorForm}
            >
              Código Hexadecimal: <strong>{color}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
