import '../components/UI/Resume.css';

const ResumePage = () => {
    return (
        <section id = "resume">
            <h2>Resume</h2>
            <p>Download my resume</p>

            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>Phone/Tablet Support</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>MySQL</li>
                <li>Express</li>
                <li>Insomnia</li>
                <li>PHP</li>
            </ul>
        </section>
    );
}

export default ResumePage;