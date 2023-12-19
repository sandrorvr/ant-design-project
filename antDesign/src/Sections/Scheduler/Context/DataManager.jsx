import * as ACTION from './actionsType';

export class DataManager{
    static createNewArea = (name_area)=>{
        return {type: ACTION.CREATE_NEW_AREA, params:name_area}
    }
    static createNewWorker = (id_area)=>{
        return {type: ACTION.CREATE_NEW_WORKER, params: id_area}
    }
    static removeArea = (id_item)=>{
        return {type: ACTION.REMOVE_AREA, params:id_item}
    }
    static removeWorker = (id_area ,id_worker)=>{
        return {type: ACTION.REMOVE_WORKER, params: {id_area ,id_worker}}
    }
    static setTypesSchedulers = (listTypes)=>{
        return {type: ACTION.SET_TYPES_SCHEDULERS, params: listTypes}
    }
    static setTypeScheduler = (number_type)=>{
        return {type: ACTION.SET_TYPE_SCHEDULER, params: number_type}
    }
    static setGroupScheduler = (string_group)=>{
        return {type: ACTION.SET_GROUP_SCHEDULER, params: string_group}
    }
    static setDateScheduler = (string_date)=>{
        return {type: ACTION.SET_DATE_SCHEDULER, params: string_date}
    }
    static setAllLocals = (locals)=>{
        return {type: ACTION.SET_LOCALS, params: locals}
    }
}