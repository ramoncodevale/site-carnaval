import Image from "next/image";
import { blocosCarnaval } from "../constants";
import { MapPin } from "lucide-react";

const Cards = () => {
  return (
    <section className="mt-10 grid grid-cols-3 items-center gap-8">
      {blocosCarnaval.map((item) => (
        <div
          className="h-80 w-96 rounded-xl border-white p-4 shadow-customLightGray"
          key={item.id}
        >
          <Image src={item.image} alt="Image profile" />
          <h3 className="mt-4 text-xl font-bold text-customDark">
            {item.title}
          </h3>
          <p className="mt-4 text-base font-normal text-slate-900">
            {item.description}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <MapPin className="text-customRed" width={15} height={21} />
            <p className="text-base font-normal">{item.location}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
