// BEGIN
export default (document) => {

    const divElements = document.querySelectorAll('div');
    divElements.forEach((divElement) => {

      const textNodes = Array.from(divElement.childNodes).filter((node) => node instanceof Text);
      textNodes.forEach((textNode) => {

        const trimmedText = textNode.textContent.trim();
        if (trimmedText !== '') {
          
          const paragraphElement = document.createElement('p');
          paragraphElement.textContent = trimmedText;
          textNode.replaceWith(paragraphElement);
        }
      });
    });
};
// END