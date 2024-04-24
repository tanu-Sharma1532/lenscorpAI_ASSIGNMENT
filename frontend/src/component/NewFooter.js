
import React from 'react';
import logo from '../asset/images/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="NewFooter_top__zG1Js">
                <div className="NewFooter_topBox__qITBs">
                    <div className="NewFooter_one__FZicU">
                        <a href="#">
                            <img alt="logo" loading="lazy" width="80" height="70" decoding="async" data-nimg="1"
                                className="NewFooter_img__N_Vqq" style={{ color: 'transparent', marginTop: '5px' }}
                                srcSet="2Fnav_logo.e5fb945a.png"
                                src={logo} />
                        </a>
                        <span className="NewFooter_today__0jVMb">Tomorrow's Vision, Today!</span>
                        <div className="NewFooter_iconBox__id2RT">
                            <a href="https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc" target="_blank"
                                rel="noopener noreferrer">
                                <span></span>
                            </a>
                            <a href="https://www.instagram.com/lens_corporation/" target="_blank" rel="noopener noreferrer">
                                <span></span>
                            </a>
                            <a href="https://www.linkedin.com/company/lens-corporation/" target="_blank"
                                rel="noopener noreferrer">
                                <span></span>
                            </a>
                            <a>
                                <span></span>
                            </a>
                            <a href="https://twitter.com/LensCorporation" target="_blank" rel="noopener noreferrer">
                                <span></span>
                            </a>
                        </div>
                    </div>
                    <div className="NewFooter_two__w3Wjr">
                        <span className="NewFooter_two_title__3AseW">SITEMAP</span>
                        <a target="blank" className="NewFooter_two_tab__s_86D" href="https://makemyweb.ai/">MakeMyWeb.</a>
                        <a href="#services" className="NewFooter_two_tab__s_86D">Services</a>
                        <span className="NewFooter_two_tab__s_86D">Products</span>
                        <a href="#blogs" className="NewFooter_two_tab__s_86D">Blogs</a>
                        <a href="/about" className="NewFooter_two_tab__s_86D">Life at LENS</a>
                    </div>
                    <div className="NewFooter_three__E4CRC">
                        <span className="NewFooter_two_title__3AseW">CONNECT</span>
                        <a href="tel:+1-517-9300-792" className="NewFooter_two_tab__s_86D">+1-517-9300-792</a>
                        <a href="tel:+91-9990-736-796" className="NewFooter_two_tab__s_86D">+91-9990-736-796</a>
                        <a href="mailto:solutions@lenscorp.ai" className="NewFooter_two_tab__s_86D">solutions@lenscorp.ai</a>
                    </div>
                </div>
            </div>
            <div className="NewFooter_bot__Cr8m6">
                <div className="NewFooter_bot_box__GS61E">
                    <span style={{ color: '#999999' }}>
                        2023 <span style={{ color: 'white' }}>LENS, Inc. </span>
                        All rights reserved.
                    </span>
                    <div className="NewFooter_bot_smolBox__vVWBa">
                        <a href="Files/LENS_Code_of_Conduct.pdf" target="_blank">Code of conduct
                            {/* */}
                        </a>
                        <a href="Files/LENS_Sustainability_Goals.pdf" target="_blank">Sustainability Goals</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;