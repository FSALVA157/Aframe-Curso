
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Aframe Topics',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Muestras',
        children: [
          {
            label: <NavLink to="/animate-basic" target="_blank" >Ver Animacion Basica</NavLink>,
            key: 'animated-1',
          },
          {
            label: <NavLink to="/player-lights-shadows" target="_blank" >Ver Luces y Sombras</NavLink>,
            key: 'lights-shadows-1',
          },
          {
            label: <NavLink to="/player-aframe-inspector" target="_blank" >Ver Aframe Inspector</NavLink>,
            key: 'aframe-inspector-1',
          },
          {
            label: <NavLink to="/player-cursor" target="_blank" >Ver Cursor Basico</NavLink>,
            key: 'cursor-1',
          }
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <NavLink to="/player" target="_blank" rel="noopener noreferrer">
        Experiencias 360
      </NavLink>
    ),
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;