function checkPackings(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== null) {
      return true; // If any value is not null, return true
    }
  }
  return false; // If all values are null, return false
}

export default checkPackings;
