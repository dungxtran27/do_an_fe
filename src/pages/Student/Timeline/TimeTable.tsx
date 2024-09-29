// import { Table } from "antd";
// import React from "react";
// import type { TableColumnsType } from "antd";
// import { createStyles } from "antd-style";
// import classNames from "classnames";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import {
  createViewWeek,
  createViewMonthGrid,
  createViewDay,
  createViewMonthAgenda,
} from "@schedule-x/calendar";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createResizePlugin } from "@schedule-x/resize";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import { createCurrentTimePlugin } from "@schedule-x/current-time";
import "@schedule-x/theme-default/dist/calendar.css";
const Timeline = () => {
  const calendar = useCalendarApp({
    dayBoundaries: {
      start: "06:00",
      end: "18:00",
    },
    calendars: {
      personal: {
        colorName: "personal",
        lightColors: {
          main: "#f9d71c",
          container: "#fff5aa",
          onContainer: "#594800",
        },
        darkColors: {
          main: "#fff5c0",
          onContainer: "#fff5de",
          container: "#a29742",
        },
      },
      work: {
        colorName: "work",
        lightColors: {
          main: "#f91c45",
          container: "#ffd2dc",
          onContainer: "#59000d",
        },
        darkColors: {
          main: "#ffc0cc",
          onContainer: "#ffdee6",
          container: "#a24258",
        },
      },
      leisure: {
        colorName: "leisure",
        lightColors: {
          main: "#1cf9b0",
          container: "#dafff0",
          onContainer: "#004d3d",
        },
        darkColors: {
          main: "#c0fff5",
          onContainer: "#e6fff5",
          container: "#42a297",
        },
      },
      school: {
        colorName: "school",
        lightColors: {
          main: "#1c7df9",
          container: "#d2e7ff",
          onContainer: "#002859",
        },
        darkColors: {
          main: "#c0dfff",
          onContainer: "#dee6ff",
          container: "#426aa2",
        },
      },
    },
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: 6,
        start: "2024-09-24 ",
        end: "2024-09-27 ",
        title: "kkk 1",
        description: "dungmuahaahahahahahaahahah",
        calendarId: "leisure",
      },
      {
        id: 1,
        start: "2024-09-27 07:00",
        end: "2024-09-27 11:00",
        title: "dungmuahaha 1",
        description: "dungmuahaahahahahahaahahah",
        calendarId: "leisure",
      },
      {
        id: 2,
        start: "2024-09-27 07:00",
        end: "2024-09-27 10:00",
        title: "dungmuahaha 2",
        description:
          "Diễn Viên Hài Hữu Tín Tiết Lộ Rằng Mình Từng Là Gái Anime!!!!!!",
      },
      {
        id: 3,
        start: "2024-09-28 09:00",
        end: "2024-09-28 15:00",
        title: "dungmuahaha 3",
      },
    ],
    selectedDate: "2024-09-25 10:00",
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin(),
      createResizePlugin(),
      createCurrentTimePlugin(),
      createEventsServicePlugin(),
    ],
  });

  return (
    <>
      <ScheduleXCalendar calendarApp={calendar} />
    </>
  );
};
export default Timeline;
