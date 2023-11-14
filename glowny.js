// Przełącznik stron
const przerzucStronaPrzycisk = document.querySelectorAll(".nastepna-przycisk");

przerzucStronaPrzycisk.forEach((el, index) => {
  el.onclick = () => {
    const przerzucStronaID = el.getAttribute("data-page");
    const przerzucStrona = document.getElementById(przerzucStronaID);

    if (przerzucStrona.classList.contains("przerzuc")) {
      przerzucStrona.classList.remove("przerzuc");
      setTimeout(() => {
        przerzucStrona.style.zIndex = 20 - index;
      }, 500);
    } else {
      przerzucStrona.classList.add("przerzuc");
      setTimeout(() => {
        przerzucStrona.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

// Przycisk skontaktuj sie ze mna
const kartki = document.querySelectorAll(".ksiazka-kartka.kartka-prawa");
const kontaktPrzycisk = document.querySelector(".przycisk.kontakt-ja");

kontaktPrzycisk.onclick = () => {
  kartki.forEach((kartka, index) => {
    setTimeout(() => {
      kartka.classList.add("przerzuc");

      setTimeout(() => {
        kartka.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// Tworzenie odwrotności
let dlugieKartki = kartki.length;
let kartaNumer = 0;

function odwrotnyIndex() {
  kartaNumer--;
  if (kartaNumer < 0) {
    kartaNumer = dlugieKartki - 1;
  }
}

// Przycisk PROFIL w kontakt
const powrotProfilowaPrzycisk = document.querySelector(".powrot-profilowa");

powrotProfilowaPrzycisk.onclick = () => {
  kartki.forEach((_, index) => {
    setTimeout(() => {
      odwrotnyIndex();
      kartki[kartaNumer].classList.remove("przerzuc");

      setTimeout(() => {
        odwrotnyIndex();
        kartki[kartaNumer].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// Pokaz animacja
const prawaStrona = document.querySelector('.strona.strona-prawa');

const lewaStrona = document.querySelector('.ksiazka-kartka.kartka-lewa')

// Pokaz animacja(prawa strona)
setTimeout(() => {
    prawaStrona.classList.add('przerzuc');
}, 2100)

setTimeout(() => {
    prawaStrona.style.zIndex = -1;
}, 2800)

// Pokaz animacja(lewa strona)
setTimeout(() => {
    lewaStrona.style.zIndex = 20;
}, 3200)

// Pokaz animacja(wszystkie prawe strony)
kartki.forEach((_, index) => {
    setTimeout(() => {
      odwrotnyIndex();
      kartki[kartaNumer].classList.remove("przerzuc");

      setTimeout(() => {
        odwrotnyIndex();
        kartki[kartaNumer].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 2100);
  });