import { FormatData } from '../data/FormatData';
import { checkDuplicate } from '../data/ValidationData';


const paintFieldProblem = (id_field, color = mull)=>{
  const field = document.getElementById(id_field);
  console.log(field)
  field.style.border = `1px solid ${color}`
}

export const functionTest = async (form) => {
  const data = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
  const idDuplicated = checkDuplicate(data);
  console.log(idDuplicated);
  for (let id of idDuplicated) {
    let color = 'red';
    paintFieldProblem(`servidor_${id}`, color);
  }
}