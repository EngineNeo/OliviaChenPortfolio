import React, { Component } from 'react';
// import Gallery from 'react-grid-gallery';
import LightBox, { Modal, ModalGateway } from "react-images";
import Masonry from 'react-masonry-css'
// import PropTypes from 'prop-types';

var IMAGES = 
  [
      {id: 1, image: "images/digital illustration/IllustrationThumbnail/anopeningThumbnail.jpg"},
      {id: 2, image: "images/digital illustration/IllustrationThumbnail/colorstudyThumbnail.jpg"},
      {id: 3, image: "images/digital illustration/IllustrationThumbnail/OnTheWayThumbnail.jpg"},
      {id: 4, image: "images/digital illustration/IllustrationThumbnail/StilllifeThumbnail.jpg"},
  ];

  IMAGES = IMAGES.map(function(item) {
    return <img key={item.id} src={item.image} alt="Digital Illustration"/>
  });

class Illustration extends Component {
  _isMounted = false;

  state = {
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {}
  };

  toggleLightbox = (post, selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { title: post.title, index: selectedIndex }
    }));
  };

  render() {
    return (
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <hr/>
        {this.state.loading ? ( // Beginning of Characters
            <div className="text-center">Loading...</div>
          ) : (
            <>
                <Masonry
                breakpointCols={1}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {IMAGES}
                </Masonry>
              <ModalGateway>
                {this.state.lightboxisOpen ? (
                  <Modal onClose={this.toggleLightbox}>
                    <LightBox
                      components={{
                        FooterCaption: props => {
                          return (
                            <div>{props.currentView.title}</div>
                          );
                        }
                      }}
                      currentIndex={this.state.selectedImage.index}
                      frameProps={{ autoSize: "height" }}
                      views={this.state.illImages}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )}
      </section>
    );
  }
}

export default Illustration