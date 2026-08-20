import TopBar from "../components/TopBar"
import ParticleBackground from "../components/ParticleBackground"
import Home from "../components/sections/Home"
import AboutMe from "../components/sections/AboutMe"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

function LandingPage() {
    return (
      <div>
        <ParticleBackground />
        <TopBar/>

        <section id = "home" className = "homeSection">
          <Home/>
        </section>

        <section id = "about" className = "aboutSection">
          <AboutMe/>
        </section>

        <section id = "experience" className = "experienceSection">
          <Experience/>
        </section>

        <section id = "projects" className = "projectSection">
          <Projects/>
        </section>

        <section id = "contact" className = "contactSection">
          <Contact/>
        </section>

      </div>
    );
  }

export default LandingPage;