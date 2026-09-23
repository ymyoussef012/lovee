const heartsContainer = document.getElementById("hearts");

const heartTypes = [
  "❤️",
  "💗",
  "💖",
  "💕",
  "💓",
  "💞",
  "💘",
  "💝",
  "🩷",
  "💟"
];

/*
  كثافة القلوب
  الرقم الأكبر = قلوب أكثر
*/
const HEART_COUNT = 75;

function createHeart() {

  const heart = document.createElement("span");

  heart.className = "heart";

  heart.textContent =
    heartTypes[
      Math.floor(Math.random() * heartTypes.length)
    ];

  /*
    توزيع أفقي عشوائي
  */
  heart.style.left =
    ${Math.random() * 105 - 2}%;

  /*
    أحجام مختلفة مثل الصورة الأصلية
  */
  const size =
    Math.random() * 24 + 15;

  heart.style.fontSize =
    ${size}px;

  /*
    حركة جانبية بسيطة
  */
  const moveX =
    Math.random() * 180 - 90;

  heart.style.setProperty(
    "--move-x",
    ${moveX}px
  );

  /*
    دوران بسيط
  */
  const rotate =
    Math.random() * 50 - 25;

  heart.style.setProperty(
    "--rotate",
    ${rotate}deg
  );

  /*
    السرعة
  */
  const duration =
    Math.random() * 7 + 7;

  heart.style.animationDuration =
    ${duration}s;

  /*
    بداية مختلفة لكل قلب
  */
  const delay =
    Math.random() * -15;

  heart.style.animationDelay =
    ${delay}s;

  /*
    شفافية خفيفة لبعض القلوب
  */
  heart.style.opacity =
    Math.random() * 0.35 + 0.65;

  heartsContainer.appendChild(heart);
}


/*
  إنشاء عدد كبير من القلوب
*/
for (let i = 0; i < HEART_COUNT; i++) {
  createHeart();
}


/*
  زر Unlock
*/
const passwordInput =
  document.getElementById("password");

const unlockBtn =
  document.getElementById("unlockBtn");


unlockBtn.addEventListener("click", () => {

  const password =
    passwordInput.value.trim();

  if (password === "love") {

    /*
      هنا تحط صفحة الرسالة التالية
      لو عندك اسم صفحة مختلف غيره هنا.
    */

    window.location.href =
      "message.html";

  } else {

    passwordInput.classList.remove("shake");

    void passwordInput.offsetWidth;

    passwordInput.classList.add("shake");

  }
});


/*
  السماح بالضغط Enter
*/
passwordInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {
      unlockBtn.click();
    }

  }
);
