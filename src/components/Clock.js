import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { FaClock } from 'react-icons/fa'; // Import the alarm clock icon

const Clock = () => {
  const [time, setTime] = useState(DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex items-center bg-black text-white p-2 rounded-lg shadow-lg text-xl font-mono cursor-pointer">
        <FaClock className="mr-3" /> 
        {time}
      </div>
    </div>
  );
};

export default Clock;
