const textDisplay = document.getElementById('textDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let interval;

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(() => {
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
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    textDisplay.textContent = randomText;
  }, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});
