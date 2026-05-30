# 🪐 Shubham Singh — Creative Developer Portfolio

A premium, cinematic, 3D scrollytelling web experience built using **Next.js 14**, **Framer Motion**, and **Tailwind CSS**. This website features smooth scroll-driven image sequence rendering on HTML5 Canvas, a simulated interactive IDE developer console, and high-fidelity glassmorphic UI components.

---

## 🌟 Key Features

*   **Cinematic 3D Scrollytelling:** Leverages a native HTML5 Canvas to render a high-quality 144-frame pre-rendered 3D animation sequence synced with scroll progress. Highly optimized WebP assets ensure smooth 60fps scrolling on mobile devices.
*   **Interactive IDE Tech Stack:** Redesigned "Tech Stack" section styled as a simulated code editor / developer console. Features an active file tree explorer, tab selectors, custom syntax-highlighted code panels, stack telemetry metrics, and associated portfolio project mappings.
*   **Advanced Project Modals:** Clicking a project launches a glassmorphic viewport modal featuring full focus wrappers, close-on-escape listeners, outside-click closers, and automated scroll locks on the HTML body.
*   **Parallax Text Overlays:** Smoothly transforms and fades section headlines in and out in relation to the scrolling sequence.
*   **Interactive Counter Animations:** Custom count-up elements triggered only when they enter the viewport using scroll sensing.
*   **Infinite Scrolling Tag Ribbon:** CSS-driven infinite loop ribbons highlighting roles, skills, and certifications.
*   **Secure Contact Integration:** A 3-column input capture form (Name, Email, Phone Number, and Message) connected securely to Web3Forms JSON endpoints, equipped with spam-filtering and user feedback cues.

---

## 🛠️ Built With

| Technology / Tool | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** (App Router) | `14.2.35` | High-performance React framework for server/client rendering and optimized routing. |
| **React** | `18` | Core UI library. |
| **TypeScript** | `5` | Static typing for cleaner, self-documenting code. |
| **Framer Motion** | `12.38.0` | Orchestrates scroll-driven animation states, page transitions, and in-view triggers. |
| **Tailwind CSS** | `3.4.1` | Utility-first CSS framework for rapid UI modeling and styling. |
| **HTML5 Canvas API** | Native | High-performance pixel rendering of pre-rendered 3D image sequences. |

---

## 📂 Project Directory Structure

```text
Chetan-3d-website-main/
├── public/
│   └── sequence/              # Optimized 144-frame 3D animation sequence (.webp format)
│       ├── frame_000.webp
│       └── ...
├── src/
│   ├── app/
│   │   ├── fonts/             # Custom typography families
│   │   ├── globals.css        # Core style system with utility/custom classes
│   │   ├── layout.tsx         # Root document shell
│   │   └── page.tsx           # Home page wrapper
│   └── components/            # Reusable UI component modules
│       ├── AboutMeSplit.tsx   # Split story section with custom counter statistics
│       ├── Courses.tsx        # Interactive IDE Tech Stack code console
│       ├── Footer.tsx         # Secure social contacts & Web3Forms capture
│       ├── JourneyTimeline.tsx# Vertical timeline displaying milestones
│       ├── Navbar.tsx         # Floating responsive navigation bar
│       ├── Overlay.tsx        # Scroll-mapped hero message sequence
│       ├── Projects.tsx       # Interactive projects showcase grid with modals
│       ├── ScrollyCanvas.tsx  # Dynamic 3D WebP canvas renderer
│       ├── ServicesGrid.tsx   # Feature grid demonstrating skillsets
│       └── TagScroll.tsx      # Infinite horizontal scroll ticker ribbons
├── package.json               # Scripts & node dependencies
├── tsconfig.json              # TypeScript configuration
└── tailwind.config.ts         # Custom theme configuration
```

---

## 💡 Technical Deep Dive

### 1. Canvas-Based 3D Scrollytelling (`ScrollyCanvas.tsx`)
Rather than loading a heavy webGL/3D engine that could compromise page loading speeds and run poorly on mobile devices, the landing experience utilizes **frame-sequence caching**:
*   **Asset Compression Optimization:** The initial PNG sequence was converted to highly compressed, scaled **WebP** frames. This reduced the total page asset footprint by **95.8% (from 108.7MB down to 4.5MB)**, resolving loading bottlenecks for mobile clients.
*   **Preloading:** When the site loads, a React effect runs a parallelized promise loading sequence for all **144 frames** from `/sequence/` directly into the browser memory.
*   **Scroll Binding:** Framer Motion’s `useScroll` hooks onto the scroll progress of the hero section container (`500vh` height).
*   **Canvas Drawing:** `useTransform` maps the `0.0` - `1.0` scroll progress range to frame indexes `0` - `143`. During scroll, a canvas context `drawImage` callback renders the calculated frame on a high-performance `<canvas>` element using `requestAnimationFrame` for buttery-smooth visual updates.

### 2. Interactive IDE Developer Console (`Courses.tsx`)
The redesigned Tech Stack section abandons boring, static skill lists and replicates a real developer IDE:
*   **Explorer Sidebar:** A simulated file system explorer displays files (e.g., `NextObserver.ts`, `tailwind.config.ts`, `fastapi_router.py`) corresponding to frontend, backend, animation, system core, and design expertise.
*   **Syntax Highlighter Engine:** Uses a lightweight regex-based tokenizer to highlight keywords, strings, comments, and values natively without relying on heavy external highlighting libraries.
*   **Terminal Output Panel:** Features three toggles (`Insight`, `Telemetry`, `Projects`) that output:
    - **Developer Insight:** Architectural explanations written from a veteran engineering perspective.
    - **Telemetry:** Live metrics such as bundle size optimizations, latency figures, and compilation schemas.
    - **Associated Projects:** Real links back to the projects built with that technology.

### 3. Projects Overlay Modals (`Projects.tsx`)
*   **Modal Interception:** Displays a responsive grid of 5 projects. Clicking a project intercept is handled by local state which opens a full-screen glassmorphic details sheet.
*   **Behavioral Polish:** Focus is retained within the modal container. It listens to global key events to support close-on-`ESC`, handles backdrop dim clicks to exit safely, and toggles body class scroll constraints (`overflow: hidden`) to prevent double scrollbars.

### 4. Spam-Filtered Email Pipeline (`Footer.tsx`)
*   **Endpoint Integration:** Submits directly to the Web3Forms JSON endpoint.
*   **Field Formatting:** Implements inputs for Name, Email, Message, and a custom **Mobile Number** capture.
*   **Honeypot Protection:** An invisible anti-spam honeypot input is integrated. If filled by automated crawler scripts, the form submission is aborted to ensure zero inbox spam.

---

## 🚀 Getting Started & Local Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Rajputshubham07/Shubham_07.git
    cd Shubham_07
    ```

2.  **Install Project Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The website will run on [http://localhost:3000](http://localhost:3000).

4.  **Production Build:**
    To inspect production bundles or build the site:
    ```bash
    npm run build
    ```

---

## 👨‍💻 Author & Socials

Created and maintained by **Shubham Singh**.

*   **Email:** [shubhamsingh164573@gmail.com](mailto:shubhamsingh164573@gmail.com)
*   **LinkedIn:** [Shubham Singh](https://www.linkedin.com/in/shubham-singh-1a235a394/)
*   **GitHub:** [@Rajputshubham07](https://github.com/Rajputshubham07)
*   **Twitter/X:** [@Shubham18689860](https://x.com/Shubham18689860)
*   **Bluesky:** [@shubhamsingh0011.bsky.social](https://bsky.app/profile/shubhamsingh0011.bsky.social)
