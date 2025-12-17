import React from "react";

const SlotCard = ({ slot }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: slot.isAvailable ? "#4ade80" : "#f87171",
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <p>{slot.slotNumber}</p>
      <p>{slot.isAvailable ? "Available" : "Booked"}</p>
    </div>
  );
};

export default SlotCard;