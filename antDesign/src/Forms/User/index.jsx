import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, TimePicker, Select, DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const formatTime = (time) => `${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`

const onFinish = async (values) => {
  values['begin_hour'] = values['begin_hour'].format("HH:mm:ss")
  values['exit_hour'] = values['exit_hour'].format("HH:mm:ss")
  values['admission'] = values['admission'].format("YYYY-MM-DD")
  const NEW_REGISTER = values['mat']
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api_v1/servidores/${NEW_REGISTER}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
    );
    console.log(response);
  } catch (error) {
    console.log('Error during creation new worker!');
    console.log(error);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export const FormUser = () => (
  <Form
    name="create_wk"
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

    {/*Field Status*/}
    <Form.Item
      label="situacao"
      name="status"
    >
      <Input />
    </Form.Item>

    {/*Field Servidor*/}
    <Form.Item
      label="Servidor"
      name="name"
      rules={[
        {
          required: true,
          message: 'Insira um Nome!',
        },
      ]}
    >
      <Input />
    </Form.Item>

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

    {/*Field Email*/}
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Insira um Email!',
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/*Field Genere*/}
    <Form.Item
      label="Tipo"
      name="genere"
    >
      <Select>
        <Select.Option value="f">Femenino</Select.Option>
        <Select.Option value="m">Masculino</Select.Option>
      </Select>
    </Form.Item>

    {/*Field Personal cell phone*/}
    <Form.Item
      label="Telefone Pessoal"
      name="personal_cell"
      rules={[
        {
          required: false,
          message: 'Insira seu celular Pessoal!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/*Field work cell phone*/}
    <Form.Item
      label="Telefone Trabalho"
      name="work_cell"
      rules={[
        {
          required: true,
          message: 'Insira seu celular de Trabalho!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/*Field Funcao*/}
    <Form.Item
      label="Cargo"
      name="office"
      rules={[
        {
          required: true,
          message: 'Insira seu Cargo!',
        },
      ]}
    >
      <Select>
        <Select.Option value="agt">Agente De Trânsito</Select.Option>
        <Select.Option value="coo">Coordenador</Select.Option>
        <Select.Option value="ger">Gerente</Select.Option>
        <Select.Option value="sup">Supervisor</Select.Option>
        <Select.Option value="ter">Tercerizado</Select.Option>
      </Select>
    </Form.Item>

    {/*Field Turno*/}
    <Form.Item
      label="Entrada"
      name="begin_hour"
      rules={[
        {
          required: true,
          message: 'Inicio do Sevico Ordinário!',
        },
      ]}
    >
      <TimePicker onChange={onChange} initialValues={dayjs('00:00:00', 'HH:mm:ss')} />
    </Form.Item>

    <Form.Item
      label="Saida"
      name="exit_hour"
      rules={[
        {
          required: true,
          message: 'Fim do Sevico Ordinário!',
        },
      ]}
    >
      <TimePicker onChange={onChange} initialValues={dayjs('00:00:00', 'HH:mm:ss')} />
    </Form.Item>

    {/*Field Admission Date*/}
    <Form.Item
      label="Admissão"
      name="admission"
      rules={[
        {
          required: true,
          message: 'Please input your Admition!',
        },
      ]}
    >
      <DatePicker onChange={onChange} />
    </Form.Item>

    {/*Field Group EW*/}
    <Form.Item
      label="GP FDS"
      name="gp"
      rules={[
        {
          required: true,
          message: 'Please input your Group!',
        },
      ]}
    >
      <Select>
        <Select.Option value="1">I</Select.Option>
        <Select.Option value="2">II</Select.Option>
        <Select.Option value="3">III</Select.Option>
        <Select.Option value="4">IV</Select.Option>
      </Select>
    </Form.Item>

    {/*Field CPF*/}
    <Form.Item
      label="Cpf"
      name="cpf"
      rules={[
        {
          required: true,
          type: 'number',
          message: 'Please input your CPF!',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

    {/*Field CNH*/}
    <Form.Item
      label="Cnh"
      name="cnh"
      rules={[
        {
          required: true,
          type: 'number',
          message: 'Please input your CNH!',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

    {/*Field CPF*/}
    <Form.Item
      label="Categoria"
      name="cat_cnh"
      rules={[
        {
          required: true,
          message: 'Please input your Feture!',
        },
      ]}
    >
      <Select>
        <Select.Option value="a">A</Select.Option>
        <Select.Option value="b">B</Select.Option>
        <Select.Option value="ab">A/B</Select.Option>
        <Select.Option value="c">C</Select.Option>
        <Select.Option value="ac">A/C</Select.Option>
        <Select.Option value="d">D</Select.Option>
        <Select.Option value="ad">A/D</Select.Option>
        <Select.Option value="e">E</Select.Option>
        <Select.Option value="ae">A/E</Select.Option>
      </Select>
    </Form.Item>

    {/*Field CPF*/}
    <Form.Item
      label="Bairro"
      name="district"
      rules={[
        {
          required: true,
          message: 'Please input your District!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/*Field CPF*/}
    <Form.Item
      label="Cidade"
      name="city"
      rules={[
        {
          required: true,
          message: 'Please input your City!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    {/*Button submit*/}
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);