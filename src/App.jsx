import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [current, setCurrent] = useState(0)

  const totalSlides = 26

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, totalSlides - 1))
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  const progress = ((current + 1) / totalSlides) * 100

  return (
    <div className="presentation" onClick={next}>
      {/* Background */}
      <div className="bg-grid" />
      <div className="bg-gradient bg-gradient-1" />
      <div className="bg-gradient bg-gradient-2" />

      {/* Progress */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="slide-counter">{current + 1} / {totalSlides}</div>
      <div className="nav-hint">Arrow keys to navigate</div>

      {/* =================== ACT 1: EVOLUTION =================== */}

      {/* Slide 0: Title */}
      <div className={`slide title-slide ${current === 0 ? 'active' : ''}`}>
        <img src="/images/title-hero.png" alt="Evolution of AI" className="sketch-image-wide" style={{ opacity: 0.5, marginBottom: '1.5rem' }} />
        <div className="subtitle">A Talk on</div>
        <h1>The Evolution of AI</h1>
        <div className="divider" />
        <h3>& How to Master It</h3>
      </div>

      {/* Slide 1: Ada Lovelace */}
      <div className={`slide era-slide ${current === 1 ? 'active' : ''}`}>
        <img src="/images/ada-lovelace.png" alt="Ada Lovelace" className="sketch-image" />
        <div className="year">1843</div>
        <h2>Ada Lovelace</h2>
        <p>
          First person to see that a machine could do more than arithmetic — it could
          manipulate symbols, create music, reason. She wrote the first algorithm
          for a machine that didn't even exist yet.
        </p>
      </div>

      {/* Slide 2: Alan Turing */}
      <div className={`slide era-slide ${current === 2 ? 'active' : ''}`}>
        <img src="/images/alan-turing.png" alt="Alan Turing" className="sketch-image" />
        <div className="year">1950</div>
        <h2>Alan Turing</h2>
        <p className="quote">Can machines think?</p>
        <p style={{ marginTop: '1rem' }}>
          Formalized computation itself. Built the theoretical foundation
          that every computer sits on.
        </p>
      </div>

      {/* Slide 3: Computers Grow */}
      <div className={`slide era-slide ${current === 3 ? 'active' : ''}`}>
        <img src="/images/computers-grow.png" alt="Evolution of computers" className="sketch-image-wide" />
        <div className="year">1950s — 1980s</div>
        <h2>Computers Grow</h2>
        <p>
          From room-sized mainframes to personal desktops.
          Computing power doubles relentlessly. Machines stop being exotic
          and become tools — then personal tools.
        </p>
      </div>

      {/* Slide 4: The Internet */}
      <div className={`slide era-slide ${current === 4 ? 'active' : ''}`}>
        <img src="/images/internet.png" alt="The Internet" className="sketch-image-wide" />
        <div className="year">1990s</div>
        <h2>The Internet</h2>
        <p>
          Computers get connected. It's no longer about what's on your machine — it's
          about what every machine can share. Information becomes networked.
          The world gets smaller overnight.
        </p>
      </div>

      {/* Slide 5: Data */}
      <div className={`slide era-slide ${current === 5 ? 'active' : ''}`}>
        <img src="/images/data-explosion.png" alt="Data explosion" className="sketch-image-wide" />
        <div className="year">2000s — 2010s</div>
        <h2>The Data Explosion</h2>
        <p>
          Every click, search, purchase, photo, message — captured and stored.
          Humanity produces more data in a day than it did in entire centuries.
          This is the fuel for what comes next.
        </p>
      </div>

      {/* Slide 6: Deep Learning */}
      <div className={`slide era-slide ${current === 6 ? 'active' : ''}`}>
        <img src="/images/deep-learning.png" alt="Deep Learning" className="sketch-image-wide" />
        <div className="year">2012</div>
        <h2>Deep Learning</h2>
        <p>
          Neural networks — an old idea from the 60s — suddenly work.
          The data is there. The compute is there. Machines start learning
          to see, hear, and read.
        </p>
      </div>

      {/* Slide 7: Transformers */}
      <div className={`slide era-slide ${current === 7 ? 'active' : ''}`}>
        <img src="/images/transformers.png" alt="Transformer attention" className="sketch-image-wide" />
        <div className="year">2017</div>
        <h2>Transformers</h2>
        <p className="quote">Attention Is All You Need</p>
        <p style={{ marginTop: '1.5rem' }}>
          A single research paper that changed everything.
          Models that process language by paying attention to everything at once —
          not word by word. The foundation of modern AI.
        </p>
      </div>

      {/* Slide 8: GPT Timeline */}
      <div className={`slide era-slide ${current === 8 ? 'active' : ''}`}>
        <img src="/images/gpt-ai.png" alt="GPT and AI" className="sketch-image" />
        <div className="year">2018 — Now</div>
        <h2>The GPT Era</h2>
        <div className="gpt-timeline">
          <div className="gpt-item">
            <span className="gpt-year">2019</span>
            <span className="gpt-name">GPT-2</span>
            <span className="gpt-desc">"Too dangerous to release"</span>
          </div>
          <div className="gpt-item">
            <span className="gpt-year">2020</span>
            <span className="gpt-name">GPT-3</span>
            <span className="gpt-desc">Few-shot learning. Something changed.</span>
          </div>
          <div className="gpt-item">
            <span className="gpt-year">2022</span>
            <span className="gpt-name">ChatGPT</span>
            <span className="gpt-desc">100M users in 2 months. Fastest ever.</span>
          </div>
          <div className="gpt-item">
            <span className="gpt-year">2023</span>
            <span className="gpt-name">GPT-4</span>
            <span className="gpt-desc">Passes the bar exam. Sees images. Writes code.</span>
          </div>
          <div className="gpt-item">
            <span className="gpt-year">2024</span>
            <span className="gpt-name">Reasoning</span>
            <span className="gpt-desc">Models that think step by step. Agents emerge.</span>
          </div>
          <div className="gpt-item">
            <span className="gpt-year">2025</span>
            <span className="gpt-name">GPT-5</span>
            <span className="gpt-desc">Multimodal. Agentic. The frontier keeps moving.</span>
          </div>
        </div>
      </div>

      {/* Slide 9: The Thread / Now */}
      <div className={`slide ${current === 9 ? 'active' : ''}`}>
        <img src="/images/one-thread.png" alt="One thread through time" className="sketch-image-wide" style={{ opacity: 0.6 }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>180 Years. One Thread.</h2>
        <p style={{ fontSize: '1.5rem', lineHeight: '2.2', maxWidth: '700px' }}>
          Ada imagined it. Turing formalized it.<br />
          We built the computers, connected them, fed them data,<br />
          taught them to learn, gave them language.<br /><br />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Now they're here.</span>
        </p>
      </div>

      {/* =================== ACT 2: WHY THIS MATTERS =================== */}

      {/* Slide 10: Defining Tech */}
      <div className={`slide section-divider ${current === 10 ? 'active' : ''}`}>
        <div className="section-number">ACT II</div>
        <h1 style={{ fontSize: '3.5rem', textAlign: 'center' }}>
          Every era has a<br />defining technology.
        </h1>
        <h3 style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '2rem' }}>AI is yours.</h3>
      </div>

      {/* Slide 11: Era Timeline */}
      <div className={`slide ${current === 11 ? 'active' : ''}`}>
        <h2 style={{ marginBottom: '0.5rem' }}>The Defining Technologies</h2>
        <p style={{ marginBottom: '1rem' }}>The people who went deep early built what came next</p>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-label">70s-80s</div>
            <div className="timeline-dot" />
            <div className="timeline-title">Personal<br />Computers</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-label">90s-00s</div>
            <div className="timeline-dot" />
            <div className="timeline-title">The<br />Internet</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-label">2010s</div>
            <div className="timeline-dot" />
            <div className="timeline-title">Mobile<br />+ Cloud</div>
          </div>
          <div className="timeline-item highlight">
            <div className="timeline-label">2020s</div>
            <div className="timeline-dot" />
            <div className="timeline-title">AI</div>
            <div className="you-are-here">YOU ARE HERE</div>
          </div>
        </div>
      </div>

      {/* Slide 12: The Pattern */}
      <div className={`slide ${current === 12 ? 'active' : ''}`}>
        <h2>The Pattern</h2>
        <p style={{ marginBottom: '0.5rem' }}>Every defining technology follows the same arc</p>
        <ol className="pattern-list">
          <li>
            <span className="pattern-number">01</span>
            <span>New technology arrives — looks like a <strong>toy</strong></span>
          </li>
          <li>
            <span className="pattern-number">02</span>
            <span>Skeptics dismiss it — <em>"it's a fad"</em></span>
          </li>
          <li>
            <span className="pattern-number">03</span>
            <span>A small group goes <strong>deep</strong> while it's still early and messy</span>
          </li>
          <li>
            <span className="pattern-number">04</span>
            <span>It becomes <strong>infrastructure</strong> — everywhere, invisible, expected</span>
          </li>
          <li>
            <span className="pattern-number">05</span>
            <span>That small group has a <strong>decade-long head start</strong></span>
          </li>
        </ol>
      </div>

      {/* Slide 13: The Window */}
      <div className={`slide ${current === 13 ? 'active' : ''}`}>
        <img src="/images/window-open.png" alt="Open window of opportunity" className="sketch-image-wide" style={{ opacity: 0.6 }} />
        <h2>The Window Is Open</h2>
        <p style={{ fontSize: '1.6rem', lineHeight: '1.8', maxWidth: '750px' }}>
          <em>"I use ChatGPT"</em> will sound like <em>"I use Google"</em> soon.
        </p>
        <p style={{ marginTop: '2rem', fontSize: '1.4rem' }}>
          The question isn't whether you'll use AI.<br />
          It's whether you'll be <strong style={{ color: 'var(--accent)' }}>above the baseline</strong> — or on it.
        </p>
      </div>

      {/* Slide 14: The Reframe */}
      <div className={`slide ${current === 14 ? 'active' : ''}`}>
        <img src="/images/human-ai.png" alt="Human and AI collaboration" className="sketch-image-wide" style={{ opacity: 0.5 }} />
        <h2 style={{ opacity: 0.5, fontSize: '2rem', textDecoration: 'line-through', marginBottom: '1.5rem' }}>
          Will AI replace me?
        </h2>
        <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Wrong question.</h2>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>
          Computers didn't replace programmers.<br />
          The internet didn't replace web builders.<br />
          Every defining technology <strong>amplified</strong> the people who mastered it.
        </p>
      </div>

      {/* =================== ACT 3: HOW TO GET GOOD =================== */}

      {/* Slide 15: Act 3 Intro */}
      <div className={`slide section-divider ${current === 15 ? 'active' : ''}`}>
        <div className="closing-slide-bg" style={{ backgroundImage: 'url(/images/three-levels.png)' }} />
        <div className="section-number" style={{ position: 'relative', zIndex: 1 }}>ACT III</div>
        <h1 style={{ fontSize: '3.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>How to Get Good at AI</h1>
        <div className="three-levels">
          <div className="three-level-card">
            <div className="level-num">01</div>
            <h4>Write Good Prompts</h4>
            <p>Talk to AI effectively</p>
          </div>
          <div className="three-level-card">
            <div className="level-num">02</div>
            <h4>Context Engineering</h4>
            <p>Set up the environment for AI to succeed</p>
          </div>
          <div className="three-level-card">
            <div className="level-num">03</div>
            <h4>Agents</h4>
            <p>AI that takes action, not just generates text</p>
          </div>
        </div>
      </div>

      {/* Slide 16: Prompt Engineering - Overview */}
      <div className={`slide ${current === 16 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 01</div>
        <h2>Write Good Prompts</h2>
        <p>You're writing a brief for a brilliant collaborator who has zero context about your project.</p>
        <div className="prompt-compare">
          <div className="prompt-box bad">
            <div className="prompt-box-label">Vague</div>
            <code>Write me an essay about climate change</code>
          </div>
          <div className="prompt-box good">
            <div className="prompt-box-label">Engineered</div>
            <code>Write a 500-word op-ed arguing for carbon pricing, aimed at college students skeptical of regulation. Conversational tone. Include one concrete example.</code>
          </div>
        </div>
      </div>

      {/* Slide 17: Prompt Engineering - Techniques */}
      <div className={`slide ${current === 17 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 01</div>
        <h2>Key Techniques</h2>
        <div className="level-grid">
          <div className="level-card">
            <h4>Be specific</h4>
            <p>Constraints, format, audience, length. "500-word op-ed for skeptical students" beats "essay about climate."</p>
          </div>
          <div className="level-card">
            <h4>Give it a role</h4>
            <p>"You are a senior engineer reviewing this code for security flaws" — persona framing shapes the entire output.</p>
          </div>
          <div className="level-card">
            <h4>Show, don't just tell</h4>
            <p>Provide 2-3 examples of what great output looks like. The model learns your standard from your examples.</p>
          </div>
          <div className="level-card">
            <h4>Ask it to think</h4>
            <p>"Think step by step before answering" — this genuinely improves reasoning on complex problems.</p>
          </div>
        </div>
      </div>

      {/* Slide 18: Prompt Engineering - Iterate */}
      <div className={`slide ${current === 18 ? 'active' : ''}`}>
        <img src="/images/iterate.png" alt="Iteration cycle" className="sketch-image-wide" style={{ opacity: 0.5 }} />
        <div className="level-badge">LEVEL 01</div>
        <h2>Iterate, Don't One-Shot</h2>
        <ul className="detail-list">
          <li><strong>Your first prompt is a draft.</strong> Read the output, tighten the prompt, run again.</li>
          <li><strong>Treat it as a conversation.</strong> "That's good, but make the tone more casual and cut the intro by half."</li>
          <li><strong>Build up constraints over rounds.</strong> Start broad, then narrow down based on what you see.</li>
          <li><strong>Save your best prompts.</strong> A good prompt is reusable — build a personal library of ones that work.</li>
        </ul>
      </div>

      {/* Slide 19: Context Engineering - Overview */}
      <div className={`slide ${current === 19 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 02</div>
        <h2>Context Engineering</h2>
        <p style={{ marginBottom: '0.5rem' }}>The prompt is just one input. Context is everything else.</p>
        <div className="analogy-container">
          <div className="analogy-box">
            <h4>Prompt Engineering</h4>
            <p>Asking a smart person a good question</p>
          </div>
          <div className="analogy-arrow">&rarr;</div>
          <div className="analogy-box" style={{ borderColor: 'rgba(108, 99, 255, 0.3)' }}>
            <h4>Context Engineering</h4>
            <p>Hiring the right person, giving them your files, putting them on the right team, <em>then</em> asking</p>
          </div>
        </div>
      </div>

      {/* Slide 20: Context Engineering - What is context */}
      <div className={`slide ${current === 20 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 02</div>
        <h2>What Is Context?</h2>
        <p style={{ marginBottom: '0.5rem' }}>Everything the model sees beyond your prompt</p>
        <div className="context-what-grid">
          <div className="context-what-card">
            <h4>System Instructions</h4>
            <p>Rules, persona, constraints that shape every response</p>
          </div>
          <div className="context-what-card">
            <h4>Reference Docs</h4>
            <p>Style guides, codebases, prior work, domain knowledge</p>
          </div>
          <div className="context-what-card">
            <h4>Examples</h4>
            <p>Input/output pairs that demonstrate what "good" looks like</p>
          </div>
          <div className="context-what-card">
            <h4>Retrieved Knowledge</h4>
            <p>RAG — pulling the right docs at the right time automatically</p>
          </div>
          <div className="context-what-card">
            <h4>Tool Definitions</h4>
            <p>What tools the model can call — search, code, APIs, databases</p>
          </div>
          <div className="context-what-card">
            <h4>Conversation History</h4>
            <p>Prior messages that build shared understanding over time</p>
          </div>
        </div>
      </div>

      {/* Slide 21: Context Engineering - Why it matters */}
      <div className={`slide ${current === 21 ? 'active' : ''}`}>
        <img src="/images/skill-gap.png" alt="Skill gap illustration" className="sketch-image-wide" style={{ opacity: 0.5 }} />
        <div className="level-badge">LEVEL 02</div>
        <h2>The Real Skill Gap</h2>
        <ul className="detail-list">
          <li><strong>Most people type into a chat box.</strong> The people getting 10x results are engineering the entire context around the model.</li>
          <li><strong>Give it your codebase,</strong> not just a description of the bug. Attach the style guide so it writes in your voice.</li>
          <li><strong>Feed it your notes and prior drafts</strong> instead of starting from zero. The model builds on what you give it.</li>
          <li><strong>Same model, wildly different output</strong> — the difference is always what context you provided.</li>
        </ul>
      </div>

      {/* Slide 22: Agents - Overview */}
      <div className={`slide ${current === 22 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 03</div>
        <h2>Agents</h2>
        <p>AI that doesn't just answer — it <strong>does</strong>.</p>
        <p style={{ fontSize: '1.1rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          An LLM in a loop with access to tools. Browse, code, search, execute, iterate.
        </p>
        <ul className="agents-list">
          <li>
            <span className="agent-icon">{'</>'}</span>
            <div className="agent-text">
              <strong>Coding Agent</strong>
              <span>Reads your repo, finds the bug, writes the fix, runs the tests</span>
            </div>
          </li>
          <li>
            <span className="agent-icon">{'?'}</span>
            <div className="agent-text">
              <strong>Research Agent</strong>
              <span>Searches papers, synthesizes findings, produces structured reports</span>
            </div>
          </li>
          <li>
            <span className="agent-icon">{'~'}</span>
            <div className="agent-text">
              <strong>Data Agent</strong>
              <span>Queries databases, builds visualizations, explains results</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Slide 23: Agents - How they work */}
      <div className={`slide ${current === 23 ? 'active' : ''}`}>
        <div className="closing-slide-bg" style={{ backgroundImage: 'url(/images/agents-loop.png)' }} />
        <div className="level-badge" style={{ position: 'relative', zIndex: 1 }}>LEVEL 03</div>
        <h2 style={{ position: 'relative', zIndex: 1 }}>How Agents Work</h2>
        <p style={{ marginBottom: '0.5rem' }}>A loop: think, act, observe, repeat</p>
        <div className="agent-flow">
          <div className="agent-flow-step">
            <h4>Receive Task</h4>
            <p>"Fix the login bug"</p>
          </div>
          <span className="agent-flow-arrow">&rarr;</span>
          <div className="agent-flow-step">
            <h4>Think</h4>
            <p>Plan approach, identify files</p>
          </div>
          <span className="agent-flow-arrow">&rarr;</span>
          <div className="agent-flow-step">
            <h4>Act</h4>
            <p>Read code, search, edit</p>
          </div>
          <span className="agent-flow-arrow">&rarr;</span>
          <div className="agent-flow-step">
            <h4>Observe</h4>
            <p>Check results, run tests</p>
          </div>
          <span className="agent-flow-arrow">&rarr;</span>
          <div className="agent-flow-step">
            <h4>Iterate</h4>
            <p>Fix errors, refine until done</p>
          </div>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '1.15rem' }}>
          This shifts AI from <strong style={{ color: 'var(--text-primary)' }}>"generate text for me"</strong> to <strong style={{ color: 'var(--accent)' }}>"complete this task for me."</strong>
        </p>
      </div>

      {/* Slide 24: Agents - The frontier */}
      <div className={`slide ${current === 24 ? 'active' : ''}`}>
        <div className="level-badge">LEVEL 03</div>
        <h2>The Frontier</h2>
        <ul className="detail-list">
          <li><strong>Agents are early and rough right now</strong> — which means it's exactly the right time to learn them. Same pattern from Act II.</li>
          <li><strong>Multi-agent systems</strong> — teams of specialized agents collaborating: one researches, one codes, one reviews.</li>
          <li><strong>Tool use is expanding fast</strong> — agents that can browse the web, control your computer, manage deployments, interact with any API.</li>
          <li><strong>The people building with agents today</strong> will define the workflows everyone uses tomorrow.</li>
        </ul>
        <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: 'var(--accent)' }}>
          Messy + early = opportunity. Same pattern.
        </p>
      </div>

      {/* Slide 25: Close */}
      <div className={`slide ${current === 25 ? 'active' : ''}`}>
        <div className="closing-slide-bg" style={{ backgroundImage: 'url(/images/closing.png)' }} />
        <div className="closing-text">
          Ada imagined machines could think.<br />
          Turing proved they could.<br />
          We built them, connected them,<br />
          fed them data, taught them to learn,<br />
          gave them language.<br /><br />
          <span className="highlight-line">Every generation gets one technology<br />that changes everything.</span><br /><br />
          <span className="accent-line">This is yours.</span><br /><br />
          Be the person who goes deep.
        </div>
      </div>
    </div>
  )
}

export default App
