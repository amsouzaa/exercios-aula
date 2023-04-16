function calcular1(){

    let n1=Number(document.getElementById('n1').value)
    let n2=Number(document.getElementById('n2').value)
    let n3=Number(document.getElementById('n3').value)
    let n4=Number(document.getElementById('n4').value)

    let calcular = (n1 + n2 + n3 + n4) /4

    res.innerHTML = `<p> A média é de ${calcular}<\p>`
}

function calcular2(){

    let n1=Number(document.getElementById('n1').value)
    let n2=Number(document.getElementById('n2').value)

    let calcular = ( n1 + n2 ) /2 

    res.innerHTML = `<p> A média do aluno é ${calcular} <\p>`

    if (calcular >= 7) {
         res.innerHTML = `<p> Aluno Aprovado <\p>`
         res.innerHTML = `<p> A média do aluno é ${calcular} <\p>`
    }
    

}

