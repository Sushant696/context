import { Layout } from "antd";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Profile from "../pages/profile";

const App = () => {
  const { Header, Sider, Content } = Layout;

  return (
    <Layout>
      <Header><Navbar/></Header>
      <Layout>
        <Sider width={200}><Sidebar/></Sider>
        <Content><Profile/></Content>
      </Layout>
    </Layout>
  );
};

export default App;
