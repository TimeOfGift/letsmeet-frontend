import EventTitle from "./index";

export default {
	title: 'Event Meet/EventTitle',
	component: EventTitle,
	args: {
		topic: "building Async App With Calery",
		subTopic: "python Meetup",
		street: "235 ikorudu Road, Ilupeju, ",
		state: "Lagos,LA",
		date: "Sun 5 August 2018",
		time: "11:30 - 16:00 WAT"
	  }
}

export const All = (args) => <EventTitle {...args} />;
