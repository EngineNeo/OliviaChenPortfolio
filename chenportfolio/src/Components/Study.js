import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

// The options of the gallery (from the playground current state)
const options = {
  layoutParams: {
      structure: {
          galleryLayout: -1
      },
      targetItemSize: {
        unit: "PIXEL",
        value: 470
    },
      groups: {
          groupSize: 2
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
   return(
   <section id="study">
    <h1 className="main-title">Study</h1>
    <ProGallery
      id="study"
      items={this.state.studies}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
   </section>
   )
  }
}

export default Study;
