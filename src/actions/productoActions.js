import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from '../config/service/axiosConfig'
import Swal from 'sweetalert2'

// crear productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())


        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto)
            //si todo sale bien actualizar el state
            dispatch(agregarProductoExito(producto))
            //alert
            Swal.fire('Correcto', 'El producto se agregó correctamente', 'success')

        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Intentelo de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})
//si producto se guardar en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})