import { authValidation } from "@/helpers/auth";
import { buttonTheme } from "@/theme/button";
import {
  About,
  FeaturedProperties,
  FilterSection,
  ScreenOverlay,
} from "@/ui-components";
import Link from "next/link";

export default async function Home() {
  await authValidation();
  return (
    <>
      <ScreenOverlay
        subtitle="Over 50 years of reliable property management experience."
        image="https://www.momondo.ro/rimg/dimg/81/ee/e112fbd1-city-27633-1656c96ae00.jpg?width=1366&height=768&xhint=1395&yhint=650&crop=true"
        title="THE PLACES PEOPLE CALL HOME"
      >
        <Link className={buttonTheme({ variant: "primary" })} href={"/about"}>
          learn more
        </Link>
        <FilterSection />
      </ScreenOverlay>

      <FeaturedProperties />

      <About />
    </>
  );
}
