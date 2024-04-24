import React, { useState } from 'react';
import Hero from '../asset/images/Hero.jpg';

function Newhero() {
    return (
        <div className="NewHero_heroContainer__M77cV" id="top">
            <img
                alt="herobg"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="NewHero_vid__a5nxX"
                style={{ color: 'transparent' }}
                srcSet="2FDesktop_-_23_u3ypg0.jpg"
                src={Hero}
            />
            <div className="NewHero_heroLightContent__H6F5T">
                <h1 className="NewHero_sectionHeadingLight__wqJ1M">We are at the forefront of AI</h1>
                <p className="NewHero_subHeadingLight__i7EVe">
                    From Conserving Wildlife to Automatically Generating Caricatures-
                    <span style={{ fontWeight: 'bold' }}> {" "}We Do It All</span>
                </p>
                <a href="./about">
                    <button className="Buttons_primaryButton__TNkjJ">Learn More</button>
                </a>
            </div>
        </div>
    );
}

export default Newhero;