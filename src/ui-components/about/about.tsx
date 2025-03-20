import { DescriptionTypography } from "../description-typography";
import buildingImg from "./../../../public/Building.jpg";
import financialImg from "./../../../public/Financial.jpg";
import mkImg from "./../../../public/mk.jpg";
import propertyImg from "./../../../public/Property.jpg";
import { CaseStudies } from "./case-studies/case-studies";
import { NewsCard } from "./news-card";
import { Sections } from "./sections";

const data = [
  { uri: propertyImg, label: "Property Management" },
  { uri: financialImg, label: "Financial Services" },
  { uri: mkImg, label: "Marketing" },
  { uri: buildingImg, label: "Building & Facility Services" },
];
export function About() {
  return (
    <>
      <div
        id="about"
        className="w-full my-12 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 gap-y-8"
      >
        <div className="flex flex-col items-center gap-11">
          <DescriptionTypography
            titleProps={{ color: "#0C4653" }}
            title="Engagement"
            descriptionClass="pr-4 md:pr-24 max-w-[800px]"
            description="A premier asset and property management company, we’re proud to offer Northern California over 50 years experience
managing a diverse portfolio of commercial and multifamily properties.We’re renowned for our hands-on management approach, marketing know-how and in-depth knowledge of submarkets
throughout the region. It’s what’s allowed us to create unique strategies that are truly custom to each property."
          />
          <DescriptionTypography
            descriptionClass="pr-4 md:pr-24 max-w-[800px]"
            titleProps={{ color: "#0C4653" }}
            title="Engagement"
            description="A premier asset and property management company, we’re proud to offer Northern California over 50 years experience
managing a diverse portfolio of commercial and multifamily properties.We’re renowned for our hands-on management approach, marketing know-how and in-depth knowledge of submarkets
throughout the region. It’s what’s allowed us to create unique strategies that are truly custom to each property."
          />
        </div>
        <NewsCard
          previewNews={[
            { id: 1, title: "Spring 2023 Newsletter", date: "March 24, 2023" },
          ]}
        />
      </div>
      <div className="w-full bg-[#0C4653] gap-y-14 flex flex-col items-center py-24">
        <h1 className="uppercase font-inter text-base text-white font-bold">
          Our Expertise and Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-11">
          {data.map((item, i) => (
            <div className="flex flex-col items-center gap-2" key={i}>
              <img
                src={item.uri.src}
                alt=""
                className="w-[120px] h-[120px] object-cover rounded-full"
              />
              <h1 className="font-bold text-xs text-white font-inter uppercase text-center">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Sections />
      <CaseStudies />
    </>
  );
}
