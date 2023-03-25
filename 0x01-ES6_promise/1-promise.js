export default function getResponseFromAPI(success) {
  const p = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject("The fake API is not working currently");
    }
  });
  p.catch((err) => {
    return err;
  })
  return p;
}
