import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import { Link } from 'react-router-dom';
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

const psoptions = {
  dataSource: [

    // simple image
    {
      src: 'https://source.unsplash.com/Volo9FYUAzU/1620x1080',
      width: 1620,
      height: 1080,
      alt: 'test image 1'
    },

    {
      src: 'https://source.unsplash.com/RJzHlbKf6eY/1950x1300',
      width: 1950,
      height: 1300,
      alt: 'test image 2'
    },

    // responsive image
    {
      srcset: 'https://dummyimage.com/1500x1000/555/fff/?text=1500x1000 1500w, https://dummyimage.com/1200x800/555/fff/?text=1200x800 1200w, https://dummyimage.com/600x400/555/fff/?text=600x400 600w',
      src: 'https://dummyimage.com/1500x1000/555/fff/?text=1500x1000',
      width: 1500,
      height: 1000,
      alt: 'test image 3',
    },

    // HTML slide
    {
      html: '<div class="custom-html-slide">This is custom HTML slide. <a href="http://example.com" target="_blank" rel="nofollow">Test Link</a>.</div>'
    }

  ],
  showHideAnimationType: 'none',
  pswpModule: () => import('./photoswipe.esm.js'),
};
const lightbox = new PhotoSwipeLightbox(psoptions);
lightbox.init();

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

      const customImageRenderer = (imageProps) =>
      (
        <div>
          <img
          alt={imageProps.alt}
          style={{
            width: imageProps.style.width,
            height: imageProps.style.height
          }}
          src={imageProps.src}
          />
        </div >
      );

    const eventsListener = (eventName, eventData) =>
    console.log({eventName, eventData});

    // const imageContainer = document.getElementsByClassName("gallery-item-hover-inner")
    // imageContainer[0].onclick = function(){lightbox.loadAndOpen(0)};
      
    return (
        <section id="conceptArt">

          <h1 className="main-title">Concept Art</h1>
          <ProGallery
            domId="conceptart"
            items={this.state.conceptArt}
            options={options}
            container={container}
            eventsListener={eventsListener}
            customHoverRenderer={customInfoRenderer}
            customImageRenderer={customImageRenderer}
          />

          <Link to="/moreCA">
              <button className="cool-button">See More</button>
          </Link>

        </section>

    );
  }
}

export default ConceptArt;