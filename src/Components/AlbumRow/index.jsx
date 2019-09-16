import React, { Component, Suspense } from "react";
import { updateAlbumDataService } from "../../Services/ApplicationService";
const ImageSlider = React.lazy(() => import('./../ImageSlider'));

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
      <Suspense fallback={<div> Loading... </div>}>
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
      </Suspense>
    );
  }
}
