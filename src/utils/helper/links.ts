interface Link {
  label: string;
  uri: string;
}

const arrayToObject = (array: Link[]): Record<string, string> =>
  array.reduce((obj, item) => {
    const truncatedLabel = item.label
      .slice(0, 10)
      .replace(/\s/g, "_")
      .toLowerCase();
    obj[truncatedLabel] = item.uri;
    return obj;
  }, {} as Record<string, string>); // Specify the type of the initial object as Record<string, string>

export const links: Link[] = [
    {
      label: "Home",
      uri: "/",
    },
    {
      label: "About",
      uri: "/about",
    },
    {
      label: "News",
      uri: "/crypto-news",
    },
    {
      label: "Services",
      uri: "/services",
    },
    {
      label: "Contact Us",
      uri: "/contact-us",
    },
  ],
  linksObj = arrayToObject(links),
  headerLinks: Link[] = [
    {
      label: "Home",
      uri: "/",
    },
    {
      label: "About",
      uri: "/about",
    },
    {
      label: "News",
      uri: "/crypto-news",
    },
    {
      label: "Services",
      uri: "/services",
    },
    {
      label: "Contact Us",
      uri: "/contact-us",
    },
  ],
  _links: {
    contact_us: any;
    home: string;
    about: string;
    news: string;
    services: string;
  } = {
    home: "/",
    about: "/about",
    news: "/crypto-news",
    services: "/services",
    contact_us: "/contact-us",
  };
