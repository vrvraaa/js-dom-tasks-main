import 'whatwg-fetch';

export default () => {
  // BEGIN
    const inputElements = document.querySelectorAll('input[data-autocomplete]');

    function generateListItems(data) {
      return data.map((item) => `<li>${item}</li>`).join('');
  }

    inputElements.forEach((inputElement) => {
        inputElement.addEventListener('input', async (event) => {
            const { value } = event.target;
            const urlObj = new URL(inputElement.dataset.autocomplete, window.location.origin);
            urlObj.searchParams.set('search', value);

            try {
                const response = await fetch(urlObj);
                if (response.status === 200) {
                    const data = await response.json();
                    const autocompleteName = inputElement.dataset.autocompleteName;
                    const list = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);

                    if (data.length > 0) {
                        list.innerHTML = generateListItems(data);
                    } else {
                        list.innerHTML = '<li>Nothing</li>';
                    }
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                console.error(error);
            }
        });
    });

    
  // END
};
