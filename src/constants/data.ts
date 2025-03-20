import { PropertyCardProps } from "../ui-components";
const images = [
  "https://www.thespruce.com/thmb/9T1pfeh6aJr_qah3-SDME9oBrow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DesireeBurns_Boston_1Franklin_1-1714de8139854b3bbc2ffcdbfd333157.jpg",
  "https://www.mydomaine.com/thmb/K954gy6jiUUckgG6fr07vxI_yi4=/2000x0/filters:no_upscale():strip_icc()/brickell-heigh-miami-001-533de84f9b84480c8a3ee2b6bc748dbb.jpg",
  "https://st.hzcdn.com/simgs/pictures/living-rooms/euro-studio-munroe-img~3b9162610f04dc81_14-5943-1-a505057.jpg",
  "https://st.hzcdn.com/simgs/pictures/living-rooms/20th-street-residence-nick-noyes-architecture-img~9c4187d500a54dca_14-5430-1-e8fbfb3.jpg",
  "https://deavita.net/wp-content/uploads/2015/05/Elegant-living-room-chic-loft-apartment-large-sofa-set-glass-coffee-table-exposed-ceiling-beams.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrCV7e8wzHpwmfwkVz5SYNw6lKEsCllRSUybEZ9VInf-nq4GAWy3J6FT9GCzvHzHiXZY&usqp=CAU",
  "https://i.pinimg.com/550x/0c/9d/f0/0c9df0294b2e8d163b4b2ea961635841.jpg",
];
export const propertiesData: PropertyCardProps[] = new Array(500).fill({
  location: "APARTSMENTS - Queens",
  price: "550,000$",
  image:
    "https://st.hzcdn.com/simgs/pictures/living-rooms/20th-street-residence-nick-noyes-architecture-img~9c4187d500a54dca_14-5430-1-e8fbfb3.jpg",
  title: "White Stylish Loft",
  description:
    "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
  dealType: "rent",
  propertyDimensions: { size: 250, bathrooms: 1, bedrooms: 3 },
});
