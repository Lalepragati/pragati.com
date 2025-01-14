// Get all tab elements and content sections
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.tab-content');

// Function to handle tab switching
function showTabContent(tabId) {
  // Hide all sections
  sections.forEach(section => section.classList.remove('active'));
  
  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Show the selected section
  const activeSection = document.getElementById(tabId);
  activeSection.classList.add('active');
  
  // Highlight the active tab
  const activeTab = document.getElementById(`${tabId}-tab`);
  activeTab.classList.add('active');
}

// Set up event listeners for each tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.id.replace('-tab', '');  // Get the corresponding section id
    showTabContent(tabId);
  });
});

// Initialize by showing the "Home" section by default
showTabContent('home');
