export interface CalendarEventData {
  id: string;
  title: string;
  organizer: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;
  country: string;
  city: string;
  address: string;
  addAddress: string;
  postCode: string;
  imageAddress: string;
}

export interface IEventsRepository {
  getListOfEvents(): CalendarEventData[];
  getEventDescription(id: string): CalendarEventData;
}
