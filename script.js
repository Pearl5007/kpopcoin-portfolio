document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("toggleTheme");
    const body = document.body;

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    window.analyze = function () {
        const group = document.getElementById("group").value;
        const value = parseInt(document.getElementById("value").value);
        const quote = document.getElementById("quote");
        const img = document.getElementById("moodImg");
        const video = document.getElementById("video");

        if (!group || isNaN(value)) {
            alert("Please select a group and enter a valid value.");
            return;
        }

        let mood = value > 1500 ? "high" : value > 700 ? "mid" : "low";
        const data = groupData[group][mood];

        quote.textContent = `"${data.quote}"`;
        img.src = data.image;
        img.classList.remove("show");
        video.src = data.video;
        video.classList.remove("show");

        // Animate elements after slight delay
        setTimeout(() => {
            img.style.display = "block";
            video.style.display = "block";
            img.classList.add("show");
            video.classList.add("show");
        }, 100);
    };
});
const groupData = {
  BTS: {
    high: {
      quote: "BTS energy level: MAX. Keep shining like a diamond 💎",
      image: "https://i.imgur.com/yR7KUMt.jpg",
      video: "https://www.youtube.com/embed/MBdVXkSdhwU"
    },
    mid: {
      quote: "Steady like Spring Day, soft yet strong 🌸",
      image: "https://i.imgur.com/Oljx96y.jpg",
      video: "https://www.youtube.com/embed/xEeFrLSkMm8"
    },
    low: {
      quote: "Even if you're feeling low, BTS walks with you 🌙",
      image: "https://i.imgur.com/8Y2xRzW.jpg",
      video: "https://www.youtube.com/embed/kTlv5_Bs8aw"
    }
  },
  BLACKPINK: {
    high: {
      quote: "BLACKPINK in your area — and slaying 🔥",
      image: "https://i.imgur.com/MXr0uWg.jpg",
      video: "https://www.youtube.com/embed/IHNzOHi8sJs"
    },
    mid: {
      quote: "Balanced like a beat drop. Keep going, BLINK ✨",
      image: "https://i.imgur.com/Rsm2uFY.jpg",
      video: "https://www.youtube.com/embed/Amq-qlqbjYA"
    },
    low: {
      quote: "Feeling low? Let BLACKPINK lift you up 💖",
      image: "https://i.imgur.com/zrqOMzL.jpg",
      video: "https://www.youtube.com/embed/dyRsYk0LyA8"
    }
  },
  StrayKids: {
    high: {
      quote: "No Easy energy detected! STAY proud 💥",
      image: "https://i.imgur.com/z6eWD6P.jpg",
      video: "https://www.youtube.com/embed/EaswWiwMVs8"
    },
    mid: {
      quote: "Still rocking, still you 🔄",
      image: "https://i.imgur.com/JMRQdBA.jpg",
      video: "https://www.youtube.com/embed/pok5yDw77uM"
    },
    low: {
      quote: "Even in the noise, your light is loud 🔊",
      image: "https://i.imgur.com/08TXgH7.jpg",
      video: "https://www.youtube.com/embed/f7h1D0vYGE8"
    }
  },
  TWICE: {
    high: {
      quote: "Yes or Yes? Your energy is a definite YES 💃",
      image: "https://i.imgur.com/R0JuCQz.jpg",
      video: "https://www.youtube.com/embed/CM4CkVFmTds"
    },
    mid: {
      quote: "Like TT, but you're doing just fine 💌",
      image: "https://i.imgur.com/q8ZKMoJ.jpg",
      video: "https://www.youtube.com/embed/ePpPVE-GGJw"
    },
    low: {
      quote: "Cheer up, baby! TWICE believes in you 💫",
      image: "https://i.imgur.com/0rIqxJ8.jpg",
      video: "https://www.youtube.com/embed/c7rCyll5AeY"
    }
  },
  ITZY: {
    high: {
      quote: "Not Shy, not afraid — just powerful ✨",
      image: "https://i.imgur.com/MXmTGpF.jpg",
      video: "https://www.youtube.com/embed/fE2h3lGlOsk"
    },
    mid: {
      quote: "You got that ICY confidence 💙",
      image: "https://i.imgur.com/7yDkFJm.jpg",
      video: "https://www.youtube.com/embed/zndvqTc4P9I"
    },
    low: {
      quote: "Even when it's not easy, you’re still ITZY tough 💗",
      image: "https://i.imgur.com/qWlH6YA.jpg",
      video: "https://www.youtube.com/embed/Fc7-Oe0tj5k"
    }
  },
  SEVENTEEN: {
    high: {
      quote: "Seventeen carats shining like diamonds 💎",
      image: "https://i.imgur.com/KvKBB3C.jpg",
      video: "https://www.youtube.com/embed/HJYm5-6b6Ow"
    },
    mid: {
      quote: "Balance like SVT's synchronization 🧭",
      image: "https://i.imgur.com/EiecyzH.jpg",
      video: "https://www.youtube.com/embed/Q4Dnyg1jx8Y"
    },
    low: {
      quote: "Still with you, like a soft Adore U 💗",
      image: "https://i.imgur.com/mk0XPm0.jpg",
      video: "https://www.youtube.com/embed/J-wFp43XOrA"
    }
  }
};  ENHYPEN: {
    high: {
      quote: "You’re in your Golden Hour ☀️ with ENHYPEN!",
      image: "https://i.imgur.com/k7yOz2h.jpg",
      video: "https://www.youtube.com/embed/TkZv4kZVgZc"
    },
    mid: {
      quote: "Still manifesting fate like 'Drunk-Dazed' 🔁",
      image: "https://i.imgur.com/JZrNlIq.jpg",
      video: "https://www.youtube.com/embed/Fc7-Oe0tj5k"
    },
    low: {
      quote: "Dark Moon vibes? Let ENHYPEN light your way 🌙",
      image: "https://i.imgur.com/0v34Uoc.jpg",
      video: "https://www.youtube.com/embed/GeBUjXHz_dE"
    }
  },
  "(G)I-DLE": {
    high: {
      quote: "TOMBOY mode: Activated 🖤 You’re unstoppable!",
      image: "https://i.imgur.com/3xnKqHd.jpg",
      video: "https://www.youtube.com/embed/Jh4QFaPmdss"
    },
    mid: {
      quote: "You shine like HANN, mysterious and elegant 🌒",
      image: "https://i.imgur.com/8ucUdvZ.jpg",
      video: "https://www.youtube.com/embed/pSudEWBAYRE"
    },
    low: {
      quote: "Even queens feel low—remember you're a 'Queencard' 👑",
      image: "https://i.imgur.com/pplGh5T.jpg",
      video: "https://www.youtube.com/embed/WPdWvnAAurg"
    }
  },
  BABYMONSTER: {
    high: {
      quote: "New rookies, new wave! You're a BABYMONSTER baddie 💥",
      image: "https://i.imgur.com/Jx0AAgL.jpg",
      video: "https://www.youtube.com/embed/vqxUaJtMfvI"
    },
    mid: {
      quote: "Fresh but fierce. Mid-day mood on lock 🔓",
      image: "https://i.imgur.com/4IEaIR1.jpg",
      video: "https://www.youtube.com/embed/_ZBwjVz2sZ8"
    },
    low: {
      quote: "It’s okay to feel low—you're still a rising legend 🌱",
      image: "https://i.imgur.com/Ms9nGzP.jpg",
      video: "https://www.youtube.com/embed/rc9c2XKxt00"
    }
  },
  TXT: {
    high: {
      quote: "You're the star seen by the MOA moon 🌟",
      image: "https://i.imgur.com/vzPLdT3.jpg",
      video: "https://www.youtube.com/embed/I8K3xgbsYb8"
    },
    mid: {
      quote: "Somewhere between 'Blue Hour' and glow 🌤️",
      image: "https://i.imgur.com/HNdK8yx.jpg",
      video: "https://www.youtube.com/embed/Vd9QkWsd5p4"
    },
    low: {
      quote: "Even during 0X1=LOVESONG moments, MOA shines 💧",
      image: "https://i.imgur.com/sZ1tPlV.jpg",
      video: "https://www.youtube.com/embed/dvlHxX5Nsf8"
    }
  },
  NewJeans: {
    high: {
      quote: "High like 'Super Shy' on a sugar rush 🍬",
      image: "https://i.imgur.com/7Xdt6rY.jpg",
      video: "https://www.youtube.com/embed/ArmDp-zijuc"
    },
    mid: {
      quote: "Hype but chill — like ‘Hype Boy’ in lo-fi 🎧",
      image: "https://i.imgur.com/00Rs2pX.jpg",
      video: "https://www.youtube.com/embed/9n7qzXjIY6k"
    },
    low: {
      quote: "Cookie crumbs can't bring you down 🍪",
      image: "https://i.imgur.com/fU6PBGS.jpg",
      video: "https://www.youtube.com/embed/VOmIplFAGeg"
    }
  },
  aespa: {
    high: {
      quote: "Next Level activated. You’re untouchable 💫",
      image: "https://i.imgur.com/9B7NceR.jpg",
      video: "https://www.youtube.com/embed/ZeerrnuLi5E"
    },
    mid: {
      quote: "Black Mamba can’t bite you today 🐍",
      image: "https://i.imgur.com/O1xry7E.jpg",
      video: "https://www.youtube.com/embed/Os_heh8vPfs"
    },
    low: {
      quote: "When you're feeling glitchy, recall: you’re MY World 🌐",
      image: "https://i.imgur.com/EZT0VmI.jpg",
      video: "https://www.youtube.com/embed/GgVmn66oQKE"
    }
  },  ATEEZ: {
    high: {
      quote: "You’re sailing high with ATEEZ’s pirate energy 🚢🔥",
      image: "https://i.imgur.com/nrL9FP9.jpg",
      video: "https://www.youtube.com/embed/UOnr_Xz68m4"
    },
    mid: {
      quote: "Somewhere between ‘Answer’ and ‘Wave’ 🌊",
      image: "https://i.imgur.com/51aDFNp.jpg",
      video: "https://www.youtube.com/embed/8nVVOdYnr78"
    },
    low: {
      quote: "Even low tides rise again 🌘 Trust your fire within.",
      image: "https://i.imgur.com/X44WQ6H.jpg",
      video: "https://www.youtube.com/embed/UgIIG4zYGFo"
    }
  },
  "LE SSERAFIM": {
    high: {
      quote: "FEARLESS and fabulous 💎 Slay queen!",
      image: "https://i.imgur.com/Czv9kgi.jpg",
      video: "https://www.youtube.com/embed/pyf8cbqyfPs"
    },
    mid: {
      quote: "Antifragile mode: soft yet strong 💪",
      image: "https://i.imgur.com/CiWxdGL.jpg",
      video: "https://www.youtube.com/embed/pyf8cbqyfPs"
    },
    low: {
      quote: "Even LE SSERAFIM needs a reboot sometimes 🖤",
      image: "https://i.imgur.com/b0nvqWd.jpg",
      video: "https://www.youtube.com/embed/UBURTj20HXI"
    }
  },
  IVE: {
    high: {
      quote: "I AM the moment 💖 Just like you!",
      image: "https://i.imgur.com/y0FtAzW.jpg",
      video: "https://www.youtube.com/embed/6ZUIwj3FgUY"
    },
    mid: {
      quote: "You're Eleven out of ten 💫",
      image: "https://i.imgur.com/A3cJfFC.jpg",
      video: "https://www.youtube.com/embed/Km71Rr9K-Bw"
    },
    low: {
      quote: "Love Dive into your power again 💘",
      image: "https://i.imgur.com/I3IDdk2.jpg",
      video: "https://www.youtube.com/embed/Y8JFxS1HlDo"
    }
  },
  NMIXX: {
    high: {
      quote: "NMIXX change-up power on full blast! 🔥",
      image: "https://i.imgur.com/WT1rAkN.jpg",
      video: "https://www.youtube.com/embed/2S24-y0Ij3Y"
    },
    mid: {
      quote: "Between ‘Dice’ and destiny 🎲",
      image: "https://i.imgur.com/yTfT4Qq.jpg",
      video: "https://www.youtube.com/embed/p1bjnyDqI9k"
    },
    low: {
      quote: "Even O.O moments can turn dazzling 💎",
      image: "https://i.imgur.com/F8olT59.jpg",
      video: "https://www.youtube.com/embed/p1bjnyDqI9k"
    }
  },
  NCT: {
    high: {
      quote: "Neo Culture vibes only 🚀 You’re limitless.",
      image: "https://i.imgur.com/KvDtAgB.jpg",
      video: "https://www.youtube.com/embed/2OvyA2__Eas"
    },
    mid: {
      quote: "Kick it smooth like NCT 127 🥋",
      image: "https://i.imgur.com/KEki94u.jpg",
      video: "https://www.youtube.com/embed/2OvyA2__Eas"
    },
    low: {
      quote: "From glitch mode to god mode 🔄",
      image: "https://i.imgur.com/y3ZFCxE.jpg",
      video: "https://www.youtube.com/embed/h0vQ6t9xD8k"
    }
  },
  UNIS: {
    high: {
      quote: "UNIS energy unlocked! You glow differently 🌟",
      image: "https://i.imgur.com/H4ghAAQ.jpg",
      video: "https://www.youtube.com/embed/TODO"
    },
    mid: {
      quote: "Balanced & bright like a comeback stage 💡",
      image: "https://i.imgur.com/5I9AEGp.jpg",
      video: "https://www.youtube.com/embed/TODO"
    },
    low: {
      quote: "Even if it’s quiet now, your beat will drop soon 🎶",
      image: "https://i.imgur.com/DXKbeLv.jpg",
      video: "https://www.youtube.com/embed/TODO"
    }
  },
  ILLIT: {
    high: {
      quote: "ILLIT sparkle mode: Max ⭐ Rising rookie energy!",
      image: "https://i.imgur.com/EK3c9jo.jpg",
      video: "https://www.youtube.com/embed/TODO"
    },
    mid: {
      quote: "Shimmering softly like a new melody ✨",
      image: "https://i.imgur.com/vM5q79r.jpg",
      video: "https://www.youtube.com/embed/TODO"
    },
    low: {
      quote: "Even rookies fall—then shine again 🔁",
      image: "https://i.imgur.com/MC08Tn2.jpg",
      video: "https://www.youtube.com/embed/TODO"
    }
  },
  EXO: {
    high: {
      quote: "EXO planet royalty 👑 Call Me Baby!",
      image: "https://i.imgur.com/qV3NO8m.jpg",
      video: "https://www.youtube.com/embed/yWfsla_Uh80"
    },
    mid: {
      quote: "Monster vibes, still elegant 🐺",
      image: "https://i.imgur.com/WKQUffA.jpg",
      video: "https://www.youtube.com/embed/KSH-FVVtTf0"
    },
    low: {
      quote: "Lightsaber on low, but still lit 🔦",
      image: "https://i.imgur.com/DYF5EXc.jpg",
      video: "https://www.youtube.com/embed/3Ei61wW8Hj0"
    }
  },
  TREASURE: {
    high: {
      quote: "TREASURE MAKER mood 💎 Treasure blooming!",
      image: "https://i.imgur.com/ixRMthU.jpg",
      video: "https://www.youtube.com/embed/7z3DdQrrz4I"
    },
    mid: {
      quote: "Between ‘BOY’ and boss 😎",
      image: "https://i.imgur.com/ABwaZfT.jpg",
      video: "https://www.youtube.com/embed/fEX_W5JljWA"
    },
    low: {
      quote: "JIKJIN through the pain 🚘",
      image: "https://i.imgur.com/BmbzJc7.jpg",
      video: "https://www.youtube.com/embed/5bINZmM3D68"
    }
  },
  "KISS OF LIFE": {
    high: {
      quote: "KISS OF LIFE energy! Bright, bold, beautiful 💋",
      image: "https://i.imgur.com/MckH2jZ.jpg",
      video: "https://www.youtube.com/embed/H4xjNGsJ54c"
    },
    mid: {
      quote: "Glowing through the mid-day daze 🫧",
      image: "https://i.imgur.com/1myPSFC.jpg",
      video: "https://www.youtube.com/embed/lMy2gGvhEbg"
    },
    low: {
      quote: "Your soul still sparkles — kiss it better 💞",
      image: "https://i.imgur.com/nniC6QZ.jpg",
      video: "https://www.youtube.com/embed/Ifa0_Nd71VY"
    }
  },
  MAMAMOO: {
    high: {
      quote: "HIP & happy 🎤 That’s MAMAMOO power!",
      image: "https://i.imgur.com/YFgMg0o.jpg",
      video: "https://www.youtube.com/embed/dME1pS7TZ9I"
    },
    mid: {
      quote: "Starry nights and soulful highs ✨",
      image: "https://i.imgur.com/N0T4HQQ.jpg",
      video: "https://www.youtube.com/embed/wScxJfAXgTI"
    },
    low: {
      quote: "You’re not alone. MAMAMOO’s got your back 💌",
      image: "https://i.imgur.com/IFMGSc0.jpg",
      video: "https://www.youtube.com/embed/MtVj6l1RggU"
    }
  },
  "IZ*ONE": {
    high: {
      quote: "Bloom like La Vie en Rose 🌹",
      image: "https://i.imgur.com/bYEdYEd.jpg",
      video: "https://www.youtube.com/embed/b6li05zh3Kg"
    },
    mid: {
      quote: "Fiesta feels, even on neutral days 🎉",
      image: "https://i.imgur.com/AKfLoL4.jpg",
      video: "https://www.youtube.com/embed/eDEFolvLn0A"
    },
    low: {
      quote: "You’re still a Violeta inside 💜",
      image: "https://i.imgur.com/UGoLMIG.jpg",
      video: "https://www.youtube.com/embed/U5YgO5yVmBI"
    }
  },
  BIGBANG: {
    high: {
      quote: "BANG BANG BANG—iconic and invincible 🔥",
      image: "https://i.imgur.com/YcgKVGP.jpg",
      video: "https://www.youtube.com/embed/2ips2mM7Zqw"
    },
    mid: {
      quote: "Still life, still legendary 📸",
      image: "https://i.imgur.com/fKv0Zru.jpg",
      video: "https://www.youtube.com/embed/2lTltU7Dw3M"
    },
    low: {
      quote: "Blue days don’t last forever 💙",
      image: "https://i.imgur.com/hTzzhx2.jpg",
      video: "https://www.youtube.com/embed/2GRP1rkE4O0"
    }
  },
  SHINee: {
    high: {
      quote: "SHINee’s back! So is your shine 💎",
      image: "https://i.imgur.com/XAnJW4p.jpg",
      video: "https://www.youtube.com/embed/8BBF5O-bWNc"
    },
    mid: {
      quote: "Lucifer in swag, Angel in chill 🔥",
      image: "https://i.imgur.com/7bVj1Us.jpg",
      video: "https://www.youtube.com/embed/Dww9UjJ4Dt8"
    },
    low: {
      quote: "Replay the love you deserve 🖤",
      image: "https://i.imgur.com/2Z9iT8P.jpg",
      video: "https://www.youtube.com/embed/roughtzsCDI"
    }
  },
  "Red Velvet": {
    high: {
      quote: "Red flavor in your soul ❤️ Let’s go!",
      image: "https://i.imgur.com/zFpgkLd.jpg",
      video: "https://www.youtube.com/embed/WyiIGEHQP8o"
    },
    mid: {
      quote: "Ice Cream Cake kinda mood 🍦",
      image: "https://i.imgur.com/M0RfiIr.jpg",
      video: "https://www.youtube.com/embed/glXgSSOKlls"
    },
    low: {
      quote: "Psycho days happen. You’re still sweet 🖤",
      image: "https://i.imgur.com/tvT0UXb.jpg",
      video: "https://www.youtube.com/embed/Z9eMk051Qu0"
    }
  },
  "MONSTA X": {
    high: {
      quote: "MONSTA mode 💪 You’re unstoppable!",
      image: "https://i.imgur.com/x2KYBmg.jpg",
      video: "https://www.youtube.com/embed/FurwYcF_b14"
    },
    mid: {
      quote: "Between Rush Hour and calm power 💨",
      image: "https://i.imgur.com/oHYBAn3.jpg",
      video: "https://www.youtube.com/embed/NOXBV74xMXI"
    },
    low: {
      quote: "Even beasts need breaks 🐺",
      image: "https://i.imgur.com/xoFf8LO.jpg",
      video: "https://www.youtube.com/embed/x3HUP5hCrfI"
    }
  },
  GOT7: {
    high: {
      quote: "GOT7 swagger unlocked 🐥 Fly high!",
      image: "https://i.imgur.com/F4v1Vjb.jpg",
      video: "https://www.youtube.com/embed/3z3sF5QZL0Y"
    },
    mid: {
      quote: "Hard Carry this vibe 🧳",
      image: "https://i.imgur.com/ue57xVw.jpg",
      video: "https://www.youtube.com/embed/BzYnNdJhZQw"
    },
    low: {
      quote: "Even if you're low, Just Right is coming 🧡",
      image: "https://i.imgur.com/wcNaVVi.jpg",
      video: "https://www.youtube.com/embed/1nCLBTmjJBY"
    }
  },
  "Super Junior": {
    high: {
      quote: "Sorry Sorry? Never! You’re flawless 💎",
      image: "https://i.imgur.com/tHTBByO.jpg",
      video: "https://www.youtube.com/embed/x6QA3m58DQw"
    },
    mid: {
      quote: "Mid-tempo magic like ‘Devil’ 🎶",
      image: "https://i.imgur.com/EtcEj9x.jpg",
      video: "https://www.youtube.com/embed/gOwBtMPqpbo"
    },
    low: {
      quote: "Time for a renaissance of your spirit 💫",
      image: "https://i.imgur.com/HoPUEXN.jpg",
      video: "https://www.youtube.com/embed/5jGCuhxLzR0"
    }
  }
  
