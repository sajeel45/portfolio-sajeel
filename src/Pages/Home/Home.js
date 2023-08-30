import Header from "../../components/common/Header/Header";
import About from "../../components/elements/About/About";
import Banner from "../../components/elements/Banner/Banner";
import Blogs from "../../components/elements/Blogs/Blogs";
import Experience from "../../components/elements/Experience/Experience";
import Services from "../../components/elements/Services/Services";
import Skills from "../../components/elements/Skills/Skills";
import Portfolio from "../../components/elements/portfolio/Portfolio";
import { personalinfo,contactinfo,education,experience,skills,services,projects,blogs } from "../../data";

const HomePage = () => {
    return(
        <div>
            <Header />
            <Banner />
            <About personalinfo={personalinfo} contactinfo={contactinfo}/>
            <Experience education={education} experience={experience}/>
            <Skills skills={skills}/>
            <Services services={services}/>
            <Portfolio projects={projects}/>
            <Blogs blogs={blogs}/>
        </div>
    )
}
export default HomePage;