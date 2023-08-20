import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, List, Space, Button } from 'antd';
import { IntemFormArea } from './IntemFormArea';

export const Scheduler = () => {
  const [dataArea, setDataArea] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (value) => {
    const new_area = {
      id: uuidv4(),
      name_area: value['name_area']
    };
    setDataArea([...dataArea, new_area]);
  }

  return (
    <>
      <Form
        name='setArea'
        onFinish={onFinish}
      >
        <Space>
          <Form.Item
            name={`name_area`}
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: 'inline-block',
            }}
          >
            <Input placeholder="Insert New Area" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: 'inline-block',
            }}
          >
            <Button
              type="primary"
              shape="circle"
              htmlType="submit"
            >+
            </Button>
          </Form.Item>
        </Space>
      </Form>

      <Form
        form={form}
      >
        <List
          bordered
          dataSource={dataArea}
          renderItem={(item) => (
            <List.Item>
              <IntemFormArea />
            </List.Item>
          )}
        />
      </Form>
    </>
  );
};


