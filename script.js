// K-pop group mood data
const groupData = {
  "BTS": {
    high: {
      quote: "Keep shining, ARMY. BTS is thriving!",
      image: "https://i.imgur.com/sxTkN8v.jpg",
      video: "https://www.youtube.com/embed/kXpOEzNZ8hQ"
    },
    mid: {
      quote: "BTS is steady — just like your vibe today.",
      image: "https://i.imgur.com/fhYXOoL.jpg",
      video: "https://www.youtube.com/embed/MBdVXkSdhwU"
    },
    low: {
      quote: "Even on low days, BTS lifts you up.",
      image: "https://i.imgur.com/XZ7XzEp.jpg",
      video: "https://www.youtube.com/embed/pBuZEGYXA6E"
    }
  },
  "BLACKPINK": {
    high: {
      quote: "BLACKPINK in your area, slaying the charts!",
      image: "https://i.imgur.com/6u6RZoJ.jpg",
      video: "https://www.youtube.com/embed/IHNzOHi8sJs"
    },
    mid: {
      quote: "Steady beats and pink vibes.",
      image: "https://i.imgur.com/RCE1vqY.jpg",
      video: "https://www.youtube.com/embed/2S24-y0Ij3Y"
    },
    low: {
      quote: "Even queens rest. BLACKPINK will rise again!",
      image: "https://i.imgur.com/QbG6B9C.jpg",
      video: "https://www.youtube.com/embed/bwmSjveL3Lc"
    }
  }
  // Add the rest of the groups here using the same format
};

// Main analyze function for the Check Mood button
function analyze() {
  const group = document.getElementById("group").value;
  const value = parseInt(document.getElementById("value").value);

  const quote = document.getElementById("quote");
  const moodImg = document.getElementById("moodImg");
  const video = document.getElementById("video");

  if (isNaN(value) || value < 0 || value > 2000) {
    alert("Please enter a valid coin value between 0 and 2000.");
    return;
  }

  // Determine mood level
  let mood = "mid";
  if (value >= 1500) mood = "high";
  else if (value < 800) mood = "low";

  // Fetch mood data
  const moodData = groupData[group] && groupData[group][mood];
  if (!moodData) {
    alert("No data found for this group and mood.");
    return;
  }

  // Update UI with result
  quote.textContent = `"${moodData.quote}"`;
  moodImg.src = moodData.image;
  moodImg.style.display = "block";
  video.src = moodData.video;
  video.style.display = "block";
}
  
