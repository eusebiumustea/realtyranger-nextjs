import { PropsWithChildren } from "react";
import { WelcomeMessage } from "../welcome-message";
interface ScreenOverlayProps {
  image: string;
  title: string;
  subtitle: string;
}
export function ScreenOverlay({
  image,
  title,
  subtitle,
  children,
}: PropsWithChildren<ScreenOverlayProps>) {
  return (
    <>
      <div
        className={`w-full top-0 left-0 h-screen sm:h-[60%] absolute -z-20 bg-black opacity-[0.35] select-none`}
      />
      <img
        className={`w-full top-0 left-0 h-screen sm:h-[60%] object-cover absolute -z-30 select-none`}
        src={image}
        loading="lazy"
      />
      <div
        className={`flex sm:h-[60vh] h-screen flex-col items-center w-full gap-5 md:gap-12 justify-center p-4`}
      >
        <WelcomeMessage subtitle={subtitle} title={title} />
        {children}
      </div>
    </>
  );
}
