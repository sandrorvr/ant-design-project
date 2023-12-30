export const checkDuplicate = (data)=>{
    const countDuplicated = {};
    const wkIdDuplicated = [];
    for(let wk of data){
        let matServidor = wk.servidor;
        let isExist = Object.keys(countDuplicated).includes(matServidor.toString());
        if(isExist){
            countDuplicated[matServidor.toString()] = countDuplicated[matServidor.toString()] + 1;
            wkIdDuplicated.push(wk.id_WK)
        }else{
            countDuplicated[matServidor.toString()] = 1;
        }
    }
    return wkIdDuplicated;
}