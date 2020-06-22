import React, { useContext } from "react";
import TareaContext from "../context/tareas/tareaContext";
import { proyectoContext } from "../context/proyectos/proyectoContext";

export const Tarea = ({ tarea }) => {
  //Traer el context de proyecto para refrescar y capturar su id
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer el proyecto
  const [proyectoActual] = proyecto;

  // obtener la funcion del context de tarea para agregar una nueva
  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    actualizarTarea,
    guardarTareaActual,
  } = tareasContext;

  // Funcion que se ejecuta cuando se presiona eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual.id);
  };

  // Funcion que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };

  // Funcion que agrega una tarea actual cuando el usuario quiere editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => {
            tareaEliminar(tarea._id);
          }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
