window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const btnNotificationPanel = document.getElementById("btn-notification-panel");
const notificationPanel = document.getElementById(
  "notification-panel-container"
);
const heroBanner = document.getElementById("hero-banner-container");
const newsLetterPanel = document.getElementById("newsletter-panel");
const btnCloseNewsletterPanel = document.getElementById("btn-close-newsletter-panel");

const updatePercentage = () => {
  const windowHeight = window.innerHeight;
  const pageYOffset = window.pageYOffset;
  const offsetHeight = document.body.offsetHeight;

  const total = offsetHeight - windowHeight;
  const percent = parseInt((pageYOffset / total) * 100);

  if (percent >= 33 && getTime() >= 600) {
    newsLetterPanel.className += " show";
  }
};

const getTime = () => {
  const newsLetter = localStorage.getItem("newsLetter");

  const currentTime = new Date().getTime() / 1000;

  return currentTime - newsLetter;
};

window.addEventListener("scroll", updatePercentage);

btnNotificationPanel.onclick = () => {
  if (notificationPanel.className === "close") {
    notificationPanel.className = "";
    heroBanner.className = "";
  } else {
    notificationPanel.className = "close";
    heroBanner.className = "close";
  }
};

btnCloseNewsletterPanel.onclick = () => {
  if (newsLetterPanel.className === "close") {
    newsLetterPanel.className = "";
  } else {
    localStorage.setItem("newsLetter", new Date().getTime() / 1000);
    newsLetterPanel.className = "close";
  }
};
