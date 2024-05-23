
import { useState } from "react";
import Courses from "./Components/Courses/Courses";
import SelectsItem from "./Components/SelectsItem/SelectsItem";

function App() {
  const [names,setNames] = useState([]);
 
  const [totalHour,setTotalHour] = useState(0);
  const [remainigHour,setRemainingHour] = useState(20);
  const handleAddName=(name,hour)=>{
       const newNames = [...names,name];
       const newTotalHour =hour+totalHour;
       const newRemainingHour = remainigHour - hour;
       setNames(newNames);
       setTotalHour(newTotalHour);
       setRemainingHour(newRemainingHour)
  }
  return (
    <div className="max-w-{1440} mx-auto p-10">
      <h2 className="text-4xl text-blue-950 text-center font-bold mb-10">
        Course Registration
      </h2>

      <div className="flex justify-between gap-5 w-full">
        <div className="w-2/3">
          <Courses handleAddName={handleAddName}></Courses>
        </div>
        <div className="w-1/3 ">
          <SelectsItem names={names} remainigHour={remainigHour} totalHour={totalHour}></SelectsItem>
        </div>
      </div>
    </div>
  );
}

export default App;
