import { useState, createContext, useEffect } from 'react';
import { Form, List, Space, Button, Select } from 'antd';
import { green, yellow } from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger } from './DataSchedulerMenger';
import { FormatData, ValidationWorkers } from './data/FormatData';

import { handleSubmit } from './functions/handleSubmit';
import { functionTest } from './functions/functionTest';

export const ContextScheduler = createContext(null);

export const Scheduler = () => {
  const [dataScheduler, setDataScheduler] = useState([]);
  const [schedulerLocal, setSchedulerLocal] = useState(null);
  const [schedulerTypes, setSchedulerTypes] = useState([]);
  const [form] = Form.useForm();
  const [formConfigurations] = Form.useForm();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://127.0.0.1:8000/api_v1/SchedulerTypes/');
      const schedulerTypes = await response.json();
      setSchedulerTypes(schedulerTypes);
    }
    fetchData()
  }, []);

  return (
    <ContextScheduler.Provider value={new DataSchedulerMeneger(dataScheduler, setDataScheduler)}>
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
              onChange={() => setSchedulerLocal(formConfigurations.getFieldValue('type_scheduler'))}
            >
              {schedulerTypes.map((tp) => {
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
      <InsertNewArea typeOfScheduler={schedulerLocal} />
      <Form
        form={form}
      >
        <List
          bordered
          dataSource={dataScheduler}
          renderItem={(area) => (
            <List.Item>
              <IntemFormArea id_area={area.id} name_area={area.name_area} />
            </List.Item>
          )}
        />
      </Form>
    </ContextScheduler.Provider>
  );
};


