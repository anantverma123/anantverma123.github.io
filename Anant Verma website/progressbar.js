var bar = document.getElementsByTagName("progress");
var no_of_bars = bar.length;
for (let i = 0; i <= no_of_bars; i++) {
  var percent = 1;
  var interval = setInterval(bar_animation, 10);
  const origin_percent = bar[i].value;
  function bar_animation() {
    if (origin_percent <= percent) {
      clearInterval(interval);
    }
    else {
      percent++;
      bar[i].value = percent;
    }
  }
}