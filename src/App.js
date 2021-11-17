import React from "react";
import {BrowserRouter as Router,Switch,Routes,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import Home from "./components/Pages/Home";
import Edit from "./components/Pages/Student/Edit";
import View from "./components/Pages/Student/View";
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/view/:id" element={<View/>}>
          </Route>
          <Route path="/Edit/:id" element={<Edit/>}>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
