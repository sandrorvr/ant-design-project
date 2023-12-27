import { FormatData } from '../data/FormatData';

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
        const responseJson = await response.json();
        console.log("Scheduler was created!")
        return responseJson;
      } catch (error) {
        console.log('Error during creation new scheduler!');
        console.log(error);
      }

}

const createFormToSend = async (infoScheduler, data)=>{
    const idScheduler = await createSecheduler(infoScheduler);
    const newdata = data.map((wk)=>{
        return {
            scheduler:idScheduler,
            eqp:wk.eqp,
            func:wk.func,
            local:wk.local,
            servidor:wk.servidor,
            timeFinish:wk.timeFinish,
            timeStart:wk.timeStart
            }
    })
    

    try {
        await fetch(
          `http://127.0.0.1:8000/api_v1/SchedulerWorkers/`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newdata)
          }
        );
        console.log("Worker was created!")
      } catch (error) {
        console.log('Error during creation new worker!');
        console.log(error);
      }
}
export const functionTest = async (form, ctx) => {
    const context = ctx
    const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
    try {
      const response = await createFormToSend(context.state.infoScheduler, data);
      if(response.status === 200){
        console.log('Scheduler registered!');
        window.alert('Scheduler registered!');
      }else{
        return new Error('FUDEUUUUUU')
      }
    } catch (error) {
      console.log(error);
      window.alert('FUDEUUUUUU')
    }
    }