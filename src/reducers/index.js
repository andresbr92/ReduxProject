import { combineReducers } from 'redux'
import productosReducer from './productorReducer'

export default combineReducers({
    productos: productosReducer
})