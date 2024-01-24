function changeBackground(){

    let elem = document.getElementById("color_change");

    let color = elem.value;
    console.log(color);
    let btn_color = document.querySelectorAll(".btn");
    console.log(btn_color);

    switch(color){
        case "White":
            document.body.style.backgroundColor = "white";
            document.getElementById("color_change").style.backgroundColor = "white";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "white";
            }
            break;
        case "Red":
            document.body.style.backgroundColor = "red";
            document.getElementById("color_change").style.backgroundColor = "red";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "red";
            }
            break;
        case "Blue":
            document.body.style.backgroundColor = "blue";
            document.getElementById("color_change").style.backgroundColor = "blue";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "blue";
            }
            break;
        case "Green":
            document.body.style.backgroundColor = "green";
            document.getElementById("color_change").style.backgroundColor = "green";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "green";
            }
            break;
        case "Violet":
            document.body.style.backgroundColor = "violet";
            document.getElementById("color_change").style.backgroundColor = "violet";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "violet";
            }
            break;
        case "Brown":
            document.body.style.backgroundColor = "brown";
            document.getElementById("color_change").style.backgroundColor = "brown";
            for(let i=0; i<btn_color.length; i++){
                btn_color[i].style.backgroundColor = "brown";
            }
            break;
        default:
            console.log("Select Something!");
            break;
    }

}
