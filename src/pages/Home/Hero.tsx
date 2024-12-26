const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex overflow-hidden h-96 w-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full  shadow-lg">
      <img
      src="/images/hero2.png"
      alt="hero"
      className="object-cover object-center mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,.8)_80%,rgba(0,0,0,0)_100%)] 
                 [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,.8)_80%,rgba(0,0,0,0)_100%)]"
      />
      </div>
    </div>
  );
};

export default Hero;
