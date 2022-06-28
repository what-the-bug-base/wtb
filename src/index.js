import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard  from './Dashboard';
import Signup from "./Signup"
import Login from "./Login"
import { store } from './app/store';
import { Provider } from 'react-redux';
import Page404 from "./Page404"
import NewUser from "./NewUser"
import Plan from "./Plan"
import {Toaster} from "react-hot-toast"

//  <Route path="*" element={<Page404/>}/>



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Toaster position="top-right"
  toastOption={{
    success:{
      theme:{
        primary:'blue'
      },
    },
  }}></Toaster>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/portal/ws/:id' element={<Dashboard />}/>
    <Route path='/login' element={<Login />}/>
    <Route path="/order" element={<Plan/>}/>
    <Route path="/portal/new" element={<NewUser/>}/>
    <Route path='/sign-up' element={<Signup/>} />
      </Routes>
  </BrowserRouter>
  </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
