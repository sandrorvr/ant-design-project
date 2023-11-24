import { useContext, useState, useEffect } from 'react';
import { Form, Select, Space, Button } from 'antd';
import { ContextScheduler } from './index';


export const InsertNewArea = ({typeOfScheduler}) => {
    const [form] = Form.useForm();
    const dataManager = useContext(ContextScheduler);
    const [schedulerLocal, setSchedulerLocal] = useState([])
    let uniqueAreas = [...new Set(schedulerLocal.map((e)=>e.area))]
    
    const onFinish = (value) => {
        dataManager.createNewArea(value['name_area']);
        form.resetFields();
    };
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://127.0.0.1:8000/api_v1/locals?typeScheduler=${typeOfScheduler}`);
            const _schedulerLocal = await response.json();
            setSchedulerLocal(_schedulerLocal); 
        }
        if(typeOfScheduler != null) fetchData();
    }, [typeOfScheduler]);

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