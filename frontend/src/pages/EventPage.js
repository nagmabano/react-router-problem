import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  if(data.error) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return (
    <>
      {<EventsList events={events} />}
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsdddd");

  if (!response.ok) {
    return {error: true, message: "Could not fetch data.."}
  } else {
    const resData = await response.json();
    return resData;
  }
}