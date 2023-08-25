import { v4 as uuidv4 } from 'uuid';

export class DataSchedulerMeneger{
    constructor(data, update){
        this.data = data;
        this.update = update;
    }
    createNewArea = (name_area) =>{
        const first_worker = {
            id:uuidv4()
        }
        const new_area = {
            id:uuidv4(),
            name_area: name_area,
            workers: [first_worker]
        };
        this.update([...this.data, new_area]);
    }
    createNewWorker = (id_area) => {
        const index_area = this.data.findIndex((area)=>area.id === id_area);
        const new_worker = {
            id:uuidv4()
        }
        this.data[index_area]['workers'].push(new_worker);
        this.update([...this.data]);
    }

    removeArea(id_item){
        this.data.splice(id_item, 1);
        this.update([...this.data]);
    }

    removeWorker(id_area ,id_worker){
        const index_removed = this.data[id_area]['workers'].findIndex((wk)=>wk.id === id_worker);
        this.data[id_area]['workers'].splice(index_removed, 1);
        this.update([...this.data]);
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

export class FormatData{
    constructor(data){
        this.data = data;
        this.workerData = [];
        this.fullWorkers = new Set();
        this.fullAreas = [];
    }

    splitFieldIDWK(value){
        const splt = value.split('_');
        return {
            field:splt[0],
            id_WK: splt[1]
        }
    }
    splitFields(){
        return Object.entries(this.data).map((el) =>{
            const slited = this.splitFieldIDWK(el[0]);
            const value = slited.field === 'timeStart' || slited.field === 'timeFinish' ? el[1].format("HH:mm:ss"):el[1];
            this.fullWorkers.add(slited.id_WK);
            return {...slited,value}
        })
    }

    format(){
        const splitFields = this.splitFields();
        return [...this.fullWorkers].map((id_WK)=>{
            let especificWK = splitFields.filter((el)=>el.id_WK === id_WK);
            return new Worker(especificWK, id_WK).createWorker();
        });
    }

}

export class Worker{
    constructor(wk_fields, id_WK){
        this.wk_fields = wk_fields;
        this.data = {
            id_WK,
            area:null,
            name:null,
            local:null, 
            timeStart:null,
            timeFinish:null,
            eqp:null,
            func:null
        }
    }

    createWorker(){
        for(let wk of this.wk_fields){
            this.data[wk.field] = wk.value
        }
        return this.data;
    }
}
