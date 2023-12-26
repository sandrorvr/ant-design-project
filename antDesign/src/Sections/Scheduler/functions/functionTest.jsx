import { useContext } from 'react';
import { FormatData } from '../data/FormatData';
import { ContextScheduler } from '../Context/ContextScheduler';

const createSecheduler = async (infoScheduler)=>{
    const scheduler = {
        typeScheduler: infoScheduler.type,
        date: infoScheduler.date,
        obs: infoScheduler.obs,
        timeFinish: infoScheduler.timeFinish,
        timeStart: infoScheduler.timeStart
    };
    try {
        const response = await fetch(
          `http://127.0.0.1:8000/api_v1/schedulers/`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scheduler)
          }
        );
        console.log(scheduler)
        return response;
      } catch (error) {
        console.log('Error during creation new scheduler!');
        console.log(error);
      }

}

const createFormToSend = async (infoScheduler, data)=>{
    const idScheduler = await createSecheduler(infoScheduler);
    console.log(idScheduler.JSON);
    const newdata = data.map((wk)=>{
        return {
            scheduler:6,
            eqp:wk.eqp,
            func:wk.func,
            local:wk.local,
            servidor:wk.servidor,
            timeFinish:wk.timeFinish,
            timeStart:wk.timeStart
            }
    })
    
    console.log(JSON.stringify(newdata))
    try {
        const response = await fetch(
          `http://127.0.0.1:8000/api_v1/SchedulerWorkers/`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newdata)
          }
        );
        console.log(response);
      } catch (error) {
        console.log('Error during creation new worker!');
        console.log(error);
      }
}
export const functionTest = async (form, ctx) => {
    const context = ctx
    const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
    await createFormToSend(context.state.infoScheduler, data);
    console.log(data);
    }