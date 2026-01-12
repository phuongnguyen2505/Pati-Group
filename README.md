[PATI Group] Alpha Track | e-Commerce Developer Practical Test (Round 2)

This repository contains the source code for the Pixel-Perfect Landing Page Test, submitted by Nguyễn Duy Phương for the Alpha - eCommerce Developer Track position at PATI Group.

🚀 Live Demo

🔗 Click here to view the live project: https://pati-group-eta.vercel.app/

Note: The project is deployed on Vercel for optimal performance and accessibility.

🛠 Tech Stack & Technical Decisions

Although the requirements allowed for a flexible tech stack (HTML/CSS/JS), I deliberately chose a modern component-based architecture to demonstrate scalability, maintainability, and code cleanliness—key traits of an Alpha Developer.

Core Framework: React (via Vite)

Why: To ensure high performance, modular component structure, and faster development time compared to plain HTML.

Styling: Tailwind CSS

Why: For rapid UI development, consistent design system (typography/colors), and easy mobile responsiveness.

Icons: Inline SVGs & Custom Assets.

Why: To minimize bundle size by avoiding heavy icon libraries.

State Management: React useState & useEffect.

Why: Sufficient for handling UI states like gallery sliders, variant selection, and modals without over-engineering (e.g., Redux).

⚙️ How to Run Locally

Follow these steps to set up the project on your local machine:

1. Clone the repository

git clone [https://github.com/phuongnguyen2505/Pati-Group.git](https://github.com/phuongnguyen2505/Pati-Group.git)
cd Pati-Group


2. Install dependencies

npm install


3. Start the development server

npm run dev


4. Open your browser
Visit http://localhost:5173 (or the port shown in your terminal) to view the app.

📝 Notes & Assumptions

Data-Driven UI: Instead of hardcoding text directly into the JSX, I separated product details (pricing, variants, benefits) into src/data/product.js. This simulates how a frontend application fetches data from a CMS or API, making the code cleaner and easier to update.

Variant Logic: I implemented full logic for the pricing selector. Changing the variant (1 Bottle vs. 3 Bottles) updates the active state styling and reflects the user's choice.

Responsiveness: The layout is fully responsive.

Mobile: Uses a touch-friendly carousel for the gallery and a stacked layout.

Desktop: Uses a 12-column grid layout with a sticky gallery section.

Performance: Images utilize loading="lazy" (except the main hero image) to optimize Core Web Vitals.

Assets: I used the assets extracted from the reference design or high-quality placeholders where exact assets were unavailable, ensuring the visual integrity is maintained.

👨‍💻 Author

Nguyễn Duy Phương

Role: Front-end Developer

Email: phuong.t13579@gmail.com

Phone: 0818888480

Thank you for reviewing my submission!