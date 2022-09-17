import React, { Component } from 'react';
// import 'photoswipe/dist/photoswipe.css' 
// import { Gallery, Item } from 'react-photoswipe-gallery'

// import Gallery from 'react-grid-gallery';
// import LightBox, { Modal, ModalGateway } from "react-images";

// const IMAGES =
// [      {
//   "original": "images/studies/Stilllife.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/stilllifeThumbnail.jpg",
//   "thumbnailWidth": 1920,
//   "thumbnailHeight": 2967,
//   "title": "Study - Still Life"
// },
// {
//   "original": "images/studies/color.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/colorcopy.jpg",
//   "thumbnailWidth": 1579,
//   "thumbnailHeight": 1116,
//   "title": "Study - Color Study 1"
// },
// {
//   "original": "images/studies/colorstudy.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/colorstudyThumbnail.jpg",
//   "thumbnailWidth": 1063,
//   "thumbnailHeight": 1530,
//   "title": "Study - Color Study 2"
// },
// {
//   "original": "images/studies/A Man.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/A Man.jpg",
//   "thumbnailWidth": 1920,
//   "thumbnailHeight": 1242,
//   "title": "Study - A Man"
// },
// {
//   "original": "images/studies/.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/brucelee.jpg",
//   "thumbnailWidth": 1740,
//   "thumbnailHeight": 1740,
//   "title": "Study - Bruce Lee"
// },
// {
//   "original": "images/studies/15feet.jpg",
//   "thumbnail": "/images/studies/studyThumbnails/15feet.jpg",
//   "thumbnailWidth": 5100,
//   "thumbnailHeight": 3300,
//   "title": "Study - 15 Feet"
// }
// ]

class Study extends Component {
  state = {
    studies: [],
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
          studies: data.images.studies.map(item => ({
            ...item,
            source: item.thumbnail
          })),
          loading: false
        }, () => console.log(data.studies))
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
      var studyGallery = this.props.data.studies
    }
   return(
   <section id="study">
    <h1 className="main-title">Study</h1>
    <hr/>
    {/* <Gallery>
    {Object.values(this.state.studies).map((post) => {
      var original = post.original;
                  return (
                    <div>
                      <Item
                        original={original}
                        thumbnail={post.thumbnail}
                        width={post.width}
                        height={post.height}
                      >
                        {({ ref, open }) => (
                          <img className="imageItem" ref={ref} onClick={open} src={post.thumbnail} />
                        )}
                      </Item>
                    </div>
                      
                  );
                })}
  </Gallery> */}


    {/* <div style={{
                    display: "block",
                    minHeight: "1px",
                    border: "1px solid #ddd",
                    overflow: "auto"}}>
      <Gallery
        images={IMAGES}
        rowHeight={300}
        enableLightbox={false}
        enableImageSelection={false}
      />
    </div> */}
                {/* <ModalGateway>
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
              </ModalGateway> */}
   </section>
   )
  }
}

export default Study;
