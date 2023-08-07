import {useState, useEffect} from 'react';
import { CreateDayOff } from './CreateDayOff';
import { FilterDayOff } from './FilterDayOff';
import { TableDayOff } from './TableDayOff';
import { Col, Row } from 'antd';

const decodeDayOff = (code) => {
  switch (code) {
    case 'ferias':
      return 'Férias'
    case 'premio':
      return 'L.Premio'
    case 'medico':
      return 'L.Médica'
    case 'maternidade':
      return 'L.Maternidade'
    case 'paternidade':
      return 'L.Paternidade'
    case 'falecimento':
      return 'Falecimento'
    case 'tre':
      return 'TRE'
    default:
      return 'ERROR'
  }
}

const formatData = (data) => {
  return {
    id: data['id'],
    mat: data['mat'],
    name: data['name'],
    start_date: data['start_date'],
    end_date: data['end_date'],
    dayOff: decodeDayOff(data['dayOff']),
  }
}

export const FormDayOff = () => {
  const [newDayOff, setNewDayOff] = useState({});
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:8000/api_v1/dayOffs/');
      const dayOffs = await response.json();
      setData(dayOffs.map((el) => formatData(el)));
    }
    fetchData()
  }, []);

  useEffect(()=>{
    setData([formatData(newDayOff), ...data]);
  },[newDayOff]);

  return (
    <section>
      <Row justify='space-around'>
        <Col span={7}>
          <CreateDayOff setNewDayOff={setNewDayOff} />
        </Col>
        <Col span={16}>
          <FilterDayOff /> 
          <TableDayOff data={data} />
        </Col>
      </Row>
    </section>
  );
}