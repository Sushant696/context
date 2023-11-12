// import Navbar from "./components/navbar";
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
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  );
};

export default App;
