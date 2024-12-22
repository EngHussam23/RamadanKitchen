import GeneratorForm from "./GeneratorForm";
import Hero from "./Hero";

const HomeBody = () => {
  return (
    <div className="flex flex-col p-6 gap-8">
      <Hero />
      <GeneratorForm />
    </div>
  );
};

export default HomeBody;
