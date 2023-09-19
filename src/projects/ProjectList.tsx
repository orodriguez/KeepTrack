import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface IProjectListProps {
    projects: Project[]
}

const ProjectList = ({ projects }: IProjectListProps) =>
    <ul className="row">
        {projects.map(project => (
            <div key={project.id} className="cols-sm">
                <ProjectCard project={project} />
                <ProjectForm />
            </div>
        ))}
    </ul>

export default ProjectList;