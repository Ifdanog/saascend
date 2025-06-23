import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-10 lg:px-20">
      <h2 className="text-center text-5xl font-bold leading-tight mb-12">
        Our Numbers Speak for Themselves
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-20 text-3xl font-semibold">
        {/* Countries */}
        <div className="flex flex-col items-center text-center">
          <img src="/countries.svg" />
          <span className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl">
            <CountUp end={30} duration={2} /> Countries
          </span>
        </div>

        {/* Clients */}
        <div className="flex flex-col items-center text-center">
          <img src="/client.svg" />
          <span className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl">
            <CountUp end={200} duration={2.5} suffix="+" /> Clients
          </span>
        </div>

        {/* Videos */}
        <div className="flex flex-col items-center text-center">
          <img src="/videos.svg" />
          <span className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-2xl">
            <CountUp end={950} duration={3} suffix="+" /> Videos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
