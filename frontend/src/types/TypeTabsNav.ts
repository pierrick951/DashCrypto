export type tabstype = {
  id: string;
  text: string;
  ico: JSX.Element;
  click: () => Promise<void>;
}[];

export type tabsNavtype = {
  id: string;
  text: string;
  ico: JSX.Element;
  href: string;
  index: number;
}[];

export type buttonContentType = {
  id: string;
  text: string;
  image: string;
}[];
