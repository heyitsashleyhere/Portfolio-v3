import {ReactComponent as HtmlLogo} from '../../icons/html.svg';
import {ReactComponent as CssLogo} from '../../icons/css3.svg';
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
import './AboutMe.scss';
import { motion } from "framer-motion";
import { useContext } from "react";
import { LandingContext } from '../../contexts/LandingContext';
import Projects from '../Projects/Projects';

export default function AboutMe() {
    const { isTheme } = useContext(LandingContext)
    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.5
    //       }
    //     }
    //   }
      
    // const item = {
    //     hidden: { opacity: 0 , y: 5},
    //     show: { opacity: 1, y: 0 }
    // }

  return (
    <section className={isTheme? "AboutMe" : "AboutMe dark-theme"}>
      <motion.div className="about" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.5}}>
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
                    transition={{ delay: 1}}>After moving to Germany, starting a family and COVID hitting the world, I started my web development journey in 2021.</motion.p>
          
          <motion.p initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.25}}>Born in the United States, I grew up traveling back and forth between Taipei, Los Angeles and Columbus. I am fluent in both Mandarin and English. And now adding German to that list (not counting programming languages here).</motion.p>
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
                    transition={{ duration: 0.25, delay: 1.25 }} >
            <HtmlLogo className="html icon" />
            <p className="icon-text">HTML</p>
        </motion.div>

        <motion.div className="css-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.5 }} >
            <CssLogo className="css icon" />
            <p className="icon-text">CSS</p>
        </motion.div>
        
        <motion.div className="sass-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 1.75 }} >
            <SassLogo className="sass icon" />
            <p className="icon-text">Sass</p>
        </motion.div>

        <motion.div className="bootstrap-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2 }} >
            <BootstrapLogo className="bootstrap icon" fill="#7853B2" stroke="#7853B2"/>
            <p className="icon-text">Bootstrap</p>
        </motion.div>

        <motion.div className="js-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.25 }} >
            <JSLogo className="js icon" />
            <p className="icon-text">Javascript</p>
        </motion.div>

        <motion.div className="react-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.5 }} >
            <ReactLogo className="react icon" />
            <p className="icon-text">React</p>
        </motion.div>

        <motion.div className="express-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 2.75 }} >
            <ExpressLogo className="express icon" />
            <p className="icon-text">express</p>
        </motion.div>

        <motion.div className="mongo-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 3 }} >
            <MongoLogo className="mongo icon" />
            <p className="icon-text">MongoDB</p>
        </motion.div>

        <motion.div className="postman-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 3.25 }} >
            <PostmanLogo className="postman icon" />
            <p className="icon-text">Postman</p>
        </motion.div>

        <motion.div className="figma-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 3.5 }} >
            <FigmaLogo className="figma icon" />
            <p className="icon-text">figma</p>
        </motion.div>

        <motion.div className="jira-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 3.75 }} >
            <JiraLogo className="jira icon" />
            <p className="icon-text">Jira</p>
        </motion.div>

        <motion.div className="github-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 4 }} >
            <GithubLogo className="github icon" />
            <p className="icon-text">GitHub</p>
        </motion.div>

        <motion.div className="illustrator-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 4.25 }} >
            <IllustratorLogo className="illustrator icon" />
            <p className="icon-text">Illustrator</p>
        </motion.div>

        <motion.div className="photoshop-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 4.5 }} >
            <PhotoshopLogo className="photoshop icon" />
            <p className="icon-text">Photoshop</p>
        </motion.div>

        <motion.div className="indesign-wrapper" 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 4.75 }} >
            <IndesignLogo className="indesign icon" />
            <p className="icon-text">InDesign</p>
        </motion.div>
      </div>

      <Projects />
    </section>
  );
}
