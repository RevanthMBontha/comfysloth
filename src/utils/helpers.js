export const formatPrice = (price) => {
  const newPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format((price / 100) * 65);
  return newPrice;
};

export const getUniqueValues = (data, type) => {
  let values = data.map((item) => item[type]);

  if (type === 'colors') {
    values = values.flat();
  }

  const uniqueSet = ['all', ...new Set(values)];
  return uniqueSet;
};
