import React from 'react';
import Vector from '../asset/images/Vector.png';
import Underline from '../asset/images/Underline.svg';

function TrueAI() {
    return (
        <div className="TruAi_container__EcAuw">
            <section className="TruAi_box__2njKB">
                <div className="TruAi_one___aV2n">
                    <img alt="vector" loading="lazy" width="333" height="329" decoding="async" data-nimg="1"
                        className="TruAi_img__YVzSg" style={{ color: 'transparent' }}
                        srcSet="2FvectorAi.8ec84e23.png"
                        src={Vector} />
                </div>
                <div className="TruAi_two__qNoyh">
                    <div className="TruAi_title__QqHUE">
                        Meet
                        <div className="TruAi_truBox__NlP0T">
                            <div className="TruAi_title2__v1zmy">Tru-AI</div>
                            <img alt="underline" loading="lazy" width="200" height="24" decoding="async" data-nimg="1"
                                className="TruAi_underline__TiyMp" style={{ color: 'transparent' }}
                                src={Underline} />
                        </div>
                    </div>
                    <div className="TruAi_dcd__EYU_D">Design. Create. Deploy.</div>
                    <div className="TruAi_box2__4oCap">
                        <div className="TruAi_dash___Hf2U"></div>
                        <div className="TruAi_gradient__wtKYQ">the Future of AI | Power to EDIT</div>
                    </div>
                    <div className="TruAi_small__jceTj">Based On your website &amp;traffic trends, Tru-AI optimises your website
                    </div>
                    <a target="_blank" href="https://makemyweb.ai/">
                        <button className="TruAi_aboutBtn__V5AQI">
                            <div>Learn More</div>
                            <span></span>
                        </button>
                    </a>
                </div>
                <div className="TruAi_three__tGovU">
                    <video autoPlay muted loop className="TruAi_vid__q_P8U">
                        <source
                            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                            type="video/mp4" />
                    </video>
                </div>
            </section>
        </div>
    );
}

export default TrueAI;