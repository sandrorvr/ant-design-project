import { useContext } from 'react';
import { Form, List, Space, Button, Select } from 'antd';
import { green, yellow } from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { handleSubmit } from './functions/handleSubmit';
import { functionTest } from './functions/functionTest';

import { ContextSchedulerProvider, ContextScheduler } from './Context/ContextScheduler';
import { DataManager } from './Context/DataManager';

export const Scheduler = () => {
  const context = useContext(ContextScheduler)
  const [form] = Form.useForm();
  const [formConfigurations] = Form.useForm();

  return (
    <>
      <Space align='start' size={60} >
        <Form
          style={{ minWidth: '200px' }}
          form={formConfigurations}
        >
          <Space>
            <Form.Item
              name={'type_scheduler'}
              rules={[
                {
                  required: true,
                  message: 'Insira o tipo de Escala!'
                },
              ]}
              style={{
                minWidth: '200px',
              }}
            >
              <Select
                onChange={() => context.dispatch(DataManager.setTypeScheduler(formConfigurations.getFieldValue('type_scheduler')))}
              >
                {context.state.listTypeScheduler.map((tp) => {
                  return <Select.Option
                    key={tp.id}
                    value={tp.id}
                  >
                    {tp.name}
                  </Select.Option>
                })}
              </Select>
            </Form.Item>

            {context.state.typeScheduler == 1 ?
              <Form.Item
                name={'group_scheduler'}
                rules={[
                  {
                    required: true,
                    message: 'Insira o tipo de Escala!'
                  },
                ]}
                style={{
                  minWidth: '50px'
                }}
              >
                <Select placeholder='GP'>
                  {[{ id: 1, gp: 'I' }, { id: 2, gp: 'II' }, { id: 3, gp: 'III' }, { id: 4, gp: 'IV' }].map((tp) => {
                    return <Select.Option
                      key={tp.id}
                      value={tp.id}
                    >
                      {tp.gp}
                    </Select.Option>
                  })}
                </Select>
              </Form.Item> : null
            }
          </Space>
        </Form>
        <Button
          style={{ background: yellow.primary }}
          type="primary"
          onClick={() => console.log(context.state)}
        >TEST
        </Button>
        <Button
          style={{ background: green.primary }}
          type="primary"
          onClick={handleSubmit}
        >SUBMIT
        </Button>
      </Space>
      <InsertNewArea />
      <Form
        form={form}
      >
        <List
          bordered
          dataSource={context.state.data}
          renderItem={(area) => (
            <List.Item>
              <IntemFormArea
                id_area={area.id}
                name_area={area.name_area}
              />
            </List.Item>
          )}
        />
      </Form>
    </>
  );
};


