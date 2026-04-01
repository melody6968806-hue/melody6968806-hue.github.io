/* ============================================
   星辰占卜館 — JavaScript
   ============================================ */

// ============================================
// 【占卜結果資料區】
// 方便之後修改成其他主題，只需更動此區即可
// ============================================

const FORTUNE_DATA = [
  {
    name: "大吉 — 紫氣東來",
    emoji: "🌟",
    stars: 5,
    summary: "今日星象大利，紫氣東來，萬事順遂！無論做什麼都有如神助，把握當下的好運勢吧。",
    work: "事業運極佳，貴人相助，重要提案將一舉成功。大膽展現你的才華！",
    study: "腦袋清晰、記憶力超強，今天讀書效率爆表，考試穩拿高分。",
    love: "桃花朵朵開！單身者有機會遇到命中注定之人，已有伴侶者感情甜蜜升溫。",
    money: "財神爺眷顧，正財偏財兩旺，可能有意外之財降臨。",
    quote: "🌈 「今天的你閃閃發光，全宇宙都在幫你！」"
  },
  {
    name: "中吉 — 春風得意",
    emoji: "🌸",
    stars: 4,
    summary: "如春風拂面般舒適的一天，整體運勢穩中有升，好事正在靠近你。",
    work: "工作順利推進，同事關係融洽，適合提出新想法或爭取新機會。",
    study: "學習狀態不錯，適合挑戰有難度的題目，你會發現自己比想像中更強。",
    love: "感情溫暖而穩定，一個小小的驚喜就能讓關係更加甜蜜。",
    money: "收入穩定，小有進帳，適合做理性的理財規劃。",
    quote: "🌿 「穩穩地走，風景自然會出現在眼前。」"
  },
  {
    name: "吉 — 柳暗花明",
    emoji: "🌻",
    stars: 4,
    summary: "看似平凡的一天，實則暗藏驚喜。遇到困難別急著放棄，轉角就有好事發生。",
    work: "工作中可能遇到小瓶頸，但換個角度思考就能找到突破口。",
    study: "不懂的知識點今天會突然開竅，有種「原來如此！」的頓悟感。",
    love: "一段看似普通的互動，可能埋下甜蜜的種子。注意身邊人的小舉動。",
    money: "財運普通偏上，不宜大筆投資，但日常開銷無需擔心。",
    quote: "🔑 「每一扇關上的門旁邊，都有一扇開著的窗。」"
  },
  {
    name: "小吉 — 微風徐來",
    emoji: "🍀",
    stars: 3,
    summary: "平穩安寧的一天，雖沒有大驚喜，但小確幸處處可見。享受生活的小美好吧！",
    work: "工作按部就班，適合處理細節性的任務，穩紮穩打最重要。",
    study: "學習效率中等，建議制定明確計畫，一步一步來會更有成效。",
    love: "感情如微風般舒適，適合與心儀之人來一場輕鬆的聊天。",
    money: "財運平穩，花費合理就好，別衝動消費。",
    quote: "☘️ 「小確幸也是一種大幸福，用心感受就好。」"
  },
  {
    name: "半吉 — 雲開月明",
    emoji: "🌙",
    stars: 3,
    summary: "上半天可能有些迷茫，但下半天雲開月明，漸入佳境。耐心等待就對了。",
    work: "上午工作可能有些卡頓，下午效率會大幅提升，重要事務安排在午後為佳。",
    study: "前期可能靜不下心，但一旦進入狀態就會非常專注，收穫滿滿。",
    love: "感情中的小誤會將逐漸化解，溝通是化解一切的良藥。",
    money: "上半天花銷較大，下半天趨於平穩，整體收支平衡。",
    quote: "🌛 「烏雲遮不住月亮，耐心等，光自然會來。」"
  },
  {
    name: "末吉 — 靜待花開",
    emoji: "🌱",
    stars: 2,
    summary: "雖然運勢不算突出，但你種下的種子正在悄悄發芽。今天適合修養身心，靜待花開。",
    work: "工作進展較慢，不必急於求成，紮實的基礎才是成功的關鍵。",
    study: "學習動力稍顯不足，試試換個環境或方法，也許會有不同的感受。",
    love: "感情需要多一點耐心經營，陪伴比什麼甜言蜜語都重要。",
    money: "財運平平，建議節約開支，蓄力待發。",
    quote: "🌿 「每一朵花都有它綻放的時間，別著急。」"
  },
  {
    name: "吉凶相半 — 陰晴不定",
    emoji: "⚖️",
    stars: 3,
    summary: "今天的運勢如同天氣般陰晴不定，好壞參半。保持平常心，隨機應變就好。",
    work: "可能有好消息也有壞消息，關鍵在於你如何應對挑戰。冷靜是你的武器。",
    study: "注意力時好時壞，建議用番茄鐘工作法，間歇性學習效果更佳。",
    love: "感情中有甜有酸，小吵架反而可能增進了解，別太計較。",
    money: "有進有出，帳目打平。小心不必要的開支。",
    quote: "⚡ 「人生就像天氣，有晴有雨才精彩。」"
  },
  {
    name: "小凶 — 暗流湧動",
    emoji: "🌊",
    stars: 2,
    summary: "表面風平浪靜，暗處可能有小波折。多留心細節，謹慎行事可避開大部分問題。",
    work: "注意職場中的小細節，文件記得多檢查一遍，避免低級錯誤。",
    study: "容易在已經會的題目上粗心犯錯，考試時務必多檢查。",
    love: "可能因小事產生誤解，多站在對方角度想想，溝通勝過猜測。",
    money: "小心衝動消費和不必要的支出，守住荷包比什麼都重要。",
    quote: "🛡️ 「小心駛得萬年船，謹慎是今天的護身符。」"
  },
  {
    name: "凶 — 風雨欲來",
    emoji: "🌧️",
    stars: 1,
    summary: "今天運勢稍弱，容易遇到小挫折，但別灰心！風雨過後必有彩虹。",
    work: "工作上可能遇到阻礙，別硬碰硬，退一步海闊天空，明天再戰也不遲。",
    study: "讀書效率可能不高，別強迫自己，適當休息才能走更遠的路。",
    love: "感情容易敏感脆弱，避免在情緒不好時做重大決定。",
    money: "財運較弱，今天不適合做重大的消費或投資決策。",
    quote: "🌈 「今天不順沒關係，吃頓好的，明天又是嶄新的一天！」"
  },
  {
    name: "大凶轉吉 — 否極泰來",
    emoji: "🔥",
    stars: 3,
    summary: "看起來像是最糟的一天，但命運之輪正在逆轉！越是低谷，越接近觸底反彈。",
    work: "工作中的危機可能成為轉機，勇敢面對困難，你會發現自己比想像中更強大。",
    study: "雖然學習之路艱辛，但正是這些挑戰讓你快速成長。堅持就是勝利！",
    love: "感情經歷考驗後會更加堅固，風雨同舟的感覺反而更加珍貴。",
    money: "破財消災後會有新的財源出現，塞翁失馬焉知非福。",
    quote: "🔥 「置之死地而後生，黎明前的黑暗最深，但太陽一定會升起！」"
  },
  {
    name: "吉 — 貴人臨門",
    emoji: "👑",
    stars: 4,
    summary: "今天有貴人星照耀！注意身邊出現的每一個人，他們可能帶來意想不到的好運。",
    work: "有經驗豐富的前輩或領導願意指點你，虛心請教能讓你少走很多彎路。",
    study: "遇到不懂的問題，大膽向同學或老師請教，他們的一句話可能勝過你悶頭苦讀三天。",
    love: "朋友可能為你牽線搭橋，社交場合有機會邂逅心動之人。",
    money: "貴人帶財，可能收到紅包、獎金或意外回報。",
    quote: "👑 「打開心胸接受幫助，你值得擁有最好的！」"
  },
  {
    name: "中吉 — 靈感爆發",
    emoji: "💡",
    stars: 4,
    summary: "今天的你腦洞大開，靈感如泉湧！適合創作、發想、或做任何需要創意的事。",
    work: "工作中的創意提案將大受好評，別猶豫，大膽說出你的想法！",
    study: "對複雜問題有獨到見解，適合寫論文、做專題或整理學習筆記。",
    love: "用一個有創意的小驚喜表達心意，對方會被你的用心深深感動。",
    money: "可能發現新的賺錢機會或投資靈感，但記得先做功課再行動。",
    quote: "💫 「靈感就像流星，抓住它，它會帶你飛向夢想！」"
  }
];

// 占卜結果名稱列表說明（方便主題更換時快速查看）:
// 大吉、中吉、吉、小吉、半吉、末吉、吉凶相半、小凶、凶、大凶轉吉、貴人臨門、靈感爆發

// ============================================
// 星空背景 Canvas
// ============================================
function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 4000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function maybeAddShootingStar() {
    if (Math.random() < 0.003 && shootingStars.length < 2) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        len: Math.random() * 60 + 40,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 4 + Math.random() * 0.3,
        alpha: 1,
        life: 1
      });
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    for (const s of stars) {
      const flicker = Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 210, 255, ${s.alpha * flicker})`;
      ctx.fill();
    }

    // Draw shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      const tailX = ss.x - Math.cos(ss.angle) * ss.len;
      const tailY = ss.y - Math.sin(ss.angle) * ss.len;

      const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${ss.alpha})`);
      grad.addColorStop(1, `rgba(155, 89, 208, 0)`);

      ctx.beginPath();
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.life -= 0.015;
      ss.alpha = ss.life;

      if (ss.life <= 0 || ss.x > canvas.width + 50 || ss.y > canvas.height + 50) {
        shootingStars.splice(i, 1);
      }
    }

    maybeAddShootingStar();
    requestAnimationFrame(draw);
  }

  resize();
  createStars();
  requestAnimationFrame(draw);
  window.addEventListener('resize', () => {
    resize();
    createStars();
  });
}

// ============================================
// 水晶球 Canvas
// ============================================
function initOrbCanvas() {
  const canvas = document.getElementById('orb-canvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const R = W / 2 - 4;

  let particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * R * 0.7,
      speed: (Math.random() - 0.5) * 0.015,
      size: Math.random() * 2.5 + 0.5,
      hue: Math.random() * 60 + 250 // purple-blue range
    });
  }

  function draw(time) {
    ctx.clearRect(0, 0, W, H);

    // Orb background
    const bgGrad = ctx.createRadialGradient(cx, cy * 0.85, 0, cx, cy, R);
    bgGrad.addColorStop(0, 'rgba(90, 50, 160, 0.4)');
    bgGrad.addColorStop(0.5, 'rgba(30, 20, 70, 0.6)');
    bgGrad.addColorStop(1, 'rgba(10, 10, 30, 0.9)');

    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // Floating particles
    for (const p of particles) {
      p.angle += p.speed;
      const px = cx + Math.cos(p.angle) * p.radius;
      const py = cy + Math.sin(p.angle * 0.7 + time * 0.0005) * p.radius * 0.6;

      // Check if inside orb
      const dist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
      if (dist < R - 2) {
        const alpha = 0.4 + Math.sin(time * 0.002 + p.angle) * 0.3;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, ${alpha})`;
        ctx.fill();
      }
    }

    // Glass highlight
    const hlGrad = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.3, 0, cx, cy, R);
    hlGrad.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
    hlGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)');
    hlGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = hlGrad;
    ctx.fill();

    // Border glow
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(155, 89, 208, ${0.3 + Math.sin(time * 0.002) * 0.15})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

// ============================================
// 頁面邏輯
// ============================================
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
  const target = document.getElementById(id);
  target.classList.add('visible');
  // Force re-trigger animation
  target.style.animation = 'none';
  target.offsetHeight; // reflow
  target.style.animation = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getRandomFortune() {
  return FORTUNE_DATA[Math.floor(Math.random() * FORTUNE_DATA.length)];
}

function renderStars(count) {
  const full = '⭐';
  const empty = '☆';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += i < count ? full : empty;
  }
  return result;
}

function displayResult(fortune) {
  document.getElementById('result-emoji').textContent = fortune.emoji;
  document.getElementById('result-title').textContent = fortune.name;
  document.getElementById('result-stars').textContent = renderStars(fortune.stars);
  document.getElementById('result-summary').textContent = fortune.summary;
  document.getElementById('detail-work-text').textContent = fortune.work;
  document.getElementById('detail-study-text').textContent = fortune.study;
  document.getElementById('detail-love-text').textContent = fortune.love;
  document.getElementById('detail-money-text').textContent = fortune.money;
  document.getElementById('result-quote').textContent = fortune.quote;

  // Animate bars — generate semi-random widths based on star rating
  const basePercent = fortune.stars * 18;
  setTimeout(() => {
    document.getElementById('bar-work').style.width = Math.min(100, basePercent + Math.random() * 20) + '%';
    document.getElementById('bar-study').style.width = Math.min(100, basePercent + Math.random() * 20) + '%';
    document.getElementById('bar-love').style.width = Math.min(100, basePercent + Math.random() * 20) + '%';
    document.getElementById('bar-money').style.width = Math.min(100, basePercent + Math.random() * 20) + '%';
  }, 400);
}

function startDivination() {
  showSection('divining-section');

  // Random divining time between 2–3 seconds
  const delay = 2000 + Math.random() * 1000;

  setTimeout(() => {
    const fortune = getRandomFortune();
    // Reset bars before showing
    document.getElementById('bar-work').style.width = '0%';
    document.getElementById('bar-study').style.width = '0%';
    document.getElementById('bar-love').style.width = '0%';
    document.getElementById('bar-money').style.width = '0%';

    displayResult(fortune);
    showSection('result-section');
  }, delay);
}

// ============================================
// 按鈕互動光效
// ============================================
function initButtonGlow() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      btn.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  });
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initOrbCanvas();
  initButtonGlow();

  document.getElementById('start-btn').addEventListener('click', startDivination);
  document.getElementById('crystal-orb').addEventListener('click', startDivination);
  document.getElementById('retry-btn').addEventListener('click', () => {
    startDivination();
  });
});
