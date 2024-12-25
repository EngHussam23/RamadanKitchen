import GeneratorForm from "./GeneratorForm";
import Hero from "./Hero";
import Popular from "./Popular";

const HomeBody = () => {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <Popular />
      <GeneratorForm />
    </div>
  );
};

export default HomeBody;
