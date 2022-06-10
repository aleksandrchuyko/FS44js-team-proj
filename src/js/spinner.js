const loadingDiv = document.getElementById("loading");
loadingDiv.addEventListener('click', hideSpinner)


export function showSpinner() {
  loadingDiv.style.display = 'block';
 
}

export function hideSpinner() {
  loadingDiv.style.display = 'none';
}