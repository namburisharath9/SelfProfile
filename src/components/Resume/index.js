import './index.css'

const Resume = props => {
  const {resumeContent} = props

  return (
    <div className={resumeContent}>
      <div className="header">
        <h1>Namburi Sai Sharath Trivedi</h1>
        <p>An Aspiring Full Stack Developer</p>
      </div>

      <div className="section">
        <h2>Professional Summary</h2>
        <p>
          An aspiring full stack developer, driven by a passion for crafting
          exceptional user interfaces and building robust web applications. With
          a strong foundation in HTML, CSS, and JavaScript and with a focus on
          Node.js and Express. Passionate about building scalable and efficient
          server-side solutions, I thrive on designing robust APIs and
          integrating databases. From responsive layouts to interactive user
          experiences, I strive to create engaging digital solutions.
          Continuously learning and staying up to date with the latest trends, I
          am dedicated to honing my skills and contributing to the ever-evolving
          world of MERN stack development. Lets collaborate and bring innovative
          ideas to life!
        </p>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="subsection">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Python</li>
            <li>Responsive Design</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Attention to detail</li>
          </ul>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="subsection">
            <h3>Ganges Cable Network</h3>
            <p>Manager</p>
            <p>Nov 2021 - March 2023</p>
            <ul>
              <li>
                The role primarily focuses on supervising a team of employees in
                the field, which can cover a wide range of individual
                assignments. Coordinating a team of engineers by scheduling
                their travel, arranging employee-client meetings.
              </li>
              <li>
                Supervision of Field Supervisors and daily follow up with Field
                Supervisors to report status of completion. Procurement of
                materials required.
              </li>
              <li>
                Work with Field Supervisor prior to being on site, determine
                what hardware/special tools will be required. Managing the
                installation of our products and services.
              </li>
            </ul>
          </div>
        </div>
        <div className="subsection">
          <h3>Delhi MSW Solutions Ltd</h3>
          <p>SCM Executive</p>
          <p>Jan 2019 - Dec 2019</p>
          <ul>
            <li>
              Developing procurement strategies that are inventive and
              cost-effective.
            </li>
            <li>Sourcing and engaging reliable suppliers and vendors.</li>
            <li>
              Negotiating with suppliers and vendors to secure advantageous
              terms and also ensuring awareness on the companys policies.
            </li>{' '}
            <li>
              Reviewing existing contracts with suppliers and vendors to ensure
              on-going feasibility.
            </li>
            <li>
              {' '}
              Performing risk assessments on potential contracts and agreements.
            </li>
            <li>
              Preparing and processing purchase requisition as per the indent
              from the concern department in SAP.
            </li>
            <li>
              Requesting and collecting quotation from respective vendors.
              Comparing the received quotations and preparing comparative
              statement in SAP and recommending the best suited vendor.
            </li>
            <li>
              Preparing and processing purchase order accordingly followed by
              MIGO in SAP with respect to confirmation of delivery of materials.
            </li>
            <li>
              Maintaining the stock of materials as per requirement and
              coordinating with other departments.
            </li>
            <li>
              Controlling the procurement budget and promoting a culture of
              long-term savings on procurement costs.
            </li>
            <li>
              Preparing procurement reports. Expertise in supply chain
              management, logistics and business administration.
            </li>{' '}
          </ul>
        </div>
        <div className="subsection">
          <h3>Upendra Tours & Travels</h3>
          <p>Maintanance Engineer</p>
          <p>Aug 2016 - Dec 2018</p>
          <ul>
            <li>
              Managing the fleet of company vehicles that are needed on the site
              and responsibility includes vehicle documentation, maintenance and
              repair reporting.
            </li>
            <li>
              Diagnosing breakdown problems. Dealing with emergencies, unplanned
              problems and repairs.
            </li>
            <li>
              Recruit and train staff. Set sales target, monitor staff
              performance and organize staff routes.
            </li>
            <li>
              Maintaining positive relationships with vendors of direct travel,
              such as car rentals and negotiating preferred rates with vendors
              of direct travel.
            </li>
            <li>
              Assisting with any travel-related issues that may arise. Creating,
              optimizing and monitoring corporate travel policies.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Education</h2>
          <div className="subsection">
            <h3>Noble PG College</h3>
            <p>Master of Business Administration - MBA, Marketing</p>
            <p>Graduated in Sept 2021</p>
          </div>
        </div>
        <div className="section">
          <h2>Education</h2>
          <div className="subsection">
            <h3>Swarna Bharathi Institute of Science and Technology</h3>
            <p>
              Bachelor of Technology - BTech, Mechanical EngineeringBachelor of
              Technology - BTech, Mechanical Engineering
            </p>
            <p>Graduated in July 2016</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
