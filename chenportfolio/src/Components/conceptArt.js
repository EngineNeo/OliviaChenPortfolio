import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LightBox, { Modal, ModalGateway } from "react-images";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

const carouselStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  // border: "1rem solid #ffffff",
  boxShadow: "0px 5px 6px rgba(0, 0, 0, .5)"
}

class ConceptArt extends Component {
  _isMounted = false;

  state = {
    imageCharacters: [],
    imageProps: [],
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {}
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
            imageCharacters: data.images.conceptart.characters.map(item => ({
              ...item,
              source: item.imageThumbnail
            })),
            imageProps: data.images.conceptart.props.map(item => ({
              ...item,
              source: item.imageThumbnail
            })),
            loading: false
          },
          () => console.log(data)
        )
      );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleLightbox = (post, selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { title: post.title, index: selectedIndex }
    }));
  };

  render() {

    return (
        <section id="conceptArt">
          <h1 className="main-title">Concept Art</h1>
          <h2>Characters</h2>
          <hr/>
          {this.state.loading ? ( // Beginning of Characters
            <div className="text-center">Loading...</div>
          ) : (
            <>
              <Carousel
                additionalTransfrom={0}
                showDots={false}
                arrows={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                centerMode={true}
                draggable={false}
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                responsive={responsive}
              >
                {Object.values(this.state.imageCharacters).map((post, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => this.toggleLightbox(post, indx)}
                    >
                      <img
                        src={post.imageThumbnail}
                        alt="Alt text"
                        style={carouselStyle}
                      />
                    </div>
                  );
                })}
              </Carousel>
              <ModalGateway>
                {this.state.lightboxIsOpen ? (
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
                      views={this.state.imageCharacters}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )}
          <h2>Props</h2>
          <hr/>
          {this.state.loading ? ( // Beginning of Props
            <div className="text-center">Loading...</div>
          ) : (
            <>
              <Carousel
                additionalTransfrom={0}
                showDots={false}
                arrows={true}
                autoPlaySpeed={5000}
                autoPlay={true}
                centerMode={true}
                draggable={false}
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                responsive={responsive}
              >
                {Object.values(this.state.imageProps).map((post, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => this.toggleLightbox(post, indx)}
                    >
                      <img
                        src={post.imageThumbnail}
                        alt="Alt text"
                        style={carouselStyle}
                      />
                    </div>
                  );
                })}
              </Carousel>
              <ModalGateway>
                {this.state.lightboxIsOpen ? (
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
                      views={this.state.imageProps}
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

export default ConceptArt;