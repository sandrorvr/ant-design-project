import { useContext, useEffect } from 'react';
import { Row, Button, Col, Space } from 'antd';
import { IntemFormWorker } from './IntemFormWorker';
import { DeleteOutlined } from '@ant-design/icons';

import { ContextScheduler } from './Context/ContextScheduler';
import { DataManager } from './Context/DataManager';

export const TitleArea = ({ title, index_area }) => {
  const context = useContext(ContextScheduler)
  const subtractArea = () => {
    context.dispatch(DataManager.removeArea(index_area))
  }
  return (
    <div style={{
      background: '#171d52',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      padding: '0.1rem',
      marginBottom: '1rem',
      color: '#ffff'
    }}>
      <Space size={100}>
        <h1>{title.toUpperCase()}</h1>
        <Button
          type="dashed"
          ghost
          danger
          onClick={subtractArea}
        >
          <DeleteOutlined />
        </Button>
      </Space>
    </div>
  );
};

export const IntemFormArea = ({id_area }) => {
  const context = useContext(ContextScheduler)
  const index_area = context.state.data.findIndex((area)=>area.id === id_area)
  const data = context.state.data[index_area]['workers'];
  const name_area = context.state.data[index_area]['name_area'];
  const addNewWorker = () => {
    context.dispatch(DataManager.createNewWorker(id_area));
  }

  return (
    <Row
      style={{ width: "100%" }}
    >
      <TitleArea title={name_area} index_area={index_area} />
      <Col span={24}>
        {
          data.map((rd) => <IntemFormWorker 
                              key={rd.id} 
                              wk={rd.id} 
                              area={index_area} 
                              name_area={name_area} 
                            />
                  )
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