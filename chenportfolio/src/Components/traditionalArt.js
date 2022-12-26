import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';

// The options of the gallery (from the playground current state)
const options = {
  layoutParams: {
      structure: {
          galleryLayout: -1
      },
      groups: {
        groupSize: 1
      },
      targetItemSize: {
        unit: "PIXEL",
        value: 510
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
        clickAction: "MAGNIFY"
    }
  }
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

// The eventsListener will notify you anytime something has happened in the gallery.
const eventsListener = (eventName, eventData) => console.log(); 

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
const scrollingElement = window;

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

    return (
      <section id="traditionalArt">
        <h1 className="main-title">Traditional Art</h1>
        <ProGallery
          domId="traditionalart"
          items={this.state.traditionalwork}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </section>
    );
  }
}

export default TraditionalArt;
