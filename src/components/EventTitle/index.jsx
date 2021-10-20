import React from "react";
import './EventTitle.scss';

const EventTitle = (props) => {

		const { topic, subTopic, street, state, date, time } = props;
		return (
			<div className="eventdetail">

				<div className="eventtitles">

					<div className="topics">
						<h1>{topic}</h1>
						<p>{subTopic}</p>
						<button className="btnrsvp">RSVP</button>
					</div>
					<div className="location">
						<h6>Location</h6>
						<p className="street">{street}</p>
						<p className="state">{state}</p>
					</div>
					<div className="datetime">
						<h6>Date and Time</h6>
						<p className="date">{date}</p>
						<p className="time">{time}</p>
					</div>
				</div>

			</div>
		);
	}

export default EventTitle;