const notifications = document.querySelector(".container");
let styles = ["red", "green", "blue", "yellow"];

let text = [
  "Notification one",
  "Notification tow",
  "Notification three",
  "Notification four",
];

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

styles = shuffle(styles);
text = shuffle(text);

const btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener("click", () => {
  styles = shuffle(styles);
  text = shuffle(text);

  const index = Math.trunc(Math.random() * 3);
  console.log(index);
  const note = document.createElement("div");
  note.textContent = text[index];
  note.className = "note";
  note.classList.add(styles[index]);
  notifications.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 3000);
});
