function getscore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "score:" + score;

}