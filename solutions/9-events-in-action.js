export default () => {
  // BEGIN
  
  const tabContainers = document.querySelectorAll('.row');
  tabContainers.forEach((tabList) => {

    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {

      tab.addEventListener('click', (e) => {
        
        e.preventDefault();

        const activeTab = tabList.querySelector('.nav-link.active');
        const activeContent = tabList.querySelector('.tab-pane.active');
        const targetTab = tabList.querySelector(tab.getAttribute('data-bs-target'));
        
        activeTab.classList.remove('active');
        activeContent.classList.remove('active');

        targetTab.classList.add('active');
        tab.classList.add('active');
        
      })
    })
  })

  // END
};