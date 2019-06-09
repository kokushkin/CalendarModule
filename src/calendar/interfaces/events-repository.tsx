import {
  CalendarEventData,
  CalendarEventDataDescription
} from "./calendar-event-data";

export interface IEventsRepository {
  getListOfEvents(): Promise<CalendarEventData[]>;
  getEventDescription(id: string): Promise<CalendarEventDataDescription>;
}
