ArtConnect 

ArtConnect is a responsive web application designed for beginner and professional artists to showcase their artwork, connect with art enthusiasts, and stay updated on exciting creative events. This project serves as a centralized digital catalog and community hub.

---

Features

*   **Responsive Homepage**: A clean, modern layout highlighting featured artworks and a responsive embedded video.
*   **Interactive FAQ Section**: A JavaScript-driven accordion that lets users toggle questions to view answers without hardcoded inline display styling.
*   **Artist Submission Page**: A fully validated client-side form allowing artists to submit their names, email addresses, artwork titles, categories, prices, and descriptions.
*   **Responsive Gallery**: A structured grid showing beautiful art cards with dynamic sizing, category badges, and pricing indicators.
*   **References & AI Documentation**: A dedicated page explicitly citing image sources, multimedia embeds, external libraries, and the exact AI prompts used during development.

---

Project Structure

artconnect/
│
├── css/
│   └── style.css          # Main stylesheet containing all page layouts and components
│
├── js/
│   └── script.js          # JavaScript logic for FAQ toggles and form validation
│
├── images/
│   ├── logo.png           # ArtConnect brand logo
│   └── [artwork images]   # Images used across the site
│
├── Contact.html             # Homepage containing the welcome message & exhibition video
├── Events.html           # Digital art catalog grid with filter controls
├── Gallery.html            # Layout detailing upcoming creative meetups
├── Index.html           # Artist Submission Form page
├── References.html        # Project references and AI usage documentation
└── README.md              # Project documentation (this file)

## 📚 References & Resources

This project adheres to academic integrity guidelines. All external assets, code documentation, and AI tools used during development are cited below.

### 🖼️ Image & Branding Sources
*   **ArtConnect Logo**: Generated and customized using AI vector generation tools to establish a consistent brand aesthetic.
*   **Featured Artwork 1 ("Sunset Dreams")**: Sourced from [Unsplash](https://unsplash.com/). Free-to-use digital art asset.
*   **Featured Artwork 2 ("Abstract Visions")**: Sourced from [Pexels](https://www.pexels.com/). Free stock creative assets.
*   **Featured Artwork 3 ("Nature's Palette")**: Sourced from [Pixabay](https://pixabay.com/). Free stock photography/vector library.

### 🎥 Multimedia Elements
*   **Homepage Gallery Walkthrough Video**: 
    *   *Source*: YouTube (Embedded via responsive iframe wrapper)
    *   *Title*: "Inside look of modern abstract exhibition walkthrough"
    *   *URL*: [https://www.youtube.com/watch?v=JwWBf_9vnNE](https://www.youtube.com/watch?v=JwWBf_9vnNE)

### 🛠️ Technical Resources & Documentation
*   **MDN Web Docs**: Used as a reference library for DOM manipulation methods (specifically `classList.toggle` for the interactive FAQ accordion) and standard form element properties (specifically the `novalidate` attribute).
*   **Google Fonts**: Utilized to safely import and load the project's primary clean modern typography pairings.

### 🤖 Generative AI Tools & Usage
*   **AI Assistant**: Gemini (Google)
*   **Usage Scope**: 
    *   Assisted with drafting custom, lightweight CSS layouts (responsive flexbox galleries, absolute positioning for responsive video wrappers, and small-logo navigation branding rules).
    *   Debugged structural logic errors causing the FAQ accordion arrows to rotate without revealing hidden text.
    *   Scaffolded semantic HTML elements for the multi-field Artist Submission Page form and its associated error/success display components.
    *   **Generated project repository documentation**, providing structural markdown layouts and technical summaries for the `README.md` file.
*   **Prompt Documentation**: A complete log of the exact prompt history submitted during the coding process is fully documented on the web project's internal **References Page** (`References.html`).
