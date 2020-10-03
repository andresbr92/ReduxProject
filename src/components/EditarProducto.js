import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import { useDistpach, useSelector } from 'react-redux'
import {editarProducto} from '../actions/productoActions'


const EditarProducto = () => {

    //nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })

    //producto a editar
    const history = useHistory()
    const productoeditar = useSelector(state => state.productos.productoeditar)


    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    
    useEffect(() => {
        guardarProducto(productoeditar)
    }, [productoeditar])

    const { nombre, precio, id } = producto

    const handleForSubmit = e => {
        e.preventDefault()

        editarProducto()
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-9'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={handleForSubmit}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarProducto;