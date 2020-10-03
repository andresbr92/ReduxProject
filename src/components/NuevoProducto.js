import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
//useDispatch es para mandar ejecutar las aacciones y selector es para acceder al state

//actions de redux




import { crearNuevoProductoAction } from '../actions/productoActions.js'







const NuevoProducto = ({history}) => {
    //state del componente
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState(0)

    //utilizar dispatch y te crea una funcion
    const dispatch = useDispatch()
    //acceder al state del store
    const cargando = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)

    //mandar llamar el action de prodctoAction
    const agregarProducto = producto =>dispatch( crearNuevoProductoAction(producto) )


    //cuando el user haga submit
    const handleForSubmit = e => {
        e.preventDefault()

        //validar formulario
        if (nombre.trim === '' || precio <= 0) { 
            return
        }

        //errores?

        //crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        })
        //redireccionar
        history.push('/')
    }


        return (
            <div className='row justify-content-center'>
                <div className='col-md-9'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='text-center mb-4 font-weight-bold'>
                                Agregar Nuevo Producto
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
                                        onChange= {e => guardarNombre(e.target.value)}
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
                                        onChange={e => guardarPrecio(Number (e.target.value))}
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Agregar</button>
                            </form>
                            {cargando ? <p>Cargando...</p> : null}
                            {error ? <p className='alert alert-danger p2 mt-4 p2 text-center'>Hubo un error</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default NuevoProducto;