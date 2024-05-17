import { useState } from "react";

function useUpdate() {
  const [, setCount] = useState(0);

  return () => setCount((count) => count + 1);
}

export default useUpdate;
