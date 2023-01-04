import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

// The options of the gallery
const options = {
    galleryLayout: 1,
    gallerySize: 80,
    imageHoverAnimation: 'ZOOM_IN'
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

class TraditionalArt extends Component {
  _isMounted = false;

  state = {
    traditionalwork: [],
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
            traditionalwork: data.images.traditionalwork.map(item => ({
              ...item,
              source: item.thumbnail
            })),
            loading: false
          })
      );
  }

  render() {

    const customInfoRenderer = (itemProps) =>
      (
        <div class="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

    const psoptions = {
      dataSource: this.state.traditionalwork.map(({ mediaUrl, metaData }) => {
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
      <section id="traditionalArt">
        <h1 className="main-title">Traditional Art</h1>
        <ProGallery
          domId="traditionalart"
          items={this.state.traditionalwork}
          options={options}
          container={container}
          eventsListener={eventsListener}
          customHoverRenderer={customInfoRenderer}
        />
      </section>
    );
  }
}

export default TraditionalArt;
