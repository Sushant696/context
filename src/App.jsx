// import Navbar from "./components/navbar";
// import Layout from "./components/layout";
// import Sidebar from "./components/sidebar";
import  UserContextProvider from "./context/userContextProvider";
import Login from "./pages/login";
import Profile from "./pages/profile";
// import Path from "./routing/path";

const App = () => {
  return (
    <>
    < UserContextProvider>
    {/* <Navbar/> */}
      {/* <Path /> */}
      {/* <Layout/> */}
      {/* <Sidebar/> */}
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  );
};

export default App;
