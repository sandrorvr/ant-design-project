import { useState } from 'react';
import { Button, Form, Input, InputNumber, TimePicker, DatePicker, Row, Select } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};



const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export const CreateDayOff = ({setNewDayOff}) => {
  const [formController] = Form.useForm(); 

  const onFinish = async (values) => {
    values['start_date'] = values['start_date'].format("YYYY-MM-DD")
    values['end_date'] = values['end_date'].format("YYYY-MM-DD")
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api_v1/dayOffs/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        }
      );
      //console.log(JSON.stringify(values));
      let wk_created = await response.json();
      values['name'] = wk_created;
      setNewDayOff(values);
    } catch (error) {
      console.log('Error during creation new Day Off!');
    }
    formController.resetFields();
  };

  return (
    <Form
      layout='vertical'
      name="create_dayOff"
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
      form={formController}
    >

      {/*Field Register*/}
      <Form.Item
        label="Matricula"
        name="mat"
        rules={[
          {
            required: true,
            message: 'Insira uma Matrícula !',
            type: 'number',
            min: 1000000,
            max: 9999999,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>


      {/*Field Date Day Off*/}
      {/*Field work cell phone*/}
      <Form.Item
        label="Tipo"
        name='dayOff'
      >
        <Select>
          <Select.Option value="ferias">Férias</Select.Option>
          <Select.Option value="premio">L.Premio</Select.Option>
          <Select.Option value="medico">L.Médica</Select.Option>
          <Select.Option value="maternidade">L.Maternidade</Select.Option>
          <Select.Option value="paternidade">L.Paternidade</Select.Option>
          <Select.Option value="falecimento">Falecimento</Select.Option>
          <Select.Option value="tre">TRE</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Inicio"
        name="start_date"
        rules={[
          {
            required: false,
            message: 'Qual a data da folga?',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Fim"
        name="end_date"
        rules={[
          {
            required: false,
            message: 'Qual a data da folga?',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Comentário"
        name="comment"
      >
        <Input.TextArea/>
      </Form.Item>

      {/*Button submit*/}
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};