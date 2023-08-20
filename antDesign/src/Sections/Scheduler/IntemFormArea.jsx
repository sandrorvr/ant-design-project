import {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Button, Col } from 'antd';
import { IntemFormWorker } from './IntemFormWorker';
import { ContextScheduler } from './index';

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

export const IntemFormArea = ({id_area}) => {
  const dataManager = useContext(ContextScheduler);
  const index_area = dataManager.getindexAreaByID(id_area)
  const data = dataManager.dataScheduler[index_area]['workers'];
  const addNewWorker = () => {
    dataManager.createNewWorker(id_area);
  }

    return (
      <Row
        style={{ width: "100%" }}
      >
        
        <Col span={24}>
          {
            data.map((rd) => <IntemFormWorker key={rd.id} wk={rd.id} />)
          }
        </Col>
        <Button
          type="primary"
          shape="circle"
          onClick={addNewWorker}
        >+
        </Button>
      </Row>
    );
  }