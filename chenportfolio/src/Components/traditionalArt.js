import React, { Component } from 'react';

class TraditionalArt extends Component {
  _isMounted = false;

  state = {
    traditionalwork: [],
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
          traditionalwork: data.images.traditionalwork.map(item => ({
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
    // if(this.props.data){
    //   var thumbnail1 = this.props.data.traditionalwork[0].thumbnail
    //   var thumbnail2 = this.props.data.traditionalwork[1].thumbnail
    //   var thumbnail3 = this.props.data.traditionalwork[2].thumbnail
      
    //   var title1 = this.props.data.traditionalwork[0].title
    //   var title2 = this.props.data.traditionalwork[1].title
    //   var title3 = this.props.data.traditionalwork[2].title
    // }

    return (
      <section id="traditionalArt">
        <h1 className="main-title">Traditional Art</h1>
        <hr/>
        {/* {this.state.loading ? ( // Beginning of Characters
            <div className="text-center">Loading...</div>
          ) : (
            <>
            <Container fluid>
              <Row justify="center" style={{marginTop: "100px"}}>
                <Col md={4}><img 
                src={thumbnail1} 
                alt="illustration"
                key={0}
                style={{boxShadow: "0px 3px 4px rgba(0, 0, 0, .5)"}}
                onClick={() => this.toggleLightbox(this.props.data.traditionalwork[0], 0)}/>
                <h4 className='hoverText'>{title1}</h4>
                </Col>
                <Col md={3.1}><img 
                src={thumbnail2} 
                alt="illustration"
                key={1}
                style={{boxShadow: "0px 3px 4px rgba(0, 0, 0, .5)"}}
                onClick={() => this.toggleLightbox(this.props.data.traditionalwork[1], 1)}/>
                <h4 className='hoverText'>{title2}</h4>
                </Col>
                <Col md={2.91}><img 
                src={thumbnail3} 
                alt="illustration"
                key={1}
                style={{boxShadow: "0px 3px 4px rgba(0, 0, 0, .5)"}}
                onClick={() => this.toggleLightbox(this.props.data.traditionalwork[2], 2)}/>
                <h4 className='hoverText'>{title3}</h4>
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
                      views={this.state.traditionalwork}
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

export default TraditionalArt;
