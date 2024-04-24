import React from 'react';
import C1 from '../asset/images/C1.png';
import C2 from '../asset/images/C2.png';
import C3 from '../asset/images/C3.png';
import C4 from '../asset/images/C4.png';

const images = [
    {
        alt: "gen",
        width: "200",
        height: "113",
        src: {C1},
        srcSet: "2FCo_1.ad2ee302.png",
    },
    {
        alt: "gen",
        width: "200",
        height: "96",
        src: {C2},
        srcSet: "2FCo_3.37f82c98.png",
    },
    {
        alt: "gen",
        width: "200",
        height: "112",
        src: {C3},
        srcSet: "2FCo_2.7e06895b.png",
    },
    {
        alt: "gen",
        width: "123",
        height: "78",
        src: {C4},
        srcSet: "2Fgrov.97a72987.png",
    }
];

function ClientSection() {
    return (
        <div className="NewClient_sec6__EgRtw">
            <h1 className="NewClient_section6Heading__TGGXE">We Work With Amazing Clients</h1>
            <div className="NewClient_image_section___eIHp">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            alt={image.alt}
                            loading="lazy"
                            width={image.width}
                            height={image.height}
                            decoding="async"
                            data-nimg="1"
                            style={{ color: 'transparent', height: '8rem', width: '12rem' }}
                            srcSet={image.srcSet}
                            src={image.src}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientSection;