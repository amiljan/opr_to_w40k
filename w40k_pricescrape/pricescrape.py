import requests
from bs4 import BeautifulSoup

game_island = [
    "https://games-island.eu/Necrons?af=100",
    "https://games-island.eu/Tyraniden?af=100",
    "https://games-island.eu/Astra-Militarum_2?af=100",
    "https://games-island.eu/Orks_1?af=100",
    "https://games-island.eu/Chaos-Daemons_1?af=100",
    "https://games-island.eu/Chaos-Space-Marines",
    "https://games-island.eu/Drukhari?af=100",
    "https://games-island.eu/Genestealer-Cults?af=100",
    "https://games-island.eu/Harlequins?af=100"
]


def extract_text_from_element(element):
    a_tag = element.find('a', class_='text-clamp-2')
    price_div = element.find('div', class_='price productbox-price special-price')
    if a_tag:
        item_name = a_tag.get_text(strip=True)
    else:
        item_name = "N/A"
    if price_div:
        item_price = float(price_div.get_text(strip=True).split(" ")[0].replace(",","."))
    else:
        new_price_div = element.find('div',class_='price productbox-price')
        if new_price_div:
            item_price = float(new_price_div.get_text(strip=True).split(" ")[0].replace(",","."))
        else:
            item_price = "N/A"
    return item_name,item_price


for url in game_island:

    response = requests.get(url=url)

    soup = BeautifulSoup(response.text, 'html.parser')
    target_elements = soup.find_all(lambda tag: tag.name == 'div' and 'result-wrapper_buy_form_' in tag.get('id', ''))


    for element in target_elements:
        item_name,item_price = extract_text_from_element(element)
        print(f"{item_name};{item_price}€")
        with open("full_price_list.csv","a") as full_price_list:
            full_price_list.write(f"{item_name};{item_price}\n")

