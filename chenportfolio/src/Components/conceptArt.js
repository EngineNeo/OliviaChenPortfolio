import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const Images = 
[ // Seaside Cafe
  ["./images/concept_art/character/Project_Seaside_Cafe/Ikeya.jpg",
  "./images/concept_art/character/Project_Seaside_Cafe/Mina.jpg"
], [ // Space Opera
  "./images/concept_art/character/project_space_opera/Dida.jpg",
  "./images/concept_art/character/project_space_opera/Kun.jpg",
  "./images/concept_art/character/project_space_opera/Lapu.jpg",
  "./images/concept_art/character/project_space_opera/Mudan.jpg"
], [ // Spaceship Raccoon
  "./images/concept_art/character/project_ship_raccoon/M13_AlexConcept_Chen.jpg",
  "./images/concept_art/character/project_ship_raccoon/M13_NiniConcept_Chen.jpg"
], [ // Robot
  "./images/concept_art/character/robot/AhJing.jpg",
  "./images/concept_art/character/robot/chowchow.jpg",
  "./images/concept_art/character/robot/Yuan.jpg"
]]

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
  constructor(props) {
    super(props);

    this.state = {
      subImageIndex: 0,
      imageIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { subImageIndex,
            imageIndex,
            isOpen } = this.state;

    return (
        <section id="conceptArt">
            <h1 class="main-title">Concept Art</h1>
            <hr/>
            <h2>Project Seaside Cafe</h2>
            <div className="row">
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                  imageIndex: 0, 
                                                  subImageIndex: 0})}
                  onmouseover={() => this.setState}
                  src={Images[0][0]}
                  alt="Seaside Cafe - Ikeya"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                imageIndex: 0, 
                                                subImageIndex: 1})}
                  onmouseover={() => this.setState}
                  src={Images[0][1]}
                  alt="Seaside Cafe - Mina"
                />
              </div>
            </div>
            <hr/>
            <h2>Project Space Opera</h2>
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
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
              <img
                onClick={() => this.setState({isOpen: true, 
                                              imageIndex: 1, 
                                              subImageIndex: 0})}
                onmouseover={() => this.setState}
                src={Images[1][0]}
                alt="Space Opera - Dida"
                style={carouselStyle}
              />
              <img
                onClick={() => this.setState({isOpen: true, 
                                              imageIndex: 1, 
                                              subImageIndex: 1})}
                onmouseover={() => this.setState}
                src={Images[1][1]}
                alt="Space Opera - Kun"
                style={carouselStyle}
              />
              <img
                onClick={() => this.setState({isOpen: true, 
                                              imageIndex: 1, 
                                              subImageIndex: 2})}
                onmouseover={() => this.setState}
                src={Images[1][2]}
                alt="Space Opera - Lapu"
                style={carouselStyle}
              />
              <img
                onClick={() => this.setState({isOpen: true, 
                                              imageIndex: 1, 
                                              subImageIndex: 3})}
                onmouseover={() => this.setState}
                src={Images[1][3]}
                alt="Space Opera - Mudan"
                style={carouselStyle}
              />
            </Carousel>
          <hr/>
          <h2>Project Spaceship Raccoon</h2>
            <div className="row">
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                  imageIndex: 2, 
                                                  subImageIndex: 0})}
                  onmouseover={() => this.setState}
                  src={Images[2][0]}
                  alt="Spaceship Raccoon - Alex"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                imageIndex: 2, 
                                                subImageIndex: 1})}
                  onmouseover={() => this.setState}
                  src={Images[2][1]}
                  alt="Spaceship Raccoon - Nini"
                />
              </div>
            </div>
          <hr/>
          <h2>Project Gems of China</h2>
            <div className="row">
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                  imageIndex: 3, 
                                                  subImageIndex: 0})}
                  onmouseover={() => this.setState}
                  src={Images[3][0]}
                  alt="Robot - Ah Jing"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                imageIndex: 3, 
                                                subImageIndex: 1})}
                  onmouseover={() => this.setState}
                  src={Images[3][1]}
                  alt="Robot - Chow Chow"
                />
              </div>
              <div className="column">
                <img
                  onClick={() => this.setState({isOpen: true, 
                                                imageIndex: 3, 
                                                subImageIndex: 2})}
                  onmouseover={() => this.setState}
                  src={Images[3][2]}
                  alt="Robot - Chow Chow"
                />
              </div>
            </div>
          {isOpen && (
            <Lightbox
              mainSrc={Images[imageIndex][subImageIndex]}
              onCloseRequest={() => this.setState({ isOpen: false })}
            />
          )}
        </section>
    );
  }
}

export default ConceptArt;