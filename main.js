var images = ["aditya.jpg","aradhya.jpg","mom.jpg"];

var names = ["Aditya","Aradhya","Jyoti"];


var i = 0;
function next() {

    i++;
    var number_of_family_members_in_array = 2;
    if(i> number_of_family_members_in_array ){

        i=0;
    }
    var updated_image = images[i];
    var updated_name = names[i];

    document.getElementById("family_member_name").innerHTML = updated_name;
    document.getElementById("family_member_img").src = updated_image;
}
