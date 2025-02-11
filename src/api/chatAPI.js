export function simulateResponse(userMessage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I heard you say: " + userMessage);
    }, 1000);
  });
}