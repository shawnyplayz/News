import axios from "axios";
import React, { Component } from "react";
import { bookmark } from "../../Reducer/actions";
import { connect } from "react-redux";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArr: [],
      captureArr: [],
    };
  }
  componentDidMount() {
    this.firstCall();
  }
  firstCall = async () => {
    let asd = [];
    for (let i = 0; i <= 10; i++) {
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${i + 1}.json`)
        .then(function (response) {
          asd.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(asd);
      this.setState({
        newsArr: asd,
      });
    }
  };
  captureNews(e, index) {
    this.state.captureArr.push(this.state.newsArr[index]);
    this.setState({
      ...this.state.captureArr,
    });
  }

  render() {
    return (
      <div className="Container">
        <h1>Top Hacker News</h1>
        {this.state.newsArr.map((el, index) => {
          return (
            <div
              className="card my-2 shadow"
              key={index}
              style={{ width: "100%" }}
            >
              <div className="card-body justify-content-start">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">{el.type}</p>
                <p className="card-text">
                  <h5>Author: {el.by}</h5>
                </p>
                <div className="d-flex justify-content-between">
                  <a href={el.url} className="btn btn-primary">
                    {el.url}
                  </a>
                  <button
                    onClick={(event) => this.captureNews(event, index)}
                    className="btn btn-primary"
                  >
                    Bookmark this
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bookMarks: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookmark: () => dispatch(bookmark()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
