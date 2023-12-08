import { FormatData } from '../data/FormatData';

export const functionTest = (form) => {
    const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
    console.log(data);
    }