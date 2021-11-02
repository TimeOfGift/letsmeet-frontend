import React, {useState} from 'react';
import './EventScreen.scss';
import FormTitle from '../FormTitle';
import Button from '../Button'
import DatePicker from 'react-datepicker';

const UploadSvg = () => {
	return(
<svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2001 21C20.2001 21 25.1873 21 25.6589 21C28.2779 21 30.4001 18.8778 30.4001 16.2594C30.4001 13.641 28.2779 11.5182 25.6589 11.5182C25.6469 11.5182 25.6361 11.52 25.6241 11.52C25.6607 11.2236 25.6859 10.9236 25.6859 10.6176C25.6859 6.59164 22.4225 3.32764 18.3959 3.32764C15.2585 3.32764 12.5927 5.31304 11.5643 8.09224C10.9121 7.43884 10.0097 7.03384 9.0137 7.03384C7.0223 7.03384 5.4083 8.64784 5.4083 10.6386C5.4083 10.6896 5.4143 10.7388 5.4161 10.7892C3.2171 11.397 1.6001 13.4064 1.6001 15.7986C1.6001 18.6714 3.9287 21 6.8021 21C7.2983 21 11.8001 21 11.8001 21" stroke="#01149A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 16.8L16 13.8L19 16.8" stroke="#01149A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M16 25.8002V14" stroke="#01149A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

	)
}


const EventScreen = () => {

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());


	return ( 
		<div className="event">

			<div className="event_border">

				<div className="event_details">

				<FormTitle className='eventcolor' text='CREAT EVENT' textColor='rgba(1, 20, 154, 0.8)'
					rectColor='rgba(1, 20, 154, 0.8)' />
				
  
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
					        <DatePicker selected={startDate}
                            onChange={date => setStartDate(date)}
                            timeInputLabel="Time:"
                            dateFormat="MM/dd/yyyy h:mm aa"
                            showTimeInput className='input_date' />
                        </div>
						<div>
							<h4>End Date:</h4>
							<DatePicker selected={endDate}
                             onChange={(date) => setEndDate(date)}
                             timeInputLabel="Time:"
                             dateFormat="MM/dd/yyyy h:mm aa"
                             showTimeInput className='input_date' />
						</div>
					</div>

					<div className='event_image'>
						<h4>Feature Image:</h4>
						<input type='' className='input_image' image={UploadSvg} />
					</div>

                    <div className='eventbtn'>
					    <div> <Button text='Cancel' className='cancelbtn'/> </div>
				        <div> <Button text='Submit' className='submitbtn'/> </div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default EventScreen;