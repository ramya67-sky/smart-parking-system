import SlotCard from "./SlotCard";
import "./SlotGrid.css";

function SlotGrid({ slots }) {
  return (
    <div className="slot-grid">
      {slots.map((slot) => (
        <SlotCard key={slot.id} slot={slot} />
      ))}
    </div>
  );
}

export default SlotGrid;