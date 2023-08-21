import { useState, createContext } from 'react';
import { Form, List, Space, Button, Row } from 'antd';
import {green} from '@ant-design/colors';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger } from './DataScheduler';

export const ContextScheduler = createContext(null);

export const Scheduler = () => {
  const [dataScheduler, setDataScheduler] = useState([]);
  const [form] = Form.useForm();


  return (
    <ContextScheduler.Provider value={new DataSchedulerMeneger(dataScheduler, setDataScheduler)}>
      <Space align='start' size={60}>
      <InsertNewArea />
      <Button
        style={{background:green.primary}}
        type="primary"
        onClick={() => formatData(form.getFieldsValue())}
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


