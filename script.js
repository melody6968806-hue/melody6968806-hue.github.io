// ===== Story Data =====
const storyData = {
  // --- 故事節點 ---
  start: {
    text: "大學二年級的四月，校園裡的櫻花正開得燦爛。\n\n這天下午你剛上完課，走出教學大樓時，天空突然下起了傾盆大雨。你沒帶傘，只能站在屋簷下看著雨幕發呆。\n\n這時，一個你沒見過的人走到你身邊，撐著一把淡紫色的傘，微笑著說：\n\n「看起來你需要幫忙？要不要一起走？」",
    choices: [
      { text: "❶ 微笑接受，一起撐傘走過雨中的櫻花道", next: "umbrella_walk" },
      { text: "❷ 不好意思麻煩別人，婉拒後衝進雨裡", next: "run_in_rain" },
      { text: "❸ 猶豫一下，決定在屋簷下繼續等雨停", next: "wait_here" }
    ]
  },

  umbrella_walk: {
    text: "你們一起走在櫻花飄落的小路上，雨滴打在傘面的聲音像輕快的節拍。\n\n「我叫小晴，美術系三年級的。」對方自我介紹，語氣自然又溫暖。\n\n走了一段路後，小晴突然說：「這週末美術系有個小畫展，是我們班同學的作品，你有興趣來看看嗎？」",
    choices: [
      { text: "❶ 答應赴約，想多了解小晴", next: "art_exhibition" },
      { text: "❷ 說週末有事，但交換了聯絡方式", next: "exchange_contact" }
    ]
  },

  run_in_rain: {
    text: "你鼓起勇氣衝進雨中，書包抱在懷裡拼命跑。\n\n沒跑幾步，腳底一滑——\n\n就在你要摔倒的瞬間，一隻手穩穩地抓住了你的手臂。是剛才那個人，撐著傘追了上來。\n\n「小心啊！地上很滑的。」對方笑著說，「都濕成這樣了，還是讓我送你一程吧。」\n\n你注意到對方的半邊肩膀已經被雨淋濕了。",
    choices: [
      { text: "❶ 有點感動，接受好意一起走", next: "exchange_contact" },
      { text: "❷ 指指前方的咖啡廳，邀對方進去避雨", next: "cafe_encounter" }
    ]
  },

  wait_here: {
    text: "你決定等雨停。那個人也沒有離開，在你旁邊的屋簷下站著。\n\n沉默了一會兒後，你們開始有一搭沒一搭地聊天。對方叫小晴，是美術系的學生，最近在準備畢業作品。\n\n雨漸漸變小了。小晴收起傘，從背包裡拿出一張小卡片遞給你：「這是我們這週末畫展的邀請函，如果有空的話⋯⋯」\n\n卡片上畫著一把淡紫色的傘和櫻花，很漂亮。",
    choices: [
      { text: "❶ 收下卡片，決定週末去看畫展", next: "art_exhibition" },
      { text: "❷ 收下卡片，但不確定會不會去", next: "exchange_contact" },
      { text: "❸ 輕輕婉拒，獨自離開", next: "ending_passing" }
    ]
  },

  art_exhibition: {
    text: "週末，你來到美術系的展覽廳。\n\n小晴看到你來，眼睛一亮，親自帶你參觀。牆上掛滿了各種風格的畫作，但走到最後一幅畫前，你愣住了——\n\n畫面上是一個雨天的校園，屋簷下站著兩個人，一把淡紫色的傘在櫻花雨中輕輕搖晃。\n\n「這是⋯⋯？」你驚訝地問。\n\n小晴有點不好意思地說：「那天回去之後，腦海裡一直是那個畫面，就畫下來了。」",
    choices: [
      { text: "❶ 「這是我看過最美的畫。」真誠地說", next: "ending_spring" },
      { text: "❷ 覺得有點太快了，先當朋友慢慢來", next: "friends_route" }
    ]
  },

  exchange_contact: {
    text: "你和小晴交換了通訊軟體帳號。\n\n接下來的日子裡，你們開始頻繁地聊天。小晴會傳來課堂上的塗鴉、校園裡拍到的貓咪、還有偶爾的一句「今天過得好嗎？」\n\n有天晚上，小晴突然傳來一張圖——是一幅手繪的肖像畫，畫的是你。線條溫柔，色彩輕暖，旁邊寫了一行小字：「謝謝那天的相遇。」",
    choices: [
      { text: "❶ 被感動到，約小晴出來見面", next: "ending_spring" },
      { text: "❷ 覺得這份心意有點沉重，開始保持距離", next: "ending_passing" }
    ]
  },

  cafe_encounter: {
    text: "你們一起走進了校園旁的小咖啡廳。溫暖的燈光和咖啡香讓人放鬆下來。\n\n「歡迎光臨～啊？」櫃檯後面的店員看到你們，又驚又笑，\n「小晴，你不是今天沒排班嗎？」\n\n原來小晴在這裡打工。小晴笑笑，對你說：「等我一下。」\n\n不一會兒，小晴端來一杯拿鐵。杯面上用奶泡拉了一朵小花，旁邊放了一塊手工餅乾。\n\n「雨天限定特調，招待你。」",
    choices: [
      { text: "❶ 太溫暖了，之後常常來這家咖啡廳", next: "friends_route" },
      { text: "❷ 喝完咖啡道謝離開，但心裡記住了這個人", next: "ending_passing" }
    ]
  },

  friends_route: {
    text: "之後的日子裡，你和小晴自然而然地成為了好朋友。\n\n你們一起去圖書館讀書、一起逛夜市、一起在草地上看夕陽。身邊的同學都說你們很像一對情侶，但你們總是笑笑帶過。\n\n轉眼到了學期末。在最後一堂課結束的傍晚，小晴約你到頂樓天台。\n\n夕陽把天空染成了橘紅色，微風吹過髮絲。小晴轉過頭看著你，欲言又止。\n\n你知道，這一刻，你需要做出決定。",
    choices: [
      { text: "❶ 鼓起勇氣，先開口告白", next: "ending_late" },
      { text: "❷ 珍惜這份友誼，微笑著說「謝謝這學期的陪伴」", next: "ending_friends" }
    ]
  },

  // --- 結局 ---
  ending_spring: {
    isEnding: true,
    title: "春日告白",
    icon: "🌸",
    text: "小晴聽到你的話，臉頰泛起了淡淡的紅暈，像窗外盛開的櫻花。\n\n「我也是⋯⋯從那天起，就一直在想著你。」\n\n你們在櫻花樹下牽起了手。春風輕拂，花瓣紛飛，像是整個世界都在為你們祝福。\n\n後來每年的四月，你們都會回到那棵櫻花樹下，回憶那場改變一切的春雨。\n\n那年春天的相遇，成為了你一生中最美好的故事。"
  },

  ending_late: {
    isEnding: true,
    title: "遲來的心動",
    icon: "🌅",
    text: "「小晴，」你深吸一口氣，「其實我⋯⋯一直都很喜歡你。」\n\n夕陽下，小晴的眼眶泛紅了。\n\n「笨蛋⋯⋯我等這句話等了一整個學期。」\n\n你們相視而笑，晚風帶著溫暖的氣息掠過天台。整個校園在黃昏中顯得格外美麗。\n\n雖然表白來得晚了一些，但最重要的是——你終於沒有讓這份心意成為遺憾。\n\n有些故事，需要等到剛剛好的時刻，才能說出口。"
  },

  ending_friends: {
    isEnding: true,
    title: "最好的朋友",
    icon: "🤝",
    text: "「嗯⋯⋯我也是。」小晴收起了眼底的一絲失落，露出了你熟悉的笑容。\n\n「那我們就繼續當最好的朋友吧。」\n\n畢業後，你和小晴雖然走上了不同的路，但每年春天，你們都會約出來喝杯咖啡，聊聊近況。\n\n你們之間有一種比戀人更加自在的默契。也許不是每段相遇都要變成愛情——有些人註定以另一種方式陪伴在你身邊。\n\n而那份雨天中的溫暖，永遠留在你的心底。"
  },

  ending_passing: {
    isEnding: true,
    title: "擦肩而過",
    icon: "🌧️",
    text: "之後的日子，一切恢復平常，就好像那場雨中的相遇只是一場夢。\n\n你偶爾在校園裡看見小晴的身影——在美術系的走廊上、在咖啡廳的窗邊、在櫻花樹下寫生。你們會輕輕點頭、微笑，然後各自轉身離去。\n\n畢業典禮那天，你在人群中最後看了小晴一眼。對方似乎也正在看向你，但轉瞬就被人潮淹沒了。\n\n也許在某個平行時空裡，你做了不同的選擇。\n但在這個故事裡，有些相遇，注定只是擦肩而過。"
  }
};

// Total story depth (for progress bar)
const maxDepth = 5;
let currentDepth = 0;

// ===== Screen Management =====
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  target.classList.remove('active');
  // Force reflow to restart animation
  void target.offsetWidth;
  target.classList.add('active');
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Start Story =====
function startStory() {
  currentDepth = 0;
  navigateTo('start');
}

// ===== Navigate to a Story Node =====
function navigateTo(nodeId) {
  const node = storyData[nodeId];
  if (!node) return;

  // Check if it's an ending
  if (node.isEnding) {
    showEnding(node);
    return;
  }

  currentDepth++;
  showScreen('storyScreen');

  // Update progress bar
  const progress = Math.min((currentDepth / maxDepth) * 100, 100);
  document.getElementById('progressFill').style.width = progress + '%';

  // Update story text with typewriter-like animation
  const storyText = document.getElementById('storyText');
  storyText.style.animation = 'none';
  void storyText.offsetWidth;
  storyText.style.animation = 'textFadeIn 0.5s ease forwards';
  storyText.textContent = node.text;

  // Render choice buttons
  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';

  node.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice.text;
    btn.id = `choice-${nodeId}-${index}`;
    btn.style.animationDelay = (0.1 + index * 0.1) + 's';
    btn.addEventListener('click', () => navigateTo(choice.next));
    choicesContainer.appendChild(btn);
  });
}

// ===== Show Ending =====
function showEnding(node) {
  showScreen('endingScreen');

  document.getElementById('endingIcon').textContent = node.icon || '✿';
  document.getElementById('endingTitle').textContent = node.title;
  document.getElementById('endingText').textContent = node.text;

  // Full progress
  document.getElementById('progressFill').style.width = '100%';
}

// ===== Restart =====
function restartStory() {
  currentDepth = 0;
  document.getElementById('progressFill').style.width = '0%';
  showScreen('titleScreen');
}

// ===== Cherry Blossom Canvas Background =====
(function () {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let petals = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -20;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 0.8 + 0.3;
      this.speedX = Math.random() * 0.6 - 0.3;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.opacity = Math.random() * 0.35 + 0.1;
      this.swingAmplitude = Math.random() * 1.5 + 0.5;
      this.swingSpeed = Math.random() * 0.015 + 0.005;
      this.time = Math.random() * 100;
      // Petal color: soft pinks and light purples
      const colors = [
        'rgba(244, 114, 182,',  // pink
        'rgba(249, 168, 212,',  // light pink
        'rgba(216, 180, 254,',  // light purple
        'rgba(232, 121, 249,',  // orchid
        'rgba(251, 207, 232,',  // pale pink
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.time += 1;
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.time * this.swingSpeed) * this.swingAmplitude * 0.3;
      this.rotation += this.rotationSpeed;

      if (this.y > canvas.height + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      // Draw petal shape
      ctx.beginPath();
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        this.size * 0.4, -this.size * 0.3,
        this.size, -this.size * 0.2,
        this.size * 0.5, this.size * 0.4
      );
      ctx.bezierCurveTo(
        this.size * 0.2, this.size * 0.5,
        -this.size * 0.1, this.size * 0.2,
        0, 0
      );
      ctx.fill();

      ctx.restore();
    }
  }

  function initPetals() {
    const count = Math.min(Math.floor(canvas.width * canvas.height / 18000), 40);
    petals = [];
    for (let i = 0; i < count; i++) {
      petals.push(new Petal());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.update();
      p.draw();
    });
    animationId = requestAnimationFrame(animate);
  }

  // Debounced resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      initPetals();
    }, 200);
  });

  // Init
  resize();
  initPetals();
  animate();
})();
