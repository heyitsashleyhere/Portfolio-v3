// import { useContext } from 'react';
// Context
// import { LandingContext } from '../../contexts/LandingContext';
// Styles
import './Projects.scss';
import { motion } from "framer-motion";
// Icons
import {ReactComponent as GitHubSqr} from '../../icons/github-square-brands.svg';
import {ReactComponent as ExternalLink} from '../../icons/square-arrow-up-right-solid.svg'


export default function Projects() {
    // const { isTheme } = useContext(LandingContext)

    return (
        <section className="Projects">
            <motion.h2 initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 2}}>PROJECTS</motion.h2>
            <div className="project-wrapper">
                <motion.section className="title-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.05}}>      
                    <h4>ICT Team Project</h4>

                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/ICT-SPA-TeamProject" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://heyitsashleyhere.github.io/ICT-SPA-TeamProject/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>
                
                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.1}}>Ideas Come Together is a 3-4 days SPA team project. Users can register, login, comment, search , create private or public posts with text and images.</motion.p>

                <motion.img src={process.env.PUBLIC_URL + "/images/ict.png"} alt="ict preview" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.15}}/>

                <ul className="tools-list">
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2}}>React</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.25}}>React Router</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.3}}>Framer Motion</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.35}}>Sass</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.4}}>Excalidraw</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.45}}>Figma</motion.li>
                </ul>
            </div>

            <div className="project-wrapper">
                <motion.section className='title-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5}}>
                    <h4>Weather App</h4>
                    
                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/Weatherapp-Devchallenge" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://heyitsashleyhere.github.io/Weatherapp-Devchallenge/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>

                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.55}}>2-3 day responsive frontend challenge from <motion.div
                className='p-link' 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.55}}
                href="https://devchallenges.io/" rel="noreferrer" target="_blank"
                >devChallenges</motion.div>.</motion.p>
                
                <motion.img src={process.env.PUBLIC_URL + "/images/weatherapp.png"} alt="weather app preview"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.6}} />
                
                <ul className="tools-list">
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.65}}>React</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.7}}>OpenWeatherMap API</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.75}}>Material Design Icons</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.8}}>GitHub Pages</motion.li>
                </ul>

            </div>
        </section>
    )
}