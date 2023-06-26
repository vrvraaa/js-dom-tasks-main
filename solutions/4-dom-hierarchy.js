// BEGIN
export default function (documentElement) {
    const paragraphs = Array.from(documentElement.getElementsByTagName('p'));
    return paragraphs.map(p => p.textContent.trim());
}

// END