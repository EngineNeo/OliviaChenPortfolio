import React, { Component } from 'react';
import { ProGallery } from 'pro-gallery';
import {animateScroll as scroll, scroller } from 'react-scroll'
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';
import AnimatedPage from "./AnimatedPage";

const logo = "images/logo/logo_white.png"

// The options of the gallery (from the playground current state)
const options = {
    structure: {
        galleryLayout: -1
    },
        randomScatter: 300,
    targetItemSize: {
      unit: "PIXEL",
      value: 375
  },
  imageHoverAnimation: 'ZOOM_IN',
};

const options2 = {
  layoutParams: {
      structure: {
          galleryLayout: -1
      },
      groups: {
        groupSize: 2
      },
      targetItemSize: {
        unit: "PIXEL",
        value: 515
    }
  },
  imageHoverAnimation: 'ZOOM_IN',
};

// The size of the gallery container. The images will fit themselves in it
const container = {
  width: window.innerWidth,
  height: window.innerHeight
};

class moreCA extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

 scrollToTop() {
    scroll.scrollToTop({
       duration: 1000,
       delay: 0,
       smooth: 'easeInOutQuart'
    });
  }

 scrollTo(pageRef) {
  scroller.scrollTo(pageRef, {
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart'
  })
}

  _isMounted = false;

  state = {
    gemsofchina: [],
    spaceopera: [],
    firstgdc: [],
    seasidecafe: [],
    shipraccoon: [],
    header: [],
    
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await fetch("portfolioData.json");
    const jsonData = await data.json();
    const conceptart = jsonData.images.conceptart;
    const newArrays = {};

    Object.keys(conceptart).forEach(key => {
    newArrays[key] = conceptart[key].map(item => ({ ...item }));
    });
    this.setState({
      ...newArrays
    });
  }

  render() {

    const customInfoRenderer = (itemProps) =>
    (
      <div class="hover-info-title">
        <h5>{itemProps.title}</h5>
      </div>
    );

    const mapImageData = (imageArray) => {
      return imageArray.map(({ mediaUrl, metaData }) => {
        const { height, width, title, description } = metaData;
        return {
          src: mediaUrl,
          width: width,
          height: height,
          alt: title,
          description: description
        };
      });
    }
    
    const psoptions = {
      dataSource: [
        ...mapImageData(this.state.gemsofchina),
        ...mapImageData(this.state.spaceopera),
        ...mapImageData(this.state.firstgdc),
        ...mapImageData(this.state.seasidecafe),
        ...mapImageData(this.state.shipraccoon),
      ],
      showHideAnimationType: 'none',
      pswpModule: () => import('./photoswipe.esm.js'),
    };
    const lightbox = new PhotoSwipeLightbox(psoptions);

    // const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    //   // Plugins options, for example:
    //   type: 'auto',
    // });

    const eventsListener1 = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx)
      }
    }
    const eventsListener2 = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx + 16)
      }
    }
    const eventsListener3 = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx + 20)
      }
    }
    const eventsListener4 = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx + 24)
      }
    }
    const eventsListener5 = (eventName, eventData) =>{
      if (eventName === 'ITEM_CLICKED') {
        lightbox.loadAndOpen(eventData.idx + 26)
      }
    }
    
    return (
      <AnimatedPage>
        <section id="moreCA">

        <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="../" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="navbar-logo" href=""><a href="../">
              <img 
              className="logo-img1" 
              src={logo} 
              alt="Home" 
              style={{
                height: "4.75rem", 
                width: "4.75rem",
                verticalAlign: "middle",
                }}
              ></img>
              </a>
          </li>
          <li><a href="../#conceptArt">Concept Art</a></li>
          <li><a href="../#illustration">Illustration</a></li>
          <li><a href="../#modeling">3-D Modeling</a></li>
          <li><a href="../#study">Study</a></li>
          <li><a href="../#traditionalArt">Traditional Art</a></li>
          <li><a href="../#contact">Contact Me</a></li>
        </ul>

        </nav>

          <div className="description">
           <h1 className="main-title" 
           style={{textAlign: "center", marginTop: "20px"}}>Concept Art</h1>
          </div>
          <div className="gemsofchina">
            <h1 className="main-title">Gems of China (2022)</h1>
            <div className="description">
              <p>A series of designs I have done referencing off the treasures and the culture of China, reflecting my root, my identity and my deep love for my motherland. <br/><br/><i>In honor of Jiayong Alex Chen 1959-2021 father, son, and a very dear friend.</i></p>
            </div>
            <ProGallery
              domId="gemsofchina"
              items={this.state.gemsofchina}
              options={options}
              container={container}
              eventsListener={eventsListener1}
              customHoverRenderer={customInfoRenderer}
            />
          </div>
          <div className="spaceopera">
            <h1 className="main-title">Project: Space Opera (2022)</h1>
            <ProGallery
              domId="spaceopera"
              items={this.state.spaceopera}
              options={options}
              container={container}
              eventsListener={eventsListener2}
              customHoverRenderer={customInfoRenderer}
            />
          </div>
          <div className="firstgdc">
            <h1 className="main-title">Game Developer Conference 2023 (2023)</h1>
            <ProGallery
              domId="firstgdc"
              items={this.state.firstgdc}
              options={options}
              container={container}
              eventsListener={eventsListener3}
              customHoverRenderer={customInfoRenderer}
            />
          </div>
          <div className="seasidecafe">
            <h1 className="main-title">Project: Seaside Cafe (2021)</h1>
            <ProGallery
              domId="seasidecafe"
              items={this.state.seasidecafe}
              options={options2}
              container={container}
              eventsListener={eventsListener4}
              customHoverRenderer={customInfoRenderer}
            />
          </div>
          <div className="shipraccoon">
            <h1 className="main-title">Project: Spaceship Raccoon (2021)</h1>
            <ProGallery
              domId="shipraccoon"
              items={this.state.shipraccoon}
              options={options}
              container={container}
              eventsListener={eventsListener5}
              customHoverRenderer={customInfoRenderer}
            />
          </div>
        </section>
     </AnimatedPage>   
    );
  }
}

export default moreCA;