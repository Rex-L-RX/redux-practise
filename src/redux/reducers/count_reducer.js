import {INCREMENT,DECREMENT} from '../constant'
//reducer for Count component
//get preState and action
const initState=0;
export default function countReducer(preState=initState, action) {
    
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default: 
            return preState
    }
}