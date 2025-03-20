interface WelcomeMessageProps {
  title: string;
  subtitle: string;
}

export function WelcomeMessage({ title, subtitle }: WelcomeMessageProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl sm:text-5xl  text-white font-inter text-center">
        {title}
      </h1>
      <h1 className="font-ptsans text-[16px] sm:text-xl italic text-white">
        {subtitle}
      </h1>
    </div>
  );
}
