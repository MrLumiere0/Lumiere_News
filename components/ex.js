// var requestOptions = {
//   mode: "no-cors",
// };

const url =
  "https://timeapi.io/api/Time/current/zone?timeZone=America/New_York";

useEffect(() => {
  const timeNY = async () => {
    const response = await fetch(url, { mode: "no-cors" });
    await response.json();
    await console.log(timeNY);
  };
  setTime(timeNY.datetime);
  timeNY();
}, []);
