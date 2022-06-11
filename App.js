import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div className="mainBody">
            {/* <News pageSize={12} country="in" category="" /> */}
            <Switch>
              <Route exact path="/">
                <News
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                  headline="Headlines"
                />
              </Route>
              <Route exact path="/business">
                <News
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                  headline="Business Headlines"
                />
              </Route>
              <Route exact path="/entertainment">
                <News
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                  headline="Entertaiment Headlines"
                />
              </Route>
              <Route exact path="/general">
                <News
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                  headline="General Headlines"
                />
              </Route>
              <Route exact path="/health">
                <News
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                  headline="Health Headlines"
                />
              </Route>
              <Route exact path="/science">
                <News
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                  headline="Science Headlines"
                />
              </Route>
              <Route exact path="/sports">
                <News
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                  headline="Sports Headlines"
                />
              </Route>
              <Route exact path="/technology">
                <News
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                  headline="Technology Headlines"
                />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
