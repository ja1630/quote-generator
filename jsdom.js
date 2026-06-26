let btn=document.querySelector('.b1');
let quote=document.querySelector('.text');
let author=document.querySelector('.author');

let quotes=[{quote:`"It is not whether you get knocked down, it is whether you get up"`,
    author:`Vince Lombardi`},
    {quote:`"I have failed over and over and over again in my life and that is why I succeed"`,
     author:`Micheal jordan`},
     {quote:`"I raise up my voice—not so I can shout but so that those without a voice can be heard We cannot 
        succeed when half of us are held back"`,
        author:`Malala Yousafzi` },
    {quote:`"The future belongs to those who prepare for it today."`,
        author:`Malcolm x`
    },
    {quote:`"I have a dream that one day little black boys and girls will be holding 
    hands with little white boys and girls. "`,
    author:` Martin Luther King Jr`
    },
    {quote:`"Do something worth remembering."`,
    author:`Elvis prisley`
    },
    {quote:`"We may encounter many defeats but we must not be defeated."`,
        author:`Maya Angelou`

    },
];

   
 function f(){
 let x=Math.floor(Math.random() * quotes.length);
quote.innerText=quotes[x].quote;
author.innerText=quotes[x].author;
 };
btn.addEventListener("click",f);