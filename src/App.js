import React from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Projects from "./views/Projects";
import Tasks from "./views/Tasks";
import Possibilities from "./views/Possibilities";
import CalendarDate from "./views/Calendar";
import Layout from "./components/Layout";

const App = () => {
  return (
      <BrowserRouter>
          <Layout>
              <Route exact path="/"><Redirect to="/projects" /></Route>
              <Route exact path="/projects"><Projects /></Route>
              <Route path="/tasks"><Tasks /></Route>
              <Route path="/possibilities"><Possibilities /></Route>
              <Route path="/calendar"><CalendarDate /></Route>
          </Layout>
      </BrowserRouter>
  );
};

export default App;
