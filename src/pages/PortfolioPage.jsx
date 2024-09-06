import '../components/UI/Portfolio.css';

const projectCards = [
    {
        id: 1,
        title: 'Animal Shelter Website',
        description: 'This app is a mock animal shelter website that enables the user to view, checkout and adopt pets as if it were from an actual adoption site. ',
        image: "src/images/AnimalPage.PNG",
        link: 'https://github.com/SirrBarnes/Animal-Shelter-Project1'
    },
    {
        id: 2,
        title: 'Employee Tracker',
        description: "This app is a command-line application made from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.",
        image: 'src/images/Employee-Tracker.png',
        link: 'https://github.com/SirrBarnes/Employee-Tracker'
    },
    {
        id: 3,
        title: 'Vehicle Builder',
        description: "This app prompts the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application",
        image: 'src/images/Vehicle-Builder.png',
        link: 'https://github.com/SirrBarnes/Vehicle-Builder'
    },
    {
        id: 4,
        title: 'Personal Blog',
        description: "This app includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle",
        image: 'src/images/Personal-Blog.png',
        link: 'https://github.com/SirrBarnes/Personal-Blog-Mockup'
    },
    {
        id: 5,
        title: 'Employee Payroll Tracker',
        description: 'This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.',
        image: 'src/images/Employee-Payroll-Tracker.png',
        link: 'https://github.com/SirrBarnes/Employee-Payroll-Tracker'
    },
    {
        id: 6,
        title: 'Professional README Generator',
        description: "This app is designed to create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package",
        image: 'src/images/ReadME-Generator.png',
        link: 'https://github.com/SirrBarnes/Professional-README-Generator'
    }
];

const PortfolioPage = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div>
                {projectCards.map((project) => (
                    <div className="project-card" key={project.id}
                        onClick={() => window.open(project.link,'_blank')}>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <img src={project.image} alt={project.title} className='cardImage' />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioPage;