import CourseName from "../CourseName/CourseName";

const SelectsItem = ({names,totalHour,remainigHour}) => {
    return (
        <div className="">
            <CourseName names={names} remainigHour={remainigHour} totalHour={totalHour}></CourseName>
        </div>
    );
};

export default SelectsItem;