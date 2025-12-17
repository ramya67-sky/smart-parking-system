import React, { useEffect, useState } from "react";
import { getAllSlots } from "./services/api";
import SlotGrid from "./components/SlotGrid";

function App() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    getAllSlots()
      .then((res) => setSlots(res.data.slots))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parking Slot Availability</h1>
      <SlotGrid slots={slots} />
    </div>
  );
}

export default App;