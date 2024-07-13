import {
  achievementType,
  articleListType,
  footerContentType,
  iconsType,
  smallCardContentType,
} from "./types";
import homelogo from "../assets/homelogo.png";
import homeandman from "../assets/homeandman.png";
import homemoney from "../assets/homemoney.png";
import homeprice from "../assets/homeprice.png";
import amazon from "../assets/amazon.png";
import amd from "../assets/amd.png";
import cisco from "../assets/disco.png";
import dropcam from "../assets/dropcam.png";
import logitech from "../assets/logitech.png";
import spotify from "../assets/spotify.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import office from "../assets/office.png";
import articlevilla from "../assets/articlevilla.png";
import chair from "../assets/chair.png";
import villatree from "../assets/villatree.png";

export const navlinks: string[] = ["Properties", "Blog", "Contact"];

export const articleList: articleListType[] = [
  {
    id: 1,
    image: office,
    propertyType: "Apartment",
    date: " March 19, 2024",
    heading: "Housing Markets That Changed the Most This Week",
  },
  {
    id: 2,
    image: articlevilla,
    propertyType: "Apartment",
    date: "  March 19, 20244",
    heading: "Read Unveils the Best Canadian Cities for Biking",
  },
  {
    id: 3,
    image: chair,
    propertyType: "Office",
    date: "  March 19, 2024",
    heading: "10 Walkable Cities Where You Can Live Affordably",
  },

  {
    id: 4,
    image: villatree,
    propertyType: "Shop",
    date: "  March 19, 2024",
    heading: "New Apartment Nice in the Best Canadian Cities",
  },
];

export const smallCardContent: smallCardContentType[] = [
  {
    id: 1,
    logo: homelogo,
    title: "find your future home",
    subtitle:
      "we help you find a new homeo by offering a small real estate experience",
  },
  {
    id: 2,
    logo: homeandman,
    title: "experienced agents",
    subtitle: "Find an experienced agent who knows your market best ",
  },
  {
    id: 3,
    logo: homemoney,
    title: "Buy or rent homes",
    subtitle: "Millions of houses and apartments in your favourite cities",
  },
  {
    id: 4,
    logo: homeprice,
    title: "List your own property",
    subtitle: "Sign up now and sell or rent your own properties",
  },
];

export const companies: string[] = [
  amazon,
  amd,
  cisco,
  dropcam,
  logitech,
  spotify,
];

export const popularRealEstate: string[] = [
  "The Villages, FL real estate",
  "New York, Real estate",
  "Madera, CA real estate",
  "Fontana, CA real estate",
  "Moreno Valley, CA real estate",
  "Aurora, IL real estate",
  "Perris, CA real estate",
  "Minnesota Lake, MN real estate",
  "Woodbridge, VA real estate",
];

export const achievement: achievementType[] = [
  {
    id: 1,
    title: "$18M",
    subtitle: "Owned from properties transactions",
  },
  {
    id: 2,
    title: "26k",
    subtitle: "properties for buy",
  },
  {
    id: 3,
    title: "15k",
    subtitle: "propreties for sell",
  },
  {
    id: 4,
    title: "800",
    subtitle: "daily completed transactions.",
  },
];

export const footerContent: footerContentType[] = [
  {
    id: 1,
    title: "Discover",
    links: [
      { id: 11, title: "Miami" },
      { id: 12, title: "New York" },
      { id: 13, title: "Chicago" },
      { id: 14, title: "Florida" },
      { id: 15, title: "Los Angeles" },
      { id: 16, title: "San Diego" },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    links: [
      { id: 21, title: "About" },
      { id: 22, title: "Contact" },
      { id: 23, title: "FAQ's" },
      { id: 24, title: "Blog" },
      { id: 25, title: "Pricing Plans" },
      { id: 26, title: "Privacy Policy" },
      { id: 27, title: "Terms & Conditions" },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    links: [
      { id: 31, title: "hi@justhome.com" },
      { id: 32, title: "(123) 456-7890" },
    ],
  },
  {
    id: 4,
    title: "Our Address",
    links: [
      {
        id: 41,
        title: "99 Fifth Avenue, 3rd Floor, San Francisco, CA 1980",
      },
    ],
  },
];

export const icons: iconsType[] = [
  {
    id: 1,
    link: "facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    link: "x.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    link: "instgram.com",
    icon: <CiInstagram />,
  },
  {
    id: 4,
    link: "linkedin.com",
    icon: <FaLinkedin />,
  },
];
