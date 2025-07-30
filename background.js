// Listen for commands globally
chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    const tabId = tabs[0].id;
    if (command === "pick_day") {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['fillDays.js']
      });
    } else if (command === "fill_day") {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['fillDay.js']
      });
    }
  });
});
