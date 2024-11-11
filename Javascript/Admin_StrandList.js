  // Define strands
  const strands = [
    { name: "ABM", key: "ABM" },
    { name: "STEM", key: "STEM" },
    { name: "GAS", key: "GAS" },
    { name: "HUMSS", key: "HUMSS" }
  ];

  // Select the container for the strands
  const strandContainer = document.querySelector('.strand-container');

  // Generate cards for each strand
  strands.forEach(({ name, key }) => {
    const linkElement = document.createElement('a');

    // Attach a click event handler to dynamically add parameters and redirect
    linkElement.addEventListener('click', (event) => {
      event.preventDefault();
      addParameterAndRedirect("strand", key);
    });

    linkElement.classList.add('card-link');

    // Create a card styled div to match the CSS classes
    const card = document.createElement('div');
    card.classList.add('module-card');
    card.textContent = name;

    // Append card div to the anchor link
    linkElement.appendChild(card);

    // Append anchor link to the strand container
    strandContainer.appendChild(linkElement);
  });

  function addParameterAndRedirect(param, value) {
  // Set target page
  const targetPage = "CJMSAMS/HTML/SA_StrandClassList.php";
  
  // Construct the URL to redirect to
  const url = new URL(targetPage, window.location.origin);

  // Copy existing parameters to the new URL
  const existingParams = new URLSearchParams(window.location.search);

  // Add or update the specified parameter
  existingParams.set(param, value);

  // Update the URL with retained and new parameters
  url.search = existingParams.toString();

  // Redirect to the updated URL
  window.location.href = url.href;
}