import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

// The options of the gallery
const options = {
  galleryLayout: 1,
  gallerySize: 50,
  imageHoverAnimation: 'ZOOM_IN',
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

class Illustration extends Component {
  _isMounted = false;

  state = {
    illustrations: [],
    loading: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ loading: true });
    fetch("portfolioData.json")
      .then(data => data.json())
      .then(data =>
        this.setState(
          {
            illustrations: data.images.illustrations.map(item => ({
              ...item,
              source: item.thumbnail
            })),
            loading: false
          })
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {

    const customInfoRenderer = (itemProps) =>
      (
        <div class="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

    const psoptions = {
      dataSource: this.state.illustrations.map(({ mediaUrl, metaData }) => {
        const { height, width, title, description } = metaData;
        return {
          src: mediaUrl,
          width: width,
          height: height,
          alt: title,
          description: description
        };
      }),
      showHideAnimationType: 'none',
      pswpModule: () => import('./photoswipe.esm.js'),
    };

    const lightbox = new PhotoSwipeLightbox(psoptions);

    // const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    //   // Plugins options, for example:
    //   type: 'auto',
    // });

    const eventsListener = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx)
      }
    }

    return (
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <ProGallery
          domId="illustration"
          items={this.state.illustrations}
          options={options}
          container={container}
          eventsListener={eventsListener}
          customHoverRenderer={customInfoRenderer}
          />
      </section>
    );
  }
}

export default Illustration