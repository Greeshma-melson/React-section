// import { from } from "rxjs";
import { prodSubject } from "./Srevices";
import { useState, useEffect } from "react";

function Rightside() {

  const [rtodi, setrtodo] = useState([]);

  useEffect(() => {
    prodSubject.subscribe(data => {
      if (data !== undefined) {
        setrtodo(data);
        console.log("recived", data)
      }
    })
  }, [])
  return (
    <div>
      {
        rtodi.map((td, i) =>
          <div key={"keyName" + i} className="row">
            <div className="col-md-8">{td.title}</div>
          </div>)
      }
    </div>
  )
}
export default Rightside;