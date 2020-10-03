import React, { Fragment, useEffect } from 'react';
import ProductoUnico from './SingleProduct'


//redux
import { useSelector, useDispatch } from 'react-redux'
import {obtenerProductosAction} from '../actions/productoActions'




const Productos = () => {
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(obtenerProductosAction())

    }, [])
    //obtener el state
    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)
    const cargando = useSelector(state => state.productos.loading)
    
    return (
        <Fragment>
            <h2 className='text-center my-5'>Listado de productos</h2>
            {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p> : null}
            {cargando ? <p className='text-center'>Cargando...</p> : null}
            <table className='table table-striped'>
                <thead className=' bg-primary table-dark' >
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? <p>No hay productos</p> : (
                        productos.map(producto => (
                            <ProductoUnico
                                key={producto.id}
                                producto={producto}
                            />
                        ) )
                    )}

                </tbody>

            </table>
        </Fragment>
    );
}

export default Productos;