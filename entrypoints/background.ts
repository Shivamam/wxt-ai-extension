export default defineBackground(() => {
  console.log('Background script for LinkedIn extension running');

  // Listen for messages from the content script
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchData') {
      console.log('Fetching LinkedIn data...');
      // Perform some background tasks
    }
  });
});
