function ErrorMessage() {
  const estilos = {
    color: "red",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  return (
    <div className="form-text mt-4" style={estilos}>
      Chequea la informacion y vuelve a enviar el formulario
    </div>
  );
}

export default ErrorMessage;
