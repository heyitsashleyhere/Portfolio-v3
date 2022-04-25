import { useContext } from "react";
// Components
import AboutMe from "./AboutMe/AboutMe.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Projects from "./Projects/Projects.jsx"
import Footer from "./Footer/Footer.jsx";
import ScrollToTop from "./Scroll/Scroll.jsx"
// Context
import { LandingContext } from "../contexts/LandingContext.jsx";
// Styles & Effects
import './App.scss';
import { motion } from "framer-motion";
import pdf from "../resume/Ashley_Jiang_CV.pdf";



export default function App() {
    const { isTheme, setIsTheme } = useContext(LandingContext)

    return (
        <section className={isTheme ? "App" : "dark-theme"}>
            <header>
                <motion.div className="theme-switch"
                     whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                     onClick={() => setIsTheme(!isTheme)}>
                          {isTheme ? '🐵' : '🙈 '}</motion.div> 
                <a href={pdf}
                   target="_blank"
                   rel="noreferrer" 
                   className={isTheme ? "light-btn" : "dark-btn"}>RESUME</a>
            </header>

            <LandingPage />
            <AboutMe />
            <Projects />
            <Footer />
            <ScrollToTop />
        </section>
    )
}