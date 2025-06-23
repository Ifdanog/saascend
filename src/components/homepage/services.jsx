import Row from "./row";
import HeadingText from "../headingtext";

const Services = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-40">
      <HeadingText title="Marketing Videos for Every Sector in Tech" />

      <p className="w-full lg:w-1/2 mx-auto text-center my-10">
        We're the go-to video marketing agency for tech companies of all kinds,
        from startups to established enterprises. We create marketing videos
        that explain your products effectively, build trust, educate your
        audience, and contribute to revenue increase and overall business growth
      </p>

      <div className="max-w-[1200px] mx-auto">
        <Row
          type="primary"
          mainImage="/ai.png"
          sideImage1="/maxresdefault.mp4"
          sideImage2="/warning.png"
          heading="AI & Machine Learning"
          body="We specialize in simplifying complex ideas for AI and ML companies through the power of video. Our marketing videos are the perfect way to effectively explain your solution to your customers."
        />

        <Row
          type="secondary"
          mainImage="/platform1.mp4"
          sideImage1="/platform2.png"
          sideImage2="/platform3.png"
          heading="Apps, Platforms & Software"
          body="We create custom videos of all types that are perfect for your app, platform, or software. Our videos help you achieve your marketing goals at every stage of the funnel."
        />
        <Row
          type="primary"
          mainImage="/cybersecurity1.png"
          sideImage1="/cybersecurity2.png"
          sideImage2="/cybersecurity3.png"
          heading="Cybersecurity"
          body="We know the complexities of the cybersecurity space, so we can create informative and visually appealing marketing videos that explain your solutions in a clear and concise way."
        />

        <Row
          type="secondary"
          mainImage="/platforms1.mp4"
          sideImage1="/platforms2.png"
          sideImage2="/platforms3.png"
          heading="Productivity Platforms"
          body="We craft engaging videos that demonstrate how your productivity tools can make work more efficient and save valuable time for your users."
        />
      </div>
    </div>
  );
};

export default Services;
