import React, { Component } from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import LightBox, { Modal, ModalGateway } from "react-images";


// const carouselStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "90%",
//   // border: "1rem solid #ffffff",
//   boxShadow: "0px 5px 6px rgba(0, 0, 0, .5)"
// }

const IMAGES = [
  "images/ConceptArt/character/CharacterThumbnails/AhJingThumbnail.jpg",
  "images/ConceptArt/character/CharacterThumbnails/AlexConceptThumbnail.jpg",
  "images/ConceptArt/character/CharacterThumbnails/LapuThumbnail.jpg"
]

class ConceptArt extends Component {
  _isMounted = false;

  // state = {
  //   imageCharacters: [],
  //   imageProps: [],
  //   loading: false,
  //   characterLBIsOpen: false,
  //   propLBIsOpen: false,
  //   selectedCharacter: {},
  //   selectedProp: {}
  // };

  // componentDidMount() {
  //   this._isMounted = true;
  //   console.log("app mounted");
  //   this.setState({ loading: true });
  //   fetch("portfolioData.json")
  //     .then(data => data.json())
  //     .then(data =>
  //       this.setState(
  //         {
  //           imageCharacters: data.images.conceptart.characters.map(item => ({
  //             ...item,
  //             source: item.imageThumbnail
  //           })),
  //           imageProps: data.images.conceptart.props.map(item => ({
  //             ...item,
  //             source: item.imageThumbnail
  //           })),
  //           loading: false
  //         })
  //     );
  // }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  // toggleCharacterLightbox = (post, selectedIndex) => {
  //   this.setState(state => ({
  //     characterLBIsOpen: !state.characterLBIsOpen,
  //     selectedCharacter: { title: post.title, index: selectedIndex },
  //   }));
  // };

  // togglePropLightbox = (post, selectedIndex) => {
  //   this.setState(state => ({
  //     propLBIsOpen: !state.propLBIsOpen,
  //     selectedProp: { title: post.title, index: selectedIndex }
  //   }));
  // };

  render() {

    return (
        <section id="conceptArt">
          <h1 className="main-title">Concept Art</h1>
          <hr/>
          <div id="nanogallery2" data-nanogallery2='{
            "thumbnailHeight":  "auto",
            "thumbnailWidth":   "auto",
            "kind": "nano_photos_provider2",
            "dataProvider": "nano_photos_provider2/nano_photos_provider2.php",
            "contentFolder": "nano_photos_content/ConceptArt/character/ProjectSpaceOpera"'>
          </div>

          {/* <h1 className="main-title">Concept Art</h1>
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
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                responsive={responsive}
              >
                {Object.values(this.state.imageCharacters).map((post, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => this.toggleCharacterLightbox(post, indx)}
                    >
                      <img
                        className="Lightbox"
                        src={post.imageThumbnail}
                        alt="Alt text"
                        style={carouselStyle}
                      />
                      <h4>{post.title}</h4>
                    </div>
                  );
                })}
              </Carousel>
              <ModalGateway>
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
                minimumTouchDrag={80}d
                renderButtonGroupOutside={false}
                renderDotsOutside={true}
                responsive={responsive}
              >
                {Object.values(this.state.imageProps).map((post, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => this.togglePropLightbox(post, indx)}
                    >
                      <img
                        src={post.imageThumbnail}
                        alt="Alt text"
                        style={carouselStyle}
                      />
                      <h4>{post.title}</h4>
                    </div>
                  );
                })}
              </Carousel>
              <ModalGateway>
                {this.state.propLBIsOpen ? (
                  <Modal onClose={this.togglePropLightbox}>
                    <LightBox
                      components={{
                        FooterCaption: props => {
                          return (
                            <div>{props.currentView.title}</div>
                          );
                        }
                      }}
                      currentIndex={this.state.selectedProp.index}
                      frameProps={{ autoSize: "height" }}
                      views={this.state.imageProps}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </>
          )} */}
        </section>
    );
  }
}

export default ConceptArt;