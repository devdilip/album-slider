import React, { Component, Suspense, lazy  } from "react";
import axios from 'axios';
import "./Album.css";

const AlbumRow = React.lazy(() => import('./../AlbumRow/index'));

export default class componentName extends Component {
  state = {
    albumList: []
  };
  componentWillMount() {
    this.GetAllAlbumDetails()
  }

  GetAllAlbumDetails = async () => {
    const response =
      await axios.get("https://jsonplaceholder.typicode.com/albums",
        { headers: { 'Content-Type': 'application/json' } }
      )
    this.setState({ albumList: response.data });
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
