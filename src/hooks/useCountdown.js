import { ref, computed, onUnmounted, watch, unref } from "vue";

const pad = (n) => String(n).padStart(2, "0");

function parseDMY(dateString) {
  const [date, time] = dateString.split(" ");
  const [day, month, year] = date.split(".").map(Number);
  const [hours, minutes, seconds] = time.split(":").map(Number);

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

export function useCountdown(targetDate) {
  const timeLeft = ref(0);
  let timer = null;

  const calculate = () => {
    const target = parseDMY(targetDate.value).getTime();

    const now = Date.now();
    timeLeft.value = Math.max(target - now, 0);
  };

  const countdown = computed(() => {
    const totalSeconds = Math.floor(timeLeft.value / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
    };
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  watch(
    targetDate,
    () => {
      if (!targetDate.value || timer) return;
      calculate();
      timer = setInterval(calculate, 1000);
    },
    { immediate: true },
  );

  return {
    countdown,
    timeLeft,
  };
}
