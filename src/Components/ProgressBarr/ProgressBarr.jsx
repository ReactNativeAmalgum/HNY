import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./ProgressBarr.css";

function ProgressBarr() {
  const [designProgress, setDesignProgress] = useState(0);
  const [developmentProgress, setDevelopmentProgress] = useState(0);
  const [uxProgress, setUxProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;

    setDesignProgress(Math.min(scrollPercent, 90));  // Design maxes out at 90%
    setDevelopmentProgress(Math.min(scrollPercent, 83));  // Development maxes out at 75%
    setUxProgress(Math.min(scrollPercent, 93));  // UX maxes out at 85%
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
      <section className='marg-t'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="shado">
              <p>APPLICATION</p>
            </div>
            <div className="our-h2">
              <h2>Our Skills</h2>
            </div>
            <p>At HNY Studio, we take pride in our remarkable growth and success over the years, marked by four key milestones. First, our ever-expanding list of **happy clients** stands testament to our commitment to excellence, with over 500 satisfied clients who trust our expertise in creating their dream spaces. Second, our extensive portfolio showcases the **work done**, highlighting more than 300 completed projects that reflect our dedication to quality and innovative design. Third, our **years of experience**, spanning over a decade, demonstrate our sustained presence and expertise in the interior design industry. Finally, our talented **number of staff**, comprising over 50 skilled professionals, ensures that we bring a wealth of creativity and professionalism to every project we undertake. These milestones not only underscore our growth but also our unwavering commitment to delivering exceptional interior design solutions.</p>

          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <div className="pro-details">
              <h5>Design</h5>
              <ProgressBar now={designProgress} label={`${Math.round(designProgress)}%`} />
            </div>
            <div className="pro-details">
              <h5>Development</h5>
              <ProgressBar now={developmentProgress} label={`${Math.round(developmentProgress)}%`} />
            </div>
            <div className="pro-details">
              <h5>User Experience</h5>
              <ProgressBar now={uxProgress} label={`${Math.round(uxProgress)}%`} />
            </div>
          </div>
        </div>
      </div>
    </section>
   
    </>
  
  );
}

export default ProgressBarr;
