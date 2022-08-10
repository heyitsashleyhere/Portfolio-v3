import { useContext } from 'react';
// Context
import { LandingContext } from '../../contexts/LandingContext';
// Styles
import './Projects.scss';
import { motion } from "framer-motion";
// Icons
import {ReactComponent as GitHubSqr} from '../../icons/github-square-brands.svg';
import {ReactComponent as ExternalLink} from '../../icons/square-arrow-up-right-solid.svg'


export default function Projects() {
    const { isTheme } = useContext(LandingContext)

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
                transition={{ delay: 2.1}}>Ideas Come Together is a 3-4 days SPA team project. Users can register, login, comment, search, create private or public posts with text and images. 
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>Taking the lead and manage the project</li>
                        <li>Refactoring others code and version control</li>
                        <li>Creating login and register components with authentication logic</li>
                    </ul>
                </div>
               </motion.p>

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

            <div className="odd-project-wrapper">
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
                transition={{ delay: 2.55}}>2-3 day responsive frontend challenge from <a
                style={{ color: '#00bbf9', textDecoration: 'none', fontWeight: 500,
                '&:active': { color: '#fb7107'}, '&visited': { color: '#9b5de5' }, '&hover': { color: '#f15bb5' }
                }}
                className='p-link' 
                href="https://devchallenges.io/" rel="noreferrer" target="_blank"
                >devChallenges</a>. Users can save their default location, check current weather and the up-coming 5 days. Add other locations. Toggle between celsius and fahrenheit.
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>Fetching data from a weather API</li>
                        <li>Pixel perfect style according to a Figma file</li>
                    </ul>
                </div>
                </motion.p>
                
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

            <div className="project-wrapper">
                <motion.section className="title-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.05}}>      
                    <h4>To Do List</h4>

                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/TO_DO" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://heytheretodo.netlify.app/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>
                
                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.1}}>2-3 day To-Do list app. Users can register, login and create, read, update and delete to-do tasks.
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>Teach myself on how to use Firebase and Chakra UI</li>
                    </ul>
                </div>
                </motion.p>

                <motion.img src={process.env.PUBLIC_URL + "/images/todoapp.png"} alt="todo preview" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.15}}/>

                <ul className="tools-list">
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.2}}>React</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.25}}>Firebase</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.3}}>Chakra UI</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.35}}>Sass</motion.li>
                </ul>
            </div>

            <div className="odd-project-wrapper">
                <motion.section className='title-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5}}>
                    <h4>Dear Memories</h4>
                    
                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/DearMemories" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        {/* <a href="https://github.com/heyitsashleyhere/DearMemories" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a> */}
                    </div>
                </motion.section>

                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.55}}>🚨 ⚠️ This project is still in progress ⚠️ 🚨<br/>
                Instagram wanna-be app. Users can register, login and create posts, edit posts, like posts and delete posts. Using MongoDB, Express, JWT and React. Would like to add more features such as comments, filters and search. Please refer to the README file in the github repository for a quick view of the project progress.</motion.p>
                
                <motion.img src={process.env.PUBLIC_URL + "/images/dearmemories.png"} alt="weather app preview"
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

            <div className="project-wrapper">
                <motion.section className="title-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.05}}>      
                    <h4>Hyōgen</h4>

                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/InspirationJam-hyougen" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://inspiration-jam-hyougen.vercel.app/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>
                
                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.1}}>
                <a style={{ color: '#00bbf9', textDecoration: 'none', fontWeight: 500,
                '&:active': { color: '#fb7107'}, '&visited': { color: '#9b5de5' }, '&hover': { color: '#f15bb5' }
                }}
                className='p-link' 
                href="https://digitalcareerinstitute.org/" rel="noreferrer" target="_blank"
                >DCI</a>'s very own Hackathon: Inspiration Jam that took place from June 10th to June 12th, 2022. Each team is tasked to create a website for an agency that specializes in Marketing and Web Development. Details on what it needs to includes are stated in the project github repository.
                <div className='extra-notes-wrapper'>
                    <img src={process.env.PUBLIC_URL + "/images/inspirationJamBadge.png"} alt="honorable mention badge" 
                    style={{width: '30%'}}/>
                    <p>Winning Honorable Mention and <motion.div
                        className='p-link' 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.55}}
                        href="https://www.behance.net/videos/fb6b5ace-21ea-4ed4-b954-110495e92601/Meet-the-Students-at-the-Digital-Career-Institute-Inspiration-Jam" rel="noreferrer" target="_blank"
                        >here is a recording of the event live-stream</motion.div> and if you would like to see the actual presentation recording please request by email, thank you.</p>
                </div>
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>First time working with online marketers and understanding their demands</li>
                        <li>Surviving the pressure when other team members drop out</li>
                    </ul>
                </div>
                </motion.p>

                <motion.img src={process.env.PUBLIC_URL + "/images/hyougen.png"} alt="todo preview" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.15}}/>

                <ul className="tools-list">
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.2}}>React</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.25}}>Material UI</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.3}}>Framer Motion</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.35}}>Swiper JS</motion.li>
                </ul>
            </div>

            <div className="odd-project-wrapper">
                <motion.section className='title-wrapper'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5}}>
                    <h4>LOKA</h4>
                    
                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/BAIM_frontend" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://loka.vercel.app/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>

                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.55}}>
                This is my final project working in a team of four to showcase all we learned in our one year fullstack web developer course at <a style={{ color: '#00bbf9', textDecoration: 'none', fontWeight: 500,
                '&:active': { color: '#fb7107'}, '&visited': { color: '#9b5de5' }, '&hover': { color: '#f15bb5' }
                }}
                className='p-link' 
                href="https://digitalcareerinstitute.org/" rel="noreferrer" target="_blank"
                >DCI</a>. Was a 7 week project where the client can see what are the seasonal produces in Germany; are able to create, edit, comment and pin posts, attend events and follow other users.
                
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>Creating 2 APIs for the app</li>
                        <li>Using cookies</li>
                        <li>Data flow and work flow</li>
                        <li>Consistency in our codes</li>
                    </ul>
                </div>
                
                </motion.p>
                
                <motion.img src={process.env.PUBLIC_URL + "/images/loka.png"} alt="weather app preview"
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
                    transition={{ delay: 2.7}}>Express</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.75}}>MongoDB</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.85}}>Firebase</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.8}}>GSAP</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.85}}>MUI</motion.li>
                </ul>
            </div>

            <div className="project-wrapper">
                <motion.section className="title-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.05}}>      
                    <h4>CSD-BERLIN</h4>

                    <div className="links">
                        <a href="https://github.com/heyitsashleyhere/CSD-BERLIN" rel="noreferrer" target="_blank">
                            <GitHubSqr className='link-icon' />
                        </a>
                        <a href="https://csd.digitalcareerinstitute.org/" rel="noreferrer" target="_blank">
                            <ExternalLink className='link-icon' />
                        </a>
                    </div>
                </motion.section>
                
                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.1}}>
                This project was built for 
                <a style={{ color: '#00bbf9', textDecoration: 'none', fontWeight: 500,
                '&:active': { color: '#fb7107'}, '&visited': { color: '#9b5de5' }, '&hover': { color: '#f15bb5' }
                }}
                className='p-link' 
                href="https://digitalcareerinstitute.org/" rel="noreferrer" target="_blank"
                >DCI</a>'s landing page for participating in the <a style={{ color: '#00bbf9', textDecoration: 'none', fontWeight: 500,
                '&:active': { color: '#fb7107'}, '&visited': { color: '#9b5de5' }, '&hover': { color: '#f15bb5' }
                }}
                className='p-link' 
                href="https://csd-berlin.de/" rel="noreferrer" target="_blank"
                >Christophor Street Day - Berlin Pride</a> on 23th July, 2022.
                <div className='challenge-wrapper'>
                    <p>Challenges:</p>
                    <ul>
                        <li>Short time frame to built a site following corporate Design guidelines</li>
                        <li>Sticking to pure HTML, CSS/SaSS, Javascript and reading other developers codes</li>
                    </ul>
                </div>
                </motion.p>

                <motion.img src={process.env.PUBLIC_URL + "/images/csd.png"} alt="todo preview" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.15}}/>

                <ul className="tools-list">
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.2}}>HTML</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.25}}>SaSS</motion.li>
                    <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3.3}}>Javascript</motion.li>
                </ul>
            </div>

            {/* <motion.div className="github-wrapper"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 3.4}} >
                <a href="https://github.com/heyitsashleyhere?tab=repositories"
                   target="_blank"
                   rel="noreferrer" 
                   className={isTheme ? "light-btn" : "dark-btn"}>For more projects</a>      
            </motion.div> */}
        </section>
    )
}