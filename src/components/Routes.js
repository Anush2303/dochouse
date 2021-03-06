import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainHeader from "./Main Section/MainHeader.js";
import Navbar from "./Navigation/Navbar";
import Features from "./Features.js";
import Contact from "./Contact.js";
import Faq from "./Faq.js";
import Signup from "../Signup.js";

function Routes() {
  return (
    <switch>
      <Route exact path="/" component={MainHeader}></Route>
      <Route exact path="/" component={Features}></Route>
      <Route exact path="/" component={Contact}></Route>
      <Route exact path="/faq" component={Faq}></Route>
      <Route exact path="/signup" component={Signup}></Route>
    </switch>
  );
}
export default Routes;
