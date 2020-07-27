import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-time",
  templateUrl: "./time.component.html",
  styleUrls: ["./time.component.css"],
})
export class TimeComponent implements OnInit {
  time: string = "";

  constructor() {}

  ngOnInit() {
    setInterval(() => this.showTime(), 1000);
  }
  showTime() {
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date();
    let h: any = date.getHours(); // 0 - 23
    let session = "AM";
    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    this.time = `${
      monthArray[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()} ${session}`;
  }
}
