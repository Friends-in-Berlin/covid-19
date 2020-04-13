import React, { Component } from "react";
import axios from "axios";

export class News extends Component {
  state = {
    quest: [],
  };

  componentDidMount() {
    axios
      .get(`http://covid19-news.herokuapp.com/api/covid19/faqs`)
      .then((res) => {
        const quest = res.data;
        console.log(quest);
        this.setState({ quest });
      });
  }
  render() {
    return (
      <div>
        {this.state.quest.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.question}</li>
              <li>{item.answer}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default News;
