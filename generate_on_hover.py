def generate_elseif_statement(old_name,new_name,image_name):
    format_text = f''' else if (hoveredElement.textContent.includes('{old_name}')) {{
           tooltipContent = '{new_name}';
           imageUrl = "https://raw.githubusercontent.com/amiljan/opr_to_w40k/main/images/{image_name}.png";
       }}'''
    return format_text


list1 = []
image_names = []
with open("list1.csv","r") as input_list:
    for l in input_list:
        line = l.strip()
        split_line = line.split(";")
        old_name = split_line[0]
        if "," in split_line[1]:
            new_name = split_line[1].split(",")[0]
        else:
            new_name = split_line[1]
        image_name = new_name.lower().replace(" ","_")
        print(generate_elseif_statement(old_name,new_name,image_name))
        image_names.append(image_name)

for name in image_names:
    with open("list2.csv","a") as output_list:
        output_list.write(f"{name}\n")
        

