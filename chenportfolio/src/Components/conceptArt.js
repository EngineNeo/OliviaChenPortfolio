import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import { Link } from 'react-router-dom';

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
            hoverAnimation: "EXPAND"
        },
        // content: {
        //   hoverAnimation: "ZOOM_IN"
        // },
    }
  }
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
        <div class="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

    const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });
  
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
          />
          
          <Link to="/moreCA">
              <button className="cool-button">See More</button>
          </Link>
          
            {/* <Gallery

            rowHeight={100}
            enableLightbox={false}
            enableImageSelection={false}
            >
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