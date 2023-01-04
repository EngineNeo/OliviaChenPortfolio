import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

// The options of the gallery
const options = {
  galleryLayout: -1,
  gallerySize: 50,
  imageHoverAnimation: 'ZOOM_IN',
  groupSize: 2,
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};
class Study extends Component {
  _isMounted = false;

  state = {
    studies: [],
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
            studies: data.images.study.map(item => ({
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
      dataSource: this.state.studies.map(({ mediaUrl, metaData }) => {
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

   return(
   <section id="study">
    <h1 className="main-title">Study</h1>
    <ProGallery
      domId="study"
      items={this.state.studies}
      options={options}
      container={container}
      eventsListener={eventsListener}
      customHoverRenderer={customInfoRenderer}
    />
   </section>
   )
  }
}

export default Study;
