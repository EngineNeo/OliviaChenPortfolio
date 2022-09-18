import React, { Component } from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const items = [
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
    metaData: {
      type: 'image',
      height: 200,
      width: 100,
      title: 'sample-title',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // Another Image item:
    itemId: 'differentItem',
    mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
    metaData: {
      type: 'image',
      height: 200,
      width: 100,
      title: 'sample-title',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // HTML item:
    itemId: 'htmlItem',
    html: "<div style='width: 300px; height: 200px; background:pink;'>I am a text block</div>",
    metadata: {
      type: "text",
      height: 200,
      width: 300,
      title: 'sample-title',
      description: 'sample-description',
      backgroundColor: 'pink'
    },

  },
]

// The options of the gallery (from the playground current state)
const options = {
  galleryLayout: -1,
};

// The size of the gallery container. The images will fit themselves in it
const container = {
  width: window.innerWidth,
  height: window.innerHeight
};

// The eventsListener will notify you anytime something has happened in the gallery.
const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
const scrollingElement = window;

class ConceptArt extends Component {
  _isMounted = false;

  state = {
    studies: [],
    loading: false,
  };

  componentDidMount() {
    this._isMounted = true;
    console.log("app mounted");
    this.setState({ loading: true });
    fetch("portfolioData.json")
      .then(data => data.json())
      .then(data =>
        this.setState(
          {
            studies: data.images.studies.map(item => ({
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
    return (
        <section id="conceptArt">

          <h1 className="main-title">Concept Art</h1>
          <div className="container">
          <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
            {/* <Gallery

            rowHeight={100}
            enableLightbox={false}
            enableImageSelection={false}>
              {Object.values(this.state.studies).map((post, divKey) => {
                      return (
                        <div key={divKey}>
                          <Item
                            original={post.original}
                            thumbnail={post.thumbnail}
                            width={post.width}
                            height={post.height}
                          >
                            {({ ref, open }) => (
                              <img className="imageItem" 
                              ref={ref} 
                              onClick={open}
                              src={post.thumbnail}
                              alt="Concept Art" />
                            )}
                          </Item>
                        </div>
                      );
                    })}
            </Gallery> */}
          </div>
        </section>
        
    );
  }
}

export default ConceptArt;