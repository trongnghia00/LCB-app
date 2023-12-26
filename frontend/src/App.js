import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline  } from "@mui/material";
import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import Header from './Components/Header';
import Register from './Components/Register';
import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';
import { useImmerReducer } from 'use-immer';

function App() {
  const initialState = {
    userUsername: localStorage.getItem('userUsername'),
    userEmail: localStorage.getItem('userEmail'),
    userId: localStorage.getItem('userId'),
    userToken: localStorage.getItem('userToken'),
  }

  function ReducerFunction(draft, action) {
    switch (action.type) {
      case "catchtoken":
        draft.userToken = action.tokenValue;
        localStorage.setItem('userToken', action.tokenValue);
        break;
      case "catchUserInfo":
        draft.userUsername = action.usernameInfo;
        draft.userEmail = action.emailInfo;
        draft.userId = action.idInfo;
        localStorage.setItem('userUsername', action.usernameInfo);
        localStorage.setItem('userEmail', action.usernameInfo);
        localStorage.setItem('userId', action.idInfo);
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/listings' element={<Listings />} />
          </Routes>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
