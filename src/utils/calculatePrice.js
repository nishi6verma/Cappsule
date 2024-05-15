function calculatePrice(pharmacies) {
  // Calculate the minimum price from the available pharmacies 
  if (!pharmacies) return null;
  let minPrice = Infinity;
  Object.values(pharmacies).forEach((pharmacyArray) => {
    if (pharmacyArray) {
      pharmacyArray.forEach((pharmacy) => {
        if (pharmacy.selling_price < minPrice) {
          minPrice = pharmacy.selling_price;
        }
      });
    }
  });
  if (minPrice === Infinity) return null;
  return minPrice;
}

export default calculatePrice;
