async function fetchAndInsert(url, containerId) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const container = document.getElementById(containerId);
    container.innerHTML = data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error)
  }
}
  