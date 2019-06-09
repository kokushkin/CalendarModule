export interface CalendarEventData {
  id: string;
  title: string;
  dateStart: Date;
}

export interface CalendarEventDataDescription extends CalendarEventData {
  organizer: string;
  dateEnd: Date;
  description: string;
  country: string;
  city: string;
  address: string;
  addAddress: string;
  postCode: string;
  imageAddress: string;
}
