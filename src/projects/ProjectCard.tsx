import { Project } from './Project';

interface IProjectCardProps {
    project: Project
};

const ProjectCard = ({ project }: IProjectCardProps) => <div className="card">
    <img src={project.imageUrl} alt={project.name} />
    <section className="section dark">
        <h5 className="strong">
            <strong>{project.name}</strong>
        </h5>
        <p>{cropDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
            <span className="icon-edit"></span>
            Edit
        </button>
    </section>
</div>;

const cropDescription = (description: string) =>
    description.length <= 60 ? description : description.substring(0, 60) + '...';

const handleEditClick = (project: Project) => console.log(project);

export default ProjectCard;