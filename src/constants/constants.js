import { InnovationIcon,TechnologyIcon, DesignIcon } from "../../public";

export const navMenu = [
    {
        title: "Home",
        url: "#home"
    },
    {
        title: "About Us",
        url: "#about"
    },
    {
        title: "Tech",
        url: "#tech"
    },
    {
        title: "Contact",
        url: "#contact"
    },
]


export const HeroBelowCardData = [
    {
      btnTitle:"Innovation",
      iconUrl: InnovationIcon,
      title: "Innovation Shaped by Design",
    },
    {
      btnTitle:"Design",
      iconUrl: DesignIcon,
      title: "Crafting Tomorrow’s Tech",
    },
    {
      btnTitle: "Technology",
      iconUrl: TechnologyIcon,
      title: "Functionality Meets Aesthetic",
    },
   
  ];
  

 
// Change hover shadow color from here
const createRgbaColor = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;
//  0.3 is the alpha value here for shadow- opacity
export const rgbaColor = createRgbaColor(147,51,234, 0.3);