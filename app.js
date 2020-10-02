//Dom elements

const timeElement = document.querySelector(".smartwatch_innerpart-text2 h1");
const topTime = document.querySelector(".smartwatch_innerpart-text1 p");
const day = document.querySelector(".smartwatch_innerpart-text2 h3");
const messageElement = document.querySelector(".fa-comments");
const smartWatchMessageElement = document.querySelector(".smartwatch_sms");
const smartWatchElementDiv = document.querySelector(".smartwatch_sms");
//Creating a new Date obj from DATE class(function constructor)
// const time = new Date();

state = {
  smsVisible: false,
  fullSmsvisible: false,
};
//Updating the UI for Time
const updateClock = () => {
  timeElement.textContent = new Date().toLocaleTimeString(); //gives Current Time
  topTime.textContent = new Date().toLocaleTimeString().substring(0, 5);
};

setInterval(updateClock, 1000); //set interval to update time every 1sec

//Updating UI for Day
const updateDay = () => {
  const Day = new Date().getDay();
  const d = toKnowDay(Day);
  //   console.log(Day);
  day.textContent = d;
};

//Updating UI when clicked on the Message Icon in the UI

messageElement.addEventListener("click", () => {
  //   console.log("hello");
  if (state.fullSmsvisible === false) {
    state.smsVisible === false
      ? (smartWatchMessageElement.style.visibility = "visible")
      : (smartWatchMessageElement.style.visibility = "hidden");
    state.smsVisible = !state.smsVisible;
    smartWatchElementDiv.addEventListener("click", (e) => {
      console.log(e.target.id);
      switch (e.target.id) {
        case "html": {
          smartWatchMessageElement.textContent =
            "HTML means Hyper Text Markup Language";
          break;
        }
        case "css": {
          smartWatchMessageElement.textContent =
            "CSS means Cascading style sheets";
          break;
        }
        case "js": {
          smartWatchMessageElement.textContent =
            "Java script is an Asynchronous language";
          break;
        }
      }
      state.fullSmsvisible = !state.fullSmsvisible;
    });
  } else if (state.fullSmsvisible === true) {
    smartWatchMessageElement.innerHTML = `<div id="html" class="padding2">HTML</div><hr /> <div id="css" class="padding2">CSS</div><hr /><div id="js" class="padding2">JS</div>`;
    state.fullSmsvisible = !state.fullSmsvisible;
    state.smsVisible = !state.smsVisible;
  }
});

smartWatchElementDiv.addEventListener("click", () => {});

const toKnowDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

window.onload = () => {
  setInterval(updateClock, 1000);
  updateDay();
};
//Dom elements

const timeElement = document.querySelector(".smartwatch_innerpart-text2 h1");
const topTime = document.querySelector(".smartwatch_innerpart-text1 p");
const day = document.querySelector(".smartwatch_innerpart-text2 h3");
const messageElement = document.querySelector(".fa-comments");
const smartWatchMessageElement = document.querySelector(".smartwatch_sms");
const smartWatchElementDiv = document.querySelector(".smartwatch_sms");
const musicElement = document.querySelector(".fa-music");
const songslist = document.querySelector(".smartwatch_audio");
//Creating a new Date obj from DATE class(function constructor)
// const time = new Date();

let state = {
  smsVisible: false,
  fullSmsvisible: false,
  musicList: false,
  isSongPlaying: false,
};
//Updating the UI for Time
const updateClock = () => {
  timeElement.textContent = new Date().toLocaleTimeString(); //gives Current Time
  topTime.textContent = new Date().toLocaleTimeString().substring(0, 5);
};

setInterval(updateClock, 1000); //set interval to update time every 1sec

//Updating UI for Day
const updateDay = () => {
  const Day = new Date().getDay();
  const d = toKnowDay(Day);
  //   console.log(Day);
  day.textContent = d;
};

//Updating UI when clicked on the Message Icon in the UI

messageElement.addEventListener("click", () => {
  //   console.log("hello");
  if (state.fullSmsvisible === false) {
    state.smsVisible === false
      ? (smartWatchMessageElement.style.visibility = "visible")
      : (smartWatchMessageElement.style.visibility = "hidden");
    state.smsVisible = !state.smsVisible;
    smartWatchElementDiv.addEventListener("click", (e) => {
      console.log(e.target.id);
      switch (e.target.id) {
        case "html": {
          smartWatchMessageElement.textContent =
            "HTML means Hyper Text Markup Language";
          break;
        }
        case "css": {
          smartWatchMessageElement.textContent =
            "CSS means Cascading style sheets";
          break;
        }
        case "js": {
          smartWatchMessageElement.textContent =
            "Java script is an Asynchronous language";
          break;
        }
      }
      state.fullSmsvisible = !state.fullSmsvisible;
    });
  } else if (state.fullSmsvisible === true) {
    smartWatchMessageElement.innerHTML = `<div id="html" class="padding2">HTML</div><hr /> <div id="css" class="padding2">CSS</div><hr /><div id="js" class="padding2">JS</div>`;
    state.fullSmsvisible = !state.fullSmsvisible;
    state.smsVisible = !state.smsVisible;
  }
});

smartWatchElementDiv.addEventListener("click", () => {});

const toKnowDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

//Music Player
// 5 songs in music player:
const songs = [
  "https://audiomack.com/embed/song/z-xyxn/alavaikunthapurramuloo-samajavaragamana-full-video-song-4k-allu-arjun-trivi?background=1",
  "https://audiomack.com/embed/song/davido/fem?background=1",
  "https://audiomack.com/embed/song/lil-baby/we-paid?background=1",
  "https://audiomack.com/embed/song/z-xyxn/alavaikunthapurramuloo-samajavaragamana-full-video-song-4k-allu-arjun-trivi?background=1",
  "https://audiomack.com/embed/song/davido/fem?background=1",
];

//adding Event listener for Music
musicElement.addEventListener("click", () => {
  console.log("hi");
  state.musicList === false
    ? (songslist.style.visibility = "visible")
    : (songslist.style.visibility = "hidden");
  state.musicList = !state.musicList;
  document.querySelector(".smartwatch_audio").addEventListener("click", (e) => {
    document.querySelector(".smartwatch_audio-iframe").innerHTML = "";
    let id = e.target.id;
    let html = `<iframe
     src="${songs[id]}"
     scrolling="no"
     width="100%"
     height="85"
     scrollbars="no"
     frameborder="0"
   ></iframe>`;
    if (state.isSongPlaying === false) {
      document
        .querySelector(".smartwatch_audio-iframe")
        .insertAdjacentHTML("afterbegin", html);
    }
    isSongPlaying = true;
  });
});

window.onload = () => {
  setInterval(updateClock, 1000);
  updateDay();
};
