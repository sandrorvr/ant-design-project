import { useContext } from 'react'
import { Form, Input, Select, Space, Button, TimePicker, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ContextScheduler } from './index';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const { Option } = Select;

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
export const IntemFormWorker = ({ wk, area, name_area }) => {
  const dataManager = useContext(ContextScheduler);
  const removeItem = () => {
    dataManager.removeWorker(area, wk);
  }
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
                required: true,
              },
            ]}
          >
            <Input style={{ display: 'none' }} />
          </Form.Item>
          <Form.Item
            name={`name_${wk}`}
            rules={[
              {
                required: true,
              },
            ]}

          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name={`local_${wk}`}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Name"
              style={{
                width: '100px',
              }}
              options={options}
            />
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
            name={`func_${wk}`}
            initialValue='agt'
            rules={[
              {
                required: true,
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
