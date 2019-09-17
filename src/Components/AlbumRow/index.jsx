import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
import ImageSlider from './../ImageSlider';
import { updateAlbumDataService } from "../../Services/ApplicationService";

export default class AlbumRow extends Component {
  state = {
    imageList: []
  };

  componentDidMount() {
    this.updateAlbumData();
  }

  updateAlbumData = async () => {
    await updateAlbumDataService(this.props.data.id).then(response => {
      this.setState({ imageList: response });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    let { data } = this.props;
    return (
      <LazyLoad height={200} >
        <div className="card m-2">
          {this.state.imageList.length !== 0 ?
            <div>
              <div className="card-header">
                <h6 className="p-0 m-0">{data.title}</h6>
                <span className="album_info02">{`id: ${data.id}, userid: ${data.userId}`}</span>
              </div>
              < ImageSlider imageList={this.state.imageList} />
            </div> : null}
        </div>
      </LazyLoad>
    );
  }
}
