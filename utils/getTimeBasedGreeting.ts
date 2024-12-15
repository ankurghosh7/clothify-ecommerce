import moment from "moment";

/**
 * Returns a time-based greeting.
 * @returns {string} - Greeting message (Good morning, Good afternoon, Good night).
 */
export default function getTimeBasedGreeting() {
  const currentHour = moment().hour();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good night";
  }
}
