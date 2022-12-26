import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

// The options of the gallery
const options = {
  galleryLayout: -1,
  gallerySize: 50,
  imageHoverAnimation: 'ZOOM_IN',
  groupSize: 2,
};

// The size of the gallery container. The images will fit themselves in it
const container = {
width: window.innerWidth,
height: window.innerHeight
};
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

    const customInfoRenderer = (itemProps) =>
      (
        <div class="hover-info-title">
          <h5>{itemProps.title}</h5>
        </div>
      );

    const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

   return(
   <section id="study">
    <h1 className="main-title">Study</h1>
    <ProGallery
      domId="study"
      items={this.state.studies}
      options={options}
      container={container}
      eventsListener={eventsListener}
      customHoverRenderer={customInfoRenderer}
    />
   </section>
   )
  }
}

export default Study;
