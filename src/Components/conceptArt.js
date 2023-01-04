import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import { Link } from 'react-router-dom';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import AnimatedPage from "./AnimatedPage";

// import PhotoSwipeDynamicCaption from './photoswipe-dynamic-caption-plugin.esm.js';

// The options of the gallery
const options = {
  galleryLayout: -1,
  gallerySize: 50,
  imageHoverAnimation: 'ZOOM_IN',
  itemmClick: 'expand'
};

// The size of the gallery container. The images will fit themselves in it
const container = {
  width: window.innerWidth,
  height: window.innerHeight
};

class ConceptArt extends Component {
  _isMounted = false;

  state = {
    conceptArt: [],
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
            conceptArt: data.images.conceptart.main_ca.map(item => ({
              ...item
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
        <div className="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

      // const customImageRenderer = (imageProps) =>
      // (
      //   <div>
      //     <img
      //     alt={imageProps.alt}
      //     style={{
      //       width: imageProps.style.width,
      //       height: imageProps.style.height
      //     }}
      //     src={imageProps.src}
      //     />
      //   </div >
      // );

    const psoptions = {
      dataSource: this.state.conceptArt.map(({ mediaUrl, metaData }) => {
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

    return (
      <AnimatedPage>
        <section id="conceptArt">

          <h1 className="main-title">Concept Art</h1>
          <ProGallery
            domId="conceptart"
            items={this.state.conceptArt}
            options={options}
            container={container}
            eventsListener={eventsListener}
            customHoverRenderer={customInfoRenderer}
            // customImageRenderer={customImageRenderer}
          />

          <Link to="/moreCA" basename={process.env.PUBLIC_URL}>
              <button className="cool-button">See More</button>
          </Link>

        </section>
        </AnimatedPage>
    );
  }
}

export default ConceptArt;