import './index.css'

const Home = props => {
  const {homeContent, onHome, onResume, onContact} = props

  const onHomeButton = () => {
    onHome()
  }

  const onResumeButton = () => {
    onResume()
  }

  const onContactButton = () => {
    onContact()
  }

  return (
    <div className={homeContent}>
      <div className="main-container">
        <h1 className="description-heading">Hello</h1>
        <h2 className="description-subheading">A Bit About Me</h2>
        <p className="about-me">
          Im Namburi Sai Sharath Trivedi, an aspiring full stack developer
          driven by a passion for creating captivating web interfaces. With a
          strong foundation in HTML, CSS, and JavaScript. With a focus on
          building robust web applications using MongoDB, Express.js, React, and
          Node.js, I strive to bridge the gap between design and functionality.
          By combining my creativity and technical skills, I aim to build
          user-friendly and visually appealing websites. Collaboration is key,
          and I thrive in multidisciplinary teams where I can work closely with
          designers and developers to bring ideas to life. With a commitment to
          continuous learning and staying up to date with the latest trends, I
          am excited to contribute my skills and make a meaningful impact in the
          world of full stack development.{' '}
        </p>
        <div className="btn-container">
          <button className="btn-home" type="button" onClick={onHomeButton}>
            Home
          </button>
          <button className="btn-home" type="button" onClick={onResumeButton}>
            Resume
          </button>
          <button className="btn-home" type="button" onClick={onContactButton}>
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
