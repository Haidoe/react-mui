const services = [
  {
    name: "Custom Software Development",
    url: "/customsoftware",
  },
  {
    name: "Mobile App Development",
    url: "/mobileapps",
  },
  {
    name: "Website Development",
    url: "/websites",
  },
];

const revolution = [
  {
    name: "Vision",
    url: "/revolution",
  },
  {
    name: "Technology",
    url: "/revolution",
  },
  {
    name: "Process",
    url: "/revolution",
  },
];

const about = [
  {
    name: "Mission Statement",
    url: "/about",
  },
  {
    name: "Missionary",
    url: "/about",
  },
  {
    name: "Team",
    url: "/about",
  },
];

export const mainRoutes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
    child: services,
  },
  {
    name: "The Revolution",
    url: "/revolution",
    child: revolution,
  },
  {
    name: "About Us",
    url: "/about",
    child: about,
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

export const menuServicesRoutes = [
  {
    name: "Services",
    url: "/services",
  },
  ...services,
];
