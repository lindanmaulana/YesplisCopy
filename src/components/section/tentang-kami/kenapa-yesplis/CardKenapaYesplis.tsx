import { dataKenapaYesplis } from "./types";

const CardKenapaYesplis = () => {
  return (
    <>
      {dataKenapaYesplis.map((res) => (
        <div
          key={res.id}
          className="p-5 border rounded bg-gradient-to-br from-blue-200 from-10% via-white via-50% to-100% to-white"
        >
          <img
            src={res.image}
            alt={res.title}
            className="h-[40px] w-[40px] mb-5"
          />
          <h3 className="mb-3 text-xl font-bold text-black">
            {res.title}{" "}
            {res.version ? (
              <span className="p-1 ml-1 text-xs bg-orange-400 rounded">BETA</span>
            ) : (
              ""
            )}
          </h3>
          <p className="text-base font-medium text-[#454545] leading-relaxed">
            {res.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default CardKenapaYesplis;
