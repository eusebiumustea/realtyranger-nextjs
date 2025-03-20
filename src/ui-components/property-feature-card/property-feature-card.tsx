import { ReactNode } from "react";

interface FeatureCardProps {
  name: string;
  icon: ReactNode;
}

export function PropertyFeatureCard({ name, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-1 2sm:px-8 2sm:py-3 border gap-3 border-[#0C4653] rounded-[10px]">
      <h1 className="font-inter text-base text-[#0C4653] font-normal">
        {name}
      </h1>
      {icon}
    </div>
  );
}
