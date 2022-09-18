import React, { Component } from 'react';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const items = [
  { // Image item:
    itemId: '1',
    mediaUrl: '/images/studies/studyThumbnails/Still_Life.jpg',
    metaData: {
      type: 'image',
      height: 2967,
      width: 1920,
      title: 'sample-title',
      description: 'sample-description',
    }
  },
  { // Another Image item:
    itemId: '2',
    mediaUrl: '/images/studies/studyThumbnails/A_Man.jpg',
    metaData: {
      type: 'image',
      height: 1242,
      width: 1920,
      title: 'sample-title',
      description: 'sample-description',
    },
  },
  { // Image item:
    itemId: '3',
    mediaUrl: '/images/studies/studyThumbnails/ColorStudy2.jpg',
    metaData: {
      type: 'image',
      height: 1116,
      width: 1579,
      title: 'sample-title',
      description: 'sample-description',
    }
  },
  { // Image item:
    itemId: '4',
    mediaUrl: '/images/studies/studyThumbnails/ColorStudy1.jpg',
    metaData: {
      type: 'image',
      height: 1530,
      width: 1063,
      title: 'sample-title',
      description: 'sample-description',
    }
  },
  { // Image item:
    itemId: '5',
    mediaUrl: '/images/studies/studyThumbnails/BruceLee.jpg',
    metaData: {
      type: 'image',
      height: 1740,
      width: 1740,
      title: 'sample-title',
      description: 'sample-description',
    }
  },
  { // Image item:
    itemId: '6',
    mediaUrl: '/images/studies/studyThumbnails/15feet.jpg',
    metaData: {
      type: 'image',
      height: 825,
      width: 1275,
      title: 'sample-title',
      description: 'sample-description',
    }
  },
]

// The options of the gallery (from the playground current state)
const options = {
    layoutParams: {
        structure: {
            galleryLayout: -1
        },
        targetItemSize: {
          minimum: 6,
          unit: "PIXEL",
          value: 750
      },
        groups: {
            groupSize: 2
        }
    },
    behaviourParams: {
        item: {
            overlay: {
                position: "CENTERED_HORIZONTALLY",
            },
            clickAction: "ACTION"
        }
    }
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
        </section>
        
    );
  }
}

export default ConceptArt;