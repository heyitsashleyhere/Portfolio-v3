import { motion } from "framer-motion"
import { useContext } from "react";
import { LandingContext } from "../../contexts/LandingContext";
import './LandingPage.scss';

export default function LandingPage() {
    const { isTheme } = useContext(LandingContext)
    
    return (
        <section className={isTheme ? "LandingPage" : "LandingPage dark-theme"}>
            <h1>Hey there <span className="wave-emoji">👋</span>
            </h1>
            <p>it's <span className="name">Ashley Jiang</span></p>
            
            <div className="statement">
                <div>I am a</div>
                <motion.div className="noun" >
                    <motion.div className="webdev"
                                animate={{ opacity: [0, 1, 0], y: [-50, 0, 0, 50] }}
                                transition={{ repeat: Infinity, repeatDelay: 8, duration: 2, times: [0, 0.5, 0.7, 1] }}>web developer</motion.div>
                    <motion.div className="mother"
                                animate={{ opacity: [0, 1, 0], y: [-50, 0, 0, 50] }}
                                transition={{ delay: 2, repeat: Infinity, repeatDelay: 8, duration: 2, times: [0, 0.5, 0.7, 1] }}>mother</motion.div>
                    <motion.div className="catlover"
                                animate={{ opacity: [0, 1, 0], y: [-50, 0, 0, 50] }}
                                transition={{ delay: 4, repeat: Infinity, repeatDelay: 8, duration: 2, times: [0, 0.5, 0.7, 1] }}>cat lover</motion.div>
                    <motion.div className="problemsolver"
                                animate={{ opacity: [0, 1, 0], y: [-50, 0, 0, 50] }}
                                transition={{ delay: 6, repeat: Infinity, repeatDelay: 8, duration: 2, times: [0, 0.5, 0.7, 1] }}>problem solver</motion.div>
                    <motion.div className="sweettooth"
                                animate={{ opacity: [0, 1, 0], y: [-50, 0, 0, 50] }}
                                transition={{ delay: 8, repeat: Infinity, repeatDelay: 8, duration: 2, times: [0, 0.5, 0.7, 1] }}>sweet tooth</motion.div>
                </motion.div>
            </div>
        </section>
    )
}