/* Tradie Voice Mate — marketing site interactions */
(function () {
  function init() {
    if (window.lucide) lucide.createIcons();

    /* ---- Nav scroll state ---- */
    var nav = document.getElementById('nav');
    var onScroll = function () {
      if (window.scrollY > 80) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---- Hero parallax ---- */
    var heroEl = document.querySelector('.hero');
    var peopleEl = document.querySelector('.hero-people');
    var glowEl = document.querySelector('.hero-people-glow');
    var widgetColEl = document.querySelector('.widget-col');
    var intVisualEl = document.querySelector('.int-visual');
    var intPeopleEl = document.querySelector('.int-people');
    var bookedEl = document.querySelector('.booked-ui');
    var parallaxTicking = false;

    function updateParallax() {
      parallaxTicking = false;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var vh = window.innerHeight;

      /* Hero — anchored at top of page */
      if (heroEl) {
        var heroRect = heroEl.getBoundingClientRect();
        if (heroRect.bottom > 0) {
          var scrolled = Math.max(0, -heroRect.top);
          if (peopleEl)    peopleEl.style.transform    = 'translateY(calc(-100% + ' + (24 + scrolled * 0.154).toFixed(2) + 'px))';
          if (glowEl)      glowEl.style.transform      = 'translate(-50%, calc(-100% + ' + (40 + scrolled * 0.105).toFixed(2) + 'px))';
          if (widgetColEl) widgetColEl.style.transform = 'translateY(' + (scrolled * 0.042).toFixed(2) + 'px)';
        }
      }

      /* Job management — centered parallax (mid-page) */
      if (intVisualEl && (intPeopleEl || bookedEl)) {
        var ir = intVisualEl.getBoundingClientRect();
        if (ir.bottom > 0 && ir.top < vh) {
          var delta = (vh / 2) - (ir.top + ir.height / 2);
          if (intPeopleEl) intPeopleEl.style.transform = 'translate(-50%, ' + (delta * 0.084).toFixed(2) + 'px)';
          if (bookedEl)    bookedEl.style.transform    = 'translate(-50%, ' + (delta * 0.0245).toFixed(2) + 'px)';
        }
      }
    }

    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
    updateParallax();

    /* ---- Problem section — sticky scroll-driven typographic reveal ---- */
    (function () {
      var scrollEl = document.getElementById('problem');
      if (!scrollEl) return;
      var stickyEl = scrollEl.querySelector('.problem-sticky');
      var eyebrow = scrollEl.querySelector('.p-eyebrow');
      var words = [].slice.call(scrollEl.querySelectorAll('.p-title .wi'));
      var cols = [].slice.call(scrollEl.querySelectorAll('.p-col'));
      var closing = scrollEl.querySelector('.p-closing');

      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var narrow = window.innerWidth < 768;
      if (reduced || narrow) {
        scrollEl.classList.add('no-anim');
        return; // CSS fallback shows everything, statically
      }

      function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
      // premium easing curves
      function easeOutExpo(t) { return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t); }
      function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
      // map a global progress p into a local 0..1 over [s,e]
      function seg(p, s, e) { return clamp((p - s) / (e - s), 0, 1); }

      var W = words.length;
      var revealTicking = false;

      function render() {
        revealTicking = false;
        var rect = scrollEl.getBoundingClientRect();
        var track = scrollEl.offsetHeight - window.innerHeight;
        var p = clamp(-rect.top / track, 0, 1); // 0 when pinned start → 1 at end

        /* Eyebrow — quick lead-in */
        if (eyebrow) {
          var ep = easeOutCubic(seg(p, 0.0, 0.10));
          eyebrow.style.opacity = ep.toFixed(3);
          eyebrow.style.transform = 'translateY(' + ((1 - ep) * 14).toFixed(2) + 'px)';
        }

        /* Title — word-by-word mask rise, staggered, blur-to-sharp */
        var tStart = 0.04, tEnd = 0.40;
        var span = tEnd - tStart;
        for (var k = 0; k < W; k++) {
          var wStart = tStart + (k / W) * span * 0.62;   // stagger across part of window
          var wDur = span * 0.46;
          var lp = easeOutExpo(clamp((p - wStart) / wDur, 0, 1));
          words[k].style.transform = 'translateY(' + ((1 - lp) * 115).toFixed(2) + '%)';
          words[k].style.opacity = lp.toFixed(3);
          words[k].style.filter = lp >= 1 ? 'none' : 'blur(' + ((1 - lp) * 9).toFixed(2) + 'px)';
        }

        /* Sub-points — all together (tiny stagger), rise + fade + icon settle */
        var cStartBase = 0.46;
        for (var c = 0; c < cols.length; c++) {
          var cp = easeOutCubic(seg(p, cStartBase + c * 0.035, 0.66 + c * 0.035));
          cols[c].style.opacity = cp.toFixed(3);
          cols[c].style.transform = 'translateY(' + ((1 - cp) * 46).toFixed(2) + 'px)';
        }

        /* Closing line — final beat */
        if (closing) {
          var clp = easeOutCubic(seg(p, 0.72, 0.92));
          closing.style.opacity = clp.toFixed(3);
          closing.style.transform = 'translateY(' + ((1 - clp) * 30).toFixed(2) + 'px)';
          closing.style.filter = clp >= 1 ? 'none' : 'blur(' + ((1 - clp) * 5).toFixed(2) + 'px)';
        }
      }

      window.addEventListener('scroll', function () {
        if (!revealTicking) { requestAnimationFrame(render); revealTicking = true; }
      }, { passive: true });
      window.addEventListener('resize', function () {
        if (window.innerWidth < 768) { scrollEl.classList.add('no-anim'); }
        render();
      }, { passive: true });
      render();
    })();

    /* ---- Waveform bars — driven by real audio when available, synthetic fallback otherwise ---- */
    var wave = document.getElementById('wave');
    var BARS = 44;
    var bars = [];
    for (var i = 0; i < BARS; i++) { var b = document.createElement('span'); wave.appendChild(b); bars.push(b); }
    var waveActive = false;
    var t0 = performance.now();
    var smooth = new Float32Array(BARS); // smoothed 0..1 heights for a fluid feel

    /* Web Audio analyser — lazily created on first play (needs a user gesture) */
    var audioCtx = null, analyser = null, freqData = null, srcNode = null;
    function setupAnalyser() {
      if (analyser || !audio) return;
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audioCtx = new AC();
        srcNode = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 128;                 // 64 frequency bins
        analyser.smoothingTimeConstant = 0.78;  // analyser-side smoothing
        srcNode.connect(analyser);
        analyser.connect(audioCtx.destination); // keep audio audible
        freqData = new Uint8Array(analyser.frequencyBinCount);
      } catch (e) { analyser = null; }
    }

    /* history buffer: newest amplitude enters on the right, scrolls left over time
       — this is what gives the "waveform moving through time" feel, while the
       sample value itself is driven by the real audio amplitude. */
    var history = new Float32Array(BARS);
    var curLevel = 0;        // smoothed instantaneous amplitude 0..1
    var lastStep = 0;
    var STEP_MS = 62;        // time it takes the wave to scroll one bar-width

    function sampleLevel(elapsed, live, binN) {
      if (live && binN) {
        // average the voice band (low/mid bins) for an amplitude reading
        var n = Math.max(1, Math.floor(binN * 0.5));
        var sum = 0;
        for (var k = 0; k < n; k++) sum += freqData[k];
        var avg = (sum / n) / 255;                       // 0..1
        return Math.min(1, Math.pow(avg, 0.72) * 1.4);   // perceptual lift for quiet speech
      } else if (waveActive) {
        // synthetic speech-like envelope when real audio isn't routed
        var env = Math.abs(Math.sin(elapsed * 3.1)) * 0.6 + Math.abs(Math.sin(elapsed * 7.7)) * 0.4;
        return env * (0.45 + 0.55 * Math.abs(Math.sin(elapsed * 1.27)));
      }
      return 0.05 + 0.03 * (Math.sin(elapsed * 1.3) * 0.5 + 0.5); // idle: faint living line
    }

    function animateWave(now) {
      var elapsed = (now - t0) / 1000;
      var live = waveActive && audioMode && analyser && !paused;
      if (live) analyser.getByteFrequencyData(freqData);
      var binN = freqData ? freqData.length : 0;

      // track current amplitude, smoothed for a fluid feel
      var lvl = sampleLevel(elapsed, live, binN);
      curLevel += (lvl - curLevel) * (live ? 0.5 : 0.32);

      // scroll the buffer at a fixed cadence, independent of frame rate
      if (!lastStep) lastStep = now;
      var guard = 0;
      while (now - lastStep >= STEP_MS && guard++ < 8) {
        lastStep += STEP_MS;
        for (var s = 0; s < BARS - 1; s++) history[s] = history[s + 1];
        // subtle per-step texture so it reads like a waveform, not a flat envelope
        var texture = 0.74 + 0.26 * Math.abs(Math.sin(elapsed * 12.0 + curLevel * 4));
        history[BARS - 1] = curLevel * texture;
      }

      for (var i = 0; i < BARS; i++) {
        // ease each bar toward its slot in the scrolling history
        smooth[i] += (history[i] - smooth[i]) * 0.34;
        var h = 6 + smooth[i] * 54;
        bars[i].style.height = h.toFixed(1) + 'px';
        bars[i].style.opacity = (waveActive ? 0.5 + smooth[i] * 0.5 : 0.34 + smooth[i] * 0.3).toFixed(2);
      }
      requestAnimationFrame(animateWave);
    }
    requestAnimationFrame(animateWave);

    /* ---- Social proof ticker ---- */
    var quotes = [
      ['Pays for itself the first week.', 'Plumber, QLD'],
      ['It handled 6 calls on Saturday while I was flat out on a job. Legends.', 'Pest Control, NSW'],
      ['My guys thought it was a real person answering.', 'Arborist, VIC'],
      ['Set up in 10 minutes. Works perfectly.', 'Building Contractor, WA']
    ];
    function starSVG() {
      return '<span class="stars">' + Array(5).fill('<svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>').join('') + '</span>';
    }
    var ticker = document.getElementById('ticker');
    var html = '';
    for (var pass = 0; pass < 2; pass++) {
      quotes.forEach(function (q) {
        html += '<span class="quote"><span class="q">&ldquo;' + q[0] + '&rdquo;</span><span class="src">— ' + q[1] + '</span>' + starSVG() + '</span>';
      });
    }
    ticker.innerHTML = html;

    /* ---- FAQ accordion ---- */
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      q.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function (other) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });

    /* ============ Demo widget — synced to real audio ============ */
    var widget = document.getElementById('widget');
    var audio = document.getElementById('demoAudio');
    var playBtn = document.getElementById('playBtn');
    var statusEl = document.getElementById('status');
    var timerEl = document.getElementById('timer');
    var liveDot = document.getElementById('liveDot');
    var captionWrap = document.getElementById('captionWrap');
    var caption = document.getElementById('caption');
    var pillsEl = document.getElementById('pills');
    var smsEl = document.getElementById('sms');

    /* Real transcript timestamps (seconds) from tvm_arborist_call_transcript.md */
    var lines = [
      { at: 1,   who: 'agent',  label: 'Digital Receptionist', text: "Hi, you've reached Tall Timber Tree Services on a recorded line. I'm their digital receptionist — the team's busy, but I'll take your details to pass on. Can I grab your first name?" },
      { at: 11,  who: 'caller', label: 'Caller',       text: "Yeah, my name's John. I've got a red gum leaning over the house — I need it taken down ASAP." },
      { at: 17,  who: 'agent',  label: 'Digital Receptionist', text: "Thanks John. So that's a red gum leaning over the house, removed ASAP. What's the postcode for the job?" },
      { at: 24,  who: 'caller', label: 'Caller',       text: "Yeah, 3144." },
      { at: 25,  who: 'agent',  label: 'Digital Receptionist', text: "Great, that's 3144 — is that right?" },
      { at: 27.5,who: 'caller', label: 'Caller',       text: "Yeah." },
      { at: 29,  who: 'agent',  label: 'Digital Receptionist', text: "Is the number you're calling on the best one to reach you?" },
      { at: 32,  who: 'caller', label: 'Caller',       text: "Nah, give me a buzz back on 0437 414 424." },
      { at: 38,  who: 'agent',  label: 'Digital Receptionist', text: "Perfect, I've got 0437 414 424 — is that correct?" },
      { at: 42,  who: 'caller', label: 'Caller',       text: "Yep." },
      { at: 44,  who: 'agent',  label: 'Digital Receptionist', text: "Thanks John. Is there a preferred time for the team to call you back?" },
      { at: 48,  who: 'caller', label: 'Caller',       text: "Next Thursday after about 5pm would be fantastic." },
      { at: 52,  who: 'agent',  label: 'Digital Receptionist', text: "No worries — red gum removal leaning near the house in 3144, and we'll call you next Thursday around 5pm. Sound good?" },
      { at: 63,  who: 'caller', label: 'Caller',       text: "Yeah, perfect." },
      { at: 65,  who: 'agent',  label: 'Digital Receptionist', text: "Beauty — the team will be in touch next Thursday around 5pm. Have a good one." }
    ];
    var pills = [
      { at: 13,   label: 'Name · John' },
      { at: 14,   label: 'ASAP', cls: 'urgent' },
      { at: 25.5, label: 'Job · Red gum removal' },
      { at: 26,   label: 'Postcode · 3144' },
      { at: 39,   label: 'Phone · 0437 414 424' },
      { at: 50,   label: 'Callback · Thu ~5pm' }
    ];
    var FALLBACK_DUR = 70;   // used only if audio can't play
    var END_AT = 69;

    var playing = false, audioMode = false, startWall = 0, pollId = null;
    var shownLine = -1, firedPills = 0;
    var paused = false, pausedElapsed = 0;
    var captionTimer = null, captionSeq = 0;
    var ctrlBtn = document.getElementById('widgetCtrl');

    function setCtrl(state) {
      if (!ctrlBtn) return;
      ctrlBtn.setAttribute('data-state', state);
      ctrlBtn.setAttribute('aria-label', state === 'pause' ? 'Pause' : state === 'play' ? 'Resume' : 'Restart');
    }

    function fmt(s) { s = Math.max(0, s); var m = Math.floor(s / 60); var ss = Math.floor(s % 60); return m + ':' + (ss < 10 ? '0' : '') + ss; }

    function showLine(idx) {
      var line = lines[idx];
      var seq = ++captionSeq;
      captionWrap.classList.add('show');
      var hasContent = caption.innerHTML.trim() !== '';

      // Fade the current bubble out IN PLACE (no side/colour switch yet — that's what caused the flicker)
      if (hasContent) {
        caption.style.transition = 'opacity 0.22s cubic-bezier(0.4,0,0.2,1), transform 0.22s cubic-bezier(0.4,0,0.2,1)';
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(6px) scale(0.99)';
      }

      if (captionTimer) clearTimeout(captionTimer);
      captionTimer = setTimeout(function () {
        if (seq !== captionSeq) return; // a newer line superseded this one
        // Swap speaker side + colour + text together while fully invisible
        captionWrap.classList.remove('agent', 'caller');
        captionWrap.classList.add(line.who);
        caption.innerHTML = '<span class="caption-label">' + line.label + '</span><span class="caption-text">' + line.text + '</span>';
        // Premium soft entrance: emerge with a gentle upward drift + subtle scale
        caption.style.transition = 'none';
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(14px) scale(0.965)';
        void caption.offsetWidth; // commit the from-state before animating
        caption.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.62s cubic-bezier(0.16,1,0.3,1)';
        caption.style.opacity = '1';
        caption.style.transform = 'translateY(0) scale(1)';
      }, hasContent ? 240 : 0);
    }
    function addPill(p) {
      var span = document.createElement('span');
      span.className = 'pill' + (p.cls ? ' ' + p.cls : '');
      span.textContent = p.label;
      pillsEl.appendChild(span);
    }

    function getTime() {
      if (audioMode && audio) return audio.currentTime;
      return (Date.now() - startWall) / 1000;
    }
    function tick() {
      var t = getTime();
      timerEl.textContent = fmt(t);
      // latest line whose timestamp has passed
      var idx = -1;
      for (var i = 0; i < lines.length; i++) { if (t >= lines[i].at) idx = i; }
      if (idx !== -1 && idx !== shownLine) { shownLine = idx; showLine(idx); }
      while (firedPills < pills.length && t >= pills[firedPills].at) addPill(pills[firedPills++]);
      var ended = audioMode ? (audio.ended || t >= (audio.duration || END_AT) - 0.3) : (t >= END_AT);
      if (ended) endCall();
    }

    function startCall() {
      if (playing) return;
      playing = true;
      waveActive = true;
      widget.classList.add('calling');
      liveDot.classList.remove('pulsing');
      statusEl.textContent = 'Live call example';
      statusEl.style.color = 'var(--tvm-forest-green)';
      startWall = Date.now();
      // try real audio; fall back to synthetic clock
      audioMode = false;
      if (audio) {
        try {
          setupAnalyser(); // route through Web Audio during this user gesture
          if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
          audio.currentTime = 0;
          var p = audio.play();
          if (p && p.then) { p.then(function () { audioMode = true; }).catch(function () { audioMode = false; }); }
          else { audioMode = true; }
        } catch (e) { audioMode = false; }
      }
      clearInterval(pollId);
      pollId = setInterval(tick, 100);
      paused = false;
      setCtrl('pause');
      if (ctrlBtn) ctrlBtn.classList.add('show');
    }

    function pauseFlow() {
      if (!playing || paused) return;
      paused = true;
      waveActive = false;
      clearInterval(pollId);
      if (audioMode && audio) { try { audio.pause(); } catch (e) {} }
      else { pausedElapsed = (Date.now() - startWall) / 1000; }
      statusEl.textContent = 'Paused';
      statusEl.style.color = 'var(--tvm-on-dark-50)';
      setCtrl('play');
    }

    function resumeFlow() {
      if (!playing || !paused) return;
      paused = false;
      waveActive = true;
      if (audioMode && audio) { try { audio.play(); } catch (e) {} }
      else { startWall = Date.now() - pausedElapsed * 1000; }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      statusEl.textContent = 'Live call example';
      statusEl.style.color = 'var(--tvm-forest-green)';
      clearInterval(pollId);
      pollId = setInterval(tick, 100);
      setCtrl('pause');
    }

    function endCall() {
      clearInterval(pollId);
      playing = false;
      paused = false;
      waveActive = false;
      widget.classList.add('ended');
      statusEl.textContent = 'Call ended';
      statusEl.style.color = 'var(--tvm-on-dark-50)';
      captionWrap.classList.remove('show');
      setCtrl('restart');
      if (ctrlBtn) ctrlBtn.classList.add('show');
      setTimeout(function () { smsEl.classList.add('show'); }, 650);
    }

    function reset() {
      clearInterval(pollId);
      if (captionTimer) { clearTimeout(captionTimer); captionTimer = null; }
      captionSeq++;
      playing = false; waveActive = false; audioMode = false; paused = false;
      shownLine = -1; firedPills = 0;
      if (audio) { try { audio.pause(); audio.currentTime = 0; } catch (e) {} }
      caption.innerHTML = ''; pillsEl.innerHTML = '';
      caption.style.cssText = '';
      captionWrap.className = 'caption-wrap';
      smsEl.classList.remove('show');
      widget.classList.remove('calling', 'ended');
      timerEl.textContent = '0:00';
      statusEl.textContent = 'Incoming call';
      statusEl.style.color = '';
      liveDot.classList.add('pulsing');
      if (ctrlBtn) ctrlBtn.classList.remove('show');
      setCtrl('pause');
    }

    if (ctrlBtn) ctrlBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var state = ctrlBtn.getAttribute('data-state');
      if (state === 'pause') pauseFlow();
      else if (state === 'play') resumeFlow();
      else if (state === 'restart') { reset(); startCall(); }
    });

    playBtn.addEventListener('click', startCall);
    if (audio) audio.addEventListener('ended', function () { if (playing) endCall(); });

    /* Click the ended widget to replay */
    widget.addEventListener('click', function (e) {
      if (e.target.closest('#playBtn')) return;
      if (e.target.closest('#widgetCtrl')) return;
      if (widget.classList.contains('ended')) { reset(); startCall(); }
    });

    /* ---- Step row scroll-in animation ---- */
    (function () {
      var list = document.querySelector('.steps-list');
      if (!list) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var rows = [].slice.call(list.querySelectorAll('.step-row'));
      list.classList.add('js-ready');
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var row = entry.target;
          var idx = rows.indexOf(row);
          setTimeout(function () { row.classList.add('is-visible'); }, idx * 115);
          obs.unobserve(row);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      rows.forEach(function (row) { obs.observe(row); });
    })();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
