const text=[
`I'm baby jianbing dreamcatcher occupy +1. Cray hella bicycle rights mukbang air plant, succulents YOLO poutine. Man braid shabby chic freegan, farm-to-table mlkshk glossier DSA. Raw denim shoreditch church-key narwhal, gatekeep glossier wolf coloring book same sartorial ennui selvage cold-pressed. Four loko ethical lomo occupy brunch chicharrones 90's franzen bespoke activated charcoal poke. Cray plaid freegan craft beer ethical tofu whatever waistcoat raw denim meh messenger bag kombucha.`,
`Aesthetic portland taxidermy 90's. Neutra celiac snackwave, Brooklyn same woke lumbersexual retro austin salvia stumptown listicle blue bottle sustainable. Aesthetic forage post-ironic listicle. Skateboard mixtape big mood street art meh aesthetic chartreuse meggings Brooklyn four dollar toast.`,

`Shaman shoreditch beard typewriter, bespoke drinking vinegar vexillologist pour-over trust fund keytar lo-fi. Plaid bitters chia, normcore stumptown authentic banjo kinfolk pitchfork blog. Messenger bag lumbersexual adaptogen blue bottle ramps bicycle rights. Slow-carb waistcoat humblebrag church-key skateboard, polaroid biodiesel chambray yuccie vinyl coloring book tousled ramps. Asymmetrical bushwick pug, XOXO 3 wolf moon chicharrones four dollar toast man bun sus vibecession microdosing cloud bread health goth dreamcatcher semiotics. Art party celiac direct trade sriracha cold-pressed pickled.`

,`Affogato tonx prism tilde. You probably haven't heard of them lomo edison bulb locavore etsy pork belly ugh kombucha pop-up direct trade bruh. Craft beer bruh taxidermy master cleanse. Deep v pitchfork mumblecore taxidermy tattooed ramps, chartreuse literally prism godard hexagon raw denim hell of. Four dollar toast coloring book pitchfork freegan vibecession flexitarian street art mlkshk banjo drinking vinegar fashion axe roof party. Kickstarter pour-over chia woke aesthetic banh mi coloring book vape tumblr plaid palo santo. Disrupt cred plaid four loko listicle cliche coloring book neutra viral put a bird on it letterpress YOLO freegan bicycle rights.`

,`Lo-fi unicorn messenger bag bodega boys skateboard. Microdosing skateboard migas everyday carry flexitarian. Direct trade poke portland meggings kale chips. Typewriter same pork belly chia subway tile. Jianbing enamel pin unicorn pork belly. Crucifix craft beer mumblecore fixie man braid man bun. Deep v green juice polaroid kitsch raclette Brooklyn selvage you probably haven't heard of them umami shabby chic.`,
`I'm baby jianbing dreamcatcher occupy +1. Cray hella bicycle rights mukbang air plant, succulents YOLO poutine. Man braid shabby chic freegan, farm-to-table mlkshk glossier DSA. Raw denim shoreditch church-key narwhal, gatekeep glossier wolf coloring book same sartorial ennui selvage cold-pressed. Four loko ethical lomo occupy brunch chicharrones 90's franzen bespoke activated charcoal poke. Cray plaid freegan craft beer ethical tofu whatever waistcoat raw denim meh messenger bag kombucha.`,
`Aesthetic portland taxidermy 90's. Neutra celiac snackwave, Brooklyn same woke lumbersexual retro austin salvia stumptown listicle blue bottle sustainable. Aesthetic forage post-ironic listicle. Skateboard mixtape big mood street art meh aesthetic chartreuse meggings Brooklyn four dollar toast.`

,`Shaman shoreditch beard typewriter, bespoke drinking vinegar vexillologist pour-over trust fund keytar lo-fi. Plaid bitters chia, normcore stumptown authentic banjo kinfolk pitchfork blog. Messenger bag lumbersexual adaptogen blue bottle ramps bicycle rights. Slow-carb waistcoat humblebrag church-key skateboard, polaroid biodiesel chambray yuccie vinyl coloring book tousled ramps. Asymmetrical bushwick pug, XOXO 3 wolf moon chicharrones four dollar toast man bun sus vibecession microdosing cloud bread health goth dreamcatcher semiotics. Art party celiac direct trade sriracha cold-pressed pickled.`

,`Affogato tonx prism tilde. You probably haven't heard of them lomo edison bulb locavore etsy pork belly ugh kombucha pop-up direct trade bruh. Craft beer bruh taxidermy master cleanse. Deep v pitchfork mumblecore taxidermy tattooed ramps, chartreuse literally prism godard hexagon raw denim hell of. Four dollar toast coloring book pitchfork freegan vibecession flexitarian street art mlkshk banjo drinking vinegar fashion axe roof party. Kickstarter pour-over chia woke aesthetic banh mi coloring book vape tumblr plaid palo santo. Disrupt cred plaid four loko listicle cliche coloring book neutra viral put a bird on it letterpress YOLO freegan bicycle rights.`

,`Lo-fi unicorn messenger bag bodega boys skateboard. Microdosing skateboard migas everyday carry flexitarian. Direct trade poke portland meggings kale chips. Typewriter same pork belly chia subway tile. Jianbing enamel pin unicorn pork belly. Crucifix craft beer mumblecore fixie man braid man bun. Deep v green juice polaroid kitsch raclette Brooklyn selvage you probably haven't heard of them umami shabby chic.`
,`Affogato tonx prism tilde. You probably haven't heard of them lomo edison bulb locavore etsy pork belly ugh kombucha pop-up direct trade bruh. Craft beer bruh taxidermy master cleanse. Deep v pitchfork mumblecore taxidermy tattooed ramps, chartreuse literally prism godard hexagon raw denim hell of. Four dollar toast coloring book pitchfork freegan vibecession flexitarian street art mlkshk banjo drinking vinegar fashion axe roof party. Kickstarter pour-over chia woke aesthetic banh mi coloring book vape tumblr plaid palo santo. Disrupt cred plaid four loko listicle cliche coloring book neutra viral put a bird on it letterpress YOLO freegan bicycle rights.`

,`Lo-fi unicorn messenger bag bodega boys skateboard. Microdosing skateboard migas everyday carry flexitarian. Direct trade poke portland meggings kale chips. Typewriter same pork belly chia subway tile. Jianbing enamel pin unicorn pork belly. Crucifix craft beer mumblecore fixie man braid man bun. Deep v green juice polaroid kitsch raclette Brooklyn selvage you probably haven't heard of them umami shabby chic.`

]

const form=document.getElementById("btn")
const numOfPara=document.getElementById('numOfPara')
const numOfRange=document.getElementById('numofRange')

function syncParaNumber(e){
const value=e.target.value;
numOfPara.value=value;
numOfRange.value=value
}
function sub(e){
   
   let  value=numOfPara.valueAsNumber;
    let tempText=text.slice(0,value);
    tempText=tempText.map(item=>`<p class="result>${item}</p>`).join(" ")
    console.log(tempText)
   result.innerHTML=tempText
}

const result =document.querySelector(".lorem-text");
numOfPara.addEventListener('input', syncParaNumber);
numOfRange.addEventListener('input', syncParaNumber);

