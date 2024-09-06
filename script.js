function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let slider = document.querySelector(".tranding-slider"); // Seletor do slider
  let sliderControls = document.querySelector(".tranding-slider-control"); // Seletor das setas
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Ocultar o slider e as setas ao fazer a pesquisa
  slider.classList.add("hidden");
  sliderControls.classList.add("hidden");

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma comida</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Verifique se os dados estão corretos
  console.log("Campo de Pesquisa:", campoPesquisa);
  console.log("Dados disponíveis:", dados);

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    // Verificar se 'tags' existe antes de acessar
    if (dado.tags) {
      tags = dado.tags.toLowerCase();
    } else {
      tags = ""; // Se 'tags' não existir, atribuímos uma string vazia
    }

    console.log("Procurando em:", titulo, descricao, tags); // Para verificar os valores

    // Se título, descrição ou tags contêm o termo pesquisado
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;

  console.log("Resultados:", resultados); // Verifique os resultados encontrados
}


var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
