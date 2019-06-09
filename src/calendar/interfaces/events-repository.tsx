import {
  CalendarEventData,
  CalendarEventDataDescription
} from "./calendar-event-data";

export interface IEventsRepository {
  getListOfEvents(): CalendarEventData[];
  getEventDescription(id: string): CalendarEventDataDescription;
}
