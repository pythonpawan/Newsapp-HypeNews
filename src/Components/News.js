import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am a constructor from news compo");
    this.state = {
      articles: [],
    };
  }
  async componentDidMount() {
    console.log("idhar hai hum");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a484f3e843546808eda7352d989f1c2";

    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a484f3e843546808eda7352d989f1c2&page=${
      this.state.page - 1
    }`;

    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);
    console.log("ha be ho gaya piche");
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a484f3e843546808eda7352d989f1c2&page=${
      this.state.page + 1
    }`;

    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);

    console.log("ha be aage ho gaya");
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  };

  render() {
    return (
      <div className="container my-4 mx-5 mz-3">
        <h1 className="my-4">HypeNews-The top Headlines..</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Prev
          </button>
          <button
            type=" next button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
