// MOOD GENERATOR FIXED ✅
const plans = {
  Calm: "🪷 Plan: 5-min breathing → 25-min focus → 5-min stretch.",
  Motivated: "🚀 Plan: 30-min focus sprint → 10-min break → repeat.",
  Tired: "😴 Plan: 15-min light task → 5-min coffee → 20-min focus.",
  Stressed: "🌿 Plan: 10-min calm music → 20-min deep work → 5-min stretch.",
  Happy: "🌞 Plan: 25-min creative task → 10-min dance break.",
  Sad: "💜 Plan: 10-min journaling → 20-min productive focus.",
  Creative: "🎨 Plan: 15-min brainstorm → 15-min design sprint."
};

document.getElementById("generatePlan").addEventListener("click", () => {
  const mood = document.getElementById("moodSelect").value;
  const result = document.getElementById("moodResult");

  if (mood && plans[mood]) {
    result.textContent = plans[mood];
    result.style.color = "#b7a6ff";
    result.style.textShadow = "0 0 8px rgba(140,110,255,0.7)";
  } else {
    result.textContent = "⚠️ Please select a mood first!";
    result.style.color = "#ff9999";
  }
});
// -------------------------
// AI MOTIVATION (Enhanced)
// -------------------------
const motivateBtn = document.getElementById("motivateButton");
const motivationResult = document.getElementById("motivationResult");
const aiGlow = document.getElementById("aiGlow");

// Mood-based responses (connects to moodSelect)
const moodQuotes = {
  Calm: [
    "🪷 Peace in your mind leads to power in your actions.",
    "🌿 Breathe, focus, and flow — everything is within reach."
  ],
  Motivated: [
    "🔥 You’re unstoppable. Stay consistent, and the results will chase you.",
    "⚡ Power through — you’re writing your success story!"
  ],
  Tired: [
    "😴 Even small effort moves you forward — one step counts.",
    "💤 Rest, then rise stronger. You’ve got this."
  ],
  Stressed: [
    "🌈 You’re in control. Breathe, center, and focus on one thing at a time.",
    "🌿 Calm energy creates clear results — stay steady."
  ],
  Happy: [
    "🌞 Your energy is contagious — use it to build something great!",
    "🎉 The best time to act is now — let your joy lead your focus."
  ],
  Sad: [
    "💜 You’re stronger than this moment. Every storm passes.",
    "🌧️ Keep going — your light still shines even on dark days."
  ],
  Creative: [
    "🎨 Imagination is your superpower — let it flow freely.",
    "🧠 Ideas grow when you believe in them. Start creating!"
  ],
  Default: [
    "💡 Focus is your superpower — use it wisely.",
    "🚀 Small steps lead to massive progress.",
    "🌿 Clear mind. Strong focus. Big results."
  ]
};

// Simulate AI thinking + typing animation
motivateBtn.addEventListener("click", () => {
  aiGlow.style.display = "block";
  motivationResult.style.width = "0";
  motivationResult.textContent = "";

  const selectedMood = document.getElementById("moodSelect").value;
  const list = moodQuotes[selectedMood] || moodQuotes.Default;
  const quote = list[Math.floor(Math.random() * list.length)];

  // Simulate AI typing delay
  setTimeout(() => {
    aiGlow.style.display = "none";
    typeText(quote);
  }, 1800);
});

function typeText(text) {
  motivationResult.style.width = "0";
  motivationResult.style.borderRight = "3px solid #b8a6ff";
  motivationResult.textContent = "";

  let i = 0;
  const interval = setInterval(() => {
    motivationResult.textContent = text.substring(0, i);
    i++;
    motivationResult.style.width = i + "ch";
    if (i > text.length) {
      clearInterval(interval);
      motivationResult.style.borderRight = "none";
    }
  }, 40);
}