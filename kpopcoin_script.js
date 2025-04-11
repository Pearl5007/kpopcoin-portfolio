
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const groupData = {
  "BTS": {
    high: {
      quote: "You were born to be real, not perfect.",
      img: "https://i.imgur.com/VVljHDi.jpg",
      video: "https://www.youtube.com/embed/kTlv5_Bs8aw"
    },
    mid: {
      quote: "Just one day, if I can be with you.",
      img: "https://i.imgur.com/U2ZGLwz.jpg",
      video: "https://www.youtube.com/embed/4ujQOR2DMFM"
    },
    low: {
      quote: "Even if I fall, I’ll get back up.",
      img: "https://i.imgur.com/Bv79W9V.jpg",
      video: "https://www.youtube.com/embed/pBuZEGYXA6E"
    }
  },
  "BLACKPINK": {
    high: {
      quote: "Blackpink in your area!",
      img: "https://i.imgur.com/7CGtLtZ.jpg",
      video: "https://www.youtube.com/embed/2S24-y0Ij3Y"
    },
    mid: {
      quote: "Pretty Savage and feeling it.",
      img: "https://i.imgur.com/SzA2w2v.jpg",
      video: "https://www.youtube.com/embed/MU8B4XDI3Uw"
    },
    low: {
      quote: "Kill this love, not the vibe.",
      img: "https://i.imgur.com/hDXBLac.jpg",
      video: "https://www.youtube.com/embed/9pdj4iJD08s"
    }
  },
  "Stray Kids": {
    high: {
      quote: "You make Stray Kids stay!",
      img: "https://i.imgur.com/7uJ2o6L.jpg",
      video: "https://www.youtube.com/embed/pok5yDw77uM"
    },
    mid: {
      quote: "I'm you, you're me. We're together.",
      img: "https://i.imgur.com/3rNScyx.jpg",
      video: "https://www.youtube.com/embed/Xk-xQmKIKt4"
    },
    low: {
      quote: "Even the storm passes eventually.",
      img: "https://i.imgur.com/RUeS0Q3.jpg",
      video: "https://www.youtube.com/embed/JzODFhFqJ5w"
    }
  },
  // More groups truncated for brevity...
  "Super Junior": {
    high: {
      quote: "We are Super Junior!",
      img: "https://i.imgur.com/fQEkRMn.jpg",
      video: "https://www.youtube.com/embed/1o1v3PB1aXA"
    },
    mid: {
      quote: "Sorry Sorry... but you're doing just fine.",
      img: "https://i.imgur.com/WaHDnLu.jpg",
      video: "https://www.youtube.com/embed/x6QA3m58DQw"
    },
    low: {
      quote: "Don’t Don if you're feeling blue.",
      img: "https://i.imgur.com/hjK5bBe.jpg",
      video: "https://www.youtube.com/embed/CYe5G2Z2e4Y"
    }
  }
};

document.getElementById('checkMoodBtn').addEventListener('click', () => {
  const group = document.getElementById('group').value;
  const value = parseInt(document.getElementById('value').value);
  const moodImg = document.getElementById('moodImg');
  const quote = document.getElementById('quote');
  const video = document.getElementById('video');

  if (!group || isNaN(value)) {
    alert('Please select a group and enter a valid coin value.');
    return;
  }

  let mood = 'mid';
  if (value > 1300) mood = 'high';
  else if (value < 700) mood = 'low';

  const moodData = groupData[group][mood];
  moodImg.src = moodData.img;
  moodImg.style.display = 'block';
  quote.textContent = moodData.quote;
  video.src = moodData.video;
  video.style.display = 'block';

  moodImg.classList.remove('show');
  video.classList.remove('show');
  void moodImg.offsetWidth;
  void video.offsetWidth;
  moodImg.classList.add('show');
  video.classList.add('show');
});
