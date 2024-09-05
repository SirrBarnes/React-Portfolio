import '../components/UI/Portfolio.css';

const projectCards = [
    {
        id: 1,
        title: 'Animal Shelter Website',
        description: 'project 1',
        image: '',
        link: 'https://github.com/SirrBarnes/Animal-Shelter-Project1'
    },
    {
        id: 2,
        title: 'Employee Tracker',
        description: 'project 1',
        image: '',
        link: 'https://github.com/SirrBarnes/Employee-Tracker'
    },
    {
        id: 3,
        title: 'Vehicle Builder',
        description: 'project 1',
        image: '',
        link: 'https://github.com/SirrBarnes/Vehicle-Builder'
    },
    {
        id: 4,
        title: 'Personal Blog Mockup',
        description: 'project 1',
        image: '',
        link: 'https://github.com/SirrBarnes/Personal-Blog-Mockup'
    },
    {
        id: 5,
        title: 'Employee Payroll Tracker',
        description: 'project 1',
        image: '',
        link: 'https://github.com/SirrBarnes/Employee-Payroll-Tracker'
    },
    {
        id: 6,
        title: 'Professional README Generator',
        description: 'project 1',
        image: '',
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
                        <img src='' alt='' className='' />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioPage;