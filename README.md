# 🪐 Shubham Singh — Creative Developer Portfolio

A premium, cinematic, 3D scrollytelling web experience built using **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. This website features smooth scroll-driven image sequence rendering on HTML5 Canvas, high-end glassmorphic UI components, and fluid micro-animations.

---

## 🌟 Key Features

*   **Cinematic 3D Scrollytelling:** Leverages an HTML5 Canvas to render a high-quality 144-frame pre-rendered 3D animation sequence synced seamlessly with the user's scroll progress.
*   **Parallax Text Overlays:** Smoothly transforms and fades section headlines in and out in relation to the scrolling sequence.
*   **Interactive Counter Animations:** Custom count-up elements triggered only when they enter the viewport using scroll sensing.
*   **Infinite Scrolling Tag Ribbon:** CSS-driven infinite loop ribbons highlighting roles, skills, and certifications.
*   **Premium Glassmorphic Aesthetics:** Tailored Tailwind layer utility classes featuring glass-pill wrappers, glass-card layouts, and liquid-glass watermarks with chromatic refraction on hover.
*   **Fully Responsive & Accessible:** Designed to scale beautifully across devices, with full support for the `prefers-reduced-motion` media query to ensure accessible transitions.

---

## 🛠️ Built With

| Technology / Tool | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** (App Router) | `14.2.35` | High-performance React framework for server/client rendering and optimized routing. |
| **React** | `18` | Core UI library. |
| **TypeScript** | `5` | Static typing for cleaner, self-documenting code. |
| **Framer Motion** | `12.38.0` | Orchestrates scroll-driven animation states, page transitions, and in-view triggers. |
| **Tailwind CSS** | `3.4.1` | Utility-first CSS framework for rapid UI modeling and styling. |
| **PostCSS** | `8` | Processing Tailwind CSS directives and styles. |
| **HTML5 Canvas API** | Native | High-performance pixel rendering of pre-rendered 3D image sequences. |

---

## 📂 Project Directory Structure

```text
Chetan-3d-website-main/
├── public/
│   └── sequence/              # Pre-rendered 144-frame 3D animation sequence
│       ├── frame_000_delay-0.055s.png
│       └── ...
├── src/
│   ├── app/
│   │   ├── fonts/             # Custom typography families
│   │   ├── globals.css        # Core style system with utility/custom classes
│   │   ├── layout.tsx         # Root document shell
│   │   └── page.tsx           # Home page wrapper
│   └── components/            # Reusable UI component modules
│       ├── AboutMeSplit.tsx   # Split story section with custom counter statistics
│       ├── Courses.tsx        # Technical stack overview cards
│       ├── Footer.tsx         # Detailed social contacts and email capture
│       ├── JourneyTimeline.tsx# Vertical timeline displaying milestones
│       ├── Navbar.tsx         # Floating responsive navigation bar
│       ├── Overlay.tsx        # Scroll-mapped hero message sequence
│       ├── Projects.tsx       # Interactive projects showcase grid
│       ├── ScrollyCanvas.tsx  # Dynamic 3D canvas renderer
│       ├── ServicesGrid.tsx   # Feature grid demonstrating skillsets
│       └── TagScroll.tsx      # Infinite horizontal scroll ticker ribbons
├── package.json               # Scripts & node dependencies
├── tsconfig.json              # TypeScript compilation setup
└── tailwind.config.ts         # Custom configurations & colors
```

---

## 💡 Technical Deep Dive

### 1. Canvas-Based 3D Scrollytelling (`ScrollyCanvas.tsx`)
Rather than loading a heavy webGL/3D engine that could compromise page loading speeds and run poorly on mobile devices, the landing experience utilizes **frame-sequence caching**:
*   **Preloading:** When the site loads, a React effect runs a parallelized promise loading sequence for all **144 frames** from `/sequence/` directly into the browser memory.
*   **Scroll Binding:** Framer Motion’s `useScroll` hooks onto the scroll progress of the hero section container (`500vh` height).
*   **Canvas Drawing:** `useTransform` maps the `0.0` - `1.0` scroll progress range to frame indexes `0` - `143`. During scroll, a canvas context `drawImage` callback renders the calculated frame on a high-performance `<canvas>` element using `requestAnimationFrame` for buttery-smooth visual updates.
*   **Responsive Scaling:** The drawing logic calculates aspect ratio rules (similar to CSS `object-fit: cover`) dynamically inside a window resize listener.

### 2. Viewport-Triggered Counters (`AboutMeSplit.tsx`)
Instead of starting counters immediately on page load, stats count up dynamically:
*   Uses `useInView` to detect when the statistical section enters the user's viewport.
*   Triggers Framer Motion's `animate` utility to interpolate a motion value from `0` to the target stat.
*   Uses `useTransform` to cast decimal interpolation outputs into standard integers (`Math.round`).

### 3. Glassmorphic CSS Engine (`globals.css`)
Custom utility classes are injected inside the Tailwind `@layer components` stylesheet:
*   `glass-pill`: Frosted-glass pill container with custom saturation, heavy blur, and subtle inner borders.
*   `glass-card`: Animated card elements featuring elevation offsets on hover.
*   `watermark-glass`: Text styling that applies a dual-directional drop-shadow hover transition mimicking chromatic aberration (refracting red/blue light).

---

## 🚀 Getting Started & Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Rajputshubham07/Chetan-3d-website-main.git
    cd Chetan-3d-website-main
    ```

2.  **Install Project Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The website will run on [http://localhost:3000](http://localhost:3000) (or the next available port).

4.  **Production Build:**
    To inspect production bundles or build the site:
    ```bash
    npm run build
    npm run start
    ```

---

## 👨‍💻 Author & Socials

Created and maintained by **Shubham Singh**.

*   **Email:** [shubhamsingh164573@gmail.com](mailto:shubhamsingh164573@gmail.com)
*   **LinkedIn:** [Shubham Singh](https://www.linkedin.com/in/shubham-singh-1a235a394/)
*   **GitHub:** [@Rajputshubham07](https://github.com/Rajputshubham07)
*   **Twitter/X:** [@Shubham18689860](https://x.com/Shubham18689860)
*   **Bluesky:** [@shubhamsingh0011.bsky.social](https://bsky.app/profile/shubhamsingh0011.bsky.social)
