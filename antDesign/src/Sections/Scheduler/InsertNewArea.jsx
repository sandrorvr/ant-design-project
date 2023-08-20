import { useContext } from 'react';
import { Form, Input, Space, Button } from 'antd';
import { ContextScheduler } from './index';


export const InsertNewArea = () => {
    const dataManager = useContext(ContextScheduler);
    const onFinish = (value) => {
        dataManager.createNewArea(value['name_area']);
        console.log(dataManager.dataScheduler)
    };

    return (
        <Form
            name='setArea'
            onFinish={onFinish}
        >
            <Space align="center">
                <Form.Item
                    name={'name_area'}
                    rules={[
                        {
                            required: true,
                            message: 'Insira o nome da nova area!'
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
    );
}