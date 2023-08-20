import { v4 as uuidv4 } from 'uuid';

export class DataSchedulerMeneger{
    constructor(data, update){
        this.data = data;
        this.update = update;
    }
    createNewArea = (name_area) =>{
        const first_worker = {
            id:uuidv4(),
            name: '',
            local:'',
            time: '',
            eqp: ''
        }
        const new_area = {
            id:uuidv4(),
            name_area: name_area,
            workers: [first_worker]
        };
        this.update([...this.data, new_area]);
    }
    createNewWorker = (id_area) => {
        const index_area = this.data.findIndex((area)=>area.id === id_area)
        const new_worker = {
            id:uuidv4(),
            name: '',
            local:'',
            time: '',
            eqp: ''
        }
        this.data[index_area]['workers'].push(new_worker);
        this.update([...this.data]);
    }

    removeArea(id_item){

    }

    removeWorker(id_worker){

    }

    getindexAreaByID(id_area){
        return this.data.findIndex((area)=>area.id === id_area)
     }

    set dataScheduler(value){
        this.data = value;
    }
    get dataScheduler(){
        return this.data;
    }
}