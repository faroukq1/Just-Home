import london from "../assets/londonwall.jpg";
type subContentType = {
  id: number;
  smallHeading: string;
  text: string;
};
type articleType = {
  id: number;
  heading: string;
  subContent: subContentType[];
};
const articleElement: articleType[] = [
  {
    id: 1,
    heading: "Why Choose London?",
    subContent: [
      {
        id: 11,
        smallHeading: "Cultural Hub",
        text: "London is a melting pot of cultures, offering an endless array of experiences. From world-class museums like the British Museum and Tate Modern to historic landmarks like the Tower of London and Buckingham Palace, the city is rich with history and art. Enjoy theatre performances in the West End, diverse culinary delights from every corner of the globe, and lively festivals throughout the year.",
      },
      {
        id: 12,
        smallHeading: "Unmatched Connectivity",
        text: "London’s extensive public transportation network makes commuting a breeze. With the Tube, buses, and trains at your doorstep, you’re never far from your destination. Plus, international airports like Heathrow and Gatwick ensure you stay connected with the rest of the world.",
      },
      {
        id: 13,
        smallHeading: "Thriving Economy",
        text: "As one of the world’s leading financial centres, London offers abundant career opportunities. Whether you’re in finance, technology, creative industries, or academia, the city is a hotspot for professionals looking to advance their careers.",
      },
    ],
  },
  {
    id: 2,
    heading: "Living in London: Your Dream Apartment Awaits",
    subContent: [
      {
        id: 21,
        smallHeading: "Prime Locations",
        text: "From the charming streets of Notting Hill to the bustling energy of Shoreditch, London has a neighbourhood for everyone. Choose from tranquil suburbs with beautiful parks or vibrant districts teeming with nightlife and entertainment.",
      },
      {
        id: 22,
        smallHeading: "Modern Amenities",
        text: "Our apartments are equipped with the latest amenities to make your life comfortable and convenient. Enjoy fully-fitted kitchens, spacious living areas, high-speed internet, and security features. Many properties also offer additional perks such as gyms, rooftop terraces, and communal gardens.",
      },
      {
        id: 23,
        smallHeading: "Community and Lifestyle",
        text: "Living in London means becoming part of a dynamic community. Engage with neighbours, explore local markets, and participate in community events. Whether you prefer the serene atmosphere of Hampstead or the artistic vibe of Camden, you’ll find a welcoming neighbourhood that suits your lifestyle.",
      },
    ],
  },
  {
    id: 2,
    heading: "Why Rent with Us?",
    subContent: [
      {
        id: 31,
        smallHeading: "Personalized Service",
        text: "Our dedicated team is here to help you find the perfect apartment that meets your needs and preferences. We offer personalized tours and assistance throughout the rental process, ensuring a smooth and enjoyable experience.",
      },
      {
        id: 32,
        smallHeading: "Flexible Leasing Options",
        text: "We understand that life can be unpredictable, which is why we offer flexible leasing options to suit your situation. Whether you’re looking for a short-term stay or a long-term home, we have options that cater to your requirements.",
      },
      {
        id: 33,
        smallHeading: "Competitive Pricing",
        text: "London living doesn’t have to break the bank. We provide a range of properties at competitive prices, ensuring you find a home that fits your budget without compromising on quality.",
      },
    ],
  },
];
const Article = () => {
  return (
    <div className="py-20 align-element">
      <div className="my-10 grid place-items-center gap-4">
        <h1 className="text-3xl font-bold">
          Discover Your Perfect Home in the Heart of London
        </h1>
        <p className="text-center leading-8 text-neutral-500">
          Are you dreaming of living in one of the world’s most vibrant and
          iconic cities? Look no further! Welcome to London, where history meets
          modernity, and culture thrives at every corner. Renting an apartment
          in London offers you an unparalleled lifestyle, brimming with
          opportunities, excitement, and convenience.
        </p>
      </div>
      <img className="rounded-xl" src={london} alt="london wallpaper" />
      <div>
        {articleElement.map(({ id, heading, subContent }) => {
          return (
            <div key={id}>
              <h1 className="text-3xl mt-8 font-semibold ">{heading}</h1>
              {subContent.map(({ id, smallHeading, text }) => {
                return (
                  <div key={id}>
                    <h3 className="text-xl font-semibold mt-8 ">
                      {smallHeading}
                    </h3>
                    <p className="leading-8 text-neutral-400 mt-4 ">{text}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
