import { useState } from "react";
import Formulario from "./Formulario";
import Card from "./Card";

function Body() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    color: "",
  });
  const [visibleRespuesta, setVisibleRespuesta] = useState(false);
  const [visibleError, setVisibleError] = useState(false);

  const onChange = (e) => {
    const llave = e.target.name;
    const valor = e.target.value;
    const nuevoFormulario = {
      ...formulario,
      [llave]: valor,
    };

    setFormulario(nuevoFormulario);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const nombre = formulario.nombre.trim();
    const color = formulario.color;

    const regex = /^[A-Fa-f0-9]{6}$/;
    const verificaRegex = regex.test(color);

    if (nombre.length >= 3 && verificaRegex) {
      setVisibleRespuesta(true);
      setVisibleError(false);
    } else {
      setVisibleError(true);
      setVisibleRespuesta(false);
    }
  };

  return (
    <>
      <div className="card m-5">
        <div className="card-body">
          <h1>Examen Parcial - Jean Franco Tineo</h1>
          <form></form>
          <Formulario
            formulario={formulario}
            onSubmit={onSubmit}
            onChange={onChange}
            visibleError={visibleError}
          />
        </div>
      </div>

      {visibleRespuesta && <Card {...formulario} />}
    </>
  );
}

export default Body;
