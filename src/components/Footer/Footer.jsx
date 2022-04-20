import { useContext } from 'react';
// Icons:
import {ReactComponent as Email} from '../../icons/paper-plane-solid.svg';
import {ReactComponent as Twitter} from '../../icons/twitter-brands.svg'
import {ReactComponent as Instagram} from '../../icons/instagram-brands.svg'
import {ReactComponent as GitHub} from '../../icons/github-alt-brands.svg'
import {ReactComponent as Linkedin} from '../../icons/linkedin-brands.svg'
// Custom Hooks
import useWindowDimensions from '../../customHooks/useWindowDimensions.jsx';
// Context
import { LandingContext } from '../../contexts/LandingContext';
// Styles & Effects
import './Footer.scss'


export default function Footer() {
    const { isTheme } = useContext(LandingContext)
    const { height, width } = useWindowDimensions();

    return (
        <footer>

            <div className="icons-wrapper">
                <a href="mailto:ashleyjiang4@gmail.com">
                    <Email className='social-icon email' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                </a>
                <a href="https://twitter.com/ashhhleyhere" rel="noreferrer" target="_blank">
                    <Twitter className='social-icon twitter' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                </a>
                
                <a href="https://www.instagram.com/heyitsjustashleyhere/" rel="noreferrer" target="_blank">
                    <Instagram className='social-icon instagram' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                </a>

                <a href="https://github.com/heyitsashleyhere" rel="noreferrer" target="_blank">
                    <GitHub className='social-icon github' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                </a>
                
                <a href="https://www.linkedin.com/in/ashley-jiang-b623a9ab/" rel="noreferrer" target="_blank">
                    <Linkedin className='social-icon linkedin' fill={isTheme? "#282828" : "#FFFFFF"} stroke={isTheme? "#282828" : "#FFFFFF"}/>
                </a>      
            </div>

            <p>Ashley Jiang &copy; 2022</p>
        </footer>
    )
}