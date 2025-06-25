import BookCall from "../components/homepage/bookcall";
import Community from "../components/homepage/community";
import Contact from "../components/homepage/contact";
import Faq from "../components/homepage/faq";
import Feedback from "../components/homepage/feedback";
import Hero from "../components/homepage/hero";
import Numbers from "../components/homepage/numbers";
import Services from "../components/homepage/services";
import VideoWorkflow from "../components/homepage/videoworkflow";
import Why from "../components/homepage/why";

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <Community />
      <Services />
      <Contact />
      <VideoWorkflow />
      <Numbers />
      <Feedback />
      <Faq />
      <BookCall />
    </div>
  );
};

export default Home;
