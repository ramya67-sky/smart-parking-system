function SlotCard({ slot }) {
  return (
    <div className={`slot-card ${slot.status}`}>
      <h3>Slot {slot.id}</h3>
      <p>{slot.status}</p>
    </div>
  );
}

export default SlotCard;