import { CalendarEventData, IEventsRepository } from "./calendar-event-data";

export class MockEventsRepository implements IEventsRepository {
  static events: CalendarEventData[] = [
    {
      id:
        "0x0102004F76F51FFC644B478A8E4A1B07B44C4E002DC2C6EC8858CA4EBAD82AC879C32C1B",
      title: "Customer Hospitality event",
      organizer: "Ioanna Perikleous (BSM-CY)",
      dateStart: new Date("2019-06-06T07:00:00Z"),
      dateEnd: new Date("2019-06-06T14:00:00Z"),
      description:
        "<p>\u200b</p><p><strong>BSM Involvement&#58; Host</strong></p><p><strong>Location&#58;&#160;Hamburg</strong></p><p><strong>Date&#58; 06 June, 2019</strong></p>",
      country: "Germany",
      city: "Hamburg",
      address: "Vorsetzen 54",
      addAddress: null,
      postCode: "20459 ",
      imageAddress:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61629369%2F292847611496%2F1%2Foriginal.20190503-073319?w=800&auto=compress&rect=0%2C132%2C2048%2C1024&s=28743c48e1c692d3646bbf6554fc1b55"
    },
    {
      id:
        "0x0102004F76F51FFC644B478A8E4A1B07B44C4E002DC2C6EC8858CA4EBAD82AC879C32C1C",
      title: "SHIPPING Insight",
      organizer: "Maria Perikleous (BSM-CY)",
      dateStart: new Date("2019-10-15T07:00:00Z"),
      dateEnd: new Date("2019-10-17T14:00:00Z"),
      description:
        '<p><strong>BSM Involvement&#58; Speaker</strong></p><p><strong>Location&#58;&#160;Stamford</strong></p><p><strong>Date&#58; 15-17 Oct, 2019</strong></p><p><a href="https&#58;//10times.com/shipping-insight-fleet-optimization-conference-and" target="_blank"><strong>Visit the SHIPPINGInsight&#160;website</strong></a><strong>\u200b\u200b</strong></p>',
      country: "United States",
      city: " Stamford",
      address: "Hilton Stamford Hotel & Executive Meeting Center",
      addAddress: null,
      postCode: null,
      imageAddress:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62076663%2F4843891540%2F1%2Foriginal.20190510-175835?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=4f627a0dadd292cba2a69d4ca073389e"
    },
    {
      id:
        "0x0102004F76F51FFC644B478A8E4A1B07B44C4E002DC2C6EC8858CA4EBAD82AC879C32C1D",
      title: "18th Vessel Efficiency & Fuel Management Summit",
      organizer: "Olga Perikleous (BSM-CY)",
      dateStart: new Date("2019-08-07T07:00:00Z"),
      dateEnd: new Date("2019-08-08T15:00:00Z"),
      description:
        '<p>\u200b</p><p><strong>BSM Involvement&#58;&#160;Speaker</strong></p><p><strong>Location&#58;&#160;Singapore</strong></p><p><strong>Date&#58; 7-8&#160;August, 2019</strong></p><p><a href="https&#58;//www.wplgroup.com/aci/event/vessel-efficiency-fuel-management-summit/" target="_blank"><strong>Visit the 18th Vessel Efficiency &amp; Fuel Management Summit&#160;website</strong></a></p>',
      country: "Singapore",
      city: "Singapore",
      address: "to be confirmed",
      addAddress: null,
      postCode: null,
      imageAddress:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F61482455%2F200512495655%2F1%2Foriginal.20190501-044953?w=800&auto=compress&rect=0%2C183%2C1256%2C628&s=3fd56da1d0bca8bc69fd5e5f75692c0b"
    }
  ];

  getListOfEvents(): CalendarEventData[] {
    return MockEventsRepository.events;
  }

  getEventDescription(id: string): CalendarEventData {
    return MockEventsRepository.events.find(event => event.id === id);
  }
}
