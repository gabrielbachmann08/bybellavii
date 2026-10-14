// Troque pelo número completo com DDI e DDD, somente números (ex.: 5511999999999).
    const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

    // Edite nomes, descrições, preços e fotos dos produtos neste array.
    // As imagens usam URLs do Unsplash com parâmetros para carregamento otimizado; substitua por fotos reais quando quiser.
    const PRODUCTS = [
      { name: "Colar Aurora", category: "Colares", description: "Corrente delicada com brilho na medida certa.", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=78" },
      { name: "Colar Serena", category: "Colares", description: "Um toque elegante para acompanhar seus dias.", price: "R$ 149,90", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=78" },
      { name: "Colar Lume", category: "Colares", description: "Design delicado com acabamento luminoso.", price: "R$ 139,90", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=78" },
      { name: "Colar Dourado", category: "Colares", description: "Uma peça versátil para criar combinações.", price: "R$ 119,90", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=78" },
      { name: "Brinco Celeste", category: "Brincos", description: "Leveza e brilho para iluminar o seu olhar.", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=78" },
      { name: "Brinco Solenne", category: "Brincos", description: "Elegância delicada com presença marcante.", price: "R$ 109,90", image: "https://images.unsplash.com/photo-1635767798638-3665a6c4b6a5?auto=format&fit=crop&w=700&q=78" },
      { name: "Brinco Alba", category: "Brincos", description: "Um clássico repensado para todos os momentos.", price: "R$ 79,90", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=78" },
      { name: "Brinco Amélie", category: "Brincos", description: "Detalhes luminosos em uma silhueta atemporal.", price: "R$ 99,90", image: "https://images.unsplash.com/photo-1635767798638-3665a6c4b6a5?auto=format&fit=crop&w=700&q=78" },
      { name: "Anel Serena", category: "Anéis", description: "Um detalhe sutil para expressar seu estilo.", price: "R$ 99,90", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=78" },
      { name: "Anel Lumière", category: "Anéis", description: "Brilho delicado com personalidade própria.", price: "R$ 119,90", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=78" },
      { name: "Anel Vittoria", category: "Anéis", description: "Uma peça elegante para usar do seu jeito.", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=78" },
      { name: "Anel Fiore", category: "Anéis", description: "Linhas delicadas inspiradas na beleza natural.", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=78" },
      { name: "Pulseira Duna", category: "Pulseiras", description: "Um acabamento especial para seus movimentos.", price: "R$ 119,90", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=78" },
      { name: "Pulseira Alma", category: "Pulseiras", description: "Delicadeza que combina com as suas escolhas.", price: "R$ 99,90", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=78" },
      { name: "Pulseira Brisa", category: "Pulseiras", description: "Leve e versátil, para acompanhar você sempre.", price: "R$ 109,90", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=78" },
      { name: "Pulseira Estela", category: "Pulseiras", description: "Um brilho discreto para todos os dias.", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=78" },
      { name: "Piercing Serena", category: "Piercings de orelha", description: "Um detalhe delicado para compor sua curadoria.", price: "R$ 69,90", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=78" },
      { name: "Piercing Lumi", category: "Piercings de orelha", description: "Brilho sutil para uma composição única.", price: "R$ 79,90", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=78" },
      { name: "Piercing Alba", category: "Piercings de orelha", description: "Design minimalista com acabamento sofisticado.", price: "R$ 64,90", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=78" },
      { name: "Piercing Sol", category: "Piercings de orelha", description: "Um ponto de luz para realçar seu estilo.", price: "R$ 74,90", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=78" },
      { name: "Acessório Belle", category: "Acessórios", description: "Um pequeno detalhe que faz toda a diferença.", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=78" },
      { name: "Acessório Miel", category: "Acessórios", description: "Elegância versátil para combinar como quiser.", price: "R$ 99,90", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=78" },
      { name: "Acessório Céleste", category: "Acessórios", description: "Um toque luminoso para acompanhar você.", price: "R$ 79,90", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=78" },
      { name: "Acessório Étoile", category: "Acessórios", description: "Um detalhe atemporal com brilho delicado.", price: "R$ 109,90", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=78" }
    ];

    // Troque os textos e imagens das categorias de acordo com a coleção.
    const CATEGORIES = [
      { name: "Colares", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=760&q=78" },
      { name: "Brincos", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=760&q=78" },
      { name: "Anéis", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=760&q=78" },
      { name: "Pulseiras", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=760&q=78" },
      { name: "Piercings de orelha", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=760&q=78" },
      { name: "Acessórios", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=760&q=78" }
    ];

    const productGrid = document.querySelector("#product-grid");
    const filterList = document.querySelector("#filter-list");
    const categoryGrid = document.querySelector("#category-grid");
    let activeCategory = "Todos";

    function whatsappLink(message) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    function renderCategories() {
      categoryGrid.innerHTML = CATEGORIES.map(({ name, image }) => `
        <a class="category-card reveal" href="#colecao" data-category-link="${name}">
          <img src="${image}" alt="Semijoias Bellavori: categoria ${name}" loading="lazy" decoding="async" width="760" height="520">
          <span>${name}</span>
        </a>
      `).join("");
    }

    function renderFilters() {
      const names = ["Todos", ...CATEGORIES.map(({ name }) => name)];
      filterList.innerHTML = names.map((name) => `
        <button class="filter-button" type="button" data-filter="${name}" aria-pressed="${name === activeCategory}">${name}</button>
      `).join("");
    }

    function renderProducts() {
      const visibleProducts = activeCategory === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(({ category }) => category === activeCategory);

      if (visibleProducts.length === 0) {
        productGrid.innerHTML = '<p class="empty-products">Em breve, novas peças nesta categoria. Fale com a gente para saber mais.</p>';
        return;
      }

      productGrid.innerHTML = visibleProducts.map((product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${product.image}" alt="${product.name} — ${product.description}" loading="lazy" decoding="async" width="700" height="875">
          </div>
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          ${product.price ? `<p class="product-price">${product.price}</p>` : ""}
          <a class="button button--outline buy-button" href="${whatsappLink(`Olá! Vi o produto ${product.name} no site da Bellavori e gostaria de comprar.`)}" target="_blank" rel="noopener noreferrer" aria-label="Comprar ${product.name} pelo WhatsApp">Comprar</a>
        </article>
      `).join("");
    }

    function updateCategory(category) {
      activeCategory = category;
      renderFilters();
      renderProducts();
    }

    renderCategories();
    renderFilters();
    renderProducts();
    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      link.href = whatsappLink("Olá! Vim pelo site da Bellavori e gostaria de conhecer as semijoias.");
    });
    document.querySelector("#current-year").textContent = new Date().getFullYear();

    categoryGrid.addEventListener("click", (event) => {
      const link = event.target.closest("[data-category-link]");
      if (!link) return;
      updateCategory(link.dataset.categoryLink);
    });
    filterList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) updateCategory(button.dataset.filter);
    });

    const header = document.querySelector("#site-header");
    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    } else {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    }
