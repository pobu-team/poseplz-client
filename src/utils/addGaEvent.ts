import ReactGA from 'react-ga4';

const addGaEvent = (eventName: string) => {
  if (!window.location.href.includes('localhost')) {
    ReactGA.event({
      category: 'Event',
      action: eventName,
    });
  }
};

export default addGaEvent;
