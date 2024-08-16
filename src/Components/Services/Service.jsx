import Portable from "../Portable/Portable";
import { TbGeometry } from "react-icons/tb";
import "./Service.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
function Service() {
  return (
    <>
      <section className="">
        <div className="banner-service">
          <div className="img-banner">
            <div className="stylee">
              <h1>Our Services</h1>
            </div>
          </div>
        </div>
      </section>
     <Portable/>
     <section className="marg-t">
      <div className="row">
      <div className="col-lg-4 dgg">
        <div className="service-cent">
        <div className="image-service">
          <div className="container">
            <div className="card-tittle text-center">
        <h2>Interior Design <br /> for the Future <br /> 2017</h2>
            </div>
            <div className="go-link">
              Read More
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-lg-4 dgg">
        <div className="service-cent">
        <div className="image-servic">
        <div className="container">
            <div className="card-tittle text-center text-white ">
        <h2>    Lots of Flexible <br /> Functionalities  <br />2017 </h2>
            </div>
            <div className="go-link text-white">
              Read More
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="col-lg-4 dgg">
        <div className="service-cent">
        <div className="image-servi">
        <div className="container">
            <div className="card-tittle text-center">
        <h2>Introduce Vision <br /> to your space <br /> 2017</h2>
            </div>
            <div className="go-link">
              Read More
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
     </section>
     <section className="marg-t">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="price-tittle">
              <h2>Our prices</h2>
              <p className="p-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sed nesciunt voluptate vero facere dolorum veritatis fugit aliquid nihil impedit aperiam, iure placeat modi culpa nam ex quod iste cum expedita quasi hic ad  repudiandae dolor nemo. Dolorum voluptas nemo, fugit quisquam placeat harum id ab minus labore odit quo amet molestiae dolor qui esse. repudiandae dolor nemo. Dolorum voluptas nemo, fugit quisquam placeat harum id ab minus labore odit quo amet molestiae dolor qui esse.</p>
            </div>
            <div className="anch">
              <Link to="">View More</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
              <div className="doms">
            <div className="imgg">
             <div className="loader" />
             <h2>Outstanding Support</h2>
            </div>
          </div>
              </div>
              <div className="col-lg-6">
              <div className="doms">
            <div className="imgg">
             <div className="loade" />
             <h2>Web Development</h2>
            </div>
          </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
     </section>
     
     <section>
     
      <div className="row">
        <div className="col-lg-6">
          <div className="service-bg-image"></div>
        </div>
        <div className="col-lg-6">
          <div className="container">
          <div className="service-im-detail">
          <p className="deta">APPLICATION</p>
          <div className="deader-deatl">
          <h2>Annie Bullock</h2>
          </div>
          </div>
          <div className="paragraph-detaile">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fuga corporis quis ipsam nemo quod, fugiat eum alias autem odio, dolorem earum magni placeat aspernatur. Et facilis voluptatum sed tenetur possimus reprehenderit adipisci amet odit assumenda! Expedita doloremque similique quia inventore unde provident, at beatae.assumenda! Expedita doloremque similique quia inventore unde provident, at beatae.</p>
          </div>
          <div className="anch">
              <Link to="">View More</Link>
            </div>
          </div>
        </div>
      </div>
     </section>

     <Footer/>
    </>
  );
}

export default Service;
