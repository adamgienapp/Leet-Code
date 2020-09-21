/**
 * PROMPT:
 * You are driving a vehicle that has fixed seating capacity.
 * The vehicle only drives east (ie. it cannot turn around and drive west.)
 * 
 * Given a list of trips, trip[i] = [num_passengers, start_location, end_location]
 * contains information about the i-th trip: the number of passengers that must be
 * picked up, and the locations to pick them up and drop them off.  The locations
 * are given as the number of kilometers due east from your vehicle's initial location.
 * 
 * Return true if and only if it is possible to pick up and drop off all passengers
 * for all the given trips. 
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  let pickups = [...trips.sort((a,b) => a[1] - b[1])];
  
  let numRiders = 0;
  let drops = [...trips.sort((a,b) => a[2] - b[2])];
  let nextDrop = 0;

  for (let i = 0; i < pickups.length; i++) {
      let start = pickups[i][1];

      if (start < drops[nextDrop][2] || i === 0) {
          numRiders += pickups[i][0];
      } else {
          while (drops[nextDrop][2] <= start) {
              numRiders -= drops[nextDrop][0];
              nextDrop++;
          }
          numRiders += pickups[i][0];
      }
      if (numRiders > capacity) {
          return false;
      }
  }
  
  return true;
};