import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray ">
          ( 4.5)
        </p>
      </div>
      <h3 className="text-2xl font-semibold font-palanquin mt-2">{name}</h3>
      <p className="text-coral-red font-montserrat font-semibold mt-2 leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
