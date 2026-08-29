
const root = document.getElementById("menuRoot");
const nav = document.getElementById("categoryNav");

const navItems = [
  ["kampanyalar","Kampanyalar"],
  ...MENU_DATA.pizzaSections.map(s => [s.id, s.title]),
  ...MENU_DATA.otherSections.map(s => [s.id, s.title])
];

nav.innerHTML = navItems
  .map(([id,title]) => `<a class="nav-chip" href="#${id}">${title}</a>`)
  .join("");

function sectionHeader(title, prices){
  return `
    <div class="section-head ${prices ? "has-prices" : ""}">
      <h2 class="section-title">${title}</h2>
      ${prices ? `
      <div class="price-badge" aria-label="Kategori fiyatları">
        <div><small>Orta Boy</small><strong>${prices.orta}</strong></div>
        <div><small>Büyük Boy</small><strong>${prices.buyuk}</strong></div>
      </div>` : ""}
    </div>`;
}

function campaigns(){
  return `
    <section class="menu-section" id="kampanyalar">
      ${sectionHeader("Kampanya Menüleri")}
      <div class="cards campaigns">
        ${MENU_DATA.campaigns.map(c => `
          <article class="card campaign-card">
            <span class="menu-label">${c.name}</span>
            <h3>${c.title}</h3>
            <p>Ekonomik pizza kampanyası</p>
            <div class="campaign-price">${c.price}</div>
          </article>`).join("")}
      </div>
    </section>`;
}

function pizzaSection(section){
  return `
    <section class="menu-section" id="${section.id}">
      ${sectionHeader(section.title, section.prices)}
      <div class="card">
        ${section.items.map(item => `
          <article class="item">
            <div class="item-top">
              <div class="item-name">${item.name}</div>
            </div>
            <p class="ingredients">${item.ingredients}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function otherSections(){
  return `
    <section class="menu-section" id="icecek">
      ${sectionHeader("İçecekler, Yan Ürünler ve Ekstralar")}
      <div class="compact-grid">
        ${MENU_DATA.otherSections.map(section => `
          <article class="card" id="${section.id}">
            <span class="menu-label">${section.title}</span>
            <ul class="mini-list">
              ${section.items.map(item => `<li><span>${item.name}</span><strong>${item.price}</strong></li>`).join("")}
            </ul>
          </article>`).join("")}
      </div>
    </section>`;
}

root.innerHTML =
  campaigns() +
  MENU_DATA.pizzaSections.map(pizzaSection).join("") +
  otherSections();
