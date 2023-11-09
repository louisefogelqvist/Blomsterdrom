


// <ul>
// <li><a href='index.html'>Startsidan</a></li>
// <li><a href='annansida.html'>Annan sida</a></li>
// </ul>

function buildMenu()
{
    var links = [
        ["Startsidan", "index.html"],
        ["Hitta hit", "hittaoss.html"],
        ["Om oss", "om.html"],
        ["Kontakta oss", "kontakt.html"],
        [ "Månadens bukett", "https://louisefogelqvist3.wordpress.com/"]
        
    ]

    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }
    document.getElementById("meny").innerHTML = menyHtml

}







