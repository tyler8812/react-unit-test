import React, { useEffect, useState } from "react";
import { DropdownList } from "./components/dropdownlist/DropDownList";

const labels = {
  hide: "Hide Data",
  show: "Show Data",
};

const fakeApiCall = () => {
  return new Promise((resolve) => {
    resolve([
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" },
      { value: "3", label: "Item 3" },
      { value: "4", label: "Item 4" },
      { value: "5", label: "Item 5" },
    ]);
  });
};

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fakeApiCall().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      <DropdownList data={data} labels={labels} onRemoveItem={() => {}} />
    </div>
  );
}
export default App;
