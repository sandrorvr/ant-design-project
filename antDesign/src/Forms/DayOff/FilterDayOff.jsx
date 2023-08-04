import React from 'react';
import { Button, Form, Input, DatePicker, Row, Col } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export const FilterDayOff = () => {
  const { RangePicker } = DatePicker;
  return (
    <Form
      layout="vertical"
      name="filter_dayOff"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      {/*Field Servidor*/}
      <Row align='middle'>

          <Form.Item
            label="Servidor"
            name="name_wk"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date"
            name="day_off_wk"
          >
            <RangePicker onChange={onChange} />
          </Form.Item>


          {/*Button submit*/}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filter
            </Button>
          </Form.Item>
      </Row>
    </Form>
  );
};