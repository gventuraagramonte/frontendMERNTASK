import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";

//lo unico que hace el reducer es cambiar el state
export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return { ...state, proyectos: action.payload };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        //Este se agrega a los objetos que ya tenemos es decir, proyecto 1, agrego proyecto 2
        proyectos: [...state.proyectos, action.payload],
        //hacemos que el formulario de agregar proyecto se oculte
        formulario: false,
        //cuando el usuario ya corrigio el error del formulario se desactiva y se deja de mostrar
        errorformulario: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        //detecta que no hay ningun parametro de los requeridos y cambia a true
        // esto hace que nuevoproyecto lance un error en el front
        errorformulario: true,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          (proyecto) => proyecto._id === action.payload
        ),
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        // Traeme a los que no sean iguales al que estoy dando clic
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto._id !== action.payload
        ),
        // Esto hace que se resetee la interfaz y pida seleccionar un proyecto
        proyecto: null,
      };
    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    default:
      return state;
  }
};
