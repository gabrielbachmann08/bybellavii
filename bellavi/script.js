// Troque pelo número completo com DDI e DDD, somente números (ex.: 5511999999999).
    const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

    // Edite nomes, descrições, preços e fotos dos produtos neste array.
    // As imagens usam URLs do Unsplash com parâmetros para carregamento otimizado; substitua por fotos reais quando quiser.
    const PRODUCTS = [
      { name: "Brinco Gota Cravejado (Pavé)", category: "Brincos", price: "R$ 129,90", image: "assets/produtos/produto-01.jpeg" },
      { name: "Brinco Halo Floral Cravejado com Zircônias", category: "Brincos", price: "R$ 149,90", image: "assets/produtos/produto-02.jpeg" },
      { name: "Brinco Folheado de Argola Cravejada (Huggie)", category: "Brincos", price: "R$ 139,90", image: "assets/produtos/produto-03.jpeg" },
      { name: "Brinco Pedras Geométricas", category: "Brincos", price: "R$ 119,90", image: "assets/produtos/produto-04.jpeg" },
      { name: "Anel Riviera Dourado", category: "Anéis", price: "R$ 89,90", image: "assets/produtos/produto-05.jpeg" },
      { name: "Colar com Pendente Halo Oval", category: "Colares", price: "R$ 109,90", image: "assets/produtos/produto-06.jpeg" },
      { name: "Colar Choker de Bolinhas", category: "Colares", price: "R$ 79,90", image: "assets/produtos/produto-07.jpeg" },
      { name: "Pulseira Pedra Retangular Cristal Azul de Prata 925", category: "Pulseiras", price: "R$ 99,90", image: "assets/produtos/produto-08.jpeg" },
      { name: "Conjunto de Colar e Brincos Roseta Dourado", category: "Conjuntos", price: "R$ 99,90", image: "assets/produtos/produto-09.jpeg" },
      { name: "Colar com Trevo de Quatro Folhas e Ponto de Luz", category: "Colares", price: "R$ 119,90", image: "assets/produtos/produto-10.jpeg" },
      { name: "Colar Halo Floral Dourado", category: "Colares", price: "R$ 129,90", image: "assets/produtos/produto-11.jpeg" },
      { name: "Colar Mandala Cravejada (Pavé)", category: "Colares", price: "R$ 89,90", image: "assets/produtos/produto-12.jpeg" },
      { name: "Anel Solitário com Três Pedras (Trio / Baguete Central)", category: "Anéis", price: "R$ 119,90", image: "assets/produtos/produto-13.jpeg" },
      { name: "Aliança com Estrelas Cravejadas de Zircônias", category: "Anéis", price: "R$ 99,90", image: "assets/produtos/produto-14.jpeg" },
      { name: "Aliança Fina Cravejada (Aparador)", category: "Anéis", price: "R$ 109,90", image: "assets/produtos/produto-15.jpeg" },
      { name: "Anel com Pingente Redondo Roseta de Baguetes Cravejado", category: "Anéis", price: "R$ 129,90", image: "assets/produtos/produto-16.jpeg" },
      { name: "Aliança Fina Cravejada (Aparador)", category: "Anéis", price: "R$ 69,90", image: "assets/produtos/produto-17.jpeg" },
      { name: "Aliança Fina Riviera Prata", category: "Anéis", price: "R$ 79,90", image: "assets/produtos/produto-18.jpeg" },
      { name: "Anel Riviera Zircônias Brancas", category: "Anéis", price: "R$ 64,90", image: "assets/produtos/produto-19.jpeg" },
      { name: "Colar de Malha Torcida", category: "Colares", price: "R$ 74,90", image: "assets/produtos/produto-20.jpeg" },
      { name: "Pulseira Ponto de Luz", category: "Pulseiras", price: "R$ 89,90", image: "assets/produtos/produto-21.jpeg" },
      { name: "Colar de Proteção (Mão de Fátima e Olho Grego)", category: "Colares", price: "R$ 99,90", image: "assets/produtos/produto-22.jpeg" },
      { name: "Colar com Pingente Redondo Roseta de Baguetes Cravejado", category: "Colares", price: "R$ 79,90", image: "assets/produtos/produto-23.jpeg" },
      { name: "Piercing de Orelha Três Voltas com Zircônias Banhado a Ródio", category: "Piercings de orelha", price: "R$ 109,90", image: "assets/produtos/produto-24.jpeg" }
    ];

    const productGrid = document.querySelector("#product-grid");
    const filterList = document.querySelector("#filter-list");
    const resultCount = document.querySelector("#result-count");
    const minPriceInput = document.querySelector("#min-price");
    const maxPriceInput = document.querySelector("#max-price");
    const searchInput = document.querySelector("#product-search");
    const sortSelect = document.querySelector("#sort-products");
    const favoriteToggle = document.querySelector("#favorite-toggle");
    const favoritesStatus = document.querySelector("#favorites-status");
    const favoriteStorageKey = "bellavori-favorites";
    let favoriteProducts = new Set();
    let activeCategory = "Todos";
    let searchTerm = "";
    let showingFavorites = false;

    function whatsappLink(message) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    function loadFavorites() {
      try {
        const savedFavorites = localStorage.getItem(favoriteStorageKey);
        if (!savedFavorites) return;

        const parsedFavorites = JSON.parse(savedFavorites);
        if (!Array.isArray(parsedFavorites)) {
          throw new Error("A lista salva de favoritos não é válida.");
        }
        const validProductImages = new Set(PRODUCTS.map(({ image }) => image));
        favoriteProducts = new Set(parsedFavorites.filter((image) =>
          typeof image === "string" && validProductImages.has(image)
        ));
      } catch (error) {
        console.error("Não foi possível carregar os favoritos salvos.", error);
        favoritesStatus.textContent = "Não foi possível carregar os favoritos salvos neste navegador.";
      }
    }

    function saveFavorites() {
      try {
        localStorage.setItem(favoriteStorageKey, JSON.stringify([...favoriteProducts]));
        favoritesStatus.textContent = "";
      } catch (error) {
        console.error("Não foi possível salvar os favoritos.", error);
        favoritesStatus.textContent = "Não foi possível salvar os favoritos neste navegador.";
      }
    }

    function renderFilters() {
      const categories = [...new Set(PRODUCTS.map(({ category }) => category))];
      const names = ["Todos", ...categories];
      filterList.innerHTML = names.map((name) => `
        <button class="filter-button" type="button" data-filter="${name}" aria-pressed="${name === activeCategory}">${name}</button>
      `).join("");
    }

    function renderProducts() {
      let visibleProducts = showingFavorites
        ? PRODUCTS.filter(({ image }) => favoriteProducts.has(image))
        : activeCategory === "Todos"
          ? PRODUCTS
          : PRODUCTS.filter(({ category }) => category === activeCategory);
      const minPrice = minPriceInput.value ? Number(minPriceInput.value) : 0;
      const maxPrice = maxPriceInput.value ? Number(maxPriceInput.value) : Infinity;

      visibleProducts = visibleProducts.filter((product) => {
        const price = Number(product.price.replace(/[^\d,]/g, "").replace(",", "."));
        const matchesSearch = `${product.name} ${product.category}`
          .toLocaleLowerCase("pt-BR")
          .includes(searchTerm);
        return price >= minPrice && price <= maxPrice && matchesSearch;
      });

      if (sortSelect.value === "price-asc") {
        visibleProducts.sort((first, second) => getPrice(first) - getPrice(second));
      } else if (sortSelect.value === "price-desc") {
        visibleProducts.sort((first, second) => getPrice(second) - getPrice(first));
      }

      resultCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "resultado" : "resultados"}`;

      if (visibleProducts.length === 0) {
        productGrid.innerHTML = showingFavorites && favoriteProducts.size === 0
          ? '<p class="empty-products">Você ainda não salvou nenhuma peça. Clique no coração de uma joia para adicioná-la aos favoritos.</p>'
          : '<p class="empty-products">Nenhuma peça encontrada com estes filtros. Ajuste a busca ou fale com a gente pelo WhatsApp.</p>';
        return;
      }

      productGrid.innerHTML = visibleProducts.map((product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" width="700" height="700">
            <button class="product-favorite${favoriteProducts.has(product.image) ? " is-favorite" : ""}" type="button" data-favorite="${product.image}" aria-pressed="${favoriteProducts.has(product.image)}" aria-label="${favoriteProducts.has(product.image) ? "Remover" : "Salvar"} ${product.name} ${favoriteProducts.has(product.image) ? "dos" : "nos"} favoritos">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z"/></svg>
            </button>
          </div>
          <p class="product-category">${product.category}</p>
          <h3>${product.name}</h3>
          ${product.price ? `<p class="product-price">${product.price}</p>` : ""}
          <a class="button button--outline buy-button" href="${whatsappLink(`Olá! Vi o produto ${product.name} no site da Bellavori e gostaria de comprar.`)}" target="_blank" rel="noopener noreferrer" aria-label="Comprar ${product.name} pelo WhatsApp">Comprar</a>
        </article>
      `).join("");
    }

    function getPrice(product) {
      return Number(product.price.replace(/[^\d,]/g, "").replace(",", "."));
    }

    function updateCategory(category) {
      const categories = new Set(PRODUCTS.map(({ category: productCategory }) => productCategory));
      activeCategory = category === "Todos" || categories.has(category)
        ? category
        : "Todos";
      renderFilters();
      renderProducts();
    }

    loadFavorites();
    renderFilters();
    renderProducts();
    document.querySelectorAll(".js-whatsapp").forEach((link) => {
      link.href = whatsappLink("Olá! Vim pelo site da Bellavori e gostaria de conhecer as semijoias.");
    });
    document.querySelector("#current-year").textContent = new Date().getFullYear();
    document.querySelector("#search-form").addEventListener("submit", (event) => event.preventDefault());
    searchInput.addEventListener("input", () => {
      searchTerm = searchInput.value.trim().toLocaleLowerCase("pt-BR");
      renderProducts();
    });
    sortSelect.addEventListener("change", renderProducts);
    [minPriceInput, maxPriceInput].forEach((input) => input.addEventListener("change", renderProducts));

    favoriteToggle.addEventListener("click", () => {
      showingFavorites = !showingFavorites;
      favoriteToggle.setAttribute("aria-pressed", String(showingFavorites));
      favoriteToggle.setAttribute("aria-label", showingFavorites ? "Ver coleção completa" : "Ver favoritos");
      if (showingFavorites) activeCategory = "Todos";
      renderFilters();
      renderProducts();
      document.querySelector("#colecao").scrollIntoView({ behavior: "smooth" });
    });
    productGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-favorite]");
      if (!button) return;

      const productImage = button.dataset.favorite;
      if (favoriteProducts.has(productImage)) {
        favoriteProducts.delete(productImage);
      } else {
        favoriteProducts.add(productImage);
      }
      saveFavorites();
      renderProducts();
    });

    filterList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) updateCategory(button.dataset.filter);
    });
    const filterDrawer = document.querySelector("#filter-drawer");
    const filterBackdrop = document.querySelector("#filter-backdrop");
    const filterToggle = document.querySelector("#open-filters");
    const closeFilterButton = document.querySelector("#close-filters");
    const setFilterDrawerOpen = (isOpen) => {
      filterDrawer.classList.toggle("is-open", isOpen);
      filterDrawer.setAttribute("aria-hidden", String(!isOpen));
      filterBackdrop.hidden = !isOpen;
      filterToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("drawer-open", isOpen);
      if (isOpen) closeFilterButton.focus();
      else filterToggle.focus();
    };
    filterToggle.addEventListener("click", () => setFilterDrawerOpen(true));
    closeFilterButton.addEventListener("click", () => setFilterDrawerOpen(false));
    filterBackdrop.addEventListener("click", () => setFilterDrawerOpen(false));
    document.querySelector("#apply-filters").addEventListener("click", () => setFilterDrawerOpen(false));
    document.querySelector("#clear-filters").addEventListener("click", () => {
      minPriceInput.value = "";
      maxPriceInput.value = "";
      searchInput.value = "";
      searchTerm = "";
      sortSelect.value = "launch";
      updateCategory("Todos");
      setFilterDrawerOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && filterDrawer.classList.contains("is-open")) {
        setFilterDrawerOpen(false);
      }
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
