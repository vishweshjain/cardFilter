let users = [
  {
    name: "alia Bhatt",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

// Show all users
// filter the use  by name (input)
//show only filtered user

function showUser(arr){

    arr.forEach(function(users) {

        // Card div
        let card = document.createElement("div")
        card.classList.add("card")

        //for images
        let img = document.createElement("img")
        img.src = users.pic // image source for images for multi cards
        img.classList.add("bg-img") // for add css 

        //blur layered div
        let blurLayer = document.createElement("div")
        blurLayer.style.backgroundImage = `url(${users.pic})`
        blurLayer.classList.add("blurred-layer")

        //content div
        let content = document.createElement("div")
        content.classList.add("content")

        //h3 and paragraph
        let heading = document.createElement("h3")
        heading.textContent = users.name

        let para = document.createElement("p")
        para.textContent = users.bio

        // append h3 and p in Content
        content.appendChild(heading)
        content.appendChild(para)

        //append content,img, blurlayer into card
        card.appendChild(img)
        card.appendChild(blurLayer)
        card.appendChild(content)

        document.querySelector(".cards").appendChild(card)
        
    });

}

showUser(users)

let inp = document.querySelector(".inp") // inp(element) and .inp(class) is diffrent

inp.addEventListener("input", function(){

    let newUser = users.filter((users)=>{
        return users.name.toLowerCase().startsWith(inp.value.toLowerCase()) // toLowerCase() used for case-insensitive search (for both [A-Z] & [a-z])
    })

    
    document.querySelector(".cards").innerHTML = ""

    if(newUser.length > 0){
        showUser(newUser)
    }
    else{
    let message = document.createElement("h1")
    message.textContent = "oops, user not found 🧐"
    message.classList.add("message")
    document.querySelector(".cards").appendChild(message)
    } 
    // why else part is not shown
    // because we didn't add it inside the html / cards section
    
    
})

// let inp = document.querySelector(".inp");
