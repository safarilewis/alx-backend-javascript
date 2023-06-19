export default function updateUniqueItems(item) {
  if (!(item instanceof Map)) {
    throw new Error('Cannot process');
  }
  item.forEach((val, key) => {
    // eslint-disable-next-line no-unused-expressions
    val === 1 ? item.set(key, 100) : null;
  });
}
