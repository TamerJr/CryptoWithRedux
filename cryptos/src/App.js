import React from 'react';
import {Routes ,Route ,Link } from "react-router-dom"

import { Layout,Typography ,Space } from 'antd';
import './App.css';
import {NavBar ,CryptoDetails,Currencies ,Home,News} from './Components/Pages/index';
function App() {
  return (
    <div className="app">
        <div className='navbar'>
            <NavBar/>
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route  path='/cryptocurrencies' element={<Currencies/>}/>
                  <Route  path='/news' element={<News/>}/>
                  <Route  path='/crypto/:coinId' element={<CryptoDetails/>}/>
                </Routes>
              </div>
            </Layout>
        <div className='footer' >
          <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
            All rights ,reserverd
          </Typography.Title> 
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>

    </div>
  );
}

export default App;
