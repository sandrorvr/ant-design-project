import { useState, useContext, useEffect } from 'react';
import { Form, List, Space, Button, Select } from 'antd';
import { green, yellow } from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger } from './DataSchedulerMenger';
import { FormatData, ValidationWorkers } from './data/FormatData';

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
      <Space align='start' size={60}>
        <Form
          style={{ width: '200px' }}
          form={formConfigurations}
        >

          <Form.Item
            name={'type_scheduler'}
            rules={[
              {
                required: true,
                message: 'Insira o tipo de Escala!'
              },
            ]}
            style={{
              width: '100%'
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

        </Form>
        <Button
          style={{ background: yellow.primary }}
          type="primary"
          onClick={() => console.log('test')}
        >TEST
        </Button>
        <Button
          style={{ background: green.primary }}
          type="primary"
          onClick={handleSubmit}
        >SUBMIT
        </Button>
      </Space>
      <InsertNewArea/>
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


