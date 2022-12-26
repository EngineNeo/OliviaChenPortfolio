import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';

// The options of the gallery
const options = {
  galleryLayout: -1,
  gallerySize: 50,
  imageHoverAnimation: 'ZOOM_IN',
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};

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

    const customInfoRenderer = (itemProps) =>
      (
        <div class="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

    const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });
  

    return (
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <ProGallery
          domId="illustration"
          items={this.state.illustrations}
          options={options}
          container={container}
          eventsListener={eventsListener}
          customHoverRenderer={customInfoRenderer}
          />
      </section>
    );
  }
}

export default Illustration