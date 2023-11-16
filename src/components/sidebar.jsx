import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SideBar = () => {
 return (
    <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <Link to="/smartphone">smartphone</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/laptops" >Laptops</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/Groceries">Groceries</Link>
      </Menu.Item>
    </Menu>
 );
};

export default SideBar;