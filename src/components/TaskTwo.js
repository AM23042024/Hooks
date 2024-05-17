import React from "react";
import Root from "./Root";
import useUpdate from "./hooks/useUpdate";

export default function TaskTwo() {
  const update = useUpdate();

  return (
    <div className="TaskTwo">
      <button onClick={update}>Обновить компонент</button>
      <Root />
    </div>
  );
}
