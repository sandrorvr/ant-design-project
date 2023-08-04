import React, {useState} from 'react';
import { CreateDayOff } from './CreateDayOff';
import { FilterDayOff } from './FilterDayOff';
import { TableDayOff } from './TableDayOff';
import { Col, Row } from 'antd';

export const FormDayOff = () => {
  const [haveReload, setHaveReload] = useState(false);
  return (
    <section>
      <Row justify='space-around'>
        <Col span={7}>
          <CreateDayOff setHaveReload={setHaveReload} />
        </Col>
        <Col span={16}>
          <FilterDayOff /> 
          <TableDayOff haveReload={haveReload} />
        </Col>
      </Row>
    </section>
  );
}