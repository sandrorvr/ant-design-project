import { createContext, useReducer, useEffect} from 'react';
import { reducer } from './functionReducer';
import {DataManager} from './DataManager';


const initStateScheduler = {
    data: [],
    listTypeScheduler: [],
    typeScheduler: null,
    locals: []
}

export let ContextScheduler = createContext();

export const ContextSchedulerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initStateScheduler)
    const value = {state:state, dispatch:dispatch}

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://127.0.0.1:8000/api_v1/SchedulerTypes/');
        const schedulerTypes = await response.json();
        dispatch(DataManager.setTypesSchedulers(schedulerTypes));
      }
      fetchData()
    }, []);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`http://127.0.0.1:8000/api_v1/locals?typeScheduler=${state.typeScheduler}`);
        const locals = await response.json();
        dispatch(DataManager.setAllLocals(locals));
      }
      if(state.typeScheduler != null) fetchData();
    }, [state.typeScheduler]);

    return (
        <ContextScheduler.Provider value={value}>{children}</ContextScheduler.Provider>
    );
}
