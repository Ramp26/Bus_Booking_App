import React, { useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './components/Reg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Search from './components/Search';
import HomeOwner from './components/owner/HomeOwner';

import { createContext, useReducer } from 'react';
import AddBus from './components/owner/AddBus';
import OwnerTableData from './components/owner/OwnerTableData';
import EditBus from './components/owner/EditBus';
import AdminHome from './components/admin/AdminHome';
import AdminTable from './components/admin/AdminTable';

import { initialState,reducer } from "./reducer/UseReducer";
import Logout from './components/Logout';
import Booking from './components/Booking';
import Navbar from './components/Navbar';
import Home from './components/Home';


import { useHistory} from "react-router";
import Alan from './components/Alan';

export const UserContext = createContext();


const Routing = () => {
  return (
    <Switch>
      <Route path="/reg" component={Reg}></Route>
      {/* <Route
      path={"/login"}
      render={(props) => {
        return (
          <Login
            loginObj={loginobj}
            setLoginObj={setloginobj}
            {...props}
          />
        );
      }}
    /> */}

      <Route path="/login" component={Login}></Route>
      <Route path="/logout" component={Logout}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/homeowner" component={HomeOwner}></Route>
      <Route path="/ownertabledata" component={OwnerTableData}></Route>

      <Route path="/addbus" component={AddBus}></Route>
      <Route path="/editbus" component={EditBus} />
      <Route path="/adminhome" component={AdminHome} />
      <Route path="/admintable" component={AdminTable} />

      <Route path="/booking" component={Booking}/>
      <Route path="" component={Home}/>


    </Switch>)
}





const App = () => {
const [state, dispatch] = useReducer(reducer, initialState)
const history = useHistory();




// const redirect = () => {
//   // history.push('/search');
//   console.log(props)
 
// }
  // const [loginobj, setloginobj] = useState({
  //   userName:'',
  //   password:''
  // })

 
  return (

    <div className="App">

{/* <button onClick={redirect}>Log in</button> */}
      <UserContext.Provider value={{ state, dispatch }}>

        <Router>
         
          <Alan/>
          <Navbar />
          <Routing history={history} />
       </Router>
      </UserContext.Provider>
    </div>

  );
}

export default App;
