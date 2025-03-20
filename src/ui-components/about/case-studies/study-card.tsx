interface StudyCardProps {
  title: string;
  description: string;
}
export function StudyCard({ title, description }: StudyCardProps) {
  return (
    <div className="bg-[#0A3842] p-6 sm:p-14 flex flex-col max-w-[570px]">
      <h1 className="text-white text-3xl font-inter font-medium">{title}</h1>
      <h1 className="uppercase text-white font-inter text-base mt-8 mb-11">
        Challange:
      </h1>
      <p className="text-white font-inter text-base">{description}</p>
      <button className="uppercase font-light text-sm text-white self-end mt-14">
        Read more
      </button>
    </div>
  );
}
