import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { data } from "./dummyArray";

function Datashowtree() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    setdatas(data);
  });

  const datar = datas.map((dataq) => {
    console.log(dataq);
    return (
      <div>
        <h1>{dataq}</h1>
      </div>
    );
  });

  return <div>{datar}</div>;
}

export default Datashowtree;
