import AboutMe from "./AboutMe/AboutMe.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import { useContext } from "react";
import { LandingContext } from "../contexts/LandingContext.jsx";


export default function App() {
    const { isTheme, setIsTheme } = useContext(LandingContext)

    return (
        <section className="App">
            <header>
                <span className="theme-switch"
                      onClick={() => setIsTheme(!isTheme)}>
                          {isTheme ? '🐵' : '🙈 '}</span> 
                <button>RESUME</button>
            </header>

            <LandingPage />
            <AboutMe />
            <footer>
                <span>email</span>
                <span>twitter</span>
                <span>insta</span>
                <span>github</span>
                <span>linkedin</span>
            </footer>
        </section>
    )
}