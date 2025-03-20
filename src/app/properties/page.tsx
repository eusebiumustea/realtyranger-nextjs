import getPropertiesList from "@/cached/get-properties-list";
import { authValidation } from "@/helpers/auth";
import { FilterSection, PropertiesList, ScreenOverlay } from "@/ui-components";

export default async function Properties() {
  await authValidation();
  const properties = await getPropertiesList();
  return (
    <div className="flex pb-6 flex-col justify-center items-center gap-1 sm:gap-4">
      <ScreenOverlay
        subtitle="Over 50 years of reliable property management experience."
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/61/cluj-napoca.jpg?w=1400&h=1400&s=1"
        title="THE PLACES PEOPLE CALL HOME"
      >
        <FilterSection />
      </ScreenOverlay>

      <PropertiesList data={properties} />
    </div>
  );
}
