import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/home/Home";
import News from "./Components/news/News";
import Protection from "./Components/protection/Protection";
import Warning from "./Components/warning/Warning";
import Support from "./Components/support/Support";
import Nav from "./Components/navbar/Nav";
import "./App.css";
//import axios from "axios";

export class App extends Component {
  state = {
    
    /* news: [], */
  };

 

  /* NEW API  */

  /* fetchNews = async () => {
    const response = await axios.get(
      "http://covid19-news.herokuapp.com/api/covid19/news"
    );
    this.setState({
      news: response,
    });
    console.log("News data", response);
  }; */

  componentDidMount() {
   
    /* this.fetchNews(); */
  }

  render() {
   

    return (
      <BrowserRouter>
       

        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/news" component={News} />
            <Route path="/protection" component={Protection} />
            <Route path="/warning" component={Warning} />
            <Route path="/support" component={Support} />
          </Switch>
        </div>
       
      </BrowserRouter>
     
    );
  }
}

export default App;
