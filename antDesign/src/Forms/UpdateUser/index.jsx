import React, { useEffect, useState } from 'react';
import { Button, Row, Form, Input, InputNumber, TimePicker, Select, DatePicker, Col, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
    console.log(time, timeString);
};

const onFinish = (values) => {
    console.log(values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const formatDateTime = (str) => str.length < 9 ? dayjs(str, "HH:mm:ss") : dayjs(str, "YYYY-MM-DD")

const formatFieldsAntDesing = (obj) => {
    const arr = Object.keys(obj).map((key) => {
        const fieldsDateTime = ["begin_hour", "exit_hour", "admission"]
        return {
            'name': key,
            'value': fieldsDateTime.includes(key) ? formatDateTime(obj[key]) : obj[key]
        }
    });
    return arr

}


export const UpdateUser = () => {

    const [formController] = Form.useForm();
    const [formControllerFilter] = Form.useForm();
    const [workerRegister, setWorkerRegister] = useState(null);
    const [infoWorker, setInfoWorker] = useState([]);
    const [statusFields, setStatusFields] = useState(true);

    const onFinishFilter = async (values) => {
        setWorkerRegister(values['mat']);
        let response;
        try {
            response = await fetch(`http://127.0.0.1:8000/api_v1/servidor/${values['mat']}`);
        } catch (error) {
            console.error('The Worker\'s Register Not Find !')
        }
        if (response.statusText == 'OK'){
            const info = await response.json();
            setInfoWorker(formatFieldsAntDesing(info));
            formControllerFilter.resetFields();
            setStatusFields(false);
        }else{
            formController.resetFields();
            setStatusFields(true);
        }
        
    };

    const handleUpdateFields = async (values) => {
        values["begin_hour"] = dayjs(values["begin_hour"]).format("HH:mm:ss")
        values["exit_hour"] = dayjs(values["exit_hour"]).format("HH:mm:ss")
        values["admission"] = dayjs(values["admission"]).format("YYYY-MM-DD")
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api_v1/servidor/${workerRegister}`,
                {
                    method: 'PATCH',
                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                    body: JSON.stringify(values)
                }
            );
        } catch (error) {
            console.log('ERROR DURING UPDATE')
        }
        formController.resetFields();
        setStatusFields(true);

    }

    const handleDeleteWorker = async () => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api_v1/servidor/${workerRegister}`,
                {
                    method: 'DELETE',
                }
            );
        } catch (error) {
            console.log('ERROR DURING DELETE')
        }
        formController.resetFields();
        setStatusFields(true);
    }

    return (
        <>
            <Col justify='start'>
                <Row>
                    <Form
                        name="search_wk"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            width: 600,
                        }}
                        onFinish={onFinishFilter}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={formControllerFilter}
                    >

                        {/*Field Register*/}
                        <Form.Item
                            label="Matricula"
                            name="mat"
                        >
                            <Space.Compact>
                                <InputNumber style={{
                                    width: 200,
                                }} />
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Space.Compact>
                        </Form.Item>
                    </Form>
                </Row>

                <Form
                    name="create_wk"
                    disabled={statusFields}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    fields={infoWorker}
                    onFinish={handleUpdateFields}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={formController}
                >

                    {/*Field Servidor*/}
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
                                required: false,
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
                                required: false,
                                message: 'Insira uma Matrícula !',
                                type: 'number',
                                min: 1000000,
                                max: 9999999,
                            },
                        ]}
                    >
                        <InputNumber style={{
                            width: 200,
                        }} />
                    </Form.Item>

                    {/*Field Email*/}
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
                                type: 'number',
                                message: 'Please input your CPF!',
                            },
                        ]}
                    >
                        <InputNumber style={{
                            width: 200,
                        }} />
                    </Form.Item>

                    {/*Field CNH*/}
                    <Form.Item
                        label="Cnh"
                        name="cnh"
                        rules={[
                            {
                                required: false,
                                type: 'number',
                                message: 'Please input your CNH!',
                            },
                        ]}
                    >
                        <InputNumber style={{
                            width: 200,
                        }} />
                    </Form.Item>

                    {/*Field CPF*/}
                    <Form.Item
                        label="Categoria"
                        name="cat_cnh"
                        rules={[
                            {
                                required: false,
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
                                required: false,
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
                                required: false,
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
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                            <Button danger type="primary" onClick={handleDeleteWorker}>
                                Delete
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Col>
        </>
    );
};