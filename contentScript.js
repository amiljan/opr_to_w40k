document.body.addEventListener('mouseover', function (e) {
    let hoveredElement = e.target;
    let tooltipContent;
    let imageUrl;

    if (hoveredElement.textContent.includes('Robot Lord')) {
        tooltipContent = 'Overlord';
        imageUrl = "images/overlord.png";
    } else if (hoveredElement.textContent.includes('Tri-Scorpion Lord')) {
        tooltipContent = 'Skorpekh Lord';
        imageUrl = "images/skorpekh_lord.png";
    }

    if (tooltipContent) {
        let tooltipElement = document.createElement('div');
        let imageElement = document.createElement('img');
        let textElement = document.createElement('span');

        textElement.textContent = tooltipContent;
        imageElement.src = imageUrl;
        imageElement.style.width = "500px";
        imageElement.style.height = "500px";
        tooltipElement.appendChild(textElement);
        tooltipElement.appendChild(imageElement);
        tooltipElement.className = 'my-extension-tooltip';

        hoveredElement.appendChild(tooltipElement);
    }
}, false);

    document.body.addEventListener('mouseout', function (e) {
        const tooltipElement = document.querySelectorAll('.my-extension-tooltip');
        tooltipElement.forEach(el => el.remove());
    }, false);