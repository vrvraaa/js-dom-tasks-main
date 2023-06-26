export default (document) => {
  // BEGIN
  const category = document.querySelectorAll('.content > h1')[0].textContent.trim();
  const categoryDescription = document.querySelectorAll('.content .description')[0].textContent.trim();
  const articleElements = document.querySelectorAll('.content .links > div');

  const articles = [];
  for (const articleElement of articleElements) {
    const title = articleElement.querySelector('h2 > a').textContent.trim();
    const description = articleElement.querySelector('p').textContent.trim();
    articles.push({ title, description });
  }

  return { title: category, description: categoryDescription, items: articles };
  // END
};
