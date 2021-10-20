const movies = [
    {
        name: "Free Guy", 
        description: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
        rating: "7.3/10"
    },
    {
        name: "Shang-Chi and the Legend of the Ten Rings", 
        description: "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
        rating: "7.9/10"
    },
    {
        name: "Iron Man", 
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        rating: "7.9/10"
    },
    {
      name: "Ant-Man", 
      description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
      rating: "7.3/10"
    },
    {
      name: "Doctor Strange", 
      description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
      rating: "7.5/10"
    },
    {
      name: "Jungle Cruise", 
      description: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
      rating: "6.6/10"
    },
    {
      name: "Thor", 
      description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      rating: "7.0/10"
    },
    {
      name: "The Suicide Squad", 
      description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      rating: "7.3/10"
    },
    {
      name: "Black Widow", 
      description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      rating: "6.8/10"
    },
    {
      name: "The Dark Knight", 
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: "9.0/10"
    }
]

var index = window.location.search.substr(1);
index = index.split("=").pop();

document.getElementById("movieimg").src = "../img/" + movies[index].name + ".jpg";
document.getElementById("movien").innerHTML = movies[index].name;
document.getElementById("movied").innerHTML = movies[index].description;
document.getElementById("movier").innerHTML = movies[index].rating;