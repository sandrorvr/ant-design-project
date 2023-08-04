import React, { useEffect, useState } from 'react';
import { Table } from 'antd';


const formatData = (data) => {
  return {
    mat: data['mat'],
    name: data['name'],
    start_date: data['start_date'],
    end_date: data['end_date'],
    dayOff: decodeDayOff(data['dayOff']),
  }
}

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

export const TableDayOff = ({haveReload}) => {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:8000/api_v1/dayOffs/');
      const dayOffs = await response.json();
      setData(dayOffs.map((el) => formatData(el)));
    }
    fetchData()
  }, [haveReload])


  const columns = [
    {
      title: 'Matricula',
      dataIndex: 'mat',
      width: '20%',
      key: 'mat'
    },
    {
      title: 'Servidor',
      dataIndex: 'name',
      width: '40%',
      key: 'name'
    },
    {
      title: 'Inicio',
      dataIndex: 'start_date',
      width: '20%',
      key: 'start_date'
    },
    {
      title: 'Fim',
      dataIndex: 'end_date',
      width: '20%',
      key: 'end_date'
    },
    {
      title: 'Type',
      dataIndex: 'dayOff',
      width: '20%',
      key: 'dayOff'
    }
  ];

  return (
    <Table bordered dataSource={data} columns={columns} />
  );
};