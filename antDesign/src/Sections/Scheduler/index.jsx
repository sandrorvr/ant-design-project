import { useState, createContext } from 'react';
import { Form, List, Space, Button, Row } from 'antd';
import {green, yellow} from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger, FormatData, ValidationWorkers } from './DataScheduler';

export const ContextScheduler = createContext(null);

export const Scheduler = () => {
  const [dataScheduler, setDataScheduler] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    const dataFormated = new FormatData(form.getFieldsValue()).format();
    new ValidationWorkers(dataFormated);
    console.log(dataFormated.map((element)=>element.data));
  }

  return (
    <ContextScheduler.Provider value={new DataSchedulerMeneger(dataScheduler, setDataScheduler)}>
      <Space align='start' size={60}>
      <InsertNewArea />
      <Button
        style={{background: yellow.primary}}
        type="primary"
        onClick={handleSubmit}
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


