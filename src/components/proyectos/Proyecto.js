import React, { useContext } from "react";
import { proyectoContext } from "../context/proyectos/proyectoContext";
import TareaContext from "../context/tareas/tareaContext";

export const Proyecto = ({ proyecto }) => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // Obtener la función del context de tarea
  const tareasContext = useContext(TareaContext);
  const { obtenerTareas } = tareasContext;

  // Función para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // Fijar un proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se de clic
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};
