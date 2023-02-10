$(document).ready(function() {
    // calling json here just bcs codepen (free) don't load external files. I've made a calling, and it's commented below.
    var data = {"frases":[
      {
        "nome": "Mills Brown",
        "frase": "Mollit esse nostrud veniam non pariatur veniam excepteur sunt.\r\n",
        "dia": "2014-03-15T20:53:52 +03:00",
        "picture": "http://lorempixel.com/229/301/people/0"
      },
      {
        "nome": "Lindsay Daniels",
        "frase": "Ut esse cillum consectetur tempor.\r\n",
        "dia": "2014-01-01T14:07:12 +02:00",
        "picture": "http://lorempixel.com/229/301/people/1"
      },
      {
        "nome": "Andrea Graham",
        "frase": "Do in eiusmod cupnoiat excepteur. Labore quis ad ut anim cupnoiat laboris mollit labore et anim.\r\n",
        "dia": "2014-02-27T12:43:01 +03:00",
        "picture": "http://lorempixel.com/229/301/people/2"
      },
      {
        "nome": "Beach Mercado",
        "frase": "Duis veniam labore consectetur non et elit aute reprehenderit veniam nisi duis est.\r\n",
        "dia": "2014-06-20T01:53:04 +03:00",
        "picture": "http://lorempixel.com/229/301/people/3"
      },
      {
        "nome": "Sherrie Woodard",
        "frase": "Mollit eu pariatur cupnoiat sunt enim. \r\n",
        "dia": "2014-06-07T10:56:39 +03:00",
        "picture": "http://lorempixel.com/229/301/people/4"
      },
      {
        "nome": "Sara Chapman",
        "frase": "Ad quis labore eu veniam Lorem est do cillum ex fugiat mollit non esse. \r\n",
        "dia": "2014-06-03T03:03:58 +03:00",
        "picture": "http://lorempixel.com/229/301/people/5"
      }
    ]
    };
        LoadQuote("rand","#frasesmain",data)
  });
  
  var frasesTotal = 0;
  function LoadQuote(n,s,data){  	
    if (!s){
          s = "div";
      }
        
        
    
      //$.getJSON(jsonFile, function(data) {  
              if (n == "rand"){
              n = Math.floor(Math.random() * data.frases.length);		
          }
          var node = data.frases[n];
  
          $(s+" .frases article figure").html('<img src="'+node.picture+'">');
          $(s+" .frases article blockquote").html(node.frase);
          $(s+" .frases article .autor").html(node.nome);
          $(s+" .frases article .data").html(node.dia);
          $(s+" header.arrow").attr("data-no",n);
  
          var outros = "";
          $.each(data.frases,function(index,value){
              if(this.no!=n){
                  outros += "<li><a href='#' data-destino='"+index+"'>"+this.nome+"</a></li>";
              } 
          });
          $(s+" .frases nav.lista ul").html(outros);		
  
          $(s+" .frases nav.arrow a.prev").attr("data-destino",n-1);
          $(s+" .frases nav.arrow a.next").attr("data-destino",n+1);		
          frasesTotal = data.frases.length;
          
          $(s+" .frases nav a").click(function(){
              var number = parseInt($(this).attr("data-destino"));
  
              if (number+1 == frasesTotal){
                  $(s+" .frases nav.arrow a.next").hide();
              } else {
                  $(s+" .frases nav.arrow a.next").show();
              }
              if (number-1 < 0){
                  $(s+" .frases nav.arrow a.prev").hide();
              } else {
                  $(s+" .frases nav.arrow a.prev").show();
              }
              
              $(s+ " .frases article").fadeOut("slow", function(){		
                  $(s+" .frases article").fadeIn( "slow", LoadQuote(number,s,data));			
              });		
              $(s+" .frases nav a").unbind("click");
              return false;		
          });		
          
      //});
  
  }
  
  