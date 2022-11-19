import Banner from '../assets/images/banner.jpg';

const HomeBanner = () => {
  return (
    <div
      className="h-screen flex justify-center items-center text-6xl text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      Open Store
    </div>
  );
};

export default HomeBanner;
