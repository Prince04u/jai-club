function scrollGen() {
  document.getElementById("gen").scrollIntoView({ behavior: "smooth" });
}

function runGen() {
  let status = document.getElementById("status");

  let steps = [
    "🔄 Connecting...",
    "⚡ Injecting data...",
    "📡 Syncing server...",
    "✅ Success (Verification required)"
  ];

  let i = 0;

  let interval = setInterval(() => {
    status.innerHTML = steps[i];
    i++;
    if (i === steps.length) clearInterval(interval);
  }, 1500);
}