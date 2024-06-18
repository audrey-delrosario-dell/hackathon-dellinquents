import { useRef, useEffect, useState } from "react";
import { DDSDropdown } from "@dds/react";


const LunchSelect = () => {
    const timeRef = useRef(null);
    const [options] = useState([
        { label: "11:00", value: "1100" },
        { label: "11:30", value: "1130" },
        { label: "12:00", value: "1200" },
        { label: "12:30", value: "1230" },
        { label: "13:00", value: "1300" },
        { label: "13:30", value: "1330" },
        { label: "14:00", value: "1400" },
        { label: "14:30", value: "1430" },
        { label: "15:00", value: "1500" },


      ]);

    useEffect(() => {
        console.log(timeRef.current); 
    }, []);


    return (
        <div className="custom-dropdown">
             <DDSDropdown label={{ children: "Select Lunch Time", visualIndicator: true }} required options={options} />
        </div>
    );
};

export default LunchSelect;