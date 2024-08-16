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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At est harum quo, eveniet magni perspiciatis soluta deserunt earum aliquam perferendis quod numquam possimus adipisci repellat! Nesciunt aliquid iste, mollitia id ullam temporibus. Laborum, a ipsum animi et dignissimos consectetur aperiam reprehenderit voluptas, veritatis illum optio.</p>

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
