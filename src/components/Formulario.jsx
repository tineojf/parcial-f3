import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

function Formulario(propiedades) {
  const { formulario, onSubmit, changeInput } = propiedades;
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
          onChange={changeInput}
        />

        <Input
          type="text"
          name="color"
          id="color"
          label="Ingresa un Color (Hexadecimal)"
          placeholder="#00ff00"
          value={formulario.color}
          onChange={changeInput}
        />

        <button type="submit" className="btn btn-success">
          Enviar
        </button>

        {/* Validaciones */}
        <ErrorMessage />
      </form>
    </>
  );
}

export default Formulario;
