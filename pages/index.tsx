import type { NextPage } from 'next'
import {SideBar} from "../components/SideBar";
import MyView from "../components/MyView";
import AboutMe from "../components/MySkills";
import Contact from "../components/contact";
import Projects from "../components/projects";


const Home: NextPage = () => {
  return (
      <div>
          <SideBar/>
          <MyView/>
          <AboutMe/>
          <Contact/>
          <Projects/>
      </div>
  )
}

export default Home
