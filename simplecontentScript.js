// we add a mouseover listener to the whole body
document.body.addEventListener('mouseover', function (e) {
    // get the target of the mouseover event
    let hoveredElement = e.target;
    let tooltipText;

    // check if the hovered element's text includes specific strings
    if (hoveredElement.textContent.includes('Robot Lord')) {
        tooltipText = 'Overlord';
    }
    else if (hoveredElement.textContent.includes('Tri-Scorpion Lord')) {
        tooltipText = 'Skorpekh Lord';
    }

    // if specific string was found, we create a tooltip and show it
    if (tooltipText) {
        let tooltipElement = document.createElement('div');
        tooltipElement.textContent = tooltipText;
        tooltipElement.className = 'my-extension-tooltip';
        hoveredElement.appendChild(tooltipElement);
    }
}, false);

// Remove tooltip on mouseout
document.body.addEventListener('mouseout', function (e) {
    const tooltipElement = document.querySelectorAll('.my-extension-tooltip');
    tooltipElement.forEach(el => el.remove());
}, false);