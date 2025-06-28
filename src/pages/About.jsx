// File: src/pages/About.jsx

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-white">About TextUtils</h1>

      <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">📘 Project Overview</h2>
        <p className="text-white">
          <strong>TextUtils</strong> is a modern, responsive, and theme-adaptive text utility web application built with React, Vite, Redux, and Tailwind CSS. It allows users to perform real-time text transformation, analysis, and dictionary lookups with a clean and intuitive UI.
        </p>
      </div>

      <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">⚙️ Core Features</h2>
        <ul className="list-disc pl-5 text-white space-y-1">
          <li>Convert to Uppercase / Lowercase</li>
          <li>Clear text instantly</li>
          <li>Join or remove hyphens (-)</li>
          <li>Remove extra spaces</li>
          <li>Extract email addresses from text</li>
          <li>Estimate word count, character count, and reading time</li>
          <li>Live text preview section</li>
        </ul>
      </div>

      <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">🌐 Dictionary Integration</h2>
        <p className="text-white">
          Select any word and click "Define Word" to fetch real-time definitions, part of speech, synonyms, and example sentences using the Free Dictionary API.
        </p>
      </div>

      <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">🎨 UI/UX and Theme</h2>
        <ul className="list-disc pl-5 text-white space-y-1">
          <li>Dark and Light Mode toggle (default: Dark)</li>
          <li>Responsive design for desktop and mobile</li>
          <li>Tailwind CSS utility-first styling</li>
        </ul>
      </div>

      <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">🧰 Tech Stack</h2>
        <ul className="list-disc pl-5 text-white space-y-1">
          <li>React (Vite)</li>
          <li>Redux Toolkit (Theme state management)</li>
          <li>Tailwind CSS</li>
          <li>Free Dictionary API</li>
        </ul>
      </div>

      <div className="bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-white">🚀 Future Enhancements</h2>
        <ul className="list-disc pl-5 text-white space-y-1">
          <li>Multi-language support</li>
          <li>Text-to-speech integration</li>
          <li>Word frequency visualization with charts</li>
          <li>Undo/redo operations</li>
        </ul>
      </div>
    </div>
  );
}
