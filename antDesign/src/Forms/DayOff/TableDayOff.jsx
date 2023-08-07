import React, { useEffect, useState } from 'react';
import { Table } from 'antd';


export const TableDayOff = ({data}) => {

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
    <Table bordered dataSource={data} columns={columns} rowKey={(record) => `${record.id}`} />
  );
};