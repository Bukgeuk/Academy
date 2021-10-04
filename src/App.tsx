import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import dotenv from 'dotenv'
import axios from 'axios';
import Home from './page/Home'
import Lecture from './page/Lecture';
import NotFound from './page/NotFound'
import './App.module.scss'
import About from './page/About';

dotenv.config()

function App() {
    const [lectureList, setLectureList] = useState<Array<string>>([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + '/lecture').then((res) => {
            setLectureList(res.data)
        })
    }, [])

    return (
        <div className="App">
            <BrowserRouter basename="">
                <Switch>
                    <Route exact path='/' component={() => <Home lectureList={lectureList}></Home>}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/:id' component={Lecture}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
