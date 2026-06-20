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

    /* ---- Waveform — reacts to live audio, scrolls forward like a timeline ---- */
    var wave = document.getElementById('wave');
    var BARS = 44;
    var bars = [];
    for (var i = 0; i < BARS; i++) { var b = document.createElement('span'); wave.appendChild(b); bars.push(b); }
    var waveActive = false;
    var t0 = performance.now();

    // Scrolling amplitude history (0..1) + eased display heights (px) for a premium feel
    var levels = [], disp = [];
    for (var k = 0; k < BARS; k++) { levels.push(0.12); disp.push(12); }

    // Web Audio analyser — built lazily on the first user-gesture play
    var audioCtx = null, analyser = null, srcNode = null, timeData = null, audioReady = false;
    function ensureAnalyser() {
      if (audioReady || !audio) return;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try {
        audioCtx = new AC();
        srcNode = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        srcNode.connect(analyser);
        analyser.connect(audioCtx.destination);
        timeData = new Uint8Array(analyser.fftSize);
        audioReady = true;
      } catch (e) { audioReady = false; }
    }
    function resumeAudioCtx() { if (audioCtx && audioCtx.state === 'suspended') { try { audioCtx.resume(); } catch (e) {} } }

    // One amplitude sample (0..1): true RMS loudness when audio is live, lively synthetic otherwise
    function sampleAmp(now) {
      if (audioReady && analyser && audioMode) {
        analyser.getByteTimeDomainData(timeData);
        var sum = 0;
        for (var j = 0; j < timeData.length; j++) { var v = (timeData[j] - 128) / 128; sum += v * v; }
        var rms = Math.sqrt(sum / timeData.length);
        var amp = Math.min(1, rms * 3.4);
        return 0.1 + amp * 0.9 * (0.85 + Math.random() * 0.15);
      }
      var e = now / 1000;
      var jit = Math.abs(Math.sin(e * 9)) * 0.6 + Math.abs(Math.sin(e * 3.3)) * 0.4;
      return 0.12 + jit * 0.78;
    }

    var SAMPLE_MS = 42, lastSample = 0;
    function animateWave(now) {
      var elapsed = (now - t0) / 1000;
      if (waveActive) {
        // Advance the timeline: newest sample enters on the right, older scrolls left
        if (now - lastSample >= SAMPLE_MS) {
          lastSample = now;
          levels.shift();
          levels.push(sampleAmp(now));
        }
        for (var i = 0; i < BARS; i++) {
          var target = 6 + levels[i] * 46;
          disp[i] += (target - disp[i]) * 0.28;
          bars[i].style.height = disp[i].toFixed(1) + 'px';
          bars[i].style.opacity = (0.45 + levels[i] * 0.55).toFixed(2);
        }
      } else {
        // Idle: gentle traveling sine (default look), eased for smoothness
        for (var i = 0; i < BARS; i++) {
          var phase = i * 0.35;
          var base = Math.sin(elapsed * 1.6 + phase) * 0.5 + 0.5;
          var target = 7 + base * 12;
          disp[i] += (target - disp[i]) * 0.22;
          levels[i] = (disp[i] - 6) / 46; // keep history primed for a seamless hand-off into live audio
          bars[i].style.height = disp[i].toFixed(1) + 'px';
          bars[i].style.opacity = (0.4 + base * 0.28).toFixed(2);
        }
      }
      requestAnimationFrame(animateWave);
    }
    requestAnimationFrame(animateWave);

    /* ---- Social proof ticker ---- */
    var quotes = [
      ['Pays for itself the first week.', 'Reliable Plumbing Co., QLD'],
      ['It handled 6 calls on Saturday while I was flat out on a job. Legends.', 'Premium Pest Control, NSW'],
      ['My guys thought it was a real person answering.', 'Hillside Tree Loppers, VIC'],
      ['Set up in 10 minutes. Works perfectly.', 'A.J. Contractors, WA']
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

    /* ---- Scroll reveal (smooth fade-in-up) ---- */
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealEls = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    } else {
      var revObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function (el) { revObs.observe(el); });
    }

    /* ---- Premium scroll parallax (depth between layered images / widgets) ---- */
    if (!reduceMotion && window.innerWidth > 920) {
      var pxDefs = [
        { sel: '#top .hero-lines', base: '',                   amp: 26 },  // far background grid — slow
        { sel: '.hero-people',     base: 'translateY(-85%)',   amp: -34 }, // receptionist image, behind widget
        { sel: '#widget',          base: '',                   amp: 14 },  // foreground widget, opposite drift
        { sel: '.int-people',      base: 'translateX(-50%)',   amp: -32 }, // team image, behind CRM mockup
        { sel: '.booked-ui',       base: 'translateX(-50%)',   amp: 14 }   // foreground CRM card
      ];
      var pxEls = [];
      pxDefs.forEach(function (d) {
        var el = document.querySelector(d.sel);
        if (el) pxEls.push({ el: el, base: d.base, amp: d.amp, cur: 0, target: 0 });
      });
      var pxVh = window.innerHeight;
      function pxMeasure() {
        pxVh = window.innerHeight;
        for (var i = 0; i < pxEls.length; i++) {
          var p = pxEls[i];
          var r = p.el.getBoundingClientRect();
          var center = r.top + r.height / 2;
          p.target = ((center - pxVh / 2) / pxVh) * p.amp;
        }
      }
      function pxFrame() {
        for (var i = 0; i < pxEls.length; i++) {
          var p = pxEls[i];
          p.cur += (p.target - p.cur) * 0.12; // lerp → buttery, momentum-friendly
          p.el.style.transform = (p.base ? p.base + ' ' : '') + 'translate3d(0,' + p.cur.toFixed(2) + 'px,0)';
        }
        requestAnimationFrame(pxFrame);
      }
      window.addEventListener('scroll', pxMeasure, { passive: true });
      window.addEventListener('resize', pxMeasure);
      pxMeasure();
      requestAnimationFrame(pxFrame);
    }

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
    var ctrlBtn = document.getElementById('widgetCtrl');

    function setCtrl(state) {
      if (!ctrlBtn) return;
      ctrlBtn.setAttribute('data-state', state);
      ctrlBtn.setAttribute('aria-label', state === 'pause' ? 'Pause' : state === 'play' ? 'Resume' : 'Restart');
    }

    function fmt(s) { s = Math.max(0, s); var m = Math.floor(s / 60); var ss = Math.floor(s % 60); return m + ':' + (ss < 10 ? '0' : '') + ss; }

    function showLine(idx) {
      var line = lines[idx];
      captionWrap.className = 'caption-wrap show ' + line.who;
      caption.style.opacity = '0';
      caption.style.transform = 'translateY(6px)';
      setTimeout(function () {
        caption.innerHTML = '<span class="caption-label">' + line.label + '</span><span class="caption-text">' + line.text + '</span>';
        caption.style.opacity = '1';
        caption.style.transform = 'none';
      }, 150);
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
      ensureAnalyser();
      resumeAudioCtx();
      widget.classList.add('calling');
      liveDot.classList.remove('pulsing');
      statusEl.textContent = 'Live call example';
      statusEl.style.color = 'var(--tvm-forest-green)';
      startWall = Date.now();
      // try real audio; fall back to synthetic clock
      audioMode = false;
      if (audio) {
        try {
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
      resumeAudioCtx();
      if (audioMode && audio) { try { audio.play(); } catch (e) {} }
      else { startWall = Date.now() - pausedElapsed * 1000; }
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
      playing = false; waveActive = false; audioMode = false; paused = false;
      shownLine = -1; firedPills = 0;
      if (audio) { try { audio.pause(); audio.currentTime = 0; } catch (e) {} }
      caption.innerHTML = ''; pillsEl.innerHTML = '';
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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
