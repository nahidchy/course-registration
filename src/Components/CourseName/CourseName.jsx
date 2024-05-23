

const CourseName = ({names,totalHour,remainigHour}) => {
   
    return (
        <div>
            <h2 className='text-3xl text-blue-950 font-bold text-center'>Course Name:</h2>
           <div className="w-11/12 mx-auto mt-10">
           {
                names.map((name,idx) => <p className="text-xl font-semibold"  key={idx}>{idx+1}.{name}</p>)
            }
           </div>
           {totalHour < 20 ? (
        <h2 className='text-3xl text-blue-950 font-bold text-center mt-20'>Total Credit Hour :{totalHour} hr</h2>
      ) : (
        alert("You cant select course more than 20 hours")
      )}
       {remainigHour > 0 ? (
       <h2 className='text-3xl text-blue-950 font-bold text-center mt-20'>Remaining Credit Hour :{remainigHour} hr</h2>
      ) : (
        alert("Your duration expired")
      )}
      {/* <h2 className='text-3xl text-blue-950 font-bold text-center mt-20'>Remaining Credit Hour :{remainigHour} hr</h2> */}
      
        </div>
    );
};

export default CourseName;