import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    name: "Aurora Desk Lamp",
    description: "Warm ambient light with a sculpted lattice shade.",
    detail: "Ships in 3 days",
  },
  {
    name: "Modular Desk Organizer",
    description: "Stackable trays for tools, pens, and small parts.",
    detail: "10+ color options",
  },
  {
    name: "Succulent Planter Set",
    description: "Low-profile pots with self-watering inserts.",
    detail: "Best seller",
  },
];

const steps = [
  {
    title: "Pick your model",
    copy: "Browse curated designs or upload your own file for a custom print.",
  },
  {
    title: "Choose materials",
    copy: "We stock PLA, PETG, and matte blends in vibrant colors.",
  },
  {
    title: "We print & ship",
    copy: "Every piece is finished by hand, packed safely, and shipped fast.",
  },
];

const App = () => {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">
          <span className="logo-dot" />
          FDM 3D Prints
        </div>
        <nav className="nav-links">
          <a href="#prints">Prints</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
          <button className="btn btn-secondary">Upload a file</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Next-day FDM production</p>
            <h1>Bring your ideas to life with crisp, custom 3D prints.</h1>
            <p className="lead">
              Premium filament, meticulous finishing, and rapid delivery for makers,
              studios, and small businesses.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Start a print</button>
              <button className="btn btn-outline">Explore catalog</button>
            </div>
            <div className="hero-stats">
              <div>
                <strong>48h</strong>
                <span>average turnaround</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>materials & colors</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>customer rating</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card__top">
              <span className="badge">Featured print</span>
              <h2>Skyline Desk Stand</h2>
              <p>Architectural design with built-in cable routing.</p>
            </div>
            <div className="hero-card__bottom">
              <div>
                <span className="label">Material</span>
                <span className="value">Matte PLA</span>
              </div>
              <div>
                <span className="label">Lead time</span>
                <span className="value">2 days</span>
              </div>
              <div>
                <span className="label">Price</span>
                <span className="value">From $28</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="prints">
          <div className="section-head">
            <h2>Popular prints this week</h2>
            <p>Curated, print-ready designs engineered for durability and style.</p>
          </div>
          <div className="grid">
            {products.map((product) => (
              <article className="card" key={product.name}>
                <div className="card-top">
                  <span className="chip">Made to order</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="card-footer">
                  <span>{product.detail}</span>
                  <button className="btn btn-link">Customize</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-head">
            <h2>From STL to doorstep in three steps</h2>
            <p>Precision printing plus hands-on QA so you receive flawless parts.</p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section review" id="reviews">
          <div>
            <h2>"The finish is unreal, and the team helped refine my model."</h2>
            <p>
              — Kelsey R., product designer. Joined 400+ creators using our print lab
              to prototype and ship small batches.
            </p>
          </div>
          <button className="btn btn-secondary">See all reviews</button>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>FDM 3D Prints Shop</strong>
          <p>Custom fabrication studio based in Portland, OR.</p>
        </div>
        <div className="footer-links">
          <a href="#prints">Catalog</a>
          <a href="#process">Materials</a>
          <a href="#reviews">Support</a>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
