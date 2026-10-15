import blueprintLogo from "./assets/blueprint-webstudio-logo.png";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Award, BadgeCheck, CheckCircle2, Clock, HandCoins, Heart, MapPin, Menu, Minus, Phone, Plus, X } from "lucide-react";
import SITE from "./site.js";

// -----------------------------------------------------------------------------
// All business content lives in src/site.js. This file only lays it out.
// -----------------------------------------------------------------------------

const { COMPANY, PHONE, PHONE_DISPLAY, EMAIL, ADDRESS, CITY, MAPS_QUERY, FOUNDED, FALLBACK_RATING } = SITE;
const GOOGLE_REVIEWS_URL = SITE.GOOGLE_PLACE_ID
  ? `https://search.google.com/local/reviews?placeid=${SITE.GOOGLE_PLACE_ID}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const GOOGLE_WRITE_REVIEW_URL = SITE.GOOGLE_PLACE_ID ? `https://search.google.com/local/writereview?placeid=${SITE.GOOGLE_PLACE_ID}` : null;

// Public contact details for the studio — edit here, no environment variables required.
const STUDIO_PHONE = "+17205156647";
const STUDIO_EMAIL = "hello@blueprintwebstudio.com";
const STUDIO_WEBSITE = "https://blueprintwebstudio.com";
const STUDIO_SOURCE = `${SITE.ABBR}.blueprintwebstudio.com`;

const END_DATE = import.meta.env.VITE_CONCEPT_END_DATE || SITE.END_DATE;

function Title({ parts }) {
  const [plain, em] = parts;
  return <>{plain}{em && <em>{em}</em>}</>;
}

// -----------------------------------------------------------------------------
// CONCEPT COUNTDOWN + INTEREST FORM (Blueprint WebStudio)
// -----------------------------------------------------------------------------

function getRemaining() {
  const ms = Math.max(0, new Date(END_DATE).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    expired: ms === 0,
  };
}

function ConceptInterestModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "", message: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const previousFocus = document.activeElement;
    modalRef.current?.focus();
    const handleEscape = (event) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  function update(field, value) { setForm((prev) => ({ ...prev, [field]: value })); }

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    if (form.website) { setStatus("sent"); return; }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/demo-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prospect: COMPANY,
          source: STUDIO_SOURCE,
          page: window.location.href,
          action: "Partner Program Interest",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          budget: form.budget,
          message: form.message.trim(),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send your message.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Please try again.");
    }
  }

  return (
    <div className="interest-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="interest-modal" role="dialog" aria-modal="true" aria-labelledby="interest-title" ref={modalRef} tabIndex={-1}>
        <button type="button" className="interest-close" onClick={onClose} aria-label="Close interest form"><X size={24} /></button>
        <span className="interest-kicker">BLUEPRINT WEBSTUDIO PARTNER PROGRAM</span>
        {status === "sent" ? (
          <div className="interest-success">
            <CheckCircle2 size={44} />
            <h2 id="interest-title">Thank you for your interest.</h2>
            <p>Your message has been sent to Blueprint WebStudio. We'll follow up using the contact information you provided.</p>
            <button type="button" className="interest-submit" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 id="interest-title">Interested in this redesign?</h2>
            <p className="interest-intro">Send a quick note and Blueprint WebStudio will follow up about launching, customizing, or taking over the site.</p>
            <form onSubmit={submit} className="interest-form">
              <label>Name <span>*</span><input value={form.name} onChange={(e) => update("name", e.target.value)} required maxLength={120} autoComplete="name" /></label>
              <label>Email <span>*</span><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required maxLength={254} autoComplete="email" /></label>
              <label>Phone<input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={40} autoComplete="tel" /></label>
              <label>Budget <span>*</span>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} required>
                  <option value="">Select a range...</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000–$2,500">$1,000–$2,500</option>
                  <option value="$2,500–$5,000">$2,500–$5,000</option>
                  <option value="$5,000–$10,000">$5,000–$10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label>Message <small>(optional)</small><textarea value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={3000} rows={4} placeholder="Questions, ideas, or anything you'd like us to know..." /></label>
              <div className="interest-honeypot" aria-hidden="true"><label>Website<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
              {error && <p className="interest-error" role="alert">{error}</p>}
              <button type="submit" className="interest-submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send My Interest"}</button>
              <p className="interest-privacy">Your inquiry goes directly to Blueprint WebStudio, not {COMPANY}.</p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

function ConceptWidget() {
  const [remaining, setRemaining] = useState(getRemaining);
  const [collapsed, setCollapsed] = useState(() => typeof window !== "undefined" && window.innerWidth < 640);
  const [showForm, setShowForm] = useState(false);
  const closeForm = useCallback(() => setShowForm(false), []);

  useEffect(() => {
    const interval = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <aside className={`concept-widget${collapsed ? " is-collapsed" : ""}`} aria-label="Independent website concept preview">
        <div className="concept-widget-head">
          <span>CONCEPT REVIEW · NOT FOR OFFICIAL USE</span>
          <button type="button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand concept preview" : "Collapse concept preview"} aria-expanded={!collapsed}>
            {collapsed ? <Plus size={20} /> : <Minus size={20} />}
          </button>
        </div>
        {!collapsed && (
          <div className="concept-widget-body">
            <h2>Private Client Preview</h2>
            <span className="concept-widget-label">PARTNER PROGRAM ELIGIBILITY</span>
            <p>Reserved for review</p>
            <div className="concept-widget-timer" aria-label="Time remaining for concept review">
              {remaining.expired ? <strong>Review window ended</strong> : (
                [[remaining.days, "Days"], [remaining.hours, "Hours"], [remaining.minutes, "Minutes"]].map(([value, unit]) => (
                  <span key={unit}><strong>{String(value).padStart(2, "0")}</strong> {unit}</span>
                ))
              )}
            </div>
            <button type="button" className="concept-widget-cta" onClick={() => setShowForm(true)}>I'm Interested <ArrowUpRight size={18} /></button>
            <div className="concept-widget-links">
              {STUDIO_PHONE && <a href={`tel:${STUDIO_PHONE}`}>Call</a>}
              <a href={`mailto:${STUDIO_EMAIL}`}>Email</a>
              <a href={STUDIO_WEBSITE} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        )}
        <div className="concept-widget-footer">
          <a className="concept-widget-brand" href={STUDIO_WEBSITE} target="_blank" rel="noopener noreferrer" aria-label="Visit Blueprint WebStudio"><span className="studio-logo-mask" style={{ WebkitMaskImage: `url(${blueprintLogo})`, maskImage: `url(${blueprintLogo})` }} aria-hidden="true" /><span>Blueprint WebStudio</span></a>
          <span>Independent concept</span>
        </div>
      </aside>
      {showForm && <ConceptInterestModal onClose={closeForm} />}
    </>
  );
}


// -----------------------------------------------------------------------------
// SIGNATURE MOTIFS: the ring from the Canyon logo, used as a pressure gauge, and
// a green "pipe run" with fittings that ties the sections together.
// -----------------------------------------------------------------------------

function Ring({ value = 1, size = 132, children, label }) {
  // The open "C" ring of the Canyon logo, filled like a gauge.
  const r = 52;
  const c = 2 * Math.PI * r;
  const sweep = 0.8; // the logo ring is open at the bottom-left
  return (
    <div className="ring" style={{ width: size, height: size }} role={label ? "img" : undefined} aria-label={label}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r={r} className="ring-track" strokeDasharray={`${c * sweep} ${c}`} transform="rotate(126 60 60)" />
        <circle cx="60" cy="60" r={r} className="ring-fill" strokeDasharray={`${c * sweep * value} ${c}`} transform="rotate(126 60 60)" />
        <circle cx="60" cy="60" r="20" className="ring-dot" />
      </svg>
      {children && <div className="ring-center">{children}</div>}
    </div>
  );
}

function PipeRun({ label }) {
  return (
    <div className="pipe-run" aria-hidden="true">
      <div className="container pipe-run-inner">
        <span className="pipe" />
        <span className="flange" />
        {label && <span className="pipe-label">{label}</span>}
        <span className="flange" />
        <span className="pipe" />
        <span className="valve" />
        <span className="pipe short" />
      </div>
    </div>
  );
}

function Eyebrow({ children, light }) {
  return <span className={`eyebrow${light ? " light" : ""}`}><i aria-hidden="true" />{children}</span>;
}

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------

function Brand({ onClick }) {
  return (
    <a className="brand brand-logo" href="#home" onClick={onClick} aria-label={`${COMPANY} home`}>
      <img src={SITE.BRAND.logo} alt={SITE.BRAND.logoAlt} width="373" height="68" />
    </a>
  );
}

function navItems() {
  return [
    ["#services", "Services"],
    ["#offers", "Coupons"],
    ["#reviews", "Reviews"],
    ["#about", "About"],
    ["#plan", "Membership"],
    ["#visit", "Service Area"],
  ];
}

function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);
  return (
    <div className="sticky-header">
      <div className="announce">
        <div className="container announce-inner">
          <span className="announce-left"><b>{SITE.ANNOUNCE}</b><span className="announce-sep" aria-hidden="true">/</span><span className="announce-hours"><Clock size={13} /> {SITE.HOURS_SHORT}</span></span>
          <div className="announce-contact">
            <div className="announce-social">
              {SITE.SOCIAL_LINKS.filter(({ url, top }) => url && top).map(({ name, url, icon: Icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY} on ${name}`} title={name}><Icon size={14} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container nav">
          <Brand onClick={closeMenu} />
          <nav className={menu ? "links open" : "links"} aria-label="Main navigation">
            {navItems().map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="links-cta" href="#book" onClick={closeMenu}>{SITE.BOOK.nav}</a>
          </nav>
          <a className="nav-phone" href={`tel:${PHONE}`}><small>CALL NOW</small>{PHONE_DISPLAY}</a>
          <a className="nav-cta" href="#book">{SITE.BOOK.nav} <ArrowUpRight size={17} /></a>
          <a className="mobile-call" href={`tel:${PHONE}`} aria-label={`Call ${PHONE_DISPLAY}`}><Phone size={20} /></a>
          <button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu((current) => !current)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </div>
  );
}

// -----------------------------------------------------------------------------
// PAGE SECTIONS
// -----------------------------------------------------------------------------

function Hero({ rating }) {
  const { HERO } = SITE;
  return (
    <section className="hero">
      <img className="hero-bg" src={HERO.photo.src} alt={HERO.photo.alt} width="1600" height="843" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Eyebrow light>{HERO.eyebrow}</Eyebrow>
          <h1><Title parts={HERO.title} /></h1>
          <p>{HERO.text}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#book">{HERO.cta} <ArrowUpRight size={19} /></a>
            <a className="btn ghost" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
          </div>
        </div>
        {rating && (
          <a className="hero-gauge" href={rating.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label={`Rated ${rating.rating.toFixed(1)} out of 5 from ${rating.userRatingCount} Google reviews`}>
            <Ring value={rating.rating / 5} size={118}><strong>{rating.rating.toFixed(1)}</strong></Ring>
            <span><span className="stars" aria-hidden="true">★★★★★</span><b>{rating.userRatingCount.toLocaleString()} Google reviews</b><small>Read them on Google ↗</small></span>
          </a>
        )}
      </div>
    </section>
  );
}

function Promises() {
  return (
    <div className="promises">
      <div className="container promises-grid">
        {SITE.PROMISES.map(({ icon: Icon, title, text }, i) => (
          <article key={title}>
            <span className="promise-num">0{i + 1}</span>
            <Icon size={28} strokeWidth={1.6} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const { SERVICES } = SITE;
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow>{SERVICES.eyebrow}</Eyebrow>
            <h2><Title parts={SERVICES.title} /></h2>
          </div>
          <p>{SERVICES.text}</p>
        </div>
        <div className="svc-grid">
          {SERVICES.items.map(({ title, desc, icon: Icon, photo, alt, list }) => (
            <article className={`svc${photo ? " has-photo" : ""}`} key={title}>
              {photo && <div className="svc-photo"><img src={photo} alt={alt} loading="lazy" /></div>}
              <div className="svc-body">
                <span className="svc-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href="#book" data-service={title}>{SERVICES.cta} <ArrowRight size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="offers-head">
          <Eyebrow light>COUPONS</Eyebrow>
          <h2>Save on your <em>next call.</em></h2>
        </div>
        <div className="offers-grid">
          {SITE.OFFERS.map(({ big, text, fine }) => (
            <a className="ticket" href="#book" key={big}>
              <strong>{big}</strong>
              <span>{text}</span>
              {fine && <small>{fine}</small>}
              <em>Claim it <ArrowRight size={14} /></em>
            </a>
          ))}
        </div>
        <p className="offers-fine">{SITE.OFFERS_FINE}</p>
      </div>
    </section>
  );
}

function Reviews({ data, rating }) {
  const live = data?.reviews?.filter((review) => review.text?.text || review.originalText?.text) || [];
  const { REVIEWS, AWARDS } = SITE;
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="reviews-top">
          <div>
            <Eyebrow>REVIEWS & RECOGNITION</Eyebrow>
            <h2><Title parts={REVIEWS.title} /></h2>
            <p>{REVIEWS.text}</p>
          </div>
          <div className="reviews-panel">
            {rating && (
              <div className="reviews-score">
                <Ring value={rating.rating / 5} size={104}><strong>{rating.rating.toFixed(1)}</strong></Ring>
                <span><span className="google-wordmark">Google</span><span className="stars" aria-hidden="true">★★★★★</span><b>{rating.userRatingCount.toLocaleString()} reviews</b></span>
              </div>
            )}
            <div className="reviews-actions">
              <a className="btn dark" href={rating?.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Read reviews on Google <ArrowUpRight size={17} /></a>
              {GOOGLE_WRITE_REVIEW_URL && <a className="btn outline" href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Leave a review</a>}
            </div>
          </div>
        </div>

        <div className="awards" aria-label="Awards">
          {AWARDS.map(({ org, title, year }) => (
            <div className="award" key={year}>
              <span className="award-medal" aria-hidden="true"><Award size={26} strokeWidth={1.6} /></span>
              <span><small>{org}</small><b>{title}</b></span>
              <strong>{year}</strong>
            </div>
          ))}
        </div>

        {live.length > 0 ? (
          <>
            <div className="quote-wall">
              {live.slice(0, 3).map((review, i) => (
                <article className="quote" key={`${review.publishTime || i}-${i}`}>
                  <div className="stars" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(Math.max(0, Math.min(5, Math.round(review.rating || 0))))}</div>
                  <blockquote>{review.text?.text || review.originalText?.text}</blockquote>
                  <footer><b>{review.authorAttribution?.displayName || "Google reviewer"}</b><small>{review.relativePublishTimeDescription}</small></footer>
                </article>
              ))}
            </div>
            <p className="reviews-attribution">Reviews provided by Google. A limited selection is displayed.</p>
          </>
        ) : (
          <div className="quote-wall">
            {REVIEWS.quotes.map(({ text, name, source }) => (
              <article className="quote" key={name}>
                <blockquote>{text}</blockquote>
                <footer><b>{name}</b><small>{source}, from the current website</small></footer>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  const { ABOUT, WHY } = SITE;
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-media">
          <figure className="about-main"><img src="/photos/tech-at-door.webp" alt="Canyon technician in a branded hoodie greeted at the front door by a homeowner" /></figure>
          <figure className="about-truck"><img src="/photos/truck.webp" alt="White Canyon Plumbing & Heating service van with green and black graphics" /></figure>
          <div className="about-badge"><strong>{SITE.YEARS}</strong><span>years in<br />Boulder</span></div>
        </div>
        <div className="about-copy">
          <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          <h2><Title parts={ABOUT.title} /></h2>
          {ABOUT.text.map((paragraph) => <p className="about-lead" key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <div className="why-grid">
            {WHY.map(({ icon: Icon, title, text }) => (
              <div key={title}><Icon size={22} strokeWidth={1.7} /><span><strong>{title}</strong>{text}</span></div>
            ))}
          </div>
          <div className="about-meta">
            {ABOUT.credentials.map(({ title, desc }) => <span key={title}><BadgeCheck size={16} /> <b>{title}</b> {desc}</span>)}
          </div>
          <p className="about-community"><Heart size={16} /> {ABOUT.community}</p>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { TEAM } = SITE;
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-head">
          <div>
            <Eyebrow light>{TEAM.eyebrow}</Eyebrow>
            <h2><Title parts={TEAM.title} /></h2>
          </div>
          <p>Personal attention starts with knowing who's coming. These are the faces behind the green logo.</p>
        </div>
        <div className="team-grid">
          {TEAM.members.map(({ name, role, photo }) => (
            <figure key={name}>
              <img src={photo} alt={`${name}, ${role}`} />
              <figcaption><b>{name}</b><small>{role}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plan() {
  const { PLAN, FINANCING } = SITE;
  return (
    <section className="section plan" id="plan">
      <div className="container plan-inner">
        <div className="plan-card">
          <Eyebrow>{PLAN.eyebrow}</Eyebrow>
          <div className="plan-title">
            <h2>{PLAN.name}</h2>
            <p className="plan-price"><strong>{PLAN.price}</strong>{PLAN.per}</p>
          </div>
          <p className="plan-text">{PLAN.text}</p>
          <ul>{PLAN.items.map((item) => <li key={item}><CheckCircle2 size={17} /> {item}</li>)}</ul>
          <p className="plan-note">{PLAN.note}</p>
          <a className="btn primary" href="#book" data-service="VIP Protection Plan">Join the plan <ArrowUpRight size={18} /></a>
        </div>
        <div className="finance-card">
          <span className="finance-icon"><HandCoins size={26} strokeWidth={1.6} /></span>
          <h3>{FINANCING.title}</h3>
          <p>{FINANCING.text}</p>
          <ul>{FINANCING.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <small>{FINANCING.fine}</small>
        </div>
      </div>
    </section>
  );
}

function RequestForm() {
  const { BOOK } = SITE;
  const blank = Object.fromEntries([...BOOK.fields.flat().map((field) => [field.name, ""]), ["website", ""]]);
  const [form, setForm] = useState(blank);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pick = (event) => {
      const link = event.target.closest?.("a[data-service]");
      if (link) setForm((prev) => ({ ...prev, service: link.dataset.service }));
    };
    document.addEventListener("click", pick);
    return () => document.removeEventListener("click", pick);
  }, []);

  function update(field, value) { setForm((prev) => ({ ...prev, [field]: value })); }

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || "Something went wrong.");
      setStatus(result.demo ? "demo" : "sent");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  if (status === "sent" || status === "demo") {
    return (
      <div className="book-form book-done">
        <CheckCircle2 size={44} />
        <h3>{status === "demo" ? `This is where ${SITE.BRAND.name} gets your request.` : "Request received."}</h3>
        <p>
          {status === "demo"
            ? `In this concept preview, requests aren't sent anywhere. On the live site they'd land in the ${SITE.NOUN} inbox with everything ${SITE.BRAND.name} needs to call back.`
            : `Thanks, ${form.name.split(" ")[0]}. We'll be in touch to confirm.`}
        </p>
        <button type="button" className="btn dark" onClick={() => setStatus("idle")}>Back to the form</button>
      </div>
    );
  }

  const renderField = (field) => {
    const common = { value: form[field.name], onChange: (e) => update(field.name, e.target.value), required: field.required };
    let control;
    if (field.type === "select") {
      control = (
        <select {...common}>
          <option value="">{field.placeholder || "Choose…"}</option>
          {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      );
    } else if (field.type === "textarea") {
      control = <textarea rows={4} maxLength={3000} placeholder={field.placeholder} {...common} />;
    } else {
      control = <input type={field.type || "text"} maxLength={field.type === "email" ? 254 : 160} placeholder={field.placeholder} autoComplete={field.autoComplete} {...common} />;
    }
    return <label key={field.name}>{field.label}{field.required ? " *" : ""}{control}</label>;
  };

  return (
    <form className="book-form" onSubmit={submit}>
      {BOOK.fields.map((row, index) => (Array.isArray(row) ? <div className="book-row" key={index}>{row.map(renderField)}</div> : renderField(row)))}
      <div className="interest-honeypot" aria-hidden="true"><label>Website<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
      {message && <p className="form-error" role="alert">{message}</p>}
      <button type="submit" className="btn primary full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : BOOK.submit} <ArrowUpRight size={18} /></button>
      <p className="form-note">{BOOK.note} <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</p>
    </form>
  );
}

function Book() {
  const { BOOK } = SITE;
  return (
    <section className="section book" id="book">
      <div className="book-ring" aria-hidden="true"><Ring value={1} size={560} /></div>
      <div className="container book-inner">
        <div>
          <Eyebrow light>{BOOK.eyebrow}</Eyebrow>
          <h2><Title parts={BOOK.title} /></h2>
          <p>{BOOK.text}</p>
          <ul className="book-points">
            {BOOK.points.map((point) => <li key={point}><CheckCircle2 size={18} /> {point}</li>)}
          </ul>
          <a className="book-call" href={`tel:${PHONE}`}><small>OR CALL THE OFFICE</small>{PHONE_DISPLAY}</a>
        </div>
        <RequestForm />
      </div>
    </section>
  );
}

function Visit() {
  const { VISIT, HOURS } = SITE;
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=11&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;
  return (
    <section className="section visit" id="visit">
      <div className="container visit-inner">
        <div className="visit-info">
          <Eyebrow>{VISIT.eyebrow}</Eyebrow>
          <h2><Title parts={VISIT.title} /></h2>
          <ul className="towns">{VISIT.towns.map((town) => <li key={town}><MapPin size={13} /> {town}</li>)}</ul>
          <p className="areas">{VISIT.areas}</p>
          <div className="visit-blocks">
            <div>
              <MapPin size={20} />
              <span><small>OFFICE</small>{ADDRESS}<br />{CITY}</span>
            </div>
            <div>
              <Phone size={20} />
              <span><small>CONTACT</small><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
            </div>
            <div>
              <Clock size={20} />
              <span><small>HOURS</small>
                {HOURS.map(([day, hours]) => <span className="hours-row" key={day}><b>{day}</b>{hours}</span>)}
              </span>
            </div>
          </div>
          <a className="btn dark" href={directions} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={17} /></a>
        </div>
        <div className="visit-map">
          <iframe title={`Map to ${COMPANY}`} src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand />
          <p>{SITE.FOOTER_BLURB}</p>
          <p className="footer-license">License PC.0001573 · MP.00600504</p>
          <div className="footer-social">
            {SITE.SOCIAL_LINKS.filter(({ url }) => url).map(({ name, url, icon: Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon size={16} /></a>
            ))}
          </div>
        </div>
        <div>
          <b>Services</b>
          {SITE.SERVICES.items.slice(0, 6).map(({ title }) => <a key={title} href="#services">{title}</a>)}
        </div>
        <div>
          <b>Company</b>
          {navItems().slice(1).map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a href="#team">Meet the Crew</a>
          <a href="#book">{SITE.BOOK.nav}</a>
        </div>
        <div>
          <b>Contact</b>
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>{ADDRESS}</span>
          <span>{CITY}</span>
          <span>{SITE.HOURS_SHORT}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent design concept, not an official company website.</span>
        <a className="footer-studio-brand" href={STUDIO_WEBSITE} target="_blank" rel="noopener noreferrer" aria-label="Website concept by Blueprint WebStudio">
          <span>Concept redesign by</span>
          <span className="studio-logo-mask" style={{ WebkitMaskImage: `url(${blueprintLogo})`, maskImage: `url(${blueprintLogo})` }} aria-hidden="true" />
          <strong>Blueprint WebStudio</strong>
        </a>
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------------
// APP — PAGE ORDER
// -----------------------------------------------------------------------------

export default function App() {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => { if (data) setReviewData(data); })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const live = typeof reviewData?.rating === "number" && typeof reviewData?.userRatingCount === "number";
  const rating = live
    ? { rating: reviewData.rating, userRatingCount: reviewData.userRatingCount, googleMapsUri: reviewData.googleMapsUri || null }
    : FALLBACK_RATING
      ? { rating: FALLBACK_RATING.rating, userRatingCount: FALLBACK_RATING.userRatingCount, googleMapsUri: null }
      : null;

  return (
    <>
      <ConceptWidget />
      <SiteHeader />
      <main id="home">
        <Hero rating={rating} />
        <Promises />
        <Services />
        <Offers />
        <Reviews data={reviewData} rating={rating} />
        <PipeRun label="EST. 2000" />
        <About />
        <Team />
        <Plan />
        <Book />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
