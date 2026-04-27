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
    src: "/Menu/EspressoBacXiu.jpg",
  },
  {
    name: "Mê Xỉu",
    base: "coffee",
    tags: ["strong", "high", "hot"],
    description: "Strong and bold black coffee.",
    price: 39000,
    popularity: 8,
    contains: [],
    src: "/Menu/MeXiu.jpg"
  },
  {
    name: "Espresso Sữa Đá",
    base: "coffee",
    tags: ["milky", "medium", "iced"],
    description: "Espresso combined with milk for a smooth taste.",
    price: 35000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "/Menu/EspressoSuaDa.jpg"
  },
  {
    name: "Mê Đen Đá",
    base: "coffee",
    tags: ["strong", "high", "iced"],
    description: "Traditional Vietnamese black coffee, bold and intense.",
    price: 35000,
    popularity: 9,
    contains: [],
    src: "/Menu/MeDenDa.jpg"
  },
  {
    name: "Socola KATINAT",
    base: "coffee",
    tags: ["strong", "high", "iced"],
    description: "Chocolated iced drink.",
    price: 35000,
    popularity: 9,
    contains: [],
    src: "/Menu/SocolaKATINAT.jpg"
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
    src: "/Menu/MatchaLatte.jpg"
  },
  {
    name: "Matcha Tàu Hũ",
    base: "tea",
    tags: ["matcha", "milky", "low", "iced"],
    description: "Light matcha paired with silky tofu texture.",
    price: 69000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "/Menu/MatchaTauHu.jpg"
  },
  {
    name: "Trà Đào Hồng Đài",
    base: "tea",
    tags: ["fruity", "sweet", "low", "iced"],
    description: "Refreshing peach tea with a fruity aroma.",
    price: 64000,
    popularity: 9,
    contains: [],
    src: "/Menu/TraDaoHongDai.jpg"
  },
  {
    name: "Trà Vải",
    base: "tea",
    tags: ["fruity", "sweet", "low", "iced"],
    description: "Sweet lychee tea with a refreshing finish.",
    price: 54000,
    popularity: 7,
    contains: [],
    src: "/Menu/TraVai.jpg"
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
    src: "/Menu/TraOolongNuongSua.jpg"
  },
  {
    name: "Oolong Ba Lá",
    base: "milk_tea",
    tags: ["milky", "light", "medium", "iced"],
    description: "Light and smooth oolong milk tea.",
    price: 28000,
    popularity: 7,
    contains: ["oatmilk"],
    src: "/Menu/OolongBaLa.jpg"
  },
  {
    name: "Huyền Châu Đường Mật",
    base: "blended",
    tags: ["chocolate", "sweet", "low", "blended"],
    description: "Brown Sugar Pearl With Fresh Milk.",
    price: 65000,
    popularity: 9,
    contains: ["oatmilk"],
    src: "/Menu/HuyenChauDuongMat.jpg"
  },
  {
    name: "Thanh Hương Camellia",
    base: "blended",
    tags: ["sweet", "milky", "low", "blended"],
    description: "Camellia Fresh Milk Tea.",
    price: 65000,
    popularity: 8,
    contains: ["oatmilk"],
    src: "/Menu/ThanhHuongCamellia.jpg"
  },
  {
    name: "Dừa xiêm dẻ cười",
    base: "blended",
    tags: ["fruity", "sweet", "milky", "blended"],
    description: "Pistachio CoCo Jasmine Tea.",
    price: 55000,
    popularity: 9,
    contains: ["peanut"],
    src: "/Menu/DuaXiemDeCuoi.jpg"
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
    src: "/Menu/LatteHatPhi.jpg"
  },
  {
    name: "Latte Nguyên bản",
    base: "coffee",
    tags: ["sweet", "milky", "medium", "iced"],
    description: "Sweet nougat-flavored latte with creamy texture.",
    price: 52000,
    popularity: 7,
    contains: ["oatmilk"],
    src: "/Menu/LatteNguyenBan.jpg"
  }
];

// Toast
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    location.reload();
  }, 2500);
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

  let results = drinks
    .map(d => ({ ...d, score: calculateMatch(d) }))
    .filter(d => d.score >= 0)
    .sort((a, b) => b.score - a.score);

  const container = document.getElementById("results");
  container.innerHTML = "";

  results.slice(0, 4).forEach(r => {
    let div = document.createElement("div");
    div.className = "result-card";

    div.onclick = () => addToCart(r);

    div.innerHTML = `
      <img src="${r.src}">
      <div>
        <h3>${r.name} (${userChoices.size})</h3>
        <p>💰 ${r.price.toLocaleString()} VND</p>
        <p>${r.description}</p>
      </div>
    `;

    container.appendChild(div);
  });
}

function addToCart(drink) {
  cart.push({ ...drink, size: userChoices.size });
  updateCart();

  // Reset quiz (loop back)
  document.getElementById("result-section").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  step = 1;
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById("step1").classList.add("active");

  document.getElementById("progress-bar").style.width = "16%";
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