import { v4 as uuidv4 } from 'uuid';
import * as ACTION from './actionsType';

export const reducer = (state, action)=>{
    const newState = {...state}
    switch (action.type) {
        case ACTION.CREATE_NEW_AREA:
            const newArea = createNewArea(action.params);
            newState.data = [...newState.data, newArea]
            return {...newState};
        case ACTION.CREATE_NEW_WORKER:
            newState.data = createNewWorker(state.data, action.params);
            return {...newState};
        case ACTION.REMOVE_AREA:
            newState.date = state.data.splice(action.params, 1);
            return {...newState};
        case ACTION.REMOVE_WORKER:
            newState.date = removeWorker(state.data, action.params)
            return {...newState};
        case ACTION.SET_TYPES_SCHEDULERS:
            newState.listTypeScheduler = action.params
            return {...newState};
        case ACTION.SET_TYPE_SCHEDULER:
            newState.typeScheduler = action.params
            return {...newState};
        case ACTION.SET_LOCALS:
            newState.locals = action.params
            return {...newState};
        default:
            throw new Error('TYPE NOT FIND');
    }   
}

function createNewArea(name_area){
    const first_worker = {
        id:uuidv4()
    }
    const new_area = {
        id:uuidv4(),
        name_area: name_area,
        workers: [first_worker]
    };
    return new_area
}

function createNewWorker(state, id_area){
    const index_area = state.findIndex((area)=>area.id === id_area);
    const new_worker = {
        id:uuidv4()
    }
    return state[index_area]['workers'].push(new_worker);
}

function removeWorker(state, arrayID){
    id_area ,id_worker = arrayID
    const index_removed = state[id_area]['workers'].findIndex((wk)=>wk.id === id_worker);
    return state[id_area]['workers'].splice(index_removed, 1);
}
