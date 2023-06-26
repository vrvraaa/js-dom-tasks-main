// BEGIN
const bodyContent = document.body.innerHTML.trim();
const wrappedContent = bodyContent.split('\n').map(line => `<p>${line.trim()}</p>`).join('\n');
document.body.innerHTML = wrappedContent;
// END