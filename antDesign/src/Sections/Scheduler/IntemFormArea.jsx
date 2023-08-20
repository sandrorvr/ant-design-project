import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Button, Col } from 'antd';
import { IntemFormWorker } from './IntemFormWorker';

function funcAddNewWk(data, id) {
  const newData = [...data];
  newData.push({
    id:uuidv4(),
    road_map: '',
    time: '',
    eqp: '',
    wks: ''
  });
  return newData
};

export const IntemFormArea = () => {
    const [data, setData] = useState(
      [
        {
          id:uuidv4(),
          road_map: '',
          time: '',
          eqp: '',
          wks: ''
        }
      ]
    );
    return (
      <Row
        style={{ width: "100%" }}
      >
        
        <Col span={24}>
          {
            data.map((rd) => <IntemFormWorker road_map={rd.road_map} wk={rd.id} key={rd.id} />)
          }
        </Col>
        <Button
          type="primary"
          shape="circle"
          onClick={() => setData(funcAddNewWk(data, data.id))}
        >+
        </Button>
      </Row>
    );
  }