import Courses from "./Components/Courses/Courses";
import SelectsItem from "./Components/SelectsItem/SelectsItem";

function App() {
  return (
    <div className="max-w-{1440} mx-auto p-10">
      <h2 className="text-4xl text-blue-950 text-center font-bold mb-10">
        Course Registration
      </h2>
      <div className="flex justify-between w-full">
        <div className="w-2/3">
          <Courses></Courses>
        </div>
        <div className="w-1/3 ">
          <SelectsItem></SelectsItem>
        </div>
      </div>
    </div>
  );
}

export default App;
