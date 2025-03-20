import { Title } from "../title";

interface DescriptionProps {
  title: string;
  description: string;
  titleProps?: any;
  descriptionClass?: string;
}
export function DescriptionTypography({
  title,
  description,
  titleProps,
  descriptionClass,
}: DescriptionProps) {
  return (
    <div className={"flex flex-col items-start p-4 2xl:p-0"}>
      <Title {...titleProps}>{title}</Title>
      <p
        className={
          "font-inter text-[16px] sm:text-[20px] font-normal text-[#555555] " +
          descriptionClass
        }
      >
        {description}
      </p>
    </div>
  );
}
