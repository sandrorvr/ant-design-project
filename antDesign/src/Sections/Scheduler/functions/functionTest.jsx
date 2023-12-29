import { FormatData } from '../data/FormatData';
import { DataManager } from '../Context/DataManager';

const createSecheduler = async (infoScheduler) => {
  const scheduler = {
    typeScheduler: infoScheduler.type,
    date: infoScheduler.date,
    obs: infoScheduler.obs,
    timeFinish: infoScheduler.timeFinish,
    timeStart: infoScheduler.timeStart
  };
  const response = await fetch(
    `http://127.0.0.1:8000/api_v1/schedulers/`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scheduler)
    }
  );
  const infoResponse = await response.json();
  switch (response.status) {
    case 200:
      console.log("Scheduler was created!")
      return infoResponse
    case 400:
      console.log("Error 400 during creation of scheduler!")
      if (infoResponse['error'] == 100) throw new TypeError('UNIQUE constraint failed', infoResponse['msg']);
    default:
      throw new Error('unknown error', `status : ${response.status}`)
  }

}

const createFormToSend = async (infoScheduler, data) => {
  const idScheduler = await createSecheduler(infoScheduler);
  const newdata = data.map((wk) => {
    return {
      scheduler: idScheduler,
      eqp: wk.eqp,
      func: wk.func,
      local: wk.local,
      servidor: wk.servidor,
      timeFinish: wk.timeFinish,
      timeStart: wk.timeStart
    }
  });

  try {
    const reponse = await fetch(
      `http://127.0.0.1:8000/api_v1/SchedulerWorkers/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newdata)
      }
    );
    if (reponse.status == 200) {
      console.log("Worker was created!");
      return 'status_ok';
    } else {
      throw new Error('Fail created worker');
    }
  } catch (error) {
    console.log(error);
    return 'status_not_ok';
  }
}
export const functionTest = async (form, formConfigurations, ctx) => {
  const context = ctx
  context.dispatch(DataManager.setObs(formConfigurations.getFieldValue('description_scheduler')))
  const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
  const response = await createFormToSend(context.state.infoScheduler, data);
    if (response === 'status_ok') {
      console.log('Scheduler registered!');
      window.alert('Scheduler registered!');
    } else {
      window.alert('Save Scheduler fail');
      throw new Error('Save Scheduler fail');
    }
}