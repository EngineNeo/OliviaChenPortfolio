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
  objectFit: "cover",
  width: "35em",
  height: "35em",
  boxShadow: "1px 0px 1px 2px black"
}

class ConceptArt extends Component {
  _isMounted = false;

  state = {
    imageData: [],
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {}
  };

  componentDidMount() {
    this._isMounted = true;
    console.log("app mounted");
    this.setState({ loading: true });
    // fetch("https://onelbip0e6.execute-api.eu-west-2.amazonaws.com/xxxxx")
    fetch("portfolioData.json")
      .then(data => data.json())
      .then(data =>
        // this.setState({ imageData: data[0], loading: false }, () =>
        this.setState(
          {
            // imageData: data.map(item => ({source: item.download_url })),
            imageData: data.images.conceptart.map(item => ({
              ...item,
              source: item.imageSource
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
    // this.setState(state => ({
    //   lightboxIsOpen: !state.lightboxIsOpen,
    //   selectedIndex
    // }));
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
          {this.state.loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <>
              <Carousel
                additionalTransfrom={0}
                showDots={false}
                arrows={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                centerMode={false}
                className="slider"
                containerClass="container-with-dots"
                dotListClass="dots"
                draggable
                focusOnSelect={false}
                infinite
                itemClass="carousel-top"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={responsive}
              >
                {Object.values(this.state.imageData).map((post, indx) => {
                  return (
                    <div
                      className="mt-5"
                      key={indx}
                      // onClick={() => this.toggleLightbox(indx)}
                      onClick={() => this.toggleLightbox(post, indx)}
                    >
                      <img
                        className="media-img card-img-top card-img-hero"
                        src={post.imageSource}
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
                            // <div>shot by - {this.state.selectedImage.author}</div>
                            <div>{props.currentView.title}</div> // this displays correct dynamic author
                          );
                        }
                      }}
                      // currentIndex={this.state.selectedIndex}
                      currentIndex={this.state.selectedImage.index}
                      // formatters={{ getAltText }}
                      frameProps={{ autoSize: "height" }}
                      views={this.state.imageData}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )}
          <h2>Props</h2>
          <hr/>
        </section>
    );
  }
}

export default ConceptArt;