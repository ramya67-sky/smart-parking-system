import SlotGrid from "../components/SlotGrid";

function SlotList() {
  const slots = [
    { id: "A1", status: "available" },
    { id: "A2", status: "booked" },
    { id: "A3", status: "available" },
    { id: "A4", status: "available" },
    { id: "A5", status: "booked" },
  ];

  return (
    <div className="container">
      <h1>Parking Slot Availability</h1>
      <SlotGrid slots={slots} />
    </div>
  );
}

export default SlotList;