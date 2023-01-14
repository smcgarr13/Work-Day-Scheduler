console.log(dayjs());

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// referenced: https://stackoverflow.com/questions/8611713/running-javascript-after-page-is-fully-rendered
// $(window).load(function() {
// dom not only ready, but everything is loaded
// });

// $(function () {
  // var row time-block present

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // referenced: https://stackoverflow.com/questions/5015054/how-to-use-simulate-the-action-of-clicking-button-with-jquery-or-javascript
  // id="time-block-container"
  $(document).ready(function () {
    $(".save-btn").on("click", function () {
      //  console.log("Button Works!!");
      console.log($(this).prev().val());
      // save to local storage
      var time = $(this).val();
      localStorage.setItem(time, $(this).prev().val());
    });
    console.log($(".description")[0])
    // get user input that was saved in localStorage
    var textAreas = $(".description");
    console.log(textAreas);
    for (let i = 0; i < 9; i++) {
      console.log("message")
      var description = $(".description")[i]
      console.log(description)
      description.value=(localStorage.getItem(i + 9));
      // past, present, or future class
      if (i+9 == dayjs().hour()) {
        description.classList.add("present");
         //description.background-color.lavenderblush
        }
        else if (i+9 < dayjs() .hour()) {
         description.classList.add("past");
         //description.background-color.lightgray
       }
       if (i+9 > dayjs() .hour()) {
        description.classList.add("future");
         //description.background-color.powderblue
      } 
    }
    // display current date in the header of the page
    // dayjs.extend(localizedFormat);
    // dayjs().format("llll");
    $("#currentDay").text(dayjs());
  });

  // referenced: https://www.google.com/search?q=how+to+use+day.js+to+create+a+planner+js&oq=how+to+use+day.js+to+create+a+planner+js&aqs=chrome..69i57j33i160l2j33i22i29i30.12040j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:b3bbccd0,vid:vzGzys3enCE
  // events.forEach(event => {
  //   const date = dayjs(event.dataset.date)
  //   const dateElement = event.querySelector('.date')
  //   dateElement.innerText = date
  // })

  // $("#save-btn").click();
  // console.log("Button Works!!")

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // referenced: https://day.js.org/docs/en/parse/now
  // var now = dayjs()
  // var currentDay = document.querySelector("#currentDay");
  // currentDay = dayjs();

  // referenced: https://day.js.org/docs/en/parse/date
  // var currentDay = document.querySelector(#currentDay)
  // var d = currentDay(2023, 1, 8)
  // var day = dayjs(d)

  // referenced: https://day.js.org/docs/en/display/format
  // dayjs.extend(LocalizedFormat)
  // dayjs().format('llll')
  // dayjs.extend(LocalizedFormat);
  // dayjs().format("llll");
  // $("#currentDay").text(dayjs());

  // referenced: https://blog.openreplay.com/working-with-dates-and-times-with-day-js/
  // dayjs().format('dddd, MMMM D YYYY')
// });
