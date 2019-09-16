import React, { Component, Suspense, lazy } from "react";
import axios from 'axios';
const ImageSlider = React.lazy(() => import('./../ImageSlider/index'));

export default class AlbumRow extends Component {
  state = {
    imageList: []
  };

  async componentWillMount() {
    this.updateAlbumData();
  }
  updateAlbumData = async () => {
    const response =
      await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" +
        this.props.data.id,
        { headers: { 'Content-Type': 'application/json' } }
      )
    this.setState({ imageList: response.data });
  }

  render() {
    let { data } = this.props;
    return (
      <Suspense fallback={<div> Loading... </div>}>
      <div className="card m-2">
        {this.state.imageList.length !==0 ?
          <div>
            <div className="card-header">
              <h6 className="p-0 m-0">{data.title}</h6>
              <span className="album_info02">{`id: ${data.id}, userid: ${data.userId}`}</span>
            </div>
            < ImageSlider imageList={this.state.imageList} />
          </div> : null}
      </div>
      </Suspense>
    );
  }
}
