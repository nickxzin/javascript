function verificar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var c = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar'
        window.alert('[ERRO] Faltam dados!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
        res.innerHTML += `\u{1f3c1}`
    }
}