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
        value: 355
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

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

// The eventsListener will notify you anytime something has happened in the gallery.
const eventsListener = (eventName, eventData) => console.log(); 

// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
const scrollingElement = window;

class Illustration extends Component {
  _isMounted = false;

  state = {
    illustrations: [],
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
            illustrations: data.images.illustrations.map(item => ({
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
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <ProGallery
          id="illustration"
          items={this.state.illustrations}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
          />
      </section>
    );
  }
}

export default Illustration