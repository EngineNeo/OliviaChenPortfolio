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
    modeling: [],
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
            modeling: data.images.modeling.map(item => ({
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
      dataSource: this.state.modeling.map(({ mediaUrl, metaData }) => {
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
      } else {
        console.log('The event name is not ITEM_CLICKED');
      }
    }

   return(
   <section id="modeling">
    <h1 className="main-title">3-D Modeling</h1>
    <ProGallery
      domId="modeling"
      items={this.state.modeling}
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
