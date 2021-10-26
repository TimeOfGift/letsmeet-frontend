import React from 'react'
import './EventScreen.scss';
import FormTitle from '../FormTitle';
import Button from '../Button'

const EventScreen = () => {
	return (
		<div className="event">

			<div className="event_border">

				<div className="event_details">
				<FormTitle className='eventcolor' text='Create Event' textColor='#000000'
					rectColor='#ffa500'
				/>
				
  
					<div className='event_title'>
						<h4>Title:</h4>
						<input type='text' placeholder='title' required className='input_title' />
					</div>

					<div className='event_description'>
						<h4>Description:</h4>
						<input type='text' placeholder='description' required className='input_description' />
					</div>

					<div className='event_venue'>
						<h4>Venue:</h4>
						<input type='text' placeholder='venue' required className='input_venue' />
					</div>

					<div className='event_date'>
						<div>
							<h4>Start Date:</h4>
							<input type='date'  required className='input_date' />
						</div>
						<div>
							<h4>End Date:</h4>
							<input type='date' required className='input_date' />
						</div>
					</div>

					<div className='event_image'>
						<h4>Feature Image:</h4>
						<input type='' required className='input_image' />
					</div>

					<div className='eventbtn'>
						<Button text='Cancel' className='cancelbtn'/>
						<Button text='Submit' className='submitbtn'/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventScreen;