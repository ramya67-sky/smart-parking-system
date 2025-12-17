import React, { useState } from "react";
import "./SlotGrid.css";

const SlotGrid = ({ slots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <>
      <div className="slot-grid">
        {slots.map((slot) => (
          <div
            key={slot._id}
            className={`slot-box ${
              slot.isAvailable ? "available" : "booked"
            }`}
            onClick={() => setSelectedSlot(slot)}
          >
            <h3>{slot.slotNumber}</h3>
            <p>{slot.isAvailable ? "AVAILABLE" : "BOOKED"}</p>
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div className="slot-details">
          <h2>Selected Slot</h2>
          <p><b>Slot:</b> {selectedSlot.slotNumber}</p>
          <p>
            <b>Status:</b>{" "}
            {selectedSlot.isAvailable ? "Available" : "Booked"}
          </p>
        </div>
      )}
    </>
  );
};

export default SlotGrid;