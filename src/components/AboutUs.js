import React from 'react'

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="about-us">
                <img src="../imgs/about-us.jpg" alt="Jupiter, Florida Skyline"/>
                <article>
                <h1>Elevate Oral Care<sup>®</sup>, Established in 2010, is Elevating Care<sup>™</sup> for the future</h1>
                <br></br>
                <p>
                Elevate Oral Care was founded to be the leader in preventive dentistry product solutions. Our mission here at ELEVATE® is not only to deliver unique preventive dental products that are a step ahead of conventional products, but to also deliver the needed support and education dental offices require.
                </p>
                <br>
                </br>
                <p>
                Our team of Preventive Care Consultants is dedicated to providing education to offices nationwide on preventive protocols, techniques, patient-centered communication, and products; even if the products aren’t ELEVATE's®. We will help build a preventive plan for your practice from start to finish, and provide Continuing Education hours to your team as we educate.
                </p>
                <br></br>
                <p>
                Our team of product developers is actively looking for new chemistries and products through the dental and medical worlds that we can bring to your practice. Since evidence-based research forms the basis for our product lines and innovations, members of Elevate Oral Care leadership have either attended or been invited to virtually every oral health advocacy and research conference that has taken place over the past three decades.
                </p>
                <br></br>
                </article>
                <div className="team-member-container">
                    <img src="../imgs/teamMemberImgs/JennaGionta.png" alt="Jenna Gionta Headshot"/>
                    <article>
                    <h3>JENNA GIONTA</h3>
                    <p>As Customer Relations Manager I work to ensure Elevate interacts with dentistry in the most effective and professional manner. It’s my goal to guarantee that each time you contact us we deliver everything you expect and more. My highly trained team of Customer Service Representatives can not only provide you the best preventive care products, but also the latest research, guidelines and science supporting their use. We are continuously learning and improving to remain your prevention experts.</p>
                    </article>
                </div>
                <div className="team-member-container">
                    <img src="../imgs/teamMemberImgs/CraigMiller.jpeg" alt="Craig Miller Headshot"/>
                    <article>
                    <h3>CRAIG MILLER</h3>
                    <p>It is an honor serving as the Director of Sales for Elevate Oral Care. I get to work daily with our Preventive Care Consultants, the best trained disease prevention team in dentistry. It is very gratifying to know we are improving the health and lives of patients around the United States. We do this by helping offices implement evidence-based prevention dentistry including CAMBRA principles and ADA and AAPD guidelines and recommendations. Additionally, we help ensure prevention protocols result in improved production for clinics. I encourage all offices to contact your Preventive Care Consultant and schedule an AGD, PACE accredited continuing education presentation. I also encourage qualified candidates interested in joining our team of Preventive Care Consultants to submit a resume and cover letter.</p>
                    </article>
                </div>
                <div className="team-member-container">
                    <img src="../imgs/teamMemberImgs/KevinThomas.jpeg" alt="Kevin Thomas Headshot"/>
                    <article>
                    <h3>KEVIN THOMAS</h3>
                    <p>As a child I would have been categorized as extreme high risk for caries, an Early Childhood Caries sufferer. Cavities were common among my seven siblings. I don’t explain to people “what" we do at Elevate Oral Care, I use my own life experiences to explain to them the “why”. No child or adult should go to bed, attend school or suffer to eat due to oral pain. We design products and educate oral health providers on the latest and most effective chemistries to give their patients the best chance at living an oral disease free life. Our search and work will never be done. There will always be a better product or solution in front of us.</p>
                    </article>
                </div>
                <div className="team-member-container">
                    <img src="../imgs/teamMemberImgs/RichKrone.jpeg" alt="Rich Krone Headshot"/>
                    <article>
                    <h3>RICH KRONE</h3>
                    <p>As a Managing Member and Co-Founder of Elevate Oral Care, I have more than 30 years of experience in sales and marketing working with international brands including DuPont, McDonald’s, Sears, Pepsi and Pizza Hut. I also worked extensively with some of the largest dental products companies in the world including 3M Dental, Dentsply, ESPE America and WaterPik. Currently, I’m leading Elevate’s efforts to make its products available around the globe.</p>
                    </article>
                </div>
                <div className="team-member-container">
                    <img src="../imgs/teamMemberImgs/StevePardue.jpeg" alt="Rich Pardue Headshot"/>
                    <article>
                    <h3>STEVE PARDUE</h3>
                    <p>As a Member of Elevate Oral Care, I’m able to develop leading preventive dental therapies and share them with dental professionals and patients worldwide. It’s my responsibility to listen to your needs as clinicians and patients, and to teach our team of Preventive Care Consultants how best to begin preventive protocols in offices across the country. We believe preventing tooth decay and periodontal disease to save patient's natural teeth is paramount to dentistry’s future, and we’re working to achieve these goals.</p>
                    </article>
                </div>
                <br></br>
                <p>Elevate Oral Care executives are involved in many organizations focused on improving oral health for all. These include:</p>
                <br></br>
                <div className="about-us__organization-container">
                    <div className="about-us__organization">
                        <p>The Dental Trade Alliance Foundation</p>
                    </div>
                    <div className="about-us__organization">
                        <p>Numerous Global Outreach Dentistry Programs</p>
                    </div>
                    <div className="about-us__organization">
                        <p>Foundation of the American Academy of Pediatric Dentistry</p>
                    </div>
                    <div className="about-us__organization">
                        <p>TeamSmile, a partnership between dental and sports professionals to promote oral health for children</p>
                    </div>
                    <div className="about-us__organization">
                        <p>CAMBRA Coalition</p>
                    </div>
                </div>
            </section>
        )
    }
 }