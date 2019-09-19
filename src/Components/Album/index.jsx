import React, { Component, Suspense } from "react";
import "./Album.css";
import { getAllAlbumDetailsService } from "../../Services/ApplicationService";

const AlbumRow = React.lazy(() => import('./../AlbumRow'));

export default class componentName extends Component {
  state = {
    albumList: [],
    networkError: false
  };
  componentDidMount() {
    this.GetAllAlbumDetails()
  }

  GetAllAlbumDetails = async () => {
    await getAllAlbumDetailsService().then(response => {
      this.setState({ albumList: response, networkError: false });
    }).catch(error => {
      this.setState({ networkError: true });
      console.log(error);
    });
  }

  networkErrorMessage = () => {
    return (
      <div className="card m-2">
        <div className="card-header text-center text-danger">
          <h5 className="p-1 m-1">Error: Network Connection | Check in console for logs</h5>
        </div>
      </div>);
  }

  render() {
    return (
      <Suspense fallback={<div> Loading... </div>}>
        <React.Fragment>
          {this.state.networkError
            ? this.networkErrorMessage()
            : this.state.albumList.map((item, i) => (
              <AlbumRow data={item} key={i} />
            ))}
        </React.Fragment>
      </Suspense>
    );
  }
}
