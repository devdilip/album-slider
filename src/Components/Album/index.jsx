import React, { Component, Suspense } from "react";
import "./Album.css";
import { getAllAlbumDetailsService } from "../../Services/ApplicationService";

const AlbumRow = React.lazy(() => import('./../AlbumRow/index'));

export default class componentName extends Component {
  state = {
    albumList: []
  };
  componentWillMount() {
    this.GetAllAlbumDetails()
  }

  GetAllAlbumDetails = async () => {
    await getAllAlbumDetailsService().then(response => {
      // console.log(response);
      this.setState({ albumList: response });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Suspense fallback={<div> Loading... </div>}>
        <React.Fragment>
          {this.state.albumList.map((item, i) => (
            <AlbumRow data={item} key={i} />
          ))}
        </React.Fragment>
      </Suspense>
    );
  }
}
