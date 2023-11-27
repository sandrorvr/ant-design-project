import { useContext, useState, useEffect } from 'react';
import { Form, Select, Space, Button } from 'antd';
import { ContextScheduler } from './Context/ContextScheduler';
import { DataManager } from './Context/DataManager';


export const InsertNewArea = () => {
    const [form] = Form.useForm();
    const context = useContext(ContextScheduler);
    let uniqueAreas = [...new Set(context.state.locals.map((e)=>e.area))]
    const onFinish = (value) => {
        context.dispatch(DataManager.createNewArea(value['name_area']));
        form.resetFields();
    };
    return (
        <Form
            name='setArea'
            onFinish={onFinish}
            form={form}
        >
            <Space align="center"
            style={{ width: '100%'}}
            >
                <Form.Item
                    name={'name_area'}
                    rules={[
                        {
                            required: true,
                            message: 'Insira o nome da nova area!'
                        },
                    ]}
                    style={{ width: '200px' }}
                >
                    <Select
                        style={{ width: '100%' }}
                        //onChange={(value)=>{setSchedulerLocalByArea(context.state.locals.filter((e)=>e.area == value))}}
                    >
                        {uniqueAreas.map((tp,index) => {
                            return <Select.Option
                                key={index}
                                value={tp}
                            >
                                {tp}
                            </Select.Option>
                        })}
                    </Select>
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
    );
}