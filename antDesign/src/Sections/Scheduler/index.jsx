import { useState, createContext } from 'react';
import { Form, Input, List, Space, Button } from 'antd';
import { IntemFormArea } from './IntemFormArea';
import { InsertNewArea } from './InsertNewArea';

import { DataSchedulerMeneger } from './DataScheduler';

export const ContextScheduler = createContext(null);

export const Scheduler = () => {
  const [dataScheduler, setDataScheduler] = useState([]);
  const [form] = Form.useForm();


  return (
    <ContextScheduler.Provider value={new DataSchedulerMeneger(dataScheduler, setDataScheduler)}>
      <InsertNewArea />
      <Form
        form={form}
      >
        <List
          bordered
          dataSource={dataScheduler}
          renderItem={(area) => (
            <List.Item>
              <IntemFormArea id_area={area.id} name_area={area.name_area}/>
            </List.Item>
          )}
        />
      </Form>
    </ContextScheduler.Provider>
  );
};


