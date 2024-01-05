import { DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import { Menu} from 'antd';

function getItem(label, key, icon, children) {
  return {key,icon,children,label};
}

const ItensSideBar = [
  getItem(<Link to='/User'>User</Link>, '1', <UserOutlined /> ),
  getItem(<Link to='/schedule/ew'>End Week</Link>, '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<Link to='/create_user'>Create</Link>, '3', <UserOutlined />),
    getItem(<Link to='/update_user'>Update Data</Link>, '4', <DesktopOutlined />),
    getItem(<Link to='/dayoff'>Day Off</Link>, '5', <DesktopOutlined />),
    getItem(<Link to='/absence'>Absence</Link>, '6', <DesktopOutlined />),
  ]),
  getItem('Schedule', 'sub2', <TeamOutlined />, [
    getItem(<Link to='/schedule/ew'>Create</Link>, '7', <UserOutlined />),
    getItem(<Link to='#'>Edit</Link>, '8', <UserOutlined />),
    getItem(<Link to='#'>View</Link>, '9', <UserOutlined />),
  ]),
  getItem(<Link to='/absence'>Change</Link>, '10', <UserOutlined />),
  getItem('OSO', 'sub3', <TeamOutlined />, [
    getItem(<Link to='#'>Create</Link>, '11', <UserOutlined />),
    getItem(<Link to='#'>Edit</Link>, '12', <UserOutlined />),
    getItem(<Link to='#'>View</Link>, '13', <UserOutlined />),
  ]),
];

export const MenuSideBar = () =>{
  return(
    <>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={ItensSideBar} />
    </>
  );
}