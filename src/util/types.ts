export type articleListType = {
  id: number;
  image: string;
  propertyType: string;
  date: string;
  heading: string;
};

export type smallCardContentType = {
  id: number;
  logo: string;
  title: string;
  subtitle: string;
};

export type achievementType = {
  id: number;
  title: string;
  subtitle: string;
};

export type linksType = { id: number; title: string };

export type footerContentType = {
  id: number;
  title: string;
  links: linksType[];
};

export type iconsType = {
  id: number;
  link: string;
  icon: JSX.Element;
};
