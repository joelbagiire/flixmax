const nav_bar = document.querySelector('#nav')
const playButton = document.querySelector('#play_btn')
const rating = document.querySelector('#rating')
const links = document.querySelector('.links')
const logo =  document.querySelector('#logo')
const authorName = document.querySelector('#author')
const authorQoute = document.querySelector('#qoute')
const movieOne = document.querySelector('#johnwick')
const movieTwo = document.querySelector('#jumanji')
const movieThree = document.querySelector('#minions')
const movieFour = document.querySelector('#johny')
const movieFive = document.querySelector('#rock')
const movieSix = document.querySelector('#guy')
const movieSeven = document.querySelector('#got')
const movieEight = document.querySelector('#scream')
const moviePreview = document.querySelector('#preview_img')
const titleOne = document.querySelector('#title_one')
const infoOne = document.querySelector('#info_one')
const titleTwo = document.querySelector('#title_two')
const infoTwo = document.querySelector('#info_two')
const titleThree = document.querySelector('#title_three')
const infoThree = document.querySelector('#info_three')
const quotes = [
  {
    quote: "Christmas for me is all about spending time with my family. I cherish any chance we have to spend all day together making gingerbread houses, baking cookies, or sitting around and watching movies",
    author:"--Blake Lively--"
  },
  {
    quote: "There is no greater joy than putting laptop on your belly and binge watching movies/tv series.",
    author:"--Crestless Wave--"
  },
  {
    quote: "I think it's that thing of growing up all the time watching American movies and listening to American music. It hits you in a way that's a lot purer because you are not in that culture that you're watching",
    author:"--Ben Mendelsohn--"
  },
  {
    quote: "I remember being a kid and sleeping over at my friend's house and staying up late and watching 'Nosferatu.' Vampire movies are supposed to be secret and bad. They should be rated R",
    author:"--Ethan Hawke--"
  },
  {
    quote: "I watch movies, and if I get the chance to watch television, I'm usually prone to watching something completely mindless and mundane that I don't have to follow so closely.",
    author:"--Billy Burke--"
  },
  {
    quote: "It's not like I sit around watching my movies again and again, but I've never quite believed actors when they say they don't watch themselves.",
    author:"--Kristen Stewart--"
  },
  {
    quote: "I've done so many Lifetime movies; at this point, I'll be going through airport security, and the lady there will be like, 'I took the weekend off and I saw four of your movies.' And I say: 'You've been watching Lifetime, right?",
    author:"--Linden Ashby--"
  },
  {
    quote: "I'm not a big filmophile. I don't watch movies a lot for a hobby. I spend all my time watching sporting events. Because, opposed to movies, you can never tell how they're going to end.",
    author:"--Michael Douglas--"
  },
  {
    quote: "I'm really visually stimulated more than anything. I don't really listen to music. I'm more into watching telly or watching movies and visual art",
    author:"--Sia Furler--"
  },
  {
    quote: "I actually like older horror movies more than newer ones because when I'm watching newer ones, like 'Chucky' or 'Saw' or whatever, I'm like, 'Come on, really, this isn't even good, all it is is blood and knives.' I like when it has a story line, you know? When it's actually a movie.",
    author:"--Emily Alyn Lind--"
  },
  {
    quote: "My friends tell me I'm the most boring celebrity they know! A typical night for me is at home in California or watching movies in my pyjamas. ",
    author:"--Amber Riley--"
  },
  {
    quote: "I think there have been more movies in the Western genre than any other. I grew up watching those movies.",
    author:"--Tom Selleck--"
  },
  {
    quote: "I spend days on my Xperia logging on Facebook chatting with my friends and family at home; I love listening to Rihanna and Pink and watching movies. Basically, anything that makes me smile, but most of my fans will know that I am always smiling!",
    author:"--Dominika Cibulkova--"
  },
  {
    quote: " I just went to see too many movies and I sat in too many dark matinees watching those old serials.",
    author:"--Sam Elliott--"
  },
  {
    quote: "Of all their eccentricities, Sally most ferociously mocked the habit Lobsang and Joshua had developed of watching old movies in the bowels of the Mark Twain. (Joshua was glad she hadn't been on board when the two of them had dressed up for The Blues Brothers.)",
    author:"--Terry Pratchett--"
  }
]
const randomQoute = quotes[Math.floor(Math.random() * quotes.length)]

logo.addEventListener('click',() => {
  if(logo.innerHTML === '<span>FLIX</span>MAX'){
    logo.setAttribute('href','../All HTML/home.html')
  }else{
    logo.style.cursor ='none'
  }

})

authorName.innerHTML = randomQoute.author
authorQoute.innerHTML = randomQoute.quote

 window.addEventListener('scroll', () => {
   if(document.body.scrollTop > 352 || document.documentElement.scrollTop > 352){
     nav_bar.style.background = '#000'
     logo.style.color = "#ff00ff"
     logo.innerHTML = "Trending"
     links.style.display = 'none'
     if(document.body.scrollTop > 610 || document.documentElement.scrollTop > 610){
      nav_bar.style.height = '100px'
      logo.style.color = "#ff00ff"
      logo.innerHTML = "Must Watch"
    }else{
      nav_bar.style.height = ''
      logo.style.color = "#ff00ff"
      logo.innerHTML = "Trending"
    }
   }else{
    nav_bar.style.background = 'rgba(0, 0, 0, 0.808)'
    logo.style.color = "#fff"
    logo.innerHTML = "<span>FLIX</span>MAX"
    links.style.display = 'flex'
   }
 })









movieOne.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/action(1).jpg"
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  authorName.innerHTML = titleOne.innerHTML
  authorQoute.innerHTML = infoOne.innerHTML
  rating.style.visibility = "visible"
  rating.innerHTML = "18+"
  playButton.style.visibility = "visible"
})
movieTwo.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/adventure.jpg"
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  authorName.innerHTML = titleTwo.innerHTML
  authorQoute.innerHTML = infoTwo.innerHTML
  rating.style.visibility = "visible"
  rating.innerHTML = "16+"
  playButton.style.visibility = "visible"
})
movieThree.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/animated(1).jpg"
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  authorName.innerHTML = titleThree.innerHTML
  authorQoute.innerHTML = infoThree.innerHTML
  rating.style.visibility = "visible"
  rating.innerHTML = "ALL"
  playButton.style.visibility = "visible"
})
movieFour.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/comedy(1).jpg" 
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  rating.style.visibility = "visible"
  rating.innerHTML = "13+"
  playButton.style.visibility = "visible"
} )
movieFive.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/crime(1).jpg" 
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  rating.style.visibility = "visible"
  rating.innerHTML = "16+"
  playButton.style.visibility = "visible"
} )
movieSix.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/funny(1).jpeg" 
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  rating.style.visibility = "visible"
  rating.innerHTML = "16+"
  playButton.style.visibility = "visible"
} )
movieSeven.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/got(1).jpg" 
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  rating.style.visibility = "visible"
  rating.innerHTML = "18+"
  playButton.style.visibility = "visible"
} )
movieEight.addEventListener('mouseover', () => {
  moviePreview.src = "../All Images/big imgs/horror(1).jpg" 
  moviePreview.style.backgroundPosition ="center"
  moviePreview.style.backgroundRepeat = "no-repeat"
  moviePreview.style.backgroundSize ="cover"
  rating.style.visibility = "visible"
  rating.innerHTML = "M+"
  playButton.style.visibility = "visible"
} )