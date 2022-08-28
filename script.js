document.getElementById("cep").focus();

function criaTabela(){
    
    let novalinha = document.createElement('tr');
    let campoCEP = document.createElement('th');
    campoCEP.setAttribute("id", "celulaCEP")
    //colunaCEP.innerHTML = "CEP novo aqui";
    let campoRua = document.createElement('th');
    campoRua.setAttribute("id", "celulaRua")
    //colunaRua.innerHTML = "Rua nova aqui";
    let campoBairro = document.createElement('th');
    campoBairro.setAttribute("id", "celulaBairro")
    //colunaBairro.innerHTML = "Bairro novo aqui";
    let campoCidade = document.createElement('th');
    campoCidade.setAttribute("id", "celulaCidade")
    //colunaCidade.innerHTML = "Cidade nova aqui";
    
    novalinha.appendChild(campoCEP);
    novalinha.appendChild(campoRua);
    novalinha.appendChild(campoBairro);
    novalinha.appendChild(campoCidade);
    
    document.getElementById('enderecos-tbody').appendChild(novalinha);
    
    pesquisaCep()
           
}
               
  function preencheDados(endereco) {
    if (document.getElementById("celulaCEP").innerHTML == endereco.cep) {
        alert("Cep já está na consulta")
    } else {
        document.getElementById("celulaCEP").innerHTML = endereco.cep;
        document.getElementById("celulaRua").innerHTML = endereco.logradouro;  
        document.getElementById("celulaBairro").innerHTML = endereco.bairro;  
        document.getElementById("celulaCidade").innerHTML = endereco.localidade;         
        //console.log(endereco) 

        ocultaP()
    }
    

  }

  function ocultaP() {
    document.getElementById("start-wrapper").style.visibility = "hidden";
  }

  async function pesquisaCep () {
      const cep = document.querySelector("#cep").value
      const url = `http://viacep.com.br/ws/${cep}/json/`
      //fetch(url).then(response => response.json).then(console.log)
      const retornoViacep = await fetch(url)
      const endereco = await retornoViacep.json()
      if(endereco.hasOwnProperty("erro")) {
        let naoEncontrado = document.getElementById("start-wrapper")
        naoEncontrado.innerHTML = "Cep não consta na base de dados"
      } else {
        preencheDados(endereco)
      }
      //console.log(endereco)
    }

    function apagaDados() {
        location.reload();
    }

    document.querySelector("#btn-clean").addEventListener("click", function() {
        apagaDados();
    })

    document.querySelector("#busca").addEventListener("click", function() {
      
      criaTabela();
    })

 