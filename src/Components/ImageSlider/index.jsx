import React, { Component } from 'react'
import './ImageSlider.css';

import InfiniteCarousel from 'react-leaf-carousel';
import LazyLoad from 'react-lazyload';


class ImageSlider extends Component {

    render() {
        const imageListForRendering = this.props.imageList.map((data, i) => {
            return (
                <div className='image-style' key={i}>
                    <LazyLoad height={200} >
                        <img src={data.url} alt={data.title} height="142" width="142" ></img>
                        <label htmlFor="">{data.title.substring(0, 20) + '...'}</label>
                        <p className='image-id' htmlFor="">{`Id: ${data.id}`}</p>
                    </LazyLoad>
                </div>
            );
        });

        return (
            <div className='ImageSlider'>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={6}
                    scrollOnDevice={true}
                >
                    {imageListForRendering}
                </InfiniteCarousel>
            </div>
        )
    }
}

export default ImageSlider