import { useContext } from 'react';
// Context
import { LandingContext } from '../../contexts/LandingContext';
// Styles
import './Projects.scss';
// Icons
import {ReactComponent as GitHubSqr} from '../../icons/github-square-brands.svg';
import {ReactComponent as ExternalLink} from '../../icons/square-arrow-up-right-solid.svg'


export default function Projects() {
    const { isTheme } = useContext(LandingContext)

    return (
        <section className="Projects">
            <h2>PROJECTS</h2>
            <div className="project-wrapper">
                <section className="text-wrapper">
                    <h4>ICT Team Project</h4>
                    <p>Ideas Come Together is a 3-4 days SPA team project. Users can register, login, create private or public posts with text and images. Comment on posts and search through them.</p>
                    <ul className="tools">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Framer Motion</li>
                        <li>Sass</li>
                        <li>Excalidraw</li>
                        <li>Figma</li>
                    </ul>
                </section>
                {/* <img src={process.env.PUBLIC_URL + "/images/ict.png"} alt="ict preview" /> */}
                <div className="links">
                    <a href="https://github.com/heyitsashleyhere/ICT-SPA-TeamProject" rel="noreferrer" target="_blank">
                        <GitHubSqr className='link-icon' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                    </a>
                    <a href="https://heyitsashleyhere.github.io/ICT-SPA-TeamProject/" rel="noreferrer" target="_blank">
                        <ExternalLink className='link-icon' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                    </a>
                </div>
            </div>

            <div className="project-wrapper">
                <section className="text-wrapper">
                    <h4>Weather App</h4>
                    <p>2-3 day responsive frontend challenge from <a href="https://devchallenges.io/" rel="noreferrer" target="_blank">devChallenges</a>.</p>
                    <ul className="tools">
                        <li>React</li>
                        <li>OpenWeatherMap API</li>
                        <li>Material Design Icons</li>
                        <li>GitHub Pages</li>
                    </ul>
                </section>
                <img src={process.env.PUBLIC_URL + "/images/weatherapp.png"} alt="weather app preview" />
                <div className="links">
                    <a href="https://github.com/heyitsashleyhere/Weatherapp-Devchallenge" rel="noreferrer" target="_blank">
                        <GitHubSqr className='link-icon' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                    </a>
                    <a href="https://heyitsashleyhere.github.io/Weatherapp-Devchallenge/" rel="noreferrer" target="_blank">
                        <ExternalLink className='link-icon' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                    </a>
                </div>
            </div>
        </section>
    )
}