import requests
from tqdm import tqdm
from bs4 import BeautifulSoup
import json
import re
data=[]
CHAMP_URL='https://lolcounter.com/champions/'
regex = re.compile('[^a-zA-Z]')
champ_page = requests.get(CHAMP_URL)
soup = BeautifulSoup(champ_page.text, 'html.parser')
champions_list = soup.find(class_='champions')
champions_links = champions_list.find_all('a')
for champion in champions_links:
    champ_name = regex.sub('', champion.text)
    data.append({"name":champ_name})

for el in tqdm(data):
    name = el["name"]
    url = url='https://lolcounter.com/champions/'+name
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')
    
    STRONG_list = soup.find(class_='strong-block')
    STRONG_list_items = STRONG_list.findAll("div", {"class": "name"})
    STRONGS=[]
    # Use .contents to pull out the <a> tag’s children
    for strong in STRONG_list_items:
        a = regex.sub('', strong.text)
        STRONGS.append(a)
    el["strongagainst"]=STRONGS
    
    COUNTERS=[]
    COUNTERS_list = soup.find(class_='weak-block')
    COUNTERS_list_items = COUNTERS_list.findAll("div", {"class": "name"})
    for counter in COUNTERS_list_items:
        a = regex.sub('', counter.text)
        COUNTERS.append(a)
    el["counters"]=COUNTERS

    
    url_icon = "https://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/"+name.capitalize()+".png"
    el['icon'] = url_icon
    
    TIPS=[]
    TIPS_list = soup.find(class_='champ-tips')
    TIPS_list_items = TIPS_list.findAll("span", {"class": "_tip"})
    for tip in TIPS_list_items[:3]:
        TIPS.append(tip.text)
    el["tips"]=TIPS
    
    DESCRIPTION = ""
    DESCRIPTION_list = soup.find(class_='title')
    DESCRIPTION = DESCRIPTION_list.text
    el['description'] = DESCRIPTION

    
    ROLES=[]
    roles_list = soup.find(class_='roles')
    roles_list_items = roles_list.findAll("div")
    for d in roles_list_items:
        ROLES.append(d.text)
    el['roles']= ROLES

    LANES=[]
    lanes_list = soup.find(class_='lanes')
    lanes_list_items = lanes_list.findAll("div")
    for d in lanes_list_items:
        LANES.append(d.text)
    el['lanes']= LANES
    
    VALUES=[]
    VALUES_LIST = soup.find(class_='col2 left')
    VALUES_LIST_items = VALUES_LIST.findAll("div")
    for value1 in VALUES_LIST_items:
        VALUES.append(value1.text)
    KEYS=[]
    KEYS_LIST = soup.find(class_='col1 left')
    KEYS_LIST_items = KEYS_LIST.findAll("div")
    for key1 in KEYS_LIST_items:
        KEYS.append(key1.text[:-2].lower().replace(" ","_"))

    VALUES_LIST = soup.find(class_='col4 left')
    VALUES_LIST_items = VALUES_LIST.findAll("div")
    for value2 in VALUES_LIST_items:
        VALUES.append(value2.text)
    KEYS_LIST = soup.find(class_='col3 left')
    KEYS_LIST_items = KEYS_LIST.findAll("div")
    for key2 in KEYS_LIST_items:
        KEYS.append(key2.text[:-2].lower().replace(" ","_"))
    STATS= dict(zip(KEYS,VALUES))
    el["stats"] = STATS
with open('test.json', 'w') as fp:
    json.dump(data, fp)
print("DONE")