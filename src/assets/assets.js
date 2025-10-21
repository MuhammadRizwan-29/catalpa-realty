import white_logo from "./img/logo-white.png";
import favicon from "./img/favicon.png";

import home_hero from "./img/background/home-hero-bg.jpg";
import about_bg from "./img/background/about-us-bg.jpg";
import pool_bg from "./img/background/pool-bg.jpg";
import home_about_img from "./img/about-img.jpg";
import about_hero from "./img/about-hero.jpg";
import about_lg from "./img/about-lg.jpg";
import properties_hero from "./img/properties-hero.jpg";
import window_sofa from "./img/window-sofa.jpg";
import agents_hero from "./img/background/agents-hero.jpg";
import faq_hero from "./img/background/faq-hero.jpg";
import contact_hero from "./img/background/contact-hero.jpg";

import danielle from "./img/agents/danielle-pena.jpg";
import mark from "./img/agents/mark-obrien.jpg";
import russell from "./img/agents/russell-douglas.jpg";
import eugene from "./img/agents/eugene-berry.jpg";
import debra from "./img/agents/debra-gilbert.jpg";
import edward from "./img/agents/edward-alvarez.jpg";
import billy from "./img/agents/billy-allen.jpg";
import roger from "./img/agents/roger-harris.jpg";

import client1 from "./img/clients-logo/logo1.png";
import client2 from "./img/clients-logo/logo2.png";
import client3 from "./img/clients-logo/logo3.png";
import client4 from "./img/clients-logo/logo4.png";
import client5 from "./img/clients-logo/logo5.png";
import client6 from "./img/clients-logo/logo6.png";

/* Icons */
import telephoneIcon from "./img/icons/telephone.png";
import mailIcon from "./img/icons/email.png";
import residential from "./img/icons/residential.png";
import commercial from "./img/icons/commercial.png";
import menu from "./img/icons/menu.png";
import menu_close from "./img/icons/menu_close.png";
import mobile_icon from "./img/icons/phone.png";
import map_icon from "./img/icons/map.png";
import building_icon_1 from "./img/icons/building-1.png";
import building_icon_2 from "./img/icons/building-2.png";
import building_icon_3 from "./img/icons/building.png";

export const assets = {
  white_logo,
  home_hero,
  about_bg,
  pool_bg,
  menu,
  menu_close,
  home_about_img,
  mobile_icon,
  map_icon,
  building_icon_1,
  building_icon_2,
  building_icon_3,
  favicon,
  about_hero,
  about_lg,
  properties_hero,
  window_sofa,
  agents_hero,
  faq_hero,
  contact_hero,
  telephoneIcon,
  mailIcon,
};

/* Property Images */
import banglo1 from "./img/property/banglo-1.jpg";
import banglo2 from "./img/property/banglo-2.jpg";
import banglo3 from "./img/property/banglo-3.jpg";
import banglo4 from "./img/property/banglo-4.jpg";
import banglo5 from "./img/property/banglo-5.jpg";
import banglo6 from "./img/property/banglo-6.jpg";

/* Apartments/Houses/Offices Data */

export const apartments = [
  {
    image: banglo1,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commerical",
    },
    title: "Awesome Apartment",
    price: "$ 5235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Offices: 20 / Baths: 6 / Sq Ft: 10450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo2,
    nature: "For Sale",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Modern Apartment",
    price: "$ 151,000",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo3,
    nature: "For Rent",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "City Center Apartment",
    price: "$ 1600/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Offices: 20 / Baths: 6 / Sq Ft: 10450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo4,
    nature: "For Sale",
    type: {
      icon: commercial,
      content: "Commerical",
    },
    title: "Gorgeous Studio Apartment",
    price: "$ 89,500",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 1 / Baths: 1 / Sq Ft: 150",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo5,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commerical",
    },
    title: "Luxury Family Apartment",
    price: "$ 1300/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 2 / Baths: 2 / Sq Ft: 725",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo6,
    nature: "For Rent",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Glamorous Apartment",
    price: "$ 1235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
];

export const houses = [
  {
    image: banglo1,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Awesome House",
    price: "$ 5235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Offices: 20 / Baths: 6 / Sq Ft: 10450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo2,
    nature: "For Sale",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Modern Home",
    price: "$ 99,900",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo3,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "City Center House",
    price: "$ 1600/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 2 / Baths: 1 / Sq Ft: 450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo4,
    nature: "For Sale",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Gorgeous House",
    price: "$ 89,500",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 1 / Baths: 1 / Sq Ft: 150",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo5,
    nature: "For Rent",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Luxury Family Home",
    price: "$ 1300/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 2 / Baths: 2 / Sq Ft: 725",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo6,
    nature: "For Rent",
    type: {
      icon: residential,
      content: "Residential",
    },
    title: "Glamorous House",
    price: "$ 1235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
];

export const offices = [
  {
    image: banglo1,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Awesome Office Space",
    price: "$ 5235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Offices: 20 / Baths: 6 / Sq Ft: 10450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo2,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Modern Office",
    price: "$ 1100/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo3,
    nature: "For Sale",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "City Center Office",
    price: "$ 160,000",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 2 / Baths: 1 / Sq Ft: 450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo4,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Studio Office",
    price: "$ 1500/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Offices: 20 / Baths: 6 / Sq Ft: 10450",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo5,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Luxury Office",
    price: "$ 1300/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 2 / Baths: 2 / Sq Ft: 725",
    button: {
      text: "Details",
      link: "#",
    },
  },
  {
    image: banglo6,
    nature: "For Rent",
    type: {
      icon: commercial,
      content: "Commercial",
    },
    title: "Glamorous Office",
    price: "$ 1235/mo",
    location: "123 Fifth Avenue, NY 10160",
    area: "Bedrooms: 3 / Baths: 2 / Sq Ft: 1450",
    button: {
      text: "Details",
      link: "#",
    },
  },
];

/* Agents Data */
export const agents = [
  {
    image: danielle,
    designation: "Chair Manager",
    name: "Danielle Pena",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: mark,
    designation: "Market Strategist",
    name: "Mark Obrien",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: russell,
    designation: "Sales Manager",
    name: "Russell Douglas",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: eugene,
    designation: "Real Estate Agent",
    name: "Eugene Berry",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: debra,
    designation: "Real Estate Agent",
    name: "Debra Gilbert",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: edward,
    designation: "Real Estate Agent",
    name: "Edward Alvarez",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: billy,
    designation: "Real Estate Agent",
    name: "Billy Allen",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
  {
    image: roger,
    designation: "Real Estate Agent",
    name: "Roger Harris",
    content:
      "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio.",
    telephone: {
      icon: telephoneIcon,
      number: "+1 910-626-85255",
    },
    email: {
      icon: mailIcon,
      mail: "contact@info.com",
    },
    button: {
      content: "Full Profile",
      link: "#",
    },
  },
];

/* Clients Logo */
export const clients = [
  {
    id: 1,
    image: client1,
    alt: "Client Logo",
  },
  {
    id: 2,
    image: client2,
    alt: "Client Logo",
  },
  {
    id: 3,
    image: client3,
    alt: "Client Logo",
  },
  {
    id: 4,
    image: client4,
    alt: "Client Logo",
  },
  {
    id: 5,
    image: client5,
    alt: "Client Logo",
  },
  {
    id: 6,
    image: client6,
    alt: "Client Logo",
  },
];
