    document.getElementById("kgInput").addEventListener("input",e=>{
        let kg=e.target.value;
        console.log(kg)
        document.getElementById("output").innerHTML=kg*2.205;
    })
    document.getElementById("mesureInput").addEventListener("input",e=>{
        let Feet=e.target.value;
       
        document.getElementById("outputM").innerHTML=Feet*30.48;
    })