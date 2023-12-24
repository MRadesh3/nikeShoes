import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
    >
      <h3 className="item-start text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md">
        Sign Up form <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="flex lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input" placeholder="subscribe@nike.com" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
