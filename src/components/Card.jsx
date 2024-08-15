function Card(propiedades) {
  const { nombre, color } = propiedades;
  const style = { width: "18rem" };
  const styleButton = { backgroundColor: color };

  return (
    <div className="card">
      <div className="card-img-top" style={style}></div>
      <div className="card-body">
        <h5 className="card-title">Formulario enviado</h5>

        <p className="card-text">
          ¡Qué buen color! Si quieres probar otro, vuelve a intentarlo. Hasta
          pronto {nombre}
        </p>

        <button type="disable" className="btn btn-lg" style={styleButton}>
          Código Hexadecimal: <strong>{color}</strong>
        </button>
      </div>
    </div>
  );
}

export default Card;
