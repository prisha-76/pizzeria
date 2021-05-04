menu_list_array=["Chicken Tandoori Pizza",
                 "Veg Supreme Pizza",
                 "Panner Tika Pizza",
                 "Deluxe Veggie Pizza",
                 "Veg Extravanga Pizza"]       

function getMenu()
{
    var htmlData
    htmlData="<ol class='menulist'>"
    menu_list_array.sort()

    for(i=0;i<menu_list_array.length;i++){
        htmlData=htmlData+'<li>'+ menu_list_array[i]+ '</li>'
        htmlData=htmlData+"</ol>"
        document.getElementById("display_menu").innerHTML=htmlData
    }
}

function addItem()
{
var htmlData;
var item=document.getElementById("add_item").value
menu_list_array.push(item)
menu_list_array.sort()
htmlData="<section class = 'cards'"
for(i=0;i<menu_list_array.length;i++){
    htmlData=htmlData+"<div class='card'>"+"<img src='images/pizzaImg.png'>" + menu_list_array[i] + "</div>"

}
htmlData=htmlData+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmlData;
}
