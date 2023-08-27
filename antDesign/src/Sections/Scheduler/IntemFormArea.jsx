import { useContext } from 'react';
import { Row, Button, Col, Space } from 'antd';
import { IntemFormWorker } from './IntemFormWorker';
import { ContextScheduler } from './index';
import { DeleteOutlined } from '@ant-design/icons';

export const TitleArea = ({ title, index_area }) => {
  const dataManager = useContext(ContextScheduler);
  const subtractArea = () => {
    dataManager.removeArea(index_area);
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

export const IntemFormArea = ({ id_area }) => {
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
      <TitleArea title={name_area} index_area={index_area} />
      <Col span={24}>
        {
          data.map((rd) => <IntemFormWorker key={rd.id} wk={rd.id} area={index_area} name_area={name_area} />)
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