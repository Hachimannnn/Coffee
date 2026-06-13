let step = 1;

let userChoices = {
  base: null,
  flavor: null,
  caffeine: null,
  temp: null,
  allergy: null,
  size: null
};

let cart = [];
let currentMode = null; // 'match' | 'budget' | 'menu'
const drinks = [
  // ☕ COFFEE
  {
    name: "Espresso Bạc Xỉu",
    base: "coffee",
    tags: ["milky", "sweet", "low", "iced"],
    description: "Creamy Vietnamese coffee with rich milk.",
    price: 34000,
    popularity: 10,
    contains: ["oatmilk"],
    src: "Menu/EspressoBacXiu.jpg",
  },
  {
    name: "Mê Xỉu",
    base: "coffee",
    tags: ["strong", "high", "hot"],
    description: "Strong and bold black coffee.",
    price: 39000,
    popularity: 8,
    contains: [],
    src: "Menu/MeXiu.jpg"
  },
  {
    name: "Espresso Sữa Đá",
    base: "coffee",
    tags: ["milky", "medium", "iced"],
    description: "Espresso combined with milk for a smooth taste.",
    price: 35000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "Menu/EspressoSuaDa.jpg"
  },
  {
    name: "Mê Đen Đá",
    base: "coffee",
    tags: ["strong", "high", "iced"],
    description: "Traditional Vietnamese black coffee, bold and intense.",
    price: 35000,
    popularity: 9,
    contains: [],
    src: "Menu/MeDenDa.jpg"
  },
  {
    name: "Socola KATINAT",
    base: "coffee",
    tags: ["strong", "high", "iced"],
    description: "Chocolated iced drink.",
    price: 35000,
    popularity: 9,
    contains: [],
    src: "Menu/SocolaKATINAT.jpg"
  },

  // 🍵 MATCHA / TEA
  {
    name: "Matcha Latte",
    base: "tea",
    tags: ["matcha", "milky", "medium", "iced"],
    description: "Smooth matcha blended with milk.",
    price: 59000,
    popularity: 9,
    contains: ["oatmilk"],
    src: "Menu/MatchaLatte.jpg"
  },
  {
    name: "Matcha Tàu Hũ",
    base: "tea",
    tags: ["matcha", "milky", "low", "iced"],
    description: "Light matcha paired with silky tofu texture.",
    price: 69000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "Menu/MatchaTauHu.jpg"
  },
  {
    name: "Trà Đào Hồng Đài",
    base: "tea",
    tags: ["fruity", "sweet", "low", "iced"],
    description: "Refreshing peach tea with a fruity aroma.",
    price: 64000,
    popularity: 9,
    contains: [],
    src: "Menu/TraDaoHongDai.jpg"
  },
  {
    name: "Trà Vải",
    base: "tea",
    tags: ["fruity", "sweet", "low", "iced"],
    description: "Sweet lychee tea with a refreshing finish.",
    price: 54000,
    popularity: 7,
    contains: [],
    src: "Menu/TraVai.jpg"
  },

  // 🧋 MILK TEA
  {
    name: "Trà Oolong Nướng Sữa",
    base: "milk_tea",
    tags: ["milky", "sweet", "medium", "iced"],
    description: "Classic oolong milk tea with a rich aroma.",
    price: 42000,
    popularity: 9,
    contains: ["oatmilk"],
    src: "Menu/TraOolongNuongSua.jpg"
  },
  {
    name: "Oolong Ba Lá",
    base: "milk_tea",
    tags: ["milky", "light", "medium", "iced"],
    description: "Light and smooth oolong milk tea.",
    price: 28000,
    popularity: 7,
    contains: ["oatmilk"],
    src: "Menu/OolongBaLa.jpg"
  },
  {
    name: "Huyền Châu Đường Mật",
    base: "blended",
    tags: ["chocolate", "sweet", "low", "blended"],
    description: "Brown Sugar Pearl With Fresh Milk.",
    price: 65000,
    popularity: 9,
    contains: ["oatmilk"],
    src: "Menu/HuyenChauDuongMat.jpg"
  },
  {
    name: "Thanh Hương Camellia",
    base: "blended",
    tags: ["sweet", "milky", "low", "blended"],
    description: "Camellia Fresh Milk Tea.",
    price: 65000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "Menu/ThanhHuongCamellia.jpg"
  },
  {
    name: "Dừa xiêm dẻ cười",
    base: "blended",
    tags: ["fruity", "sweet", "milky", "blended"],
    description: "Pistachio CoCo Jasmine Tea.",
    price: 55000,
    popularity: 9,
    contains: ["peanut"],
    src: "Menu/DuaXiemDeCuoi.jpg"
  },

  // 🥛 LATTE STYLE
  {
    name: "Latte Hạt Phỉ",
    base: "coffee",
    tags: ["milky", "nutty", "medium", "iced"],
    description: "Smooth coffee latte with hazelnut flavor.",
    price: 56000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "Menu/LatteHatPhi.jpg"
  },
  {
    name: "Latte Nguyên bản",
    base: "coffee",
    tags: ["sweet", "milky", "medium", "iced"],
    description: "Sweet nougat-flavored latte with creamy texture.",
    price: 52000,
    popularity: 7,
    contains: ["oatmilk"],
    src: "Menu/LatteNguyenBan.jpg"
  }
];

const categories = [
  'All',
  'Coffee',
  'Tea',
  'Milk Tea',
  'Blended',
  'Matcha',
  'Chocolate'
];

const categoryFilters = {
  All: () => true,
  Coffee: drink => drink.base === 'coffee',
  Tea: drink => drink.base === 'tea',
  'Milk Tea': drink => drink.base === 'milk_tea',
  Blended: drink => drink.base === 'blended',
  Matcha: drink => drink.tags.includes('matcha'),
  Chocolate: drink => drink.tags.includes('chocolate')
};

// Toast
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    location.reload();
  }, 2500);
}

function hideHero() {
  const hero = document.querySelector('header.hero');
  if (hero) hero.classList.add('hero-hidden');
  document.body.classList.add('mode-active');
}

function showHero() {
  const hero = document.querySelector('header.hero');
  if (hero) hero.classList.remove('hero-hidden');
  document.body.classList.remove('mode-active');
}

function selectOption(type, value) {
  userChoices[type] = value;

  if (type === "base") generateStep2(value);

  if (step < 6) {
    nextStep();
  } else {
    showResults();
  }
}

function nextStep() {
  document.getElementById("step" + step).classList.remove("active");
  step++;
  document.getElementById("step" + step).classList.add("active");

  document.getElementById("progress-bar").style.width =
    (step / 6) * 100 + "%";
}

function generateStep2(base) {
  const container = document.getElementById("step2-options");
  container.innerHTML = "";

  let options = [];

  if (base === "coffee") options = ["strong", "milky"];
  if (base === "tea") options = ["fruity", "matcha"];
  if (base === "milk_tea") options = ["milky", "sweet"];
  if (base === "blended") options = ["chocolate", "matcha"];

  const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

  options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = capitalize(opt);
    btn.onclick = () => selectOption("flavor", opt);
    container.appendChild(btn);
  });
}

function calculateMatch(drink) {
  if (
    userChoices.allergy !== "none" &&
    drink.contains.includes(userChoices.allergy)
  ) {
    return -1;
  }

  let score = 0;

  if (drink.base === userChoices.base) score += 3;
  if (drink.tags.includes(userChoices.flavor)) score += 3;
  if (drink.tags.includes(userChoices.temp)) score += 1;

  score += drink.popularity * 0.3;

  return score;
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result-section").classList.remove("hidden");
  document.getElementById('category-tabs').classList.add('hidden');

  // ensure menu grid layout is removed for match results
  const resultsContainer = document.getElementById('results');
  resultsContainer.classList.remove('menu-grid');

  // show progress bar during match flow (show the container)
  const progress = document.querySelector('.progress');
  if (progress) progress.style.display = 'block';

  let results = drinks
    .map(d => ({ ...d, score: calculateMatch(d) }))
    .filter(d => d.score >= 0)
    .sort((a, b) => b.score - a.score);

  renderResults(results.slice(0, 4));
}

function renderCategoryTabs() {
  const tabs = document.getElementById('category-tabs');
  tabs.innerHTML = categories
    .map(cat => `<button class="${cat === activeCategory ? 'active' : ''}" onclick="chooseCategory('${cat}')">${cat}</button>`)
    .join('');
}

function filterDrinksByCategory(list) {
  return list.filter(categoryFilters[activeCategory]);
}

function chooseCategory(category) {
  activeCategory = category;
  renderCategoryTabs();
  const filtered = filterDrinksByCategory(drinks)
    .sort((a, b) => b.popularity - a.popularity);
  renderResults(filtered);
}

function renderResults(list) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  // If we're in menu mode, render grouped categories with a category grid
  if (container.classList.contains('menu-grid')) {
    const groups = {};

    const categorize = d => {
      if (d.tags && d.tags.includes('matcha')) return 'Matcha';
      if (d.name && d.name.toLowerCase().includes('latte')) return 'Latte';
      if (d.base === 'milk_tea') return 'Milk Tea';
      if (d.base === 'tea') return 'Tea';
      if (d.tags && d.tags.includes('chocolate')) return 'Chocolate';
      if (d.base === 'blended') return 'Blended';
      if (d.base === 'coffee') return 'Coffee';
      return 'Other';
    };

    list.forEach(d => {
      const key = categorize(d);
      if (!groups[key]) groups[key] = [];
      groups[key].push(d);
    });

    const order = ['Matcha','Latte','Milk Tea','Tea','Chocolate','Blended','Coffee','Other'];

    order.forEach(cat => {
      const items = groups[cat];
      if (!items || items.length === 0) return;

      const section = document.createElement('div');
      section.className = 'category-section';
      const header = document.createElement('h3');
      header.innerText = cat;
      section.appendChild(header);

      const grid = document.createElement('div');
      grid.className = 'category-grid';

      items.forEach(r => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.onclick = () => addToCart(r);
        card.innerHTML = `
          <img src="${r.src}">
          <div>
            <h4>${r.name}</h4>
            <p>💰 ${r.price.toLocaleString()} VND</p>
          </div>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });

    return;
  }

  // Default list rendering (match or budget results)
  list.forEach(r => {
    let div = document.createElement("div");
    div.className = "result-card";

    div.onclick = () => addToCart(r);

    div.innerHTML = `
      <div class="image-frame">
        <img src="${r.src}" alt="${r.name}">
      </div>
      <div>
        <h3>${r.name} ${currentMode === 'match' ? '(' + userChoices.size + ')' : ''}</h3>
        <p class="price">💰 ${r.price.toLocaleString()} VND</p>
        <p>${r.description}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

function chooseMode(mode) {
  currentMode = mode;
  document.getElementById('budget-card').classList.add('hidden');
  hideHero();

  if (mode === 'match') {
    // reset quiz
    userChoices = { base: null, flavor: null, caffeine: null, temp: null, allergy: null, size: null };
    step = 1;
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById('step1').classList.add('active');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('progress-bar').style.width = (step / 6) * 100 + '%';

    const progress = document.querySelector('.progress');
    if (progress) progress.style.display = 'block';
  }

  if (mode === 'budget') {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('budget-card').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('category-tabs').classList.add('hidden');
  }

  if (mode === 'menu') {
    showMenu();
  }
}

function backToMode() {
  showHero();

  // If we opened chat/game from the results view, restore the results instead of hiding them
  if (lastViewWasResults) {
    lastViewWasResults = false;
    closeAllViews();
    // Re-show and re-render the menu properly
    showMenu();
    return;
  }

  currentMode = null;
  document.getElementById('budget-card').classList.add('hidden');
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('game-card').classList.add('hidden');
  document.getElementById('chat-card').classList.add('hidden');
  document.getElementById('wait-options-modal').classList.add('hidden');
  document.getElementById('progress-bar').style.width = '0%';
  const progress = document.querySelector('.progress');
  if (progress) progress.style.display = 'none';
}

/* Budget helpers: format with spaces every 3 digits, and parse */
function formatWithSpaces(value) {
  const s = String(value).replace(/\D/g, '');
  if (!s) return '';
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function parseInputNumber(str) {
  if (!str) return 0;
  const n = Number(String(str).replace(/\s+/g, ''));
  return isNaN(n) ? 0 : n;
}

function setupBudgetFormatting() {
  const max = document.getElementById('budget-max');
  if (!max) return;

  max.addEventListener('input', () => {
    const raw = max.value.replace(/\D/g, '');
    max.value = formatWithSpaces(raw);
  });
  max.addEventListener('blur', () => {
    max.value = formatWithSpaces(max.value);
  });
}

function applyBudget() {
  const max = parseInputNumber(document.getElementById('budget-max').value);

  if (max <= 0) {
    return alert('Please enter a valid maximum budget.');
  }

  showBudgetResults(max);
}

function showBudgetResults(max) {
  currentMode = 'budget';
  document.getElementById('budget-card').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('category-tabs').classList.add('hidden');

  // ensure menu grid layout is removed for budget results
  const resultsContainer = document.getElementById('results');
  resultsContainer.classList.remove('menu-grid');

  // hide progress bar container when not in match mode
  const progress = document.querySelector('.progress');
  if (progress) progress.style.display = 'none';

  let results = drinks.filter(d => d.price <= max).sort((a, b) => b.popularity - a.popularity);
  renderResults(results);
}

function showMenu() {
  currentMode = 'menu';
  activeCategory = 'All';
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');
  document.getElementById('category-tabs').classList.remove('hidden');

  // use grid layout for the menu view
  const resultsContainer = document.getElementById('results');
  resultsContainer.classList.add('menu-grid');

  // hide progress bar container when showing menu
  const progress = document.querySelector('.progress');
  if (progress) progress.style.display = 'none';

  renderCategoryTabs();
  let results = filterDrinksByCategory(drinks).sort((a, b) => b.popularity - a.popularity);
  renderResults(results);
}

function addToCart(drink) {
  cart.push({ ...drink, size: userChoices.size || 'M' });
  updateCart();

  // Return to appropriate view depending on mode
  document.getElementById("result-section").classList.add("hidden");
  if (currentMode === 'match') {
    document.getElementById("quiz").classList.remove("hidden");
    step = 1;
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById("step1").classList.add("active");
    document.getElementById("progress-bar").style.width = (step / 6) * 100 + "%";
  } else {
    backToMode();
  }
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

function openCart() {
  document.getElementById("cart-modal").classList.remove("hidden");

  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    let div = document.createElement("div");
    div.innerText = `${item.name} (${item.size}) - ${item.price.toLocaleString()} VND`;
    list.appendChild(div);
  });

  document.getElementById("cart-total").innerText = total.toLocaleString();
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

function sendOrder() {
  document.getElementById("cart-modal").classList.add("hidden");
  showToast();
}
// Note: removed accidental top-level toast/show block that ran on script load.
// Toast should only be shown via `showToast()` when an order is sent.

function openWaitOptions() {
  closeAllViews();
  document.getElementById("wait-options-modal").classList.remove("hidden");
}

function closeWaitOptions() {
  document.getElementById("wait-options-modal").classList.add("hidden");
}

function closeAllViews() {
  document.getElementById('budget-card').classList.add('hidden');
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('game-card').classList.add('hidden');
  document.getElementById('chat-card').classList.add('hidden');
  document.getElementById('cart-modal').classList.add('hidden');
  document.getElementById('wait-options-modal').classList.add('hidden');
  document.getElementById('progress-bar').style.width = '0%';
}

let lastViewWasResults = false;

function startGame() {
  // remember whether resultsMenu was visible so Back can restore it
  lastViewWasResults = !document.getElementById('result-section').classList.contains('hidden');
  closeWaitOptions();
  closeAllViews();
  hideHero();
  document.getElementById('game-card').classList.remove('hidden');
  resetGame();
}

function startChat() {
  // remember whether resultsMenu was visible so Back can restore it
  lastViewWasResults = !document.getElementById('result-section').classList.contains('hidden');
  closeWaitOptions();
  closeAllViews();
  hideHero();
  document.getElementById('chat-card').classList.remove('hidden');
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = '';
  renderChatMessage('robot', 'Hello! I am Barista Bot. Ask me anything while you wait.');
}

let gameActive = false;
let gameScore = 0;
let gameTime = 10;
let gameTimerId = null;

function resetGame() {
  gameActive = false;
  gameScore = 0;
  gameTime = 10;
  clearInterval(gameTimerId);

  const status = document.getElementById('game-status');
  const actionButton = document.getElementById('game-action-button');
  const playArea = document.getElementById('game-play');

  status.innerText = 'Ready to play?';
  actionButton.innerText = 'Start game';
  playArea.classList.add('hidden');
}

function toggleGame() {
  if (gameActive) {
    return;
  }

  gameActive = true;
  gameScore = 0;
  gameTime = 10;
  const status = document.getElementById('game-status');
  const actionButton = document.getElementById('game-action-button');
  const playArea = document.getElementById('game-play');

  status.innerText = `Time left: ${gameTime}s`;
  actionButton.innerText = 'Game running';
  playArea.classList.remove('hidden');

  gameTimerId = setInterval(() => {
    gameTime -= 1;
    status.innerText = `Time left: ${gameTime}s`;

    if (gameTime <= 0) {
      clearInterval(gameTimerId);
      gameActive = false;
      playArea.classList.add('hidden');
      status.innerText = `Done! Your score is ${gameScore}.`;
      actionButton.innerText = 'Play again';
    }
  }, 1000);
}

function registerGameTap() {
  if (!gameActive) return;
  gameScore += 1;
  document.getElementById('game-status').innerText = `Time left: ${gameTime}s · Score: ${gameScore}`;
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  renderChatMessage('user', message);
  input.value = '';

  setTimeout(() => {
    const response = generateRobotReply(message);
    renderChatMessage('robot', response);
  }, 700);
}

function setChatPrompt(promptText, autoSend = false) {
  const input = document.getElementById('chat-input');
  input.value = promptText;
  input.focus();
  if (autoSend) {
    // small timeout so focus and value settle before sending
    setTimeout(() => sendChatMessage(), 50);
  }
}

function renderChatMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const bubble = document.createElement('div');
  bubble.className = `chat-message ${sender}`;
  bubble.innerText = message;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateRobotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes('menu')) {
    return 'You can order from the main menu or ask me for recommendations.';
  }
  if (lower.includes('coffee') || lower.includes('drink')) {
    return 'My favorite is Espresso Bạc Xỉu when I need a tasty pick-me-up.';
  }
  if (lower.includes('wait') || lower.includes('time')) {
    return 'Orders usually arrive in 5–10 minutes. Relax, and I will keep you company.';
  }
  if (lower.includes('play') || lower.includes('game')) {
    return 'Try the Coffee Catch game above to pass time with fun taps!';
  }
  return 'That sounds great! I am here if you want more suggestions or a reason to smile.';
}

// initialize budget formatting once script is loaded
setupBudgetFormatting();
