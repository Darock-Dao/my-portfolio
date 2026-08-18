import TopBar from "../components/TopBar"
import Home from "../components/Home"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

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

        <section id = "projects" className = "projectSection">
          <Projects/>
        </section>

      </div>
    );
  }

export default LandingPage;