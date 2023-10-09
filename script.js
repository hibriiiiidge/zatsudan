const textDisplay = document.getElementById('textDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let interval;


window.onload = () => {
  const texts = [
    '好きなプログラミング言語は？',
    '最近気になる技術は？',
    '今までで一番記憶に残っている開発や開発における出来事は？',
    '自分のここはすごいと思うところ',
    'ChatGPTとどう付き合っている？',
    '最近心ときめいたサービス・アプリ・ガジェット etc は？',
    '実は人見知り？',
    '今欲しいモノは？',
    '最近買った高いモノは？',
    'おすすめの本（技術書）を3つ教えて',
    '開発でよく利用するおすすめのアプリやサービス、chrome 拡張は？',
    'エンジニアになっていなかったら何をやっている？',
    'Respect している人物は？',
    'タイムマシーンを1回（1往復だけ）使えるとしたら、過去と未来どっちに行く？',
    '死ぬまでにやってみたいことは？',
    '最近のマイブームは？',
  ];
  // JSON形式の文字列としてlocalStorageに保存
  localStorage.setItem('texts', JSON.stringify(texts));
};

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(() => {
    const storedTexts = localStorage.getItem('texts');
    const textsFromLocalStorage = JSON.parse(storedTexts);
    const randomText = textsFromLocalStorage[Math.floor(Math.random() * textsFromLocalStorage.length)];
    textDisplay.textContent = randomText;
  }, 10);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});


const modal = document.getElementById('myModal');
const btn = document.getElementById("editBtn");
const span = document.getElementsByClassName("close")[0];
const textArea = document.getElementById("textArea");
const saveBtn = document.getElementById("saveBtn");

btn.onclick = function() {
  modal.style.display = "block";

  // localStorageからtextsを取得して、textareaに表示
  const storedTexts = localStorage.getItem('texts');
  if (storedTexts) {
    const textsFromLocalStorage = JSON.parse(storedTexts);
    textArea.value = textsFromLocalStorage.join('\n');
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

saveBtn.onclick = function() {
  // textareaの内容を取得し、空行や改行コードのみの行を削除
  const textsToSave = textArea.value.split('\n').filter(line => line.trim() !== '');
    // textsToSaveに値が1つも入っていない場合はアラートを表示
  if (textsToSave.length === 0) {
    alert('雑談する気ないっしょ？');
    return;  // 以降の処理を中断
  }
  // 修正された内容をlocalStorageに保存
  localStorage.setItem('texts', JSON.stringify(textsToSave));
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
