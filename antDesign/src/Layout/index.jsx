import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import { Layout, Menu, theme } from 'antd';

import {FormUser} from '../Forms/User';
import {UpdateUser} from '../Forms/UpdateUser';
import {UserSections} from '../Sections/User';
import {FormAbsence} from '../Forms/Absence';
import {Scheduler} from '../Sections/Scheduler';

import {FormDayOff} from '../Forms/DayOff';
import {MenuSideBar} from './MenuSideBar';

const { Content, Footer, Sider } = Layout;

export const LayoutPag = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <MenuSideBar />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='/create_user' element={<FormUser />} exact />
              <Route path='/update_user' element={<UpdateUser />} exact />
              <Route path='/dayoff' element={<FormDayOff />} exact />
              <Route path='/user' element={<UserSections />} exact />
              <Route path='/absence' element={<FormAbsence />} exact />

              <Route path='/schedule/ew' element={<Scheduler />} exact />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          MYPROGRAM ©2023 Created by Sandro Junior
        </Footer>
      </Layout>
    </Layout>
  );
};