import React from "react";

export default function ChangeMonth({ currentDate }) {
  return <div>{currentDate.toISOString()}</div>;
}
