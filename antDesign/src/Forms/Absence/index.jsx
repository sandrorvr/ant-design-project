import { Row, Col, Form, Input, Button, InputNumber, Space } from 'antd';

export const FormAbsence = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Pesquisa"
                    name="name_wk"

                    rules={[
                        {
                            required: true,
                            message: 'Insira algo para pesquisar!',
                        },
                    ]}
                >
                    <Space.Compact>
                        <Input style={{ maxWidth: '100px' }} />
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Space.Compact>
                </Form.Item>
            </Form>
        </Row>
    );
}