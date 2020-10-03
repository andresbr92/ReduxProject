import { combineReducers } from 'redux'
import productosReducer from './productorReducer'
import alertaReducer from './alertaReducer'

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
})