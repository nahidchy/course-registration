const Course = ({course,handleAddName}) => {
    const {course_img,course_author,course_author_img,course_name,course_details,course_price,course_duration} = course;
    return (
        <div className="w-full  border-4 rounded px-2 py-5 shadow-blue-400 shadow-lg space-y-3">
          <img className="w-full h-60 object-cover rounded" src={course_img} alt="" />
          <h4 className=" font-bold text-blue-400">Course Name: {course_name}</h4>
          <h2 className=" font-semibold text-neutral-600">Course Name: {course_details}</h2>
          <div className="flex justify-between">
            <img className="w-10 h-10 rounded-full object-cover" src={course_author_img} alt="" />
            <span className="text-gray-700 font-medium"><small>Author: {course_author}</small></span>
          </div>
          <div className="flex justify-around">
            <p className="font-medium">price :$ {course_price}</p>
            <p className="font-medium">Credit :{course_duration} hr</p>
          </div>
          <div className="w-1/2 mx-auto">
          <button onClick={()=>handleAddName(course.course_name,course.course_duration)} className="bg-blue-600 w-full font-semibold mt-5 text-white rounded p-2">Select</button>
          </div>
           </div>
    );
};

export default Course;