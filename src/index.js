let nome_heroi = "Ruan"
let xp = 10002
let nivel = "sem nível"

if (xp<=1000){
    nivel="ferro"
}
if (xp>=1001 && xp <=2000){
    nivel = "bronze"
}
if (xp>=2001 && xp <=5000){
    nivel = "prata"
}
if (xp>=5001 && xp <=7000){
    nivel = "ouro"
}
if (xp>=7001 && xp <=8000){
    nivel = "platina"
}
if (xp>=8001 && xp <=9000){
    nivel = "ascendente"
}
if (xp>=9001 && xp <=10000){
    nivel = "imortal"
}
if (xp>=10001){
    nivel = "radiante"
}

console.log ("O herói " + nome_heroi + " está no nível **" + nivel + "**")