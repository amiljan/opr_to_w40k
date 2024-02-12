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
// Astra Militarum
    if (hoveredElement.textContent.includes('Robot Lord')) {
        tooltipContent = 'Overlord, Cryptek';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/overlord.png";
    } else if (hoveredElement.textContent.includes('Company Leader')) {
        tooltipContent = 'Cadian Castellan';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/cadian_castellan.png";
    } else if (hoveredElement.textContent.includes('Storm Leader')) {
        tooltipContent = 'Tempestus Scions Commander';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/tempestus_scions_commander.png";
    } else if (hoveredElement.textContent.includes('Conscripts')) {
        tooltipContent = 'Cadian Shock Troops';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/cadian_shock_troops.png";       
    } else if (hoveredElement.textContent.includes('Infantry Squad')) {
        tooltipContent = 'Veteran Guardsmen';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/veteran_guardsmen.png";
    } else if (hoveredElement.textContent.includes('Veteran Squad')) {
        tooltipContent = 'Gaunts Ghosts';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/gaunts_ghosts.png";
    } else if (hoveredElement.textContent.includes('Weapon Teams')) {
        tooltipContent = 'Cadian Heavy Weapon Squad';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/cadian_heavy_weapon_squad.png"; 
    } else if (hoveredElement.textContent.includes('Special Weapons')) {
        tooltipContent = 'Kill Team Kasrkin';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/kill_team_kasrkin.png";
    } else if (hoveredElement.textContent.includes('Storm Troopers')) {
        tooltipContent = 'Militarum Tempestus Scions';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/militarum_tempestus_scions.png";
    } else if (hoveredElement.textContent.includes('Sniper Squad')) {
        tooltipContent = 'Cadian Snipers';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/cadian_snipers.png";
    } else if (hoveredElement.textContent.includes('OGRE Squad')) {
        tooltipContent = 'Ogryns';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/ogryns.png";
    } else if (hoveredElement.textContent.includes('Cavalry Squad')) {
        tooltipContent = 'Attilan Rough Riders';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/attilan_rough_riders.png";
    } else if (hoveredElement.textContent.includes('Light Walker')) {
        tooltipContent = 'Scout Sentinel';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/scout_sentinel.png";
    } else if (hoveredElement.textContent.includes('Armored Truck')) {
        tooltipContent = 'Taurox';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/taurox.png";
    } else if (hoveredElement.textContent.includes('Light APC')) {
        tooltipContent = 'Chimera';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/chimera.png";
    } else if (hoveredElement.textContent.includes('Attack Vehicle')) {
        tooltipContent = 'Hellhound';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/hellhound.png";
    } else if (hoveredElement.textContent.includes('Support Vehicle')) {
        tooltipContent = 'Basilisk';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/basilisk.png";
    } else if (hoveredElement.textContent.trim().toLowerCase() === 'battle tank'.toLowerCase()) {
        tooltipContent = 'Leman Russ';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/leman_russ.png";
    } else if (hoveredElement.textContent.includes('Field Artillery')) {
        tooltipContent = 'Field Ordnance Battery';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/field_ordnance_battery.png";
    } else if (hoveredElement.textContent.trim().toLowerCase() === 'heavy battle tank'.toLowerCase()) {
        tooltipContent = 'Rogal Dorn';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/rogal_dorn.png";
    } else if (hoveredElement.textContent.trim().toLowerCase() === 'super heavy battle tank'.toLowerCase()) {
        tooltipContent = 'Baneblade';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/baneblade.png";
    } else if (hoveredElement.textContent.includes('Light Gunship')) {
        tooltipContent = 'Valkyrie';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/valkyrie.png";
    } else if (hoveredElement.textContent.includes('Heavy Gunship')) {
        tooltipContent = 'Valkyrie';
        imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/valkyrie.png";
    }
// Post Army lists
    if (tooltipContent) {
        let tooltipElement = document.createElement('div');
        let imageElement = document.createElement('img');
        let textElement = document.createElement('span');

        textElement.textContent = tooltipContent;
        imageElement.src = imageUrl;
        imageElement.style.width = "300px";
        imageElement.style.height = "300px";
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