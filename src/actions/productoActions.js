import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,

    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,

    OBTENER_PRODUCTO_ELMINAR,
    PRODUCTO_ELMINADO_EXITO,
    PRODUCTO_ELMINADO_ERROR,

    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR

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
//funcionr que descargar los productor de la base de datos
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            dispatch(descargaProductosError())
        }
    }
}
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const descargarProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})
// seleccion y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch( eliminarProductoExito() )
        } catch (error) {
            console.log(error)
            dispatch(eliminarProductoError())
        }
    }

}
const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELMINAR,
    payload: id
})

const eliminarProductoExito = () => ({ 
    type: PRODUCTO_ELMINADO_EXITO
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELMINADO_ERROR,
    payload: true
})

//colocar producto en edicion
export function obtenerProductoEditar(producto) {
    return (distpach) => {
        distpach(obtenerProductoEditarAction(producto))
    }
}
const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})
//edita un registro en la api y stete
export function editarProducto(producto) {
    return (dispatch) => {
        dispatch(editarProductoAction(producto))
        try {
            const resutlado = clienteAxios.put(`/producto/${producto.id}`, producto)
            console.log(resutlado)
        } catch (error) {
            
        }
    }
}
const editarProductoAction = producto => ({
    type: COMENZAR_EDICION_PRODUCTO,
    payload:producto
})
