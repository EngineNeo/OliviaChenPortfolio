import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';

// The options of the gallery (from the playground current state)
const options = {
    layoutParams: {
        structure: {
            galleryLayout: -1
        },
        targetItemSize: {
          unit: "PIXEL",
          value: 450
      }
    },
    behaviourParams: {
        // gallery: {
        //   layoutDirection: "RIGHT_TO_LEFT"
        // },
        item: {
            overlay: {
                position: "CENTERED_HORIZONTALLY",
            },
            content: {
              hoverAnimation: "ZOOM_IN"
            },
            clickAction: "MAGNIFY"
        }
    }
};

// Custom Hover Renderer
const customHoverRenderer = (itemProps) => (
  <div>
      <p>{itemProps.title}</p>
      <p>{itemProps.description}</p>
  </div>
);

// The size of the gallery container. The images will fit themselves in it
const container = {
  width: window.innerWidth,
  height: window.innerHeight
};

// The eventsListener will notify you anytime something has happened in the gallery.
// const eventsListener = (eventName, eventData) => console.log(); 

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
// const scrollingElement = window;

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
    return (
        <section id="conceptArt">

          <h1 className="main-title">Concept Art</h1>
          <ProGallery
            items={this.state.conceptArt}
            options={options}
            container={container}
            customHoverRenderer={customHoverRenderer}
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