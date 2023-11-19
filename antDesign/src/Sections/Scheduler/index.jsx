import { useState, createContext } from 'react';
import { Form, List, Space, Button, Row } from 'antd';
import {green, yellow} from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger } from './DataSchedulerMenger';
import { FormatData, ValidationWorkers } from './data/FormatData';

export const ContextScheduler = createContext(null);

export const Scheduler = () => {
  const [dataScheduler, setDataScheduler] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const dataFormated = new FormatData(form.getFieldsValue()).getDataListOfWorkers();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api_v1/schedulers/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataFormated)
        }
      );
      console.log(response);
    } catch (error) {
      console.log('Error during creation new worker!');
      console.log(error);
    }
  }

  const FunctionTest = () => {
    const dataFormated = new FormatData(form.getFieldsValue()).format();
    console.log(form.getFieldsValue());
    console.log(dataFormated);
  }

  return (
    <ContextScheduler.Provider value={new DataSchedulerMeneger(dataScheduler, setDataScheduler)}>
      <Space align='start' size={60}>
      <InsertNewArea />
      <Button
        style={{background: yellow.primary}}
        type="primary"
        onClick={FunctionTest}
      >TEST
      </Button>
      <Button
        style={{background: green.primary}}
        type="primary"
        onClick={handleSubmit}
      >SUBMIT
      </Button>
      </Space>
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


