const DocEmoji = document.querySelector(".emoji");
const DocInfo = document.getElementById("informacion");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=13c8290dbc2f34dc346252174ee59931e8d7414b"
  );

 let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiNam: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

DocEmoji.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  DocEmoji.innerText = emoji[randomNum].emojiNam;
  DocInfo.innerText = emoji[randomNum].emojiCode;
});