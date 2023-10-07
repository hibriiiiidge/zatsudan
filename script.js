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
          'やらなければならないことをしてからリラックスする？またはその逆？',
          '眠たい時の眠気防止法は？',
          '最近購入した(出会った)心ときめくものは？',
          '無人島に1つ何か持ってくなら？',
          '実は人見知り？',
          '好きな時代に行けるとしたらどの時代に行きたい？',
          '今欲しいものは？',
          '最近買った高いものは？',
          'おすすめの本は？',
          '開発でよく利用するおすすめのアプリやサービス、chrome 拡張は？',
          'エンジニアになっていなかったら何をやっている？',
        ];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        textDisplay.textContent = randomText;
    }, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});
