export default () => {
  // BEGIN
  const btn = document.querySelector('#alert-generator');
  const container = document.querySelector('.alerts');
  let count  = 1;
  
  btn.addEventListener('click', () => {
    const elem = document.createElement('div');
    elem.textContent = `Alert ${count}`;
    elem.className = 'alert alert-primary';
  
    container.prepend(elem);
    count++;
  });
  // END
};