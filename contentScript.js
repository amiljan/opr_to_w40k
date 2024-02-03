document.body.addEventListener('mouseover', function (e) {
    let hoveredElement = e.target;
    let tooltipContent;
    let imageUrl;
//Necrons
    if (hoveredElement.textContent.includes('Robot Lord')) {
        tooltipContent = 'Overlord, Cryptek';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/overlord.png";
    } else if (hoveredElement.textContent.includes('Tri-Scorpion Lord')) {
        tooltipContent = 'Skorpekh Lord';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/skorpekh_lord.png";
    } else if (hoveredElement.textContent.includes('Annihilator Lord')) {
        tooltipContent = 'Lokhust Lord';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/lokhust_lord.png";
    } else if (hoveredElement.textContent.includes('Warriors')) {
        tooltipContent = 'Necron Warriors';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/necron_warriors.png";
    } else if (hoveredElement.textContent.includes('Guardians')) {
        tooltipContent = 'Lychguard, Triarch Praetorians';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/lychguard.png";
    } else if (hoveredElement.textContent.includes('Flesh-Eaters')) {
        tooltipContent = 'Flayed Ones';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/flayed_ones.png";
    } else if (hoveredElement.textContent.includes('Eternals')) {
        tooltipContent = 'Immortals';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/immortals.png";
    } else if (hoveredElement.textContent.includes('Snipers')) {
        tooltipContent = 'Deathmarks';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/deathmarks.png";
    } else if (hoveredElement.textContent.includes('Bot Swarm')) {
        tooltipContent = 'Canoptek Scarab Swarms';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/canoptek_scarab_swarms.png";
    } else if (hoveredElement.textContent.includes('Robot Snakes')) {
        tooltipContent = 'Canoptek Wraiths';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/canoptek_wraiths.png";
    } else if (hoveredElement.textContent.includes('Destroyer Snakes')) {
        tooltipContent = 'Ophydian Destroyers';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/ophydian_destroyers.png";
    } else if (hoveredElement.textContent.includes('Tri-Scorpions')) {
        tooltipContent = 'Skorpekh Destroyers';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/skorpekh_destroyers.png";
    } else if (hoveredElement.textContent.includes('Annihilators')) {
        tooltipContent = 'Lokhust Destroyers';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/lokhust_destroyers.png";
    } else if (hoveredElement.textContent.includes('Tri-Scorpion Pistoleer')) {
        tooltipContent = 'Hexmark Destroyer';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/hexmark_destroyer.png";
    } else if (hoveredElement.textContent.includes('Forge Spider')) {
        tooltipContent = 'Canoptek Spyder';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/canoptek_spyder.png";
    } else if (hoveredElement.textContent.includes('Heavy Annihilator')) {
        tooltipContent = 'Lokhust Heavy Destroyer';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/lokhust_heavy_destroyer.png";
    } else if (hoveredElement.textContent.includes('Hover Bikes')) {
        tooltipContent = 'Tomb Blades';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/tomb_blades.png";
    } else if (hoveredElement.textContent.includes('Transport Tank')) {
        tooltipContent = 'Ghost Ark';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/ghost_ark.png";
    } else if (hoveredElement.textContent.includes('Doom Tank')) {
        tooltipContent = 'Doomsday Ark';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/doomsday_ark.png";
    } else if (hoveredElement.textContent.includes('Support Platform')) {
        tooltipContent = 'Annihilation Barge, Catacomb Command Barge';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/annihilation_barge.png";
    } else if (hoveredElement.textContent.includes('Tripod Walker')) {
        tooltipContent = 'Canoptek Reanimator, Doomstalker';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/canoptek_reanimator.png";
    } else if (hoveredElement.textContent.includes('Spider Walker')) {
        tooltipContent = 'Triatch Stalker';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/triatch_stalker.png";
    } else if (hoveredElement.textContent.includes('Prison Monolith')) {
        tooltipContent = 'Silent King';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/silent_king.png";
    } else if (hoveredElement.textContent.includes('Wraith-Shard')) {
        tooltipContent = 'C-Tan Shard, Void Dragon';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/void_dragon.png";
    } else if (hoveredElement.textContent.includes('Death Fortress')) {
        tooltipContent = 'Monolith,Obelisk, Tesseract Vault';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/monolith.png";
    } else if (hoveredElement.textContent.includes('Night Transport')) {
        tooltipContent = 'Night Scythe';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/night_scythe.png";
    } else if (hoveredElement.textContent.includes('Doom Fighter')) {
        tooltipContent = 'Doom Scythe';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/doom_scythe.png";
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