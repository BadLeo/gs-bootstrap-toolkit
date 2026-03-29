document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedNodes = document.querySelectorAll("[data-animate]");
  const meterNodes = document.querySelectorAll(".toolkit-meter > span");
  const revealedNodes = new WeakSet();
  let sweepTimer = null;

  const prepareNode = (node) => {
    if (revealedNodes.has(node)) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top > viewportHeight * 0.92) {
      node.classList.add("will-animate");
    } else {
      node.classList.remove("will-animate");
      node.classList.add("is-visible");
      node.style.transform = "none";
      revealedNodes.add(node);
    }
  };

  const showNode = (node) => {
    if (revealedNodes.has(node)) {
      return;
    }

    revealedNodes.add(node);
    node.classList.remove("will-animate");
    node.classList.add("is-visible");

    if (prefersReducedMotion || typeof anime === "undefined") {
      node.style.transform = "none";
      return;
    }

    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const configuredDelay = Number(node.dataset.delay || 0);
    const effectiveDelay = rect.top <= viewportHeight * 0.9 ? 0 : configuredDelay;

    anime({
      targets: node,
      translateY: [18, 0],
      scale: [0.985, 1],
      duration: 620,
      easing: "easeOutExpo",
      delay: effectiveDelay
    });
  };

  const revealVisibleNodes = () => {
    let pendingNodes = 0;

    animatedNodes.forEach((node) => {
      if (revealedNodes.has(node)) {
        return;
      }

      pendingNodes += 1;

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const entersViewport = rect.top <= viewportHeight * 1.08;

      if (entersViewport) {
        showNode(node);
      }
    });

    if (pendingNodes === 0 && sweepTimer) {
      window.clearInterval(sweepTimer);
      sweepTimer = null;
    }
  };

  const forceRevealPendingNodes = () => {
    animatedNodes.forEach((node) => {
      if (revealedNodes.has(node)) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const shouldBeVisible = rect.top <= viewportHeight * 1.25 || rect.bottom < 0;

      if (!shouldBeVisible) {
        return;
      }

      revealedNodes.add(node);
      node.classList.remove("will-animate");
      node.classList.add("is-visible");
      node.style.transform = "none";
    });
  };

  animatedNodes.forEach(prepareNode);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: "0px 0px 12% 0px"
    });

    animatedNodes.forEach((node) => observer.observe(node));
    revealVisibleNodes();

    let ticking = false;
    let settleTimer = null;
    const onScroll = () => {
      if (ticking) {
        if (settleTimer) {
          window.clearTimeout(settleTimer);
        }
        settleTimer = window.setTimeout(forceRevealPendingNodes, 120);
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        revealVisibleNodes();
        ticking = false;
      });

      if (settleTimer) {
        window.clearTimeout(settleTimer);
      }
      settleTimer = window.setTimeout(forceRevealPendingNodes, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    sweepTimer = window.setInterval(revealVisibleNodes, 180);
  } else {
    animatedNodes.forEach(showNode);
  }

  const scheduleRevealPasses = () => {
    animatedNodes.forEach(prepareNode);
    revealVisibleNodes();
    window.requestAnimationFrame(revealVisibleNodes);
    window.setTimeout(revealVisibleNodes, 60);
    window.setTimeout(revealVisibleNodes, 180);
    window.setTimeout(revealVisibleNodes, 360);
  };

  window.addEventListener("load", scheduleRevealPasses);
  window.addEventListener("pageshow", scheduleRevealPasses);

  const updateMeterSegments = (node, value) => {
    const numericValue = Number.parseFloat(value);
    const safeValue = Number.isFinite(numericValue) ? numericValue : 50;
    const filledBoxes = Math.max(0, Math.min(10, Math.round(safeValue / 10)));

    node.style.setProperty("--value", `${safeValue}%`);
    node.style.setProperty("--filled-percent", `${filledBoxes * 10}%`);
  };

  meterNodes.forEach((node) => {
    const value = node.style.getPropertyValue("--value") || node.dataset.value || "50%";
    updateMeterSegments(node, value);

    if (prefersReducedMotion || typeof anime === "undefined") {
      node.style.opacity = "1";
      return;
    }

    anime({
      targets: node,
      opacity: [0, 1],
      duration: 1400,
      delay: 400,
      easing: "easeOutCubic"
    });
  });

  document.querySelectorAll(".interactive").forEach((node) => {
    const enter = () => {
      if (prefersReducedMotion || typeof anime === "undefined") {
        return;
      }

      anime.remove(node);
      anime({
        targets: node,
        translateY: -6,
        scale: 1.01,
        boxShadow: [
          getComputedStyle(node).boxShadow,
          "0 18px 38px rgba(0, 0, 0, 0.28)"
        ],
        duration: 320,
        easing: "easeOutQuad"
      });
    };

    const leave = () => {
      if (prefersReducedMotion || typeof anime === "undefined") {
        return;
      }

      anime.remove(node);
      anime({
        targets: node,
        translateY: 0,
        scale: 1,
        boxShadow: getComputedStyle(node).boxShadow,
        duration: 320,
        easing: "easeOutQuad"
      });
    };

    const pulse = () => {
      if (node.classList.contains("toolkit-card")) {
        return;
      }

      if (prefersReducedMotion || typeof anime === "undefined") {
        return;
      }

      anime({
        targets: node,
        scale: [1, 0.985, 1.015, 1],
        duration: 420,
        easing: "easeOutQuad"
      });
    };

    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    node.addEventListener("focus", enter, true);
    node.addEventListener("blur", leave, true);
    node.addEventListener("click", pulse);
  });

  const clock = document.querySelector("[data-role='clock']");
  if (clock) {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      clock.textContent = `${hours}:${minutes}:${seconds}`;
    };

    updateClock();
    setInterval(updateClock, 1000);
  }

  const loopingTriangleProgress = document.querySelector("[data-role='looping-triangle-progress']");
  if (loopingTriangleProgress) {
    const steps = Array.from(loopingTriangleProgress.querySelectorAll(".triangle-progress-step"));
    const sequence = [
      "00000",
      "10000",
      "11000",
      "11100",
      "11110",
      "11111",
      "01111",
      "00111",
      "00011",
      "00001"
    ];
    let sequenceIndex = 0;

    const renderSteps = () => {
      steps.forEach((step, index) => {
        step.classList.toggle("is-active", sequence[sequenceIndex][index] === "1");
      });
    };

    renderSteps();
    window.setInterval(() => {
      sequenceIndex = (sequenceIndex + 1) % sequence.length;
      renderSteps();
    }, 1000);
  }

  const loopingMeter = document.querySelector("[data-role='looping-meter']");
  const loopingMeterLabel = document.querySelector("[data-role='looping-meter-label']");
  if (loopingMeter) {
    const meterSequence = [0, 20, 40, 60, 80, 100];
    let meterIndex = 0;

    const renderLoopingMeter = () => {
      const value = meterSequence[meterIndex];
      updateMeterSegments(loopingMeter, value);
      if (loopingMeterLabel) {
        loopingMeterLabel.textContent = `${value}%`;
      }
    };

    renderLoopingMeter();
    window.setInterval(() => {
      meterIndex = meterIndex >= meterSequence.length - 1 ? 0 : meterIndex + 1;
      renderLoopingMeter();
    }, 5000);
  }
});
