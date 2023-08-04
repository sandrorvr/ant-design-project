import { DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import { Menu} from 'antd';

function getItem(label, key, icon, children) {
  return {key,icon,children,label};
}

const ItensSideBar = [
  getItem(<Link to='/User'>User</Link>, '1', <UserOutlined /> ),
  getItem(<Link to='/dayoff'>Day Off</Link>, '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<Link to='/create_user'>Create</Link>, '3', <UserOutlined />),
    getItem(<Link to='/dayoff'>Day Off</Link>, '4', <DesktopOutlined />),
  ]),
  getItem('Schedule', 'sub2', <TeamOutlined />, [
    getItem(<Link to='/create_user'>Monthly</Link>, '5', <UserOutlined />),
    getItem(<Link to='/dayoff'>End Week</Link>, '6', <DesktopOutlined />),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

export const MenuSideBar = () =>{
  return(
    <>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={ItensSideBar} />
    </>
  );
}