import React, { Component } from 'react';
// import Gallery from 'react-grid-gallery';
// import LightBox, { Modal, ModalGateway } from "react-images";
// import { Container, Row, Col } from 'react-grid-system';

// var IMAGES = 
//   [
//     {id: 4, src: "images/digital illustration/IllustrationThumbnail/StilllifeThumbnail.jpg"},
//     {id: 1, src: "images/digital illustration/IllustrationThumbnail/anopeningThumbnail.jpg"},
//     {id: 3, src: "images/digital illustration/IllustrationThumbnail/OnTheWayThumbnail.jpg"},
//     {id: 2, src: "images/digital illustration/IllustrationThumbnail/colorstudyThumbnail.jpg"},
//   ];

// IMAGES = IMAGES.map(function(item) {
//   return (
//     <React.Fragment key={item.id}>
//         <img key={item.id} src={item.src} alt="Illustration"/>
//     </React.Fragment>
//   )
// });

class Illustration extends Component {
  _isMounted = false;

  state = {
    illustrations: [],
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {}
  };

  componentDidMount() {
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

  toggleLightbox = (post, selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { title: post.title, index: selectedIndex }
    }));
  };


  render() {
    if(this.props.data){
      var thumbnail1 = this.props.data.illustrations[0].thumbnail
      var thumbnail2 = this.props.data.illustrations[1].thumbnail
      
      var title1 = this.props.data.illustrations[0].title
      var title2 = this.props.data.illustrations[1].title
    }

    return (
      <section id="illustration">
        <h1 className="main-title">Illustrations</h1>
        <hr/>
        {/* {this.state.loading ? ( // Beginning of Characters
            <div className="text-center">Loading...</div>
          ) : (
            <>
            <Container fluid>
              <Row justify="center" style={{marginTop: "150px"}}>
                <Col md={6}><img 
                className="Lightbox"
                src={thumbnail1} 
                alt="illustration"
                key={0}
                style={{boxShadow: "0px 3px 4px rgba(0, 0, 0, .5)"}}
                onClick={() => this.toggleLightbox(this.props.data.illustrations[0], 0)}/>
                <h4 className='hoverText'>{title1}</h4>
                </Col>
                <Col md={4.5}><img 
                className="Lightbox"
                src={thumbnail2} 
                alt="illustration"
                key={1}
                style={{boxShadow: "0px 3px 4px rgba(0, 0, 0, .5)"}}
                onClick={() => this.toggleLightbox(this.props.data.illustrations[1], 1)}/>
                <h4 className='hoverText'>{title2}</h4>
                </Col>
              </Row>
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
                      views={this.state.illustrations}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </Container>
            </>
          )} */}
      </section>
    );
  }
}

export default Illustration