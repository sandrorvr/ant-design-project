import { useContext } from 'react'
import { Form, Input, Select, Space, Button, TimePicker } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ContextScheduler } from './index';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SelectScroll } from './SelectScroll';

dayjs.extend(customParseFormat);
const { Option } = Select;


export const IntemFormWorker = ({ wk, area }) => {
  const dataManager = useContext(ContextScheduler);
  const removeItem = () => {
    dataManager.removeWorker(area ,wk);
  }
  return (
    <Form.Item
      style={{
        marginBottom: 0,
      }}
    >
      <Space>
      <Form.Item
          name={`area_${wk}`}
          initialValue={area}
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>
        <Form.Item
          name={`name_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
          
        >
          <SelectScroll />
        </Form.Item>
        <Form.Item
          name={`local_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name={`timeStart_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TimePicker initialValues={dayjs('00:00:00', 'HH:mm:ss')} />
        </Form.Item>
        <Form.Item
          name={`timeFinish_${wk}`}
          rules={[
            {
              required: true,
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
              required: true,
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
            <Option value="moto">Motocicleta</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={`function_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            allowClear
            placeholder="What's his function?"
            defaultValue="agt"
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
      </Space>
    </Form.Item>
  );
}
