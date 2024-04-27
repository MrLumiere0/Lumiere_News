import React, { use, useEffect } from "react";
import { useState } from "react";

export default function TimeZone() {
  const [NY, setNY] = useState(null);
  const [London, SetLondon] = useState(null);
  const [Tokyo, setTokyo] = useState(null);

  const url_NY = "http://worldtimeapi.org/api/timezone/America/New_York";
  const url_London = "http://worldtimeapi.org/api/timezone/Europe/London";
  const url_Tokyo = "http://worldtimeapi.org/api/timezone/Asia/Tokyo";

  useEffect(() => {
    const timezone_NY = async () => {
      const response = await fetch(url_NY);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US");
      date = date.substr(0, 4) + date.substr(7, 9);
      setNY(date);
    };

    const timezone_London = async () => {
      const response = await fetch(url_London);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
      date = date.substr(0, 4) + date.substr(7, 9);
      SetLondon(date);
    };

    const timezone_Tokyo = async () => {
      const response = await fetch(url_Tokyo);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
      date = date.substr(0, 4) + date.substr(7, 9);
      setTokyo(date);
    };

    timezone_NY();
    timezone_London();
    timezone_Tokyo();
  }, []);
  useEffect(() => {
    setInterval(() => {
      const timezone_NY = async () => {
        const response = await fetch(url_NY);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US");
        date = date.substr(0, 4) + date.substr(7, 9);
        setNY(date);
      };

      const timezone_London = async () => {
        const response = await fetch(url_London);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
        date = date.substr(0, 4) + date.substr(7, 9);
        SetLondon(date);
      };

      const timezone_Tokyo = async () => {
        const response = await fetch(url_Tokyo);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
        date = date.substr(0, 4) + date.substr(7, 9);
        setTokyo(date);
      };
      timezone_NY();
      timezone_London();
      timezone_Tokyo();
    }, 60000);
  }, []);

  return (
    <div className='timezone-main'>
      <div className='time-zones'>
        <h2 id='NY-timezone'>NY</h2>
        <h2 id='NY-timezone-time'>{NY}</h2>
      </div>

      <div className='time-zones'>
        <h2 id='NY-timezone'>London</h2>
        <h2 id='NY-timezone-time'>{London}</h2>
      </div>

      <div className='time-zones'>
        <h2 id='NY-timezone'>Tokyo</h2>
        <h2 id='NY-timezone-time'>{Tokyo}</h2>
      </div>
    </div>
  );
}
