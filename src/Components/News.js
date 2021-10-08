import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello i am a constructor from news compo");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("idhar hai hum");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=3a484f3e843546808eda7352d989f1c2&page=${this.props.page}`;

    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  handlePrevClick = async () => {
    console.log("ha be ho gaya piche");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&category=${
      this.props.category
    }&apiKey=3a484f3e843546808eda7352d989f1c2&page=${this.state.page - 1}`;
    this.setState({ loading: true });

    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("ha be aage ho gaya");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&category=${
      this.props.category
    }&apiKey=3a484f3e843546808eda7352d989f1c2&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-4 mx-5 mz-3">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/CdxBDA91XTg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h1 className="my-4">HypeNews-The top Headlines..</h1>
        {this.state.loading && <Spinner />}
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
          {this.state.loading && <Spinner />}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Prev
          </button>
          <button
            type=" next button"
            className="btn btn-dark"
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
