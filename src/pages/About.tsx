const About = () => {
  return (
    <div className="h-screen p-20 bg-neutral grid place-items-center">
      <div className="h-[10vh] grid place-items-center">
        <h1 className="text-6xl px-10 py-5 bg-primary rounded-lg">About Us</h1>
      </div>
      <div className="w-1/2 h-full">
        <p className="text-center leading-8 font-bold text-neutral-content text-lg">
          Welcome to Just Home, your go-to platform for finding the perfect
          rental property. Whether you're looking for a cozy apartment in the
          city, a spacious house in the suburbs, or a charming cottage by the
          sea, we've got you covered. Our mission is to simplify the rental
          process, offering a seamless and user-friendly experience from start
          to finish. With an extensive listing of properties, detailed
          descriptions, high-quality photos, and reliable reviews, you can trust
          us to help you find a place that feels like home. At Just Home, we're
          dedicated to connecting renters with their ideal homes, making the
          search for your next rental easy and stress-free.
        </p>
      </div>
    </div>
  );
};

export default About;
