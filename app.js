function myFunction() {
    var res = "";
    var i;
    var form = document.getElementById("myForm");
    for (i = 0; i < form.length; i++) {
      if (form[i].checked) {
        res += form[i].value + " ";
      }
    }
  
    var str1 = document.getElementById("inputText").value;
    var strRes1 = str1.replace(/(\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2}/, "$1");
    res += "(" + strRes1 + ") ";
  
    var form2 = document.getElementById("myForm2");
    for (i = 0; i < form2.length; i++) {
      if (form2[i].checked) {
        res += form2[i].value + " ";
      }
    }
  
    var str2 = document.getElementById("assinatura").value;
    res += str2;
  
    document.getElementById("demo").innerHTML = res;
  }
  
  
  function copiarMemo() {
      let memo = document.getElementById("demo");
      let temp = document.createElement("textarea");
      temp.value = memo.innerHTML;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
  }
  
  
  function novoAtendimento() {
    // Limpa o campo de despesa
    document.getElementById("inputText").value = "";
  
    // Limpa as opções selecionadas no myForm
    var form = document.getElementById("myForm");
    for (var i = 0; i < form.length; i++) {
      form[i].checked = false;
    }
  
    // Limpa as opções selecionadas no myForm2
    var form2 = document.getElementById("myForm2");
    for (var i = 0; i < form2.length; i++) {
      form2[i].checked = false;
    }
  
    // Limpa o campo de demo
    document.getElementById("demo").innerHTML = "";
  }
  
  
  
  
  
  
  (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{13}(.*) R\$(.*) -
  
  .* (.*) (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{11}(.*)
  
  
  (.*) (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{24}(.*)
  
  289.90  08/04/24 17:45:20 59 000000 4816   OT PARC=112EBN*CANV
  599.98  08/04/24 20:30:34 59 000000 5941   OT PARC=104CENTAURO
  
  
  if (origem == 1){
        var str1 = document.getElementById("inputText").value;
        var strRes1 = str1.replace(/(\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2}/, "$1");
        res += "(" + strRes1 + ") ";
  
        var form2 = document.getElementById("myForm2");
        for (i = 0; i < form2.length; i++) {
              if (form2[i].checked) {
                res += form2[i].value + " ";
              }
              else if (origem == 2) {
                    
                    var str1 = document.getElementById("inputText").value;
                    var despesa = (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{13}(.*) R\$(.*) -;
                    var match = str1.match(despesa);
                    
                    if (match){
                          let valor = match [1];
                          let data = match [2];
                          let estab = match [3];
                          res += "(" + data + valor + estab + ") ";
                          
                    }
              }
              else if (origem ==3){
                    var str1 = document.getElementById("inputText").value;
                    var despesa = .* (.*) (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{11}(.*);
                    var match = str1.match(despesa);
                    
                    if (match){
                          let valor = match [1];
                          let data = match [2];
                          let estab = match [3];
                          res += "(" + data + valor + estab + ") ";
                          
                    }  
              }
              else{
                    var str1 = document.getElementById("inputText").value;
                    var despesa = .* (.*) (\d{2}\/\d{2})\/\d{4} \d{2}:\d{2}:\d{2} .{11}(.*);
                    var match = str1.match(despesa);
                    
                    if (match){
                          let valor = match [1];
                          let data = match [2];
                          let estab = match [3];
                          res += "(" + data + valor + estab + ") ";
                          
                    }
              }     
        }
  }
  
  var form2 = document.getElementById("myForm2");
                    for (i = 0; i < form2.length; i++) {
                          if (form2[i].checked) {
                                res += form2[i].value + " ";
                          }
                    } 