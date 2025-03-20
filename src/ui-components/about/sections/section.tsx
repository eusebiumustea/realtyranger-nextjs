import { Description } from "./description";
interface SectionProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}
export function Section({ title, text, image, reverse = false }: SectionProps) {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }  justify-center items-center mb-8 xl:mb-0`}
    >
      <img
        className="w-[100%] h-auto min-h-[160px] sm:w-[90%] md:w-[597px]  sm:h-[400px] object-cover"
        src={image}
      />
      <Description title={title} text={text} />
    </div>
  );
}
