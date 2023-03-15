
const aciertosSpan = document.getElementById('aciertos')

let numeros= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let cont = 0
let tarjeta1,tarjeta2 = null
let aciertos = 0
flag = true

numeros = numeros.sort(()=>Math.random()-0.5)

for (let i =0;i<numeros.length;i++){
    document.getElementById(`btn_${i}`).value=numeros[i]
}

const tablero = document.querySelector('.botones')

tablero.addEventListener('click',(e)=>{


    if(flag){
        if(e.target.className === 'btn'){ 
            if (cont < 2){
                if(cont == 0){
                    tarjeta1 =e.target
                    e.target.textContent = e.target.value
                    tarjeta1.disabled = true
                }
        
                if(cont ==1){
                    tarjeta2 = e.target
                    e.target.textContent = e.target.value
                    tarjeta2.disabled = true
                }
        
                cont ++
        
            } 
            if(cont == 2 ){
                if(tarjeta1.value == tarjeta2.value){
                    cont = 0
                    aciertos++
                    console.log(`Aciertos ${aciertos} Tarjeta1=${tarjeta1.value} Tarjeta2=${tarjeta2.value}`)
                    aciertosSpan.textContent = aciertos
                    tarjeta1.textContent =tarjeta1.value
                    tarjeta2.textContent =tarjeta2.value
                }else{
                    cont = 0
                    tarjeta1.disabled = false
                    tarjeta2.disabled = false
        
        
                    setTimeout(()=>{
                        tarjeta1.textContent =''
                        tarjeta2.textContent =''
                        flag=true
                    },300)
                    flag=false
                }
        
            }
            }
    }













    })
