'use client'
import '../index.css'
import {useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {

        const updateClock = () => {
            const now = new Date();

            const monthName = now.toLocaleString('eng', {month: 'long'})
            const day = now.getDate().toString().padStart(2, '0');
            const currentDate = `${day} ${monthName}`;


            const hour = now.getHours().toString().padStart(2, '0');
            const minute = now.getMinutes().toString().padStart(2, '0');
            const currentTime = `${hour} : ${minute}`;

            setDate(currentDate);
            setTime(currentTime);
        };


        updateClock();


        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

return (
    <div className="space-between flex  ">

  <span className="jersey-10-regular select-none gradient text-4xl pr-4">
            {date}
        </span>

        <span className="jersey-10-regular select-none gradient text-4xl">
            {time}
        </span>

    </div>
)
}


