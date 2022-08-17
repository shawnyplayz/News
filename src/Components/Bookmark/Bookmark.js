import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { unmark } from '../../Reducer/actions'
import { ToastContainer, toast } from 'react-toastify';

class Bookmark extends Component {
  constructor(props) {
    super(props)

    this.state = {
      getBookmarks: [],
      deleteMarks: null
    }
  }
  componentDidMount() {
    this.setState({
      getBookmarks: this.props.bookMarkArr
    })
  }
  deleteNews(event, index) {
    debugger
    this.state.getBookmarks.splice(index, 1)
    this.setState({
      ...this.state.getBookmarks
    })
    this.props.dispatch(unmark('bookMarkArr', this.state.getBookmarks));
    toast.success('Unmarked Successfully!', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className='display-3 my-head'>Bookmarked News</h1>
        <div className="row">
          {this.state.getBookmarks.map((el, index) => {
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
                            onClick={(event) => this.deleteNews(event, index)}
                            className="btn btn-primary btn-sm"
                          >
                            Unmark this
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
    )
  }
}
function mapStateToProps(state) {
  return state
}
export default withRouter(connect(mapStateToProps)(Bookmark))