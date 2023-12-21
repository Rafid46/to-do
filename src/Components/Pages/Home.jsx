import Banner from "./Banner";
import homeBanner from "../../assets/images/13295064_5197239.png";
import Section from "./Section";
const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-opacity-90"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <Banner></Banner>
      </div>
      <div className="max-w-screen-xl mx-auto mt-20">
        <Section></Section>
      </div>
    </div>
  );
};

export default Home;
