import { useContext, useEffect, useState } from 'react'
import { Form, Input, Select, Space, Button, TimePicker, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ContextScheduler } from './Context/ContextScheduler';
import { DataManager } from './Context/DataManager';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { Option } = Select;

export const IntemFormWorker = ({ wk, area, name_area}) => {
  const context = useContext(ContextScheduler)
  const [servidores, setServidores] = useState([]);

  const removeItem = () => {
    context.dispatch(DataManager.removeWorker(area, wk))
  }

  useEffect(()=>{
    const getServidores = async () =>{
      const gp = context.state.infoScheduler.group;
      const response = await fetch(`http://127.0.0.1:8000/api_v1/servidores?gp=${gp}`);
      const listServidores = await response.json();
      setServidores(listServidores);
    }
    getServidores();
  },[context.state.infoScheduler.group])

  return (
    <Form.Item
      style={{
        marginBottom: 0,
      }}
    >
      <Row justify={'space-between'}>
          <Form.Item
            name={`area_${wk}`}
            initialValue={name_area}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input style={{ display: 'none' }} />
          </Form.Item>
          <Form.Item
            name={`servidor_${wk}`}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select
              placeholder="Select Name"
              style={{
                width: '170px',
              }}
            >
              {servidores.map((e) => {
                return <Select.Option

                  key={e.mat}
                  value={e.mat}
                >
                  {e.name}
                </Select.Option>
              })}
            </Select>
            
          </Form.Item>
          <Form.Item
            name={`local_${wk}`}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select
              placeholder="Select Name"
              style={{
                width: '100px',
              }}
            >
              {context.state.locals.map((e) => {
                return <Select.Option

                  key={e.id}
                  value={e.id}
                >
                  {e.local}
                </Select.Option>
              })}
            </Select>
            
          </Form.Item>
          <Form.Item
            name={`timeStart_${wk}`}
            initialValue={dayjs('00:00:00', 'HH:mm:ss')}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <TimePicker initialValues={dayjs('00:00:00', 'HH:mm:ss')} />
          </Form.Item>
          <Form.Item
            name={`timeFinish_${wk}`}
            initialValue={dayjs('00:00:00', 'HH:mm:ss')}
            rules={[
              {
                required: false,
              },
            ]}
            style={{
              display: 'inline-block',
            }}
          >
            <TimePicker initialValues={dayjs('00:00:00', 'HH:mm:ss')} />
          </Form.Item>
          <Form.Item
            name={`eqp_${wk}`}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select
              allowClear
              placeholder="What's Equipament?"
              style={{
                width: '100px',
              }}
            >
              <Option value="vtr">Viatura</Option>
              <Option value="mt">Motocicleta</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`func_${wk}`}
            initialValue='agt'
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select
              allowClear
              placeholder="What's his function?"
              style={{
                width: '100px',
              }}
            >
              <Option value="sup">Supervisor</Option>
              <Option value="coo">Coordenador</Option>
              <Option value="ger">Gerente</Option>
              <Option value="agt">Agente</Option>
            </Select>
          </Form.Item>
          <Form.Item
          >
            <Button
              type="primary"
              shape="circle"
              danger
              onClick={removeItem}
            >
              <DeleteOutlined />
            </Button>
          </Form.Item>
      </Row>
    </Form.Item>
  );
}
