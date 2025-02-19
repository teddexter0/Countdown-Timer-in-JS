let timer;
let compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

timer = setInterval(() => {
  timeBetwenDates(compareDate);
}, 1000);

function timeBetwenDates(toDate) {
  const dateEntered = toDate;
  const now = new Date();
  const difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
}
