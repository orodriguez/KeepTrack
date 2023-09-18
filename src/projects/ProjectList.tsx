import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface IProjectListProps {
    projects: Project[]
}

const ProjectList = ({ projects }: IProjectListProps) =>
    <ul className="row">
        {projects.map(project => (
            <div key={project.id} className="cols-sm">
                <ProjectCard project={project} />
            </div>
        ))}
    </ul>

export default ProjectList;