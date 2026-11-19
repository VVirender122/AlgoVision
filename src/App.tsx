import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <a className="brand" href="/">
          <span className="brand-mark">A</span>
          <span>AlgoVision</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#learn">Learn</a>
          <a href="#algorithms">Algorithms</a>
          <a href="#about">About</a>
        </nav>

        <button className="theme-button" type="button" aria-label="Theme">
          ◐
        </button>
      </header>

      <main>
        <section className="hero-section" id="learn">
          <p className="eyebrow">UNDERSTAND. VISUALIZE. MASTER.</p>

          <h1>
            See how algorithms
            <br />
            <span>actually work.</span>
          </h1>

          <p className="hero-description">
            Explore data structures and algorithms through interactive
            visualizations, step-by-step execution, and clear explanations.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#algorithms">
              Start learning <span aria-hidden="true">→</span>
            </a>
            <a className="secondary-button" href="#about">
              Explore the platform
            </a>
          </div>
        </section>

        <section className="perspectives" id="about">
          <div className="section-heading">
            <p className="eyebrow">THREE PERSPECTIVES</p>
            <h2>More than an animation.</h2>
            <p>Understand algorithms from the inside out.</p>
          </div>

          <div className="perspective-grid">
            <article className="perspective-card">
              <span className="card-number">01</span>
              <h3>Visualize</h3>
              <p>Watch data change as an algorithm executes, one operation at a time.</p>
            </article>

            <article className="perspective-card">
              <span className="card-number">02</span>
              <h3>Inspect</h3>
              <p>Follow variables, operations, and execution flow at every step.</p>
            </article>

            <article className="perspective-card">
              <span className="card-number">03</span>
              <h3>Understand</h3>
              <p>Explore the reasoning, correctness, and complexity behind each algorithm.</p>
            </article>
          </div>
        </section>

        <section className="algorithms-section" id="algorithms">
          <p className="eyebrow">YOUR LEARNING JOURNEY</p>
          <h2>Explore algorithms</h2>
          <p>Our first interactive learning modules are coming next.</p>
        </section>
      </main>

      <footer className="app-footer">
        <span>AlgoVision</span>
        <span>Learn how algorithms think.</span>
      </footer>
    </div>
  )
}

export default App
