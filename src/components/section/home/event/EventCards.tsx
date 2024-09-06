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
            className="rounded shadow-xl card card-compact bg-base-100"
            key={res.id}
          >
            <figure className="">
              <img src={res.image} alt={res.title} />
            </figure>
            <div className="gap-5 card-body">
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-bold uppercase card-title">
                  {res.title}
                </h2>
                <h4 className="text-xs font-semibold leading-4">{res.date}</h4>
                <p className="text-xs truncate">{res.description}</p>
              </div>
              <div className="flex items-center justify-between card-actions ">
                <h3 className="text-xs">Mulai Dari</h3>
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
