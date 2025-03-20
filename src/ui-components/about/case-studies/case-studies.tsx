import { StudyCard } from "./study-card";

export function CaseStudies() {
  return (
    <>
      <h1 className="text-center uppercase text-[44px] text-[#0C4653] font-inter my-12">
        case studies
      </h1>
      <div className="flex flex-col gap-12 items-center md:flex-row justify-center">
        <StudyCard
          title="SUTTER NORTH BAY HEALTH PLAZA, SANTA ROSA, CA"
          description="The Commercial Division of Woodmont Real Estate Services was hired for property and construction management by an investor who purchased this Santa Rosa building that was antiquated and had been empty for many years."
        />
        <StudyCard
          title="SUTTER NORTH BAY HEALTH PLAZA, SANTA ROSA, CA"
          description="The Commercial Division of Woodmont Real Estate Services was hired for property and construction management by an investor who purchased this Santa Rosa building that was antiquated and had been empty for many years."
        />
      </div>
    </>
  );
}
