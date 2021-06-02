$("#submitButton").click(function() {
    let gender = $("#question1").val().toLowerCase();
    let description = parseInt($("#question2").val());

    // Background imgs
    let background;
    let tang = "https://pbs.twimg.com/profile_images/1364238629707546624/vt7ms0in_400x400.jpg";
    let dai = "https://static.wikia.nocookie.net/soulland/images/e/e2/War_God.JPG/revision/latest?cb=20190509013800";
    let hu = "https://static.wikia.nocookie.net/soulland/images/b/b3/Hu_Liena.png/revision/latest?cb=20201010152535";
    let xiao = "https://wallpapercave.com/wp/wp8781175.png";

    let result;
    let resultText;
   
    if (gender === "male" && description === 1) {
        result = "Tang San";
        background = tang;
    } else if (gender === "female" && description === 3) {
        result ="Hu Liena";
        background = hu;
    } else if (gender === "male" && description === 2 || gender === "male" && description === 4) {
        result = "Dai Muibai";
        background = dai;
    } else if(gender === "female" && description === 4) {
        result = "Xiao Wu";
        background = xiao;
    } else {
        result = "a weeb";
    }

    $(".resultResponse").prepend(`<p>You identify as ${gender}</p>`);
    $("#character").text(result);
    $(".result").css("background-image", `url('${background}')`);
    $(".result").show();
});