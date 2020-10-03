import React from 'react';
import { useHistory } from 'react-router-dom'


//redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions'

const ProductoUnico = ({ producto }) => {
    
    const { nombre, precio, id } = producto
    
    const dispatch = useDispatch()

    const history = useHistory()
    
    //confirmar si desea eliminar 

    const confirmarEliminarProducto = id => { 
        //preguntar al usuario


        //pasarlo al action
        dispatch(borrarProductoAction(id))
    }

    //redireccion activa
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td className='acciones'>
                <button
                    type='button'
                    className='btn btn-primary mr-2'
                    onClick={() => redireccionarEdicion(producto)}
                > Editar </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}

export default ProductoUnico;