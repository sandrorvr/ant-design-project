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
            newState.data = removeArea(state.data, action.params);
            return {...newState};
        case ACTION.REMOVE_WORKER:
            newState.data = removeWorker(state.data, action.params)
            return {...newState};
        case ACTION.SET_TYPES_SCHEDULERS:
            newState.listTypeScheduler = action.params
            return {...newState};
        case ACTION.SET_TYPE_SCHEDULER:
            newState.typeScheduler = action.params
            return {...newState};
        case ACTION.SET_GROUP_SCHEDULER:
            newState.infoScheduler.group = action.params
            return {...newState};
        case ACTION.SET_DATE_SCHEDULER:
            newState.infoScheduler.date = action.params
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

function createNewWorker(data, id_area){
    const state = [...data]
    const index_area = state.findIndex((area)=>area.id === id_area);
    const new_worker = {
        id:uuidv4()
    }
    state[index_area]['workers'].push(new_worker)
    return state;
}

function removeWorker(data, arrayID){
    const state = [...data];
    const index_removed = state[arrayID.id_area]['workers'].findIndex((wk)=>wk.id === arrayID.id_worker);
    const new_array_workers = [...state[arrayID.id_area]['workers']]
    new_array_workers.splice(index_removed, 1)
    state[arrayID.id_area]['workers'] = new_array_workers
    return state;
}

function removeArea(data, id){
    const state = [...data];
    state.splice(id, 1);
    return state;
}

