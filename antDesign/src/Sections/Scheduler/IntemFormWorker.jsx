import { useContext } from 'react'
import { Form, Input, Select, Space, Button } from 'antd';
import { ContextScheduler } from './index';

const { Option } = Select;


export const IntemFormWorker = ({ wk, area }) => {
  const dataManager = useContext(ContextScheduler);
  const removeItem = (id_item) => {
    dataManager.removeItem(id_item);
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
          style={{
            display: 'inline-block',
          }}
        >
        </Form.Item>
        <Form.Item
          name={`name_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: 'inline-block',
          }}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={`local_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: 'inline-block',
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name={`time_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: 'inline-block',
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          name={`eqp_${wk}`}
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: 'inline-block',
          }}
        >
          <Input placeholder="Input birth year" />
        </Form.Item>
        <Form.Item
          style={{
            display: 'inline-block',
          }}
        >
          <Button
            type="primary"
            shape="circle"
            danger
            onClick={() => removeItem()}
          >+
          </Button>
        </Form.Item>
      </Space>
    </Form.Item>
  );
}
