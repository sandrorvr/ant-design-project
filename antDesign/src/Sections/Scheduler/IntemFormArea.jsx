import {useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Button, Col } from 'antd';
import { IntemFormWorker } from './IntemFormWorker';
import { ContextScheduler } from './index';

export const TitleArea = ({title}) => {
  return (
    <div style={{
      background:'#171d52',
      display:'flex',
      flex:1,
      justifyContent:'center',
      padding:'0.1rem',
      marginBottom:'1rem',
      color:'#ffff'
    }}>
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
};

export const IntemFormArea = ({id_area}) => {
  const dataManager = useContext(ContextScheduler);
  const index_area = dataManager.getindexAreaByID(id_area)
  const data = dataManager.dataScheduler[index_area]['workers'];
  const name_area = dataManager.dataScheduler[index_area]['name_area'];
  const addNewWorker = () => {
    dataManager.createNewWorker(id_area);
  }

    return (
      <Row
        style={{ width: "100%" }}
      >
        <TitleArea title={name_area}/>
        <Col span={24}>
          {
            data.map((rd) => <IntemFormWorker key={rd.id} wk={rd.id} area={index_area}/>)
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