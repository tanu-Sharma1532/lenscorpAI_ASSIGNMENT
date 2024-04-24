
import React from 'react';
import Green from "../asset/images/Green.png";
import Blue from "../asset/images/Blue.png";
import Fred from "../asset/images/Fred.png";
import Yellow from "../asset/images/Yellow.png";


const SolutionsComponent = () => {
    // Define the tick list items
    const tickListItems = [
        "State-of-the-art solutions",
        "Fast & Efficient",
        "No extra computation fee",
        "No licensing fee",
        "Lifetime support & upgrades",
        "Plug-and-Play",
        "24x7 Progress Monitoring",
        "Incremental Updates"
    ];

    // Define the solution cards
    const solutionCards = [
        {
            color: "NewSolutions_green__g0z_8",
            title: "Exclusive Rights",
            imgSrc: Green,
            body: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you."
        },
        {
            color: "NewSolutions_blue__fPniw",
            title: "Research Driven",
            imgSrc: Blue,
            body: "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer."
        },
        {
            color: "NewSolutions_red__BKTlg",
            title: "Plug-and-Play",
            imgSrc: Fred,
            body: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice."
        },
        {
            color: "NewSolutions_yellow__XgIE6",
            title: "Lifetime Support",
            imgSrc: Yellow,
            body: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options."
        }
    ];

    return (
        <div className="NewSolutions_Container__DRve2">
            <div className="NewSolutions_headingCont__5hIel">
                <h2 className="NewSolutions_heading__IkBp9">WHY CHOOSE LENS</h2>
                <div className="NewSolutions_underline__MOW3B"></div>
            </div>
            <p className="NewSolutions_subHead__BowW4">AI-driven solutions backed by science</p>
            <p className="NewSolutions_para__6H5A6">Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
            <div>
                <div className="NewSolutions_tickList__fnJHb">
                    <div className="NewSolutions_ai__9lohG">
                        {tickListItems.slice(0, 4).map((item, index) => (
                            <div key={index} style={{ display: "flex" }} >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="NewSolutions_check__YG5PZ" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                </svg>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="NewSolutions_ai__9lohG">
                        {tickListItems.slice(4).map((item, index) => (
                            <div key={index} style={{ display: "flex" }} >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="NewSolutions_check__YG5PZ" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                </svg>
                                {item}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="NewSolutions_cardCont__7h1aC">
                    {solutionCards.map((card, index) => (
                        <div key={index} style={{ position: "relative" }}>
                            <div className={card.color}></div>
                            <div className="NewSolCard_aiCard__mpgzf">
                                <div className="NewSolCard_aiHead__VNvMd" style={{ textAlign: "center" }}>{card.title}</div>
                                <img alt={card.title} className="NewSolCard_aiImg__Z1_ML NewSolCard_imageAnimation__SDTKn" src={card.imgSrc} />
                                <div className="NewSolCard_aiBody__NQ8L_">{card.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SolutionsComponent;