import React from 'react'
import img4 from '../img/liv1.jpeg';
import Footernew from './Footernew'
import Navbar from './Navbar'
import CountUp from 'react-countup';


function AboutPage() {
    return (
        <>
            <div className='aboutPage'>
                <Navbar />
                <div className='about0'>
                    <div className='aboutHeading'>The Design Yard</div>
                    <br />
                    {/* <br /> */}
                    <div className='about00'>
                        We at The Design Yard are a team of more than 50 people including architects, interior designers, project managers who empower talent to transform spaces and redefining lifestyle and work culture. We strongly believe that client satisfaction defines our success.
                    </div>
                    <button className='aboutButton'>Book Free Consultation</button>
                    <div className='aboutCount1'>
                        <div className='count'>
                            <div className='Countup'><CountUp end={2170} />+</div>
                            <div className='counttext'>Happy Customers</div>
                        </div>
                        <div className='count'>
                            <div className='Countup'><CountUp end={140} />+</div>
                            <div className='counttext'>Quality Checks</div>
                        </div>
                        <div className='count'>
                            <div className='Countup'><CountUp end={18} />+</div>
                            <div className='counttext'>Citys</div>
                        </div>
                        <div className='count'>
                            <div className='Countup'><CountUp end={600} />+</div>
                            <div className='counttext'>Designs</div>
                        </div>
                    </div>
                </div>

                <div className="about1">
                    <div className='aboutHeading2 '>THE TEAM</div>

                    <div className='abouttext'>
                        We are a professionally managed company undertaking turnkey projects in the field of air- conditioning. We introduce ourselves as one of the most experienced in the field of air conditioning equipment's. This is an enterprise by a technocrat with over Four years of "hands on" experience in erection, commissioning, operation and maintenance of all types of air conditioning systems. We are confident of providing solution for any type of air conditioning needs of customers and back-up support for their existing systems.
                    </div>

                    <br />

                    <div className='abouttext'>
                        The company was founded in 2020 and has been executing projects of all magnitudes and complexity for varied clients in all corners of the country.
                    </div>

                    <br />

                    <div className='abouttext'>
                        Our team believes in alleviating the usual maladies that our faced by clients, consultants and PC's such as poor quality, deadline violations etc We believe in delivering the project, with the best possible quality, within the given time frame, on a consistent basis.
                    </div>
                </div>

                <div className='abc'>
                    <div className="about2 ">

                        <br />
                        <div>
                            <h3>OUR VISION</h3>
                            <div className='Highlighter'></div>
                        </div>

                        <div className='about3'>
                            To make available appropriate and quality air conditioning solution, at nominal costs to the customers while maintaining the highest standards of service and business ethics"
                            We strive to achieve this mission by involving ourselves with the customers from the drawing to the commissioning stage and providing efficient back-up support thereafter.Badri Engineering Services, is a company specialized in the testing and certification of HVAC systems. Using the latest technology, standards and instrumentation, our specialized group of engineers and technicians perform all necessary tests and adjustments to certify, modity or design in order to obtain required systems performance found for industry, hospital and commercial applications. Due to the engineering support, Badri Engineering Services is capable to deal with unexpected situations where the systems components or design have to be altered with prompt action and effectively. All works are supervised and certified by licensed engineers specialized in this field and using standards and procedures of the most recognized agencies and related organizations for the testing and balancing specialization.
                        </div>

                        <div>
                            <h3>OUR MISSION</h3>
                            <div className='Highlighter'></div>
                        </div>

                        <div className='about3'>
                            To make available appropriate and quality air conditioning solution, at nominal costs to the customers while maintaining the highest standards of service and business ethics"
                            We strive to achieve this mission by involving ourselves with the customers from the drawing to the commissioning stage and providing efficient back-up support thereafter.Badri Engineering Services, is a company specialized in the testing and certification of HVAC systems. Using the latest technology, standards and instrumentation, our specialized group of engineers and technicians perform all necessary tests and adjustments to certify, modity or design in order to obtain required systems performance found for industry, hospital and commercial applications. Due to the engineering support, Badri Engineering Services is capable to deal with unexpected situations where the systems components or design have to be altered with prompt action and effectively. All works are supervised and certified by licensed engineers specialized in this field and using standards and procedures of the most recognized agencies and related organizations for the testing and balancing specialization.
                        </div>

                        <div>
                            <h3>DESIGN PHILOSOPHY</h3>
                            <div className='Highlighter'></div>
                        </div>

                        <div className='about3'>
                            To make available appropriate and quality air conditioning solution, at nominal costs to the customers while maintaining the highest standards of service and business ethics"
                            We strive to achieve this mission by involving ourselves with the customers from the drawing to the commissioning stage and providing efficient back-up support thereafter.Badri Engineering Services, is a company specialized in the testing and certification of HVAC systems. Using the latest technology, standards and instrumentation, our specialized group of engineers and technicians perform all necessary tests and adjustments to certify, modity or design in order to obtain required systems performance found for industry, hospital and commercial applications. Due to the engineering support, Badri Engineering Services is capable to deal with unexpected situations where the systems components or design have to be altered with prompt action and effectively. All works are supervised and certified by licensed engineers specialized in this field and using standards and procedures of the most recognized agencies and related organizations for the testing and balancing specialization.</div>


                        <div className="row" id='rowcon' style={{ margin: "0", marginBottom: "100px" }}>
                            <div className="rowleft">
                                <div>
                                    <h3>PROJECT EXECUTION</h3>
                                    <div className='Highlighter'></div>
                                </div>
                                <div className='about3'>
                                    We have a team of Highly Trained and Experienced Installation and Service Technicians. Using Computerized Design, Estimating and Scheduling Technology, we are able to effectively manage our craftsmen, ensure superior quality control, and meet the most rigorous time schedules.</div>
                            </div>
                            <div className="rowright">
                                <div>
                                    <h3 className='Highlighter2'>OUR CORE STRATAGIES</h3>
                                    <div className='Highlighter'></div>
                                </div>
                                <div className='about3'>
                                    Treat air conditioning as 'Necessity' rather than luxury' and orient customer attitude accordingly.
                                    Educate the industrial user about the concept of 'Service with quality at nominal cost'. Incorporate service support as an integral part of our business strategy.
                                    The enclosed sheets further detail our company profile and existing organizational set-up. Further clarification, please feel free to revert back.</div>

                            </div>
                        </div>
                    </div >
                </div>
                <Footernew />
            </div>
        </>
    )
}

export default AboutPage
