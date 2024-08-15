import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

function Formulario(propiedades) {
  const { formulario, onSubmit, onChange, visibleError } = propiedades;

  return (
    <>
      <form onSubmit={onSubmit}>
        <hr />
        <Input
          type="text"
          name="nombre"
          id="nombre"
          label="Ingresa tu Nombre"
          placeholder="Timmy"
          value={formulario.nombre}
          onChange={onChange}
        />

        <Input
          type="text"
          name="color"
          id="color"
          label="Ingresa un Color (Hexadecimal)"
          placeholder="00ff00"
          value={formulario.color}
          onChange={onChange}
        />

        <button type="submit" className="btn btn-success">
          Enviar
        </button>

        {/* Validaciones */}
        {visibleError && <ErrorMessage />}
      </form>
    </>
  );
}

export default Formulario;
