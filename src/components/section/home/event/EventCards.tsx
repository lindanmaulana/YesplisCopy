import { Link } from "react-router-dom";
import { dataEvents } from "./types";

const EventCards = () => {
  return (
    <>
      {dataEvents.map((res) => {
        const idr = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(res.price || 0);
        return (
          <Link
            to="/"
            className="overflow-hidden rounded shadow-xl bg-base-100 h-[300px]"
            key={res.id}
          >
            <figure className="h-3/5">
              <img src={res.image} alt={res.title} />
            </figure>
            <div className="flex flex-col justify-between gap-2 h-2/5">
              <div className="flex flex-col gap-1 px-3">
                <h2 className="text-sm font-bold text-[#172029] uppercase ">
                  {res.title}
                </h2>
                <h4 className="text-xs font-medium text-[#172029] ">
                  {res.date}
                </h4>
                <p className="text-xs truncate text-[#828282] font-medium">
                  {res.description}
                </p>
              </div>
              <div className="flex items-center justify-between px-3 py-3 border-t">
                <h3 className="text-xs font-medium text-[#828282]">
                  Mulai Dari
                </h3>
                <h3 className="text-xs font-bold">{idr}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default EventCards;
