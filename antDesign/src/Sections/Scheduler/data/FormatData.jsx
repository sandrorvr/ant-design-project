
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

    getDataListOfWorkers(){
        const dataFormated = this.format();
        return dataFormated.map((element)=>element.data);
    }

    format(){
        const splitFields = this.splitFields();
        return [...this.fullWorkers].map((id_WK)=>{
            let especificWK = splitFields.filter((el)=>el.id_WK === id_WK);
            return new Worker(especificWK, id_WK);
        });
        
    }

}

export class Worker{
    constructor(wk_fields, id_WK){
        this._data = {
            id_WK,
            area:null,
            name:null,
            local:null, 
            timeStart:null,
            timeFinish:null,
            eqp:null,
            func:null
        }
        this.createWorker(wk_fields);
    }

    get id(){
        return this._data['id_WK'];
    }

    get data(){
        return this._data;
    }

    createWorker(wk_fields){
        for(let wk of wk_fields){
            this.data[wk.field] = wk.value === undefined? '' : wk.value;
        }
    }

    checkFieldNulls(){
        const keysNulls = Object.keys(this._data).filter((key)=>this._data[key] === '');
        return keysNulls.length === 0 ? null: keysNulls;
    }

}

export class ValidationWorkers{
    constructor(listWorkers){
        this.listWorkers = listWorkers;
        this.problems = new Set();
        this.validation();
    }
    paintFieldProblem(id_field, color=mull){
        const field = document.getElementById(id_field);
        field.style.border = `1px solid ${color}`
    }
    checkFieldNulls(work){
        const status =  work.checkFieldNulls() === null? false : true;
        if(status) this.problems.add('checkFieldNulls');
        return {
            status,
            fields_problem: work.checkFieldNulls()
        }
    }
    /*

    checkDuplicatedName(){
        for()
    }

    */

    validation(){
        for(let work of this.listWorkers){
            const {status} = this.checkFieldNulls(work);
            let color = status ? 'red':'#d9d9d9';
            this.paintFieldProblem(`name_${work.id}`, color);
        }
    }
}


