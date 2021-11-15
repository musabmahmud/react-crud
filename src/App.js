import React from "react";
import {BrowserRouter as Router,Switch,Routes,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import Home from "./components/Pages/Home";
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
