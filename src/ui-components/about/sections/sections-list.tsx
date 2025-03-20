import { Section } from "./section";
const data = [
  {
    title: "Multifamily",
    image:
      "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
    text: "We don’t just manage properties, we manage the places people call home. And with over four decades of multifamily management in Northern California, we know what it takes to offer a living experience that puts your residents in good hands.",
  },
  {
    title: "Multifamily",
    image:
      "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg",
    text: "We don’t just manage properties, we manage the places people call home. And with over four decades of multifamily management in Northern California, we know what it takes to offer a living experience that puts your residents in good hands.",
  },
];
export function Sections() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {data.map((item, i) => (
        <Section reverse={i % 2 !== 0} {...item} key={i} />
      ))}
    </div>
  );
}
