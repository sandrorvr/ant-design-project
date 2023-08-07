import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Input, InputNumber, Select,  List, Row, Button, Col, Space } from 'antd';

const { Option } = Select;

const IntemFormWorker = ({road_map, wk}) => {
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

const IntemFormArea = () => {
  const [data, setData] = useState(
    [
      {
        id:uuidv4(),
        road_map: '',
        time: '',
        eqp: '',
        wks: ''
      }
    ]
  );
  return (
    <Row
      style={{ width: "100%" }}
    >
      
      <Col span={24}>
        {
          data.map((rd) => <IntemFormWorker road_map={rd.road_map} wk={rd.id} key={rd.id} />)
        }
      </Col>
      <Button
        type="primary"
        shape="circle"
        onClick={() => setData(funcAddNewWk(data, data.id))}
      >+
      </Button>
    </Row>
  );
}

export const Scheduler = () => {
  const [dataArea, setDataArea] = useState(
    [
      {
        name: 'Area1',
        sup: 'sup1'
      },
      {
        name: 'Area2',
        sup: 'sup2'
      },
    ]
  );

  const [form] = Form.useForm();

  return (
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
  );
};


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