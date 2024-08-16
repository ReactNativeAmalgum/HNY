import React, { useLayoutEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import WorkTab from './WorkTab'
import { Link } from 'react-router-dom'

function GalleryPage() {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab);
  }, []);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(WorkTab);
    } else {
      const updatedItems = WorkTab.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
      <section>
        <div className="gall-banner">
            <div className="contacttt-p">
            <h1 >Gallery</h1>
            </div>
        </div>
      </section>
      <section id="project-version-one">
  <div className="container">
  <div className="row">
      <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          <span className="cat_subheading">Our Gallery</span>
          {/* <h4>Banquet & Events</h4> */}
          <div className="cat_border" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <ul className="gallery-filter">
          <li data-filter="all"onClick={() => filterItems("All")} className="filter active">
            <span>All</span>
          </li>
          <li data-filter=".meeting"onClick={() => filterItems("interior")} className="filter">
            <span>INTERIOR DESIGNING</span>
          </li>
          <li data-filter=".talking"onClick={() => filterItems("trunkey")} className="filter">
            <span>TRUNKEY CONTRACTOR</span>
          </li>
          <li data-filter=".conference"onClick={() => filterItems("civil")} className="filter">
            <span>CIVIL</span>
          </li>
          <li data-filter=".events"onClick={() => filterItems("modularkitchen")} className="filter">
            <span>MODULAR KITCHEN</span>
          </li>
          <li data-filter=".party"onClick={() => filterItems("furniture")} className="filter">
            <span>FURNITURE</span>
          </li>
          
        </ul>
      </div>
    </div>
    <div className="row nor4al-gallery" id="image-gallery-mix">
     
      {
        items.map((v,i)=>{
          return(
            <>
            <div
        className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
        style={{ display: "inline-block" }}
      >
        <div className="img-wrap">
          <img src={v.imageUr1} alt="" />
          <a className="fancybox" href="images/project-v1/1.jpg">
            <div className="content-wrap hvr-rectangle-out">
              <div className="border">
                <div className="content">
                  <h4>Awesome Image Really Awesome</h4>
                  <span>This is Our Gallery image</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div></>
          )
        })
      }
        
      </div>
     
     
    </div>
  
</section>

 <Footer/>
    </>
  )
}

export default GalleryPage
