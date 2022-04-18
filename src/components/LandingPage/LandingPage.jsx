import { motion } from "framer-motion"
import './LandingPage.scss';

export default function LandingPage() {

    
    return (
        <section className="LandingPage">
            <h1>Hey there <span className="wave-emoji">👋</span></h1>
            <p>it's <span className="name">Ashley Jiang</span>,</p>
            
            <div className="statement">
                a 
                    <div>web developer</div>
                    {/* <div>mother</div>
                    <div>cat lover</div>
                    <div>problem solver</div>
                    <div>sweet tooth</div> */}
            </div>
 

        </section>
    )
}