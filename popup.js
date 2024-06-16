
const runCode = async () => {
// Inject the content script into current page
const tab = await chrome.tabs.query({ active: true, currentWindow: true});
if (!tab) return;

const tabId = tab[0].id;

console.log('inject into tab', tabId);

await chrome.scripting.executeScript({
    //content.js is the file to be injected
    files: ["content.js"],
    target: {tabId}
});
};
runCode()