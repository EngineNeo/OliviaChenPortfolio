import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import LightBox, { Modal, ModalGateway } from "react-images";
// import PropTypes from 'prop-types';

const IMAGES = 
  [
    {
      src: "images/digital illustration/environment/An Opening.jpg",
      thumbnail: "images/digital illustration/IllustrationThumbnail/anopeningThumbnail.jpg",
      thumbnailWidth: "1728",
      thumbnailHeight: "837"
    },
    {
      src: "images/digital illustration/color study.jpg",
      thumbnail: "images/digital illustration/IllustrationThumbnail/colorstudyThumbnail.jpg",
      thumbnailWidth: "1063",
      thumbnailHeight: "1530"
    },
    {
      src: "images/digital illustration/environment/On the way.jpg",
      thumbnail: "images/digital illustration/IllustrationThumbnail/OnTheWayThumbnail.jpg",
      thumbnailWidth: "1632",
      thumbnailHeight: "1056"
    }
  ]

class Illustration extends Component {
  _isMounted = false;

  state = {
    illImages: [],
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {}
  };

  componentDidMount() {
    fetch("portfolioData.json")
        .then(data => data.json())
        .then(data => {
          this.setState({
              illImages: data.images.illustrations,
            })
        })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // togglePropLightbox = (post, selectedIndex) => {
  //   this.setState(state => ({
  //     lightboxIsOpen: !state.lightboxIsOpen,
  //     selectedImage: { title: post.title, index: selectedIndex }
  //   }));
  // };

  render() {
    return (
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <hr/>
        {this.state.loading ? ( // Beginning of Characters
            <div className="text-center">Loading...</div>
          ) : (
            <>
              <Gallery
              images={IMAGES}
              enableLightbox={false}
              enableImageSelection={false}
              rowHeight={300}
              />
  
              {/* <ModalGateway>
                {this.state.characterLBIsOpen ? (
                  <Modal onClose={this.toggleCharacterLightbox}>
                    <LightBox
                      components={{
                        FooterCaption: props => {
                          return (
                            <div>{props.currentView.title}</div>
                          );
                        }
                      }}
                      currentIndex={this.state.selectedCharacter.index}
                      frameProps={{ autoSize: "height" }}
                      views={this.state.imageCharacters}
                    />
                  </Modal>
                ) : null}
              </ModalGateway> */}
            </>
          )}
      </section>
    );
  }
}

export default Illustration