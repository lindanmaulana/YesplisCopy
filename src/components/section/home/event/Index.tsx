import EventCards from "./EventCards";

const Event = () => {
  return (
    <section className="py-5">
      <div className="container max-w-6xl">
        <h2 className="text-[26px] font-extrabold mb-5">Event</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            <EventCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
