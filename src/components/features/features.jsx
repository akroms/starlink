import React from 'react'
import featuresImage from "../../images/Marketing_LandingStreaming_Redesign-2.webp"
import "./features.scss"

const Features = () => {
  return (
    <div className="features">
        <img src={featuresImage} alt="features image" className="features-image" />

        <div className="features-container container">
            <h4 className="features-title">
                STREAMING, VIDEO CALLS, ONLINE GAMING & MORE
            </h4>

            <p className="features-subtitle">
                With Starlink, users can engage in activities that historically have not been possible with satellite internet.
                
                <span>
                    Starlink's high-speed, low-latency service is made possible via the world's largest constellation of highly advanced satellites operating in a low orbit around the Earth.
                </span>
            </p>

            <button className="features-btn">
                Learn more
            </button>
        </div>

    </div>
  )
}

export default Features