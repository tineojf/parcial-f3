import { useState } from "react";
import Formulario from "./Formulario";
import Card from "./Card";

function Body() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    color: "",
  });
  const [visibleRespuesta, setVisibleRespuesta] = useState(false);

  const changeInput = (e) => {
    const llave = e.target.name;
    const valor = e.target.value;
    const nuevoFormulario = {
      ...formulario,
      [llave]: valor,
    };

    // console.log(nuevoFormulario);
    setFormulario(nuevoFormulario);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formulario);
    setVisibleRespuesta(true);
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
            changeInput={changeInput}
          />
        </div>
      </div>

      <div className="card m-5">
        <div className="card-body">
          {visibleRespuesta && <Card {...formulario} />}
        </div>
      </div>
    </>
  );
}

export default Body;
