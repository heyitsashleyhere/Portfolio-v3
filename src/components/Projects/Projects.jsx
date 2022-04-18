import './Projects.scss';

export default function Projects() {
    return (
        <section className="Projects">
            <h2>FEATURED PROJECTS</h2>
            <div className="project-wrapper">
                <section className="text-wrapper">
                    <h4>ICT Team Project</h4>
                    <p>Ideas Come Together is a X days SPA</p>
                    <ul className="tools">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Framer Motion</li>
                        <li>Excalidraw</li>
                        <li>Figma</li>
                    </ul>
                </section>
                <div className="links">
                    <span>GitHub</span>
                    <span>deployment</span>
                </div>
            </div>

            <div className="project-wrapper">
                <section className="text-wrapper">
                    <h4>Weather App</h4>
                    <p>Ideas Come Together is a X days SPA</p>
                    <ul className="tools">
                        <li>React</li>
                        <li>OpenWeatherMap API</li>
                        <li>GitHub Pages</li>
                    </ul>
                </section>
                <div className="links">
                    <span>GitHub</span>
                    <span>deployment</span>
                </div>
            </div>
        </section>
    )
}