import React, {useState} from "react";
import { Helmet } from "react-helmet";
import Calendar from "react-calendar";
import FormTitle from '../../components/FormTitle';
import Button from "../../components/Button";
import EventCard from "../../components/EventCard";
import "react-calendar/dist/Calendar.css";
import "./dashboard.scss";
import img from '../../images/group.jpg'
const events = Array(9).fill({
      title: "Swimming Meetup",
      tags: ["python", "meetup", "tech"],
      date: new Date(),
      img
})
  const tabs = ["dashboard", "collection"];

const Dashboard = (props) => {
    const [ activeTab, setActiveTab]= useState(tabs[0]);
    const [date, setDate] = useState(new Date());
    const handleClick = (t) => setActiveTab(t)

  return (
    <div className="dashboard">
      <Helmet>
        <title>Event Dashboard</title>
        <meta name="description" content="Event Meet Dashboard Page" />
      </Helmet>
      <div className="tab">
        {tabs.map((t) => (
          <h2
            className={`item ${t === activeTab ? "activeTab" : ""}`}
            key={t}
            onClick={() => handleClick(t)}
          >
            {t}
          </h2>
        ))}
      </div>
      <main className="dashboard-main">
        <div className="top">
          <div className="filter">
            <FormTitle text="Filter Events" textColor='black' rectColor='orange'/>
            <div className="filter-location">
              <p>Location</p>
              <input />
            </div>
            <div className="filter-category">
              <p>Category</p>
              <input />
            </div>
            <div className="applyBtn">
              <Button text="Apply" bgColor="orange" textColor="white" />
            </div>
          </div>
          <div className="date-filter">
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
        {activeTab === "dashboard" && (
          <div className="display">
            {events.map((event, i) => (
              <div key={i} className="card">
                <EventCard event={event} />
              </div>
            ))}
            <div className="loadmore">
              <Button text="Load More" bgColor="orange" textColor="white" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
