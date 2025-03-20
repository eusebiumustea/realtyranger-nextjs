import { Title } from "../title";

interface DescriptionProps {
  title: string;
  list: string[];
}
export function FeaturesTypography({ title, list }: DescriptionProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-4 p-4 2xl:p-0 self-start">
      <Title>{title}</Title>
      <ul className="list-disc p-4">
        {list.map((e, i) => (
          <li
            className="font-inter text-[15px] font-normal text-[#555555]"
            key={i}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
