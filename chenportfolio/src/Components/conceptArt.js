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
}

const carouselStyle = {
  display: 'block',
  height: '100%',
  paddingLeft: '1em',
  paddingRight: '1em',
  width: '100%',
}

class ConceptArt extends Component {
  _isMounted = false;

  state = {
    characterImages: [],
    loading: false,
    lightboxIsOpen: false,
    // selectedIndex: 0,
    selectedImage: {}
  };

  componentDidMount() {
    if(this.props.data){
      var caimages= this.props.data.conceptart;
      }
    this._isMounted = true;
    console.log("app mounted");
    console.log(caimages)
    this.setState({ loading: true });
    fetch(caimages)
      .then(data => data.json())
      .then(data =>
        this.setState(
          {
            characterImages: data.map(item => ({
              ...item,
              source: item.src
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
            <h2>Props</h2>
            <hr/>
            <>
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                autoPlay
                centerMode={false}
                draggable={false}
                containerClass="container-with-dots"
                focusOnSelect={false}
                infinite
                minimumTouchDrag={80}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={1}
              >
                {Object.values(this.state.characterImages).map((post, indx) => {
                  return (
                    <div
                      className="mt-5"
                      key={indx}
                      // onClick={() => this.toggleLightbox(indx)}
                      onClick={() => this.toggleLightbox(post, indx)}
                    >
                      <img
                        src='./images/concept_art/character/Project_Seaside_Cafe/Ikeya.jpg'
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
                      views={this.state.characterImages}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
        </section>
    );
  }
}

export default ConceptArt;