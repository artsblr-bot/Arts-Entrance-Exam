/* === TEST: Check all 33 score values (0-32) for alignment === */
/* Paste this in browser console after starting the exam and answering at least 1 question */

(function() {
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function checkAlignment(label) {
    await sleep(600);
    const issues = [];
    const ring = document.getElementById('scoreRing');
    const inner = document.querySelector('.score-ring-inner');
    const scoreEl = document.getElementById('modalScore');
    const labelEl = document.getElementById('modalLabel');

    if (ring && inner) {
      const r = ring.getBoundingClientRect();
      const ir = inner.getBoundingClientRect();
      // Inner should be contained in outer
      if (ir.left < r.left || ir.right > r.right || ir.top < r.top || ir.bottom > r.bottom) {
        issues.push('Inner ring spills outside outer ring');
      }
      // Score and label should be within inner ring
      if (scoreEl) {
        const sr = scoreEl.getBoundingClientRect();
        if (sr.bottom > ir.bottom || sr.top < ir.top) {
          issues.push(`Score text overflows inner ring (top:${sr.top}, bottom:${sr.bottom}, ring:${ir.top}-${ir.bottom})`);
        }
      }
      if (labelEl) {
        const lr = labelEl.getBoundingClientRect();
        if (lr.bottom > ir.bottom || lr.top < ir.top) {
          issues.push(`Label overflows inner ring (top:${lr.top}, bottom:${lr.bottom}, ring:${ir.top}-${ir.bottom})`);
        }
      }
    }

    // Check score and label don't overlap
    if (scoreEl && labelEl) {
      const sr = scoreEl.getBoundingClientRect();
      const lr = labelEl.getBoundingClientRect();
      if (sr.bottom > lr.top && sr.top < lr.bottom) {
        issues.push('Score text and label overlap vertically');
      }
    }

    if (issues.length) {
      console.log(`%c✗ ${label}`, 'color:red;font-weight:bold', issues);
    } else {
      console.log(`%c✓ ${label}`, 'color:green;font-weight:bold');
    }
    return issues;
  }

  async function runScoreTest() {
    console.clear();
    console.log('%c═══ SCORE ALIGNMENT TEST (0-32) ═══', 'font-size:18px;font-weight:bold;color:#CC0000');
    console.log('Setting up exam with controllable answers...\n');

    // Ensure we're on the survey page
    if (document.getElementById('surveyWrap').style.display !== 'block') {
      console.log('Please start the exam first (fill name + interest + click Start Exam)');
      return;
    }

    const total = rawQuestions.length;

    for (let score = 0; score <= total; score++) {
      // Set up answers: first 'score' are correct (match correctIndex), rest are wrong
      answers = rawQuestions.map((q, i) => {
        if (i < score) return q.a; // correct
        return (q.a + 1) % q.o.length; // wrong
      });
      current = 0;
      saveState();

      // Call showResults directly
      showResults();
      await checkAlignment(`Score ${score}/${total}`);
      document.getElementById('modalBtn').click();
      await sleep(300);
    }

    console.log(`\n%c═══ All ${total+1} score values tested ═══`, 'font-size:16px;font-weight:bold;color:green');
  }

  runScoreTest();
})();
