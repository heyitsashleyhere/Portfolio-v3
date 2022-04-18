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
import './AboutMe.scss'

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <h2 className="about">ABOUT</h2>
      <div className="about-wrapper">
          <p>My academic background is in Industrial Design where I have worked on a variety of projects across different sectors, including branding, market research, marketing, consumer packaging, children's toys, women accessories and clothing.</p>
          
          <p>Ah yes, like many people out there, I made the leap for a career switch. After moving to Germany, starting a family and COVID hitting the world, I started my web development journey in 2021.</p>
          
          <p>Born in the United States, I grew up traveling back and forth between Taipei, Los Angeles and Columbus. I am fluent in both Mandarin and English. And now adding German to that list (not counting programming languages here).</p>
      </div>

      <h2 className="skills">SKILLS & TOOLS</h2>
      <div className="skills-wrapper">
        <div className="html-wrapper">
            <HtmlLogo className="html icon" />
            <p className="icon-text">HTML</p>
        </div>

        <div className="css-wrapper">
            <CssLogo className="css icon" />
            <p className="icon-text">CSS</p>
        </div>
        
        <div className="sass-wrapper">
            <SassLogo className="sass icon" />
            <p className="icon-text">Sass</p>
        </div>

        <div className="bootstrap-wrapper">
            <BootstrapLogo className="bootstrap icon" fill="#7853B2" stroke="#7853B2"/>
            <p className="icon-text">Bootstrap</p>
        </div>

        <div className="js-wrapper">
            <JSLogo className="js icon" />
            <p className="icon-text">Javascript</p>
        </div>

        <div className="react-wrapper">
            <ReactLogo className="react icon" />
            <p className="icon-text">React</p>
        </div>

        <div className="express-wrapper">
            <ExpressLogo className="express icon" />
            <p className="icon-text">express</p>
        </div>

        <div className="mongo-wrapper">
            <MongoLogo className="mongo icon" />
            <p className="icon-text">MongoDB</p>
        </div>

        <div className="postman-wrapper">
            <PostmanLogo className="postman icon" />
            <p className="icon-text">Postman</p>
        </div>

        <div className="figma-wrapper">
            <FigmaLogo className="figma icon" />
            <p className="icon-text">figma</p>
        </div>

        <div className="jira-wrapper">
            <JiraLogo className="jira icon" />
            <p className="icon-text">Jira</p>
        </div>

        <div className="github-wrapper">
            <GithubLogo className="github icon" />
            <p className="icon-text">GitHub</p>
        </div>

        <div className="illustrator-wrapper">
            <IllustratorLogo className="illustrator icon" />
            <p className="icon-text">Illustrator</p>
        </div>

        <div className="photoshop-wrapper">
            <PhotoshopLogo className="photoshop icon" />
            <p className="icon-text">Photoshop</p>
        </div>

        <div className="indesign-wrapper">
            <IndesignLogo className="indesign icon" />
            <p className="icon-text">InDesign</p>
        </div>
      </div>
    </section>
  );
}
