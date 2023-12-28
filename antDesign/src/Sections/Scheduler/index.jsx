import { useContext, useState } from 'react';
import { Form, List, Space, Button, Select, DatePicker,TimePicker, Input } from 'antd';
import { green, yellow } from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { handleSubmit } from './functions/handleSubmit';
import { functionTest } from './functions/functionTest';

import { ContextScheduler } from './Context/ContextScheduler';
import { DataManager } from './Context/DataManager';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);


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
                onChange={(value) => context.dispatch(DataManager.setTypeScheduler(value))}
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

            {context.state.infoScheduler.type == 1 ?
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
                <Select
                  placeholder='GP'
                  onChange={(value) => context.dispatch(DataManager.setGroupScheduler(value))}
                >
                  {[{ id: 'i', gp: 'I' }, { id: 'ii', gp: 'II' }, { id: 'iii', gp: 'III' }, { id: 'iv', gp: 'IV' }].map((tp) => {
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
            <Form.Item
              name={`date_scheduler`}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker 
                onChange={(value) => context.dispatch(DataManager.setDateScheduler(value.toJSON().slice(0,10)))}
                picker="day" 
              />
            </Form.Item>
            <Form.Item
              name={`description_scheduler`}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input 
                placeholder='Description'
              />
            </Form.Item>
            <Form.Item
            name={`timeStart`}
            initialValue={dayjs('00:00:00', 'HH:mm:ss')}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <TimePicker.RangePicker 
              //onChange={(value)=>console.log(value.map((time)=>time.format("HH:mm:ss")))}
              onChange={(value)=>context.dispatch(DataManager.setTimes(value.map((time)=>time.format("HH:mm:ss"))))}
              initialValues={dayjs('00:00:00', 'HH:mm:ss')} 
            />
          </Form.Item>
          </Space>
        </Form>
        <Button
          style={{ background: yellow.primary }}
          type="primary"
          onClick={() => functionTest(form, context)}//console.log(context)
        >TEST
        </Button>
        <Button
          style={{ background: green.primary }}
          type="primary"
          onClick={() => console.log(context.state)}//handleSubmit
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


