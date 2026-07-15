# William Inline Skating Portfolio Platform

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

An elegant, single-page professional sports portfolio application built for **William Inline Skating** academy in Chennai. The application presents an energetic "Sky Forest" glassmorphic interface engineered to showcase training matrices, localized schedules, tiered tuition models, and student tracks.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture Notes](#architecture-notes)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Core Functionality Explained](#core-functionality-explained)
- [Screenshots / Demo](#screenshots--demo)
- [Known Limitations](#known-limitations)
- [Roadmap & Future Enhancements](#roadmap--future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🔍 Overview
William Inline Skating is a performance-oriented sports portfolio platform built to streamline student onboarding and venue orientation for a boutique skating academy. By replacing static flyers with a reactive unified information network, it resolves accessibility friction for active parent groups browsing through dynamic weekday and weekend schedules across Chennai. The platform scales cleanly down to standard $360\text{px} - 420\text{px}$ mobile screens to deliver immediate logistical utility.

---

## 🚀 Features
*   **Sky Forest Glassmorphic UI Engine:** Blends deep nature forest greens (`#2D6A4F`) with structural sky blue gradients over an ambient backdrop featuring translucent glass panels with real-time blur layers (`blur(12px)`).
*   **Dual-State Theme Sync Configuration:** Persistent, smooth light-to-dark transition system driven by React state and configured using native CSS structural variables using the custom `html[data-theme]` mapping rules.
*   **Unified Multi-Location Switcher Hub:** Single, embedded iframe canvas engine matching custom parameters that overlays all five distinct geographic training grounds into a compact, tab-controlled switch center.
*   **Tactical Training Grid System:** Fully responsive scheduling tracks detailing age limits, explicit times, locations, and targets mapped into layout containers that compress into clear accordions on mobile displays.
*   **Centered Onboarding Control Form:** Interactive, localized intake portal allowing visitors to review registration inputs, select regional venues, and trigger simulated roster onboarding data logs.
*   **Adaptive Desktop Layout Dock:** Fixed, persistent structural utility sidebar on screens `> 992px` offering quick access metrics, instant WhatsApp click-to-chat links, and tap targets exceeding `44px` for mobile compliance.

---

## 🛠️ Tech Stack

### Frontend
*   **React 18:** Functional rendering components, hooks engine, state monitoring, and lifecycle tracking.

### Styling
*   **Bootstrap 5 (Grid Utilities Only):** Container rules, responsive flex matching wrappers (`row`, `col-*`), utilities, and standalone modal triggers.
*   **Bootstrap Icons:** Performance SVG vector iconography configurations.
*   **Vanilla CSS (Custom Level-3 Properties):** Theming parameters, backdrop-filter calculations, custom `clamp()` fluid font layout metrics, and component rules.

### Build Tools & Configs
*   **Vite:** Instant Hot Module Replacement (HMR) bundler engine.
*   **Node Package Manager (NPM):** Dependency framework execution.

---

## 📂 Project Structure

```text
william-inline-skating/
├── public/
│   └── images/               # Physical local asset repository (.png formats)
│       ├── logo 2.png        # Academy brand emblem / Browser favicon resource
│       ├── coach.png         # Leadership cadre photo
│       ├── summer camp.png   # Seasonal outdoor camp photo
│       ├── team.png          # Circuit trainers image group
│       ├── 4.png             # Student track action photo A
│       ├── 5.png             # Student track action photo B
│       └── 6.png             # Student track action photo C
├── src/
│   ├── components/           # Presentation layout components
│   │   ├── About.jsx         # Core instruction values module
│   │   ├── Contact.jsx       # Centered trial intake register form
│   │   ├── Footer.jsx        # Branding recap and quick navigation indexes
│   │   ├── Gallery.jsx       # Custom photo gallery track matching local assets
│   │   ├── Header.jsx        # Sticky navigation header with responsive hamburger collapse
│   │   ├── Hero.jsx          # Kinetic tagline entry with custom inline vector svg illustration
│   │   ├── LocationMap.jsx   # Tabbed switcher routing 5 local maps within one full-width container
│   │   ├── Pricing.jsx       # Tiered subscription tuition matrix card rows
│   │   ├── Schedule.jsx      # Timetable panel stack collapsing into mobile accordions
│   │   └── Sidebar.jsx       # Quick actions floating side drawer for desktop layout viewports
│   ├── App.jsx               # Central tree coordinator and layout shell container
│   ├── index.css             # Main theme configuration variables, clamp styles, animations
│   └── main.jsx              # React execution root mount point and dependency import chain
├── package.json              # System configuration and dependency declarations
└── vite.config.js            # Vite compiler adjustments