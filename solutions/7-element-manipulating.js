import camelCase from 'lodash/camelCase';

// BEGIN
const prettifyClasses = () => {
    const elements = document.querySelectorAll('*');
  
    for (const element of elements) {
        const classNames = element.className.split(' ');
    
        for (const index in classNames) {
            const className = classNames[index];
            const normalizedClassName = className.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
            classNames[index] = normalizedClassName;
        }
    
        element.className = classNames.join(' ');
    }
};

export default prettifyClasses;
// END