import { motion } from "framer-motion"
import './LandingPage.scss';

export default function LandingPage() {
    
    return (
        <motion.section className="LandingPage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5}}>
            <h1>Hey there <span className="wave-emoji">👋</span>
            </h1>
            <p>it's <span className="name"><strong>Ashley Jiang</strong></span></p>
            
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
        </motion.section>
    )
}