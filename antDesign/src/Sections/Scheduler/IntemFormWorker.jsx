import { Form, Input, Select, Space } from 'antd';

const { Option } = Select;


export const IntemFormWorker = ({wk}) => {
    return (
      <Form.Item
        style={{
          marginBottom: 0,
        }}
      >
        <Space>
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
        </Space>
      </Form.Item>
    );
  }