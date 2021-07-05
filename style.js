function playgame()
{
    var randomno1=Math.floor((Math.random()*6)+1);
    var randomimg1="images/"+randomno1+".png";

    var randomno2=Math.floor((Math.random()*6)+1);
    var randomimg2="images/"+randomno2+".png";

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomimg1);

    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomimg2);

    if(randomno1>randomno2)
    {
        document.querySelector("h1").innerHTML="Player One Wins";
    }

    else if(randomno2>randomno1)
    {
        document.querySelector("h1").innerHTML="Player Two Wins";
    }

    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }
}

document.querySelector("button").addEventListener("click",playgame);