const produtos = [
  {nome:'Fly Angel', img:'assets/angel_Fly.png', desc:' Uma peça que representa força, renascimento e atitude. Estampa exclusiva com acabamento premium, desenvolvida para quem transforma sua própria história em estilo.', preco:0.00},
  {nome:'Originals', img:'assets/Originals.png', desc:'Criada para quem valoriza autenticidade e estilo próprio. Com uma estampa exclusiva que mistura arte clássica e streetwear moderno, esta peça oferece conforto, qualidade e personalidade em cada detalhe.', preco:0.00},
  {nome:'Angel baby', img:'assets/Angels.png', desc:' Para quem vive com atitude e determinação. Uma estampa marcante que representa foco, ambição e a busca constante por evolução, sem abrir mão do estilo.', preco:0.00},
  {nome:'Bulls', img:'assets/Bull.png', desc:' Inspirada na força e na atitude do streetwear, esta camiseta traz uma estampa exclusiva com visual marcante e detalhes em roxo. Produzida com acabamento premium para quem busca personalidade, conforto e estilo em qualquer ocasião.', preco:0.00},
  {nome:'Bear', img:'assets/Bear.png', desc:' Uma peça criada para quem tem atitude e personalidade. Com uma estampa exclusiva inspirada no streetwear, une conforto, qualidade e um visual marcante para qualquer ocasião.', preco:0.00},
  {nome:'Nun Glock', img:'assets/Freira_Glock.png', desc:'Uma peça criada para quem carrega atitude e autenticidade. Com uma estampa exclusiva de inspiração urbana, combina força, estilo e acabamento premium para destacar sua personalidade em qualquer ocasião.', preco:0.00},
  {nome:'Crazy Cat', img:'assets/Crazy_Cat.png', desc:'Uma peça exclusiva para quem gosta de ousar no visual. Com uma estampa inspirada no streetwear moderno, combina atitude, autenticidade e conforto em um design marcante para qualquer ocasião.', preco:0.00},
  {nome:'Baby Money', img:'assets/Baby_Money.png', desc:'Uma estampa exclusiva que representa ambição, atitude e autenticidade. Inspirada na estética do streetwear moderno, esta peça combina design marcante, conforto e acabamento premium para quem busca se destacar com estilo..', preco:0.00},
  {nome:'Mandrak God', img:'assets/Mandrake_God.png', desc:'Uma estampa exclusiva que mistura referências clássicas com a cultura streetwear. Desenvolvida para quem busca autenticidade, atitude e um visual marcante, sem abrir mão do conforto e da qualidade.', preco:0.00},
  {nome:'Marijuana', img:'assets/Marijuana.png', desc:'Uma estampa exclusiva inspirada na estética do horror e da cultura urbana. Desenvolvida para quem busca um visual ousado, autêntico e cheio de personalidade, com conforto e acabamento premium.', preco:0.00},
  {nome:'Mentality', img:'assets/Mentality.png', desc:'Inspirada na força da determinação e da evolução pessoal, esta camiseta combina arte e streetwear em uma estampa exclusiva. Produzida com acabamento premium para quem veste atitude, autenticidade e estilo.', preco:0.00},
  {nome:'Nun Skull', img:'assets/Skull_Freira.png', desc:'Uma estampa exclusiva que une arte, simbolismo e estilo urbano em um design marcante. Produzida com acabamento premium para quem valoriza autenticidade, personalidade e conforto em cada detalhe.', preco:0.00},
  {nome:'Sleep Angel', img:'assets/Sleep_Angel.png', desc:'Inspirada nos sonhos e na liberdade de imaginar, esta camiseta combina arte e streetwear em uma estampa exclusiva. Produzida com acabamento premium para quem busca autenticidade, conforto e um estilo marcante.', preco:0.00}
  {nome:'Blessed', img:'assets/Blessed.png', desc:'Inspirada na força da fé, da superação e da determinação, esta camiseta traz uma estampa exclusiva que une arte e streetwear em um visual marcante. Produzida com acabamento premium para quem veste propósito, autenticidade e estilo.', preco:0.00}
  {nome:'Gold Money', img:'assets/Gold_Money.png', desc:'Inspirada na ambição, foco e determinação, esta camiseta traz uma estampa exclusiva com estética streetwear. Produzida com acabamento premium para quem busca estilo, autenticidade e personalidade em cada detalhe.', preco:0.00}
  {nome:'Gold Skull', img:'assets/Gold_Skull.png', desc:'Minimalista, sofisticada e marcante. Com uma estampa exclusiva inspirada na arte clássica e no contraste entre vida e transformação, esta peça une estilo urbano, conforto e acabamento premium.', preco:0.00}
  {nome:'Mona Lisa', img:'assets/Mona_Lisa.png', desc:'Um clássico reinventado para o streetwear. Com uma estampa exclusiva que une arte atemporal e design moderno, esta peça oferece estilo, autenticidade e acabamento premium para quem gosta de se destacar.', preco:0.00}
  {nome:'The Life Snake', img:'assets/The_Life_Snake.png', desc:'Inspirada na força, na transformação e na resiliência, esta camiseta traz uma estampa exclusiva com uma serpente em destaque. Produzida com acabamento premium para quem busca um visual marcante, autêntico e cheio de personalidade.', preco:0.00}
];
let carrinho = [];
const grid = document.querySelector('.products');
function moeda(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}
function carregarProdutos(){
  grid.innerHTML = produtos.map((p,i)=>`<article class="product"><img src="${p.img}" alt="Camiseta ${p.nome}"><h2>${p.nome}</h2><p>${p.desc}</p><strong class="price">${moeda(p.preco)}</strong><button class="add" onclick="adicionar(${i})">🛒 Adicionar ao carrinho</button></article>`).join('');
}
function adicionar(i){carrinho.push(produtos[i]); atualizarCarrinho(); toast(`${produtos[i].nome} adicionada ao carrinho`);}
function atualizarCarrinho(){
  document.getElementById('cart-count').textContent = carrinho.length;
  const itens = document.getElementById('cart-items');
  if(!carrinho.length){itens.innerHTML='<p>Seu carrinho está vazio.</p>';}
  else{itens.innerHTML=carrinho.map((p,i)=>`<div class="cart-item"><strong>${p.nome}</strong><br>${moeda(p.preco)}<br><button onclick="remover(${i})">Remover</button></div>`).join('');}
  document.getElementById('cart-total').textContent = moeda(carrinho.reduce((s,p)=>s+p.preco,0));
}
function remover(i){carrinho.splice(i,1); atualizarCarrinho();}
function abrirCarrinho(){document.getElementById('cart-panel').classList.add('open'); atualizarCarrinho();}
function fecharCarrinho(){document.getElementById('cart-panel').classList.remove('open');}
function abrirNotificacoes(){toast('Novidades da Lotus Supply em breve!');}
function mostrarTodos(){document.getElementById('camisetas').scrollIntoView({behavior:'smooth'}); toast('Todos os modelos já estão aparecendo na vitrine.');}
function finalizarWhatsApp(){
  if(!carrinho.length){toast('Adicione uma camiseta antes.'); return;}
  const lista = carrinho.map(p=>`- ${p.nome}: ${moeda(p.preco)}`).join('%0A');
  const total = moeda(carrinho.reduce((s,p)=>s+p.preco,0));
  window.open(`https://wa.me/5547996793992?text=Olá,%20quero%20comprar:%0A${lista}%0A%0ATotal:%20${total}`,'_blank');
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
carregarProdutos(); atualizarCarrinho();
