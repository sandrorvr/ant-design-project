import { FormatData } from '../data/FormatData';
import { checkDuplicate } from '../data/ValidationData';


const paintFieldProblem = (id_field, color = mull)=>{
  const field = document.getElementById(id_field);
  field.parentNode.parentNode.style.border = `1px solid ${color}`
}

export const functionTest = async (form) => {
  const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
  const idDuplicated = checkDuplicate(data);
  for (let wk of data) {
    let status = idDuplicated.includes(wk.id_WK);
    let color = status ? 'red':'#d9d9d9';
    paintFieldProblem(`servidor_${wk.id_WK}`, color);
  }
}