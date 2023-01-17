function contar(){
    let num = document.getElementById('numero')
    let res = document.getElementById('tabu')
    if (num.value.length == 0){
        window.alert('Por favor, Digite um numero')
    } else{
        var n1 = Number(num.value) 
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            let s = n1 * c
            item.text = `${n1} * ${c} = ${s}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
    
}