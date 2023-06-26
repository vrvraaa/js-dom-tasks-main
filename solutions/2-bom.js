// BEGIN
const bom = (url) => {
    const browserName = navigator.userAgent.split(' ')[0].slice(0);
    return browserName + ' ' + url;
}

export default bom;
// END