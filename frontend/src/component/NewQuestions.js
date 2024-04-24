import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import "../47c747d98712b950.css"
import "../6a76b63ca976b0a2.css"

const FAQSection = () => {
    return (
        <Box className="NewQuestions_Container__1uN_p">
            <Box className="NewQuestions_headingCont__Oo_LA">
                <h2 className="NewQuestions_heading__tYrOE">GET TO KNOW US</h2>
                <div className="NewQuestions_underline__PkZOO"></div>
            </Box>
            <p className="NewQuestions_subHead__pf_Xm">Frequently Asked Questions</p>
            <div className="Accordian1_acc_sec8___AW1P">
                <div className='Accordian1_panel__Rn7Tw'>
                    <Accordion allowToggle>
                        <AccordionItem >
                            <h2>

                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        Do I need to sign a contract?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                We will first work with you to comprehend your requirements in detail. Thereafter, we would draft
                                an agreement with proposed solutions. After assessing possible challenges and pitfalls and
                                identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        How do we ensure quality of deliverables?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                We are researchers, first. We thoroughly benchmark our proposed solutions against internal
                                and public datasets and baselines after each development sprint. After final delivery, we will
                                continuously enhance our delivery based on your feedback.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        How do I begin collaboration?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                Please contact us at <span style={{ color: '#f4675d' }}>solutions@lenscorp.ai</span>. We usually respond within 24 hours.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='Accordian1_panel__Rn7Tw'>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        What services do we offer?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                We build accurate and efficient AI systems for your business. Our ethically-trained solutions
                                are paving a new path forward to create explainable, transparent, and easily customizable AI systems.
                                In addition, we grant ownership of all copyrights to the system, software, and model to you.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        How do you ensure user privacy?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                We do not share, sell, or rent your competitive information (including any and all data) to
                                any third party. Since we grant exclusive Intellectual Property Rights back to you, we have
                                no intention of violating any user privacy.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton style={{
                                    marginTop: '1rem',
                                    borderRadius: '10px',
                                    paddingRight: '1rem',
                                    border: '1.5px solid rgba(0, 0, 0, .6)',
                                    padding: "0.8rem"
                                }}>
                                    <Box flex="1" textAlign="left">
                                        How can I pay for the services?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} textAlign="left">
                                We split the entire project into multiple milestones. We work on an advanced milestone payment
                                basis with an option to drop off remaining milestones anytime.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>


        </Box>
    );
}

export default FAQSection;