import { Experience } from "@/domains/Experience";
import ExperienceCard from "../ExperienceCard";

interface ExperiencesTabProps {
  experiences: Experience[];
}
const ExperiencesTab: React.FC<ExperiencesTabProps> = ({ experiences }) => (
  <div className="flex flex-col items-center gap-6 mt-6">
    {experiences.map((experience) => (
      <ExperienceCard key={experience.id} {...experience} />
    ))}
  </div>
);

export default ExperiencesTab;
