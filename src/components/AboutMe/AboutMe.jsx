import { useContext } from "react";
// Icons:
import {ReactComponent as HtmlLogo} from '../../icons/html.svg';
import {ReactComponent as CssLogo} from '../../icons/css3.svg';
import {ReactComponent as NodeJSLogo} from '../../icons/node-js.svg';
import {ReactComponent as FirebaseLogo} from '../../icons/firebase.svg';
import {ReactComponent as MUILogo} from '../../icons/material.svg';
import {ReactComponent as FramerLogo} from '../../icons/framer.svg';
import {ReactComponent as SassLogo} from '../../icons/sass.svg';
import {ReactComponent as BootstrapLogo} from '../../icons/bootstrap-brands.svg';
import {ReactComponent as JSLogo} from '../../icons/javascript.svg';
import {ReactComponent as ReactLogo} from '../../icons/react.svg';
import {ReactComponent as ExpressLogo} from '../../icons/express.svg';
import {ReactComponent as MongoLogo} from '../../icons/mongodb.svg';
import {ReactComponent as PostmanLogo} from '../../icons/postman.svg';
import {ReactComponent as FigmaLogo} from '../../icons/figma.svg';
import {ReactComponent as JiraLogo} from '../../icons/jira.svg';
import {ReactComponent as GithubLogo} from '../../icons/github.svg';
import {ReactComponent as IllustratorLogo} from '../../icons/illustrator.svg';
import {ReactComponent as PhotoshopLogo} from '../../icons/photoshop.svg';
import {ReactComponent as IndesignLogo} from '../../icons/indesign.svg';
// Styles & Effects
import './AboutMe.scss';
import { motion } from "framer-motion";
// Context
import { LandingContext } from '../../contexts/LandingContext';

export default function AboutMe() {
    const { isTheme } = useContext(LandingContext)

  return (
    <section className={isTheme? "AboutMe" : "AboutMe dark-theme"}>
      <motion.div className="about" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.65}}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>A</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>B</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>O</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>U</motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>T</motion.div>
      </motion.div>
      <div className="about-wrapper">
          <motion.p initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75}}>My academic background is in Industrial Design where I have worked on a variety of projects across different sectors, including branding, market research, marketing, consumer packaging, children's toys, women accessories and clothing.</motion.p>
          
          <motion.p initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.85}}>I started my web development journey in 2021, when a realized coding is just like riding a roller coaster: up and down, fun and addicting! And this portfolio is created to showcase some of my projects and knowledge I have obtained during my 14 month MERN stack training program with <a href="https://digitalcareerinstitute.org/" target="_blank" rel="noreferrer">DCI - Digital Career Institute gGmbH</a>. Please feel free to stop by from time to time to see my progress.</motion.p>
          
          <motion.p initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.95}}>Born in the United States, I grew up traveling back and forth between Taipei, Los Angeles and Columbus. I am fluent in both Mandarin and English. And now adding German to that list (not counting programming languages here).</motion.p>
      </div>

      <motion.h2 className="skills"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.25, delay: 1}}>
                     SKILLS & TOOLS
      </motion.h2>

      <div className="skills-wrapper">

        <motion.div className="html-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.15 }} >
            <HtmlLogo className="html icon" />
            <p className="icon-text">HTML</p>
        </motion.div>

        <motion.div className="css-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.25 }} >
            <CssLogo className="css icon" />
            <p className="icon-text">CSS</p>
        </motion.div>
        
        <motion.div className="js-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.35 }} >
            <JSLogo className="js icon" />
            <p className="icon-text">Javascript</p>
        </motion.div>

        <motion.div className="react-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.45 }} >
            <ReactLogo className="react icon" />
            <p className="icon-text">React</p>
        </motion.div>

        <motion.div className="nodejs-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.55 }} >
            <NodeJSLogo className="nodejs icon"/>
            <p className="icon-text">Node JS</p>
        </motion.div>

        <motion.div className="express-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.65 }} >
            <ExpressLogo className="express icon" fill={isTheme? "black" : "#FFFFFF"} stroke={isTheme? "black" : "#FFFFFF"}/>
            <p className="icon-text">Express</p>
        </motion.div>

        <motion.div className="mongo-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.75 }} >
            <MongoLogo className="mongo icon" />
            <p className="icon-text">MongoDB</p>
        </motion.div>

        <motion.div className="firebase-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.85 }} >
            <FirebaseLogo className="firebase icon" />
            <p className="icon-text">Firebase</p>
        </motion.div>

        <motion.div className="postman-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.95 }} >
            <PostmanLogo className="postman icon" />
            <p className="icon-text">Postman</p>
        </motion.div>

        <motion.div className="sass-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2 }} >
            <SassLogo className="sass icon" />
            <p className="icon-text">Sass</p>
        </motion.div>

        <motion.div className="bootstrap-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.05 }} >
            <BootstrapLogo className="bootstrap icon" fill="#7853B2" stroke="#7853B2"/>
            <p className="icon-text">Bootstrap</p>
        </motion.div>

        <motion.div className="mui-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.1 }} >
            <MUILogo className="mui icon" />
            <p className="icon-text">Material UI</p>
        </motion.div>

        <motion.div className="framer-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.15 }} >
            <FramerLogo className="framer icon" />
            <p className="icon-text">Framer Motion</p>
        </motion.div>

        <motion.div className="figma-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.2 }} >
            <FigmaLogo className="figma icon" />
            <p className="icon-text">Figma</p>
        </motion.div>

        <motion.div className="jira-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.25 }} >
            <JiraLogo className="jira icon" />
            <p className="icon-text">Jira</p>
        </motion.div>

        <motion.div className="github-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.3 }} >
            <GithubLogo className="github icon" fill={isTheme? "black" : "#FFFFFF"}/>
            <p className="icon-text">GitHub</p>
        </motion.div>

        <motion.div className="illustrator-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.35 }} >
            <IllustratorLogo className="illustrator icon" />
            <p className="icon-text">Illustrator</p>
        </motion.div>

        <motion.div className="photoshop-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.45 }} >
            <PhotoshopLogo className="photoshop icon" />
            <p className="icon-text">Photoshop</p>
        </motion.div>

        <motion.div className="indesign-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.55 }} >
            <IndesignLogo className="indesign icon" />
            <p className="icon-text">InDesign</p>
        </motion.div>
      </div>
    </section>
  );
}
