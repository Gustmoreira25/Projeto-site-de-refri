// Criação de uma timiline do GSAP com animações sincronizadas com o scroll 

var tl = gsap.timeline ({
    scrollTrigger:{
        trigger:'.two',
        start:'0% 95%',
        end:'70% 50%',
        scrub:true,
       
    }
});


tl.to (
    '#fanta',

    {
        top:'120%', //MOVE O ELEMENTO COM O ID FANTA PARA 120% DO TOPO 
        left: '0%', 
    },
    'orange'
); //Nomeando esse trecho de animação como 'orange' para  sincronização 

tl.to (
    '#laranja-cortada',
    {
        top:'155%', //MOVE O ELEMENTO COM O ID ORANGE-CUT PARA 160% DO TOPO 
        left: '23%', //MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
); //SINCRONIZANDO COM A ANIMAÇÃO NOMEADA 'ORANGE'

tl.to (
    '#laranja',
    {
        width:'15%', //TORNA A LARGURA DO ELEMENTO 15%
        top:'165%', //MOVE O ELEMENTO COM O ID LARANHA PARA 165% DO TOPO 
        right: '10%', //MOVE O ELEMENTO PARA 10% DA DIREITA
    },
    'orange'

); 
tl.to (
    '#leaf',
    {
       top:'110%',//MOVE O ELEMENTO COM O ID LEAF PARA 110% DO TOPO
        rotate:'130deg', // ROTACIONA O ELEMENTO EM 130 GRAUS  
        left:'70%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); 

tl.to (
    '#folha',
    {
       top:'100%',//MOVE O ELEMENTO COM O ID LEAF PARA 110% DO TOPO
        rotate:'400deg', // ROTACIONA O ELEMENTO EM 130 GRAUS  
        left:'70%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); 

tl.to (
    '#folha2',
    {
       top:'100%',//MOVE O ELEMENTO COM O ID LEAF PARA 110% DO TOPO
        rotate:'530deg', // ROTACIONA O ELEMENTO EM 130 GRAUS  
        left:'0%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); 


//CRIANDO OUTRA TIMELINE 
var tl2  = gsap.timeline ({
    scrollTrigger:{
        trigger:'.three',
        start:'0% 95%',
        end:'20% 50%', // FIM DA ANIMAÇÃO (TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SEÇÃO THREE)
        scrub:true,
        
    }
});

// DEFININDO A ANIMAÇÃO DOS ELEMENTOS COM A TIMELINE 'TL2'
tl2.from(
    '.lemon1',
    {
        rotate:'-90deg', //INICIA O ELEMENTO COM A CLASSE 'LEMON1' ROTACIONANDO -90 GRAUS 
        left:'-100%', // INICIA O ELEMENTO FORA DA TELA ,Á ESQUERDA (-100%)
        top:'110%', // INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA (110% DO TOPO)
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate:'-90deg', //INICIA O ELEMENTO COM A CLASSE 'COCACOLA' ROTACIONANDO -90 GRAUS 
        left:'-110%', // INICIA O ELEMENTO FORA DA TELA ,Á ESQUERDA (-100%)
        top:'110%', // INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA (110% DO TOPO)
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '.lemon2',
    {
        rotate:'90deg', //INICIA O ELEMENTO COM A CLASSE 'LEMON2' ROTACIONANDO -90 GRAUS 
        left:'100%', // INICIA O ELEMENTO FORA DA TELA ,Á ESQUERDA (-100%)
        top:'110%', // INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA (110% DO TOPO)
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        rotate:'90deg', //INICIA O ELEMENTO COM A CLASSE 'PEPSI' ROTACIONANDO -90 GRAUS 
        left:'110%', // INICIA O ELEMENTO FORA DA TELA ,Á ESQUERDA (100%)
        top:'110%', // INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA (110% DO TOPO)
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width:'18%',  //Aumenta a largura do elemento com id laranja-cortda para 18%
        left:'42%', //Move o elemento para 42% da esquerda
        top:'204%', //Move o elemento para 204% do topo
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#fanta',
    {
        width:'31%',  //Aumenta a largura do elemento com id laranja-cortda para 18%
        left:'35%', //Move o elemento para 42% da esquerda
        top:'212%', //Move o elemento para 204% do topo
    },
    'ca'
); //Nomeando este trecho de animação com 'ca' para sincronização