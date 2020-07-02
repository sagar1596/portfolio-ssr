import React from 'react';
import './professional.styles.css';
import Head from '../../components/head/head.component';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Fade } from 'react-reveal';


class ProfessionalPage extends React.Component {


  render() {
    return (
      <div id="exp" className="professional page">
        <Head 
          title="Professional Experience - Sagar Bhat"
          description="Professional Experience - This page lists the work experience for Sagar Bhat." />
       
                <Fade bottom> 
                    <h2>Professional Summary</h2>
                </Fade>
                
                <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="10/2018 – Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icons iconType="exp" />}
  >
    <h3 className="vertical-timeline-element-title">Technical Lead</h3>
    <h4 className="vertical-timeline-element-subtitle">TEKsystems Global Services Pvt. Ltd.</h4>
    <div className="exp-content">
      
          Working with a client who provides a multi-vendor, multi-domain network automation and
          orchestration solution.
          This solution is based on Venilla Javascript by using ES6 as the base framework and working around it. It
          used ES6 in the front end and NodeJS in the backend with a MongoDB to hold the data.
      
        <ul>
          <li>Responsible and actively involved in the complete technical delivery of the project.</li>
          <li>Requirement gathering with client and taking active part in architectural discussions and playing
        the role of a technical architect.</li>
          <li>Picking up user stories and playing the role of a senior developer and reviewing all code that
        goes through the pipeline to play the role of a lead.</li>
          <li>All development work on this project is done on VanillaJS and nodeJS.</li>
          <li>Mentoring and training the team with the architecture of the application.</li>
        </ul>
      </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="06/2014 – 09/2018"
    iconStyle={{ background: 'rgba(243, 33, 33, 1)', color: '#fff' }}
    icon={<Icons iconType="exp" />}
  >
    <h3 className="vertical-timeline-element-title">Senior Associate Interactive Development L2</h3>
    <h4 className="vertical-timeline-element-subtitle">Publicis.Sapient</h4>
    <div className="exp-content">
      Worked with multiple clients including Goldman Sachs, LCBO, Michelin, Barnes and Noble, etc.
      <ul>
        <li>Providing UI Architecture/Design Solution in AEM 6.3 and IBM WCS</li>
        <li>Participated in requirement grooming and estimations.</li>
        <li>Developed components for the AEM site using slightly templating and ReactJS.</li>
        <li>Working with Dev and Infra team for environment related issues.</li>
        <li>Designing, POC(s) and prototyping.</li>
      </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="08/2012 – 05/2014"
    iconStyle={{ background: 'rgba(243, 33, 33, 1)', color: '#fff' }}
    icon={<Icons iconType="exp" />}
  >
    <h3 className="vertical-timeline-element-title">Senior Technical Associate</h3>
    <h4 className="vertical-timeline-element-subtitle">Sears Holding India Pvt. Ltd.</h4>
    <div className="exp-content">
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Retail domain to understand and increase sales and user
    experience.</li>
      <li>Designed user interface for web based products as part of the product development
    team.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
    manner with using web technologies like HTML, CSS, Javascript and Jquery 1.9.</li>
      <li>Worked on Web Analytics framework by Site Catalyst namely Omniture to help
    generate Analytics reports for the retail website.</li>
      <li>Worked on HTML5 and CSS3 to develop and assure a good experience to the end
    user.</li>
      <li>Creating cross-browser compatible and standards-compliant CSS-based page
    layouts.</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="07/2010 – 08/2012"
    iconStyle={{ background: 'rgba(243, 33, 33, 1)', color: '#fff' }}
    icon={<Icons iconType="exp" />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cybage Software Pvt. Ltd.</h4>
    <div className="exp-content">
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Retail domain to understand and increase sales and user
    experience.</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
  manner with using web technologies like HTML, CSS, Javascript and JQuery.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
      <li>Worked on ASP.NET MVC to implement Views using dynamic HTML and JQuery.</li>
      <li>Worked with WPF Technology for Windows based applications.</li>
      <li>Implemented image galleries using Javascript Libraries such as Lightbox.</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="09/2009 – 06/2010"
    iconStyle={{ background: 'rgba(243, 33, 33, 1)', color: '#fff' }}
    icon={<Icons iconType="exp" />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Open Destination Pvt. Ltd</h4>
    <div className="exp-content">
    <ul>
      <li>Worked extensively on the Travel domain to understand and increase sales and user
    experience.</li>
      <li>Designed the front end applications, user interactive (UI) web pages in a professional
manner with using web technologies like HTML, CSS, Javascript and JQuery.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/2009 – 08/2009"
    iconStyle={{ background: 'rgba(243, 33, 33, 1)', color: '#fff' }}
    icon={<Icons iconType="exp"/>}
  >
    <h3 className="vertical-timeline-element-title">Solutions Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Productivity Solutions Pvt. Ltd</h4>
    <div className="exp-content">
    <ul>
      <li>Interacting with Project Managers and Business Analysts and Business themselves
    and various development teams to create/modify prototypes as per the business
    requirement.</li>
      <li>Worked extensively on the Entertainment domain projects.</li>
      <li>Creating and maintaining UI prototypes and specifications</li>
      <li>Fixing Browser compatibility Issues on IE6, 7, 8, FF, Chrome and Safari.</li>
    </ul>
    </div>
  </VerticalTimelineElement>
  
</VerticalTimeline>
            </div>
    )
  }
}

const Icons = ({iconType}) => (
  
    iconType === 'exp' ?
        <i className="far fa-file-code"></i>
        : <i class="fas fa-graduation-cap"></i>
    
  
) 

export default ProfessionalPage;