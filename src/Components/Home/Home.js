import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { bookmark } from "../../Reducer/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArr: [],
      captureArr: this.props.bookMarkArr,
      bookmarked: false
    };
  }
  componentDidMount() {
    this.firstCall();
  }
  firstCall = async () => {
    let asd = [];
    for (let i = 0; i <= 50; i++) {
      await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${i + 1}.json`)
        .then(function (response) {
          asd.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.setState({
        newsArr: asd,
      });
    }
  };
  captureNews(e, index) {
    debugger
    for (let j = 0; j < this.state.captureArr.length; j++) {
      let tempNews = this.state.newsArr[index]
      if (Number(this.props.bookMarkArr[j].id) === Number(tempNews.id)) {
        swal({
          title: "oops!",
          text: "This news is already bookmarked!",
          icon: "error",
        });
        return
      }
      // if (this.state.captureArr[index].id === this.props.bookMarkArr[j])
    }
    this.state.captureArr.push(this.state.newsArr[index]);
    this.setState({
      ...this.state.captureArr,
      bookmarked: true
    });
    toast.success('Bookmarked Successfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("captureArr=>", this.state.captureArr)
    this.props.dispatch(bookmark('bookMarkArr', this.state.captureArr));
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-3 my-head">Top Hacker News</h1>
        <div className="row">

          {this.state.newsArr.map((el, index) => {
            if (el.type === 'story' && el.url)
              return (
                <div className="col-md-4">
                  <div
                    className="card my-2 shadow myCard"
                    key={index}
                  >
                    <div className="card-body">
                      <div className="heightTitle">
                        <h5 className="card-title meri-link">{el.title}</h5>
                      </div>
                      <div className="heightText">
                        <p className="card-text meri-link">{el.type}</p>
                      </div>
                      <div className="heightAuthor">
                        <p className="card-text meri-link">
                          <h5>Author: {el.by}</h5>
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="btn btn-danger btn-sm">
                            <a href={el.url} className="link-light text-decoration-none meri-link" target="_blank">
                              Read More
                            </a>
                          </div>

                        </div>
                        <div className="col-md-6">
                          <button
                            onClick={(event) => this.captureNews(event, index)}
                            className="btn btn-primary btn-sm"
                          >Bookmark this
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
          })}

        </div>
        <ToastContainer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}
export default withRouter(connect(mapStateToProps)(Home));
