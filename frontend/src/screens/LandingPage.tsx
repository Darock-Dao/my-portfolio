import TopBar from "../components/TopBar"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

function LandingPage() {
    return (
      <div>
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