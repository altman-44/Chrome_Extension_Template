/*
The background script ('background.js') is a JavaScript script that runs once our extension 
either gets installed or the user refreshes the extension manually.
The background script doesn't actually have access to any of the webpages your user is 
viewing, so your background script can't manipulate the DOM, but the foreground script can.
*/

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["./foreground.js"]
        })
    }
});