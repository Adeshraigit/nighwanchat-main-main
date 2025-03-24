import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import serviceDetailsImg from '../../assets/imgs/service-details.jpg'; // Updated image import path
import brand from "../../assets/imgs/sT/Branding.png"
import erp from "../../assets/imgs/sT/ERP.png"
import ai from "../../assets/imgs/sT/Ai ML.png"
import web from "../../assets/imgs/sT/mobile and web.png"
import iot from "../../assets/imgs/sT/iot.png"
import data from "../../assets/imgs/sT/Data.png"
import digi from "../../assets/imgs/sT/digital marketing.png"
import it from "../../assets/imgs/sT/IT Support.png"
import dev from "../../assets/imgs/sT/devops.png"

const NewReleaseHeroImgArea = ({ type }) => {

  const services = {
    "Branding" : {
      img : brand
    },
    "ERP" : {
      img : erp
    },
    "aim" : {
     img : ai
    },
    "Web" : {
     img : web
    },
    "Data" : {
     img : data
    },
    "Iot" : {
      img : iot
    },
    "Digital" : {
      img : digi
    },
    "IT" : {
      img : it
    },
    "Devops" : {
      img : dev
    },
  }

  return (
    <section className="new-release-hero-img-area">
      <div className="custom-container">
        <div className="new-release-img-box">
          <img src={services[`${type}`].img} alt="Service Details" />
        </div>
      </div>
    </section>
  );
};

export default NewReleaseHeroImgArea;