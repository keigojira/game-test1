function showMenu() {
  document.querySelector('.menu').style.display = 'block';
  document.getElementById('game-area').innerHTML = '';
  document.getElementById('back-btn').style.display = 'none';
}

function showGame(game) {
  document.querySelector('.menu').style.display = 'none';
  document.getElementById('back-btn').style.display = 'inline-block';

  if (game === 'dice') showDiceGame();
  if (game === 'rps') showRPSGame();
  if (game === 'target') showTargetGame();
}

function showDiceGame() {
  const area = document.getElementById('game-area');
  area.innerHTML = `
    <h2>🎲 サイコロを振ろう！</h2>
    <button onclick="rollDice()">サイコロを振る</button>
    <p id="dice-result">🎲 結果がここに表示されます</p>
  `;
}

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `🎲 出た目は「${result}」！`;
}

function showRPSGame() {
  const area = document.getElementById('game-area');
  area.innerHTML = `
    <h2>✊ じゃんけん！</h2>
    <button onclick="playRPS('グー')">✊ グー</button>
    <button onclick="playRPS('チョキ')">✌️ チョキ</button>
    <button onclick="playRPS('パー')">🖐 パー</button>
    <p id="rps-result">結果がここに出ます</p>
  `;
}

function playRPS(player) {
  const hands = ['グー', 'チョキ', 'パー'];
  const cpu = hands[Math.floor(Math.random() * 3)];
  let result;

  if (player === cpu) result = 'あいこ！';
  else if (
    (player === 'グー' && cpu === 'チョキ') ||
    (player === 'チョキ' && cpu === 'パー') ||
    (player === 'パー' && cpu === 'グー')
  ) result = 'あなたの勝ち！';
  else result = 'あなたの負け！';

  document.getElementById('rps-result').innerText = `あなた：${player} / CPU：${cpu} → ${result}`;
}

function showTargetGame() {
  const area = document.getElementById('game-area');
  area.innerHTML = `
    <h2>🎯 的当てゲーム</h2>
    <p>的が現れたらすぐクリックしよう！</p>
    <button onclick="startTarget()">スタート</button>
    <div id="target-box" style="margin-top:20px; height:200px;"></div>
    <p id="target-msg"></p>
  `;
}

function startTarget() {
  const box = document.getElementById('target-box');
  box.innerHTML = '';
  document.getElementById('target-msg').innerText = '準備中...';

  setTimeout(() => {
    const btn = document.createElement('button');
    btn.innerText = '🎯 ここ！';
    btn.style.padding = '20px';
    btn.style.fontSize = '18px';
    btn.onclick = () => {
      document.getElementById('target-msg').innerText = '成功！早かったね！';
      box.innerHTML = '';
    };
    box.appendChild(btn);
    document.getElementById('target-msg').innerText = '今だ！クリックして！';
  }, Math.random() * 2000 + 1000);
}
