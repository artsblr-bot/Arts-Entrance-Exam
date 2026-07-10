/* === Paste this entire script into browser console (F12 → Console) === */
(function() {
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function runLoop(label, answerPattern) {
    console.clear();
    console.log(`%c═══ LOOP: ${label} ═══`, 'font-size:18px;font-weight:bold;color:#CC0000');

    // Reset
    localStorage.clear();
    location.reload();
    await sleep(800);

    // Fill form
    document.getElementById('candidateName').value = 'Test ' + label;
    document.getElementById('candidateInterest').value = 'Photography';
    document.getElementById('btnStart').click();
    await sleep(500);

    // Answer each question
    for (let i = 0; i < 32; i++) {
      const opts = document.querySelectorAll('.option');
      if (opts.length === 0) { /* skip */ }
      const idx = typeof answerPattern === 'function' ? answerPattern(i) : answerPattern;
      if (idx >= 0 && idx < opts.length) opts[idx].click();
      await sleep(40);
      const skipBtn = document.getElementById('btnSkip');
      const nextBtn = document.getElementById('btnNext');
      const subBtn = document.getElementById('btnSubmit');
      if (!subBtn.classList.contains('hidden')) subBtn.click();
      else if (!nextBtn.classList.contains('hidden')) nextBtn.click();
      await sleep(40);
    }

    await sleep(600);

    // Read modal results
    const score = document.getElementById('modalScore')?.innerText || 'N/A';
    const label_text = document.getElementById('modalLabel')?.textContent || 'N/A';
    const talent = document.querySelector('.talent-label')?.textContent || 'N/A';

    console.log(`Score: ${score.trim()}`);
    console.log(`Label: ${label_text}`);
    console.log(`Talent: ${talent}`);

    // Show section cards
    document.querySelectorAll('.s-break').forEach(c => {
      const name = c.querySelector('.sb-label')?.textContent;
      const score = c.querySelector('.sb-score')?.textContent;
      const isTop = c.classList.contains('s-break-top');
      console.log(`  ${name}: ${score} ${isTop ? '★ MAIN TALENT' : ''}`);
    });

    console.log(`%c✓ Loop ${label} complete`, 'color:green;font-weight:bold');
    return { score, label: label_text, talent };
  }

  (async () => {
    const results = [];
    // Loop 1: All skip (0 correct)
    results.push(await runLoop('All Skipped (0/32)', () => -1));
    await sleep(2000);
    document.getElementById('modalBtn')?.click();
    await sleep(500);
    document.getElementById('btnEnd')?.click();
    await sleep(800);

    // Loop 2: Answer all option 0 (mix of correct/wrong based on shuffle)
    results.push(await runLoop('All Option A', () => 0));
    await sleep(2000);
    document.getElementById('modalBtn')?.click();
    await sleep(500);
    document.getElementById('btnRestart')?.click();
    await sleep(800);

    // Loop 3: Photography section all correct, rest wrong
    results.push(await runLoop('Photo Correct Only', (i) => i < 7 ? 0 : -1));
    await sleep(2000);
    document.getElementById('modalBtn')?.click();
    await sleep(500);
    document.getElementById('btnEnd')?.click();
    await sleep(800);

    console.log('%c═══ ALL 3 LOOPS COMPLETE ═══', 'font-size:20px;font-weight:bold;color:#CC0000');
    console.table(results);
  })();
})();
