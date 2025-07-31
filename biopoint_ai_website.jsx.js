// Folder: src/pages/Home.js
import React from 'react';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to BioPoint AI</h1>
      <p className="text-lg text-gray-700">An AI-powered platform to simplify deep study for biotechnology students.</p>
    </div>
  );
}

// Folder: src/pages/Upload.js
import React from 'react';

export default function Upload() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Book or Notes</h1>
      <input type="file" className="border p-2 rounded" accept=".pdf,.docx" />
      <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
    </div>
  );
}

// Folder: src/pages/Dashboard.js
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Your uploaded content and notes will appear here.</p>
    </div>
  );
}

// Folder: src/pages/NotesView.js
import React from 'react';

export default function NotesView() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">AI Generated Notes</h1>
      <p className="mt-2 text-gray-600">View high-quality notes generated from your uploaded books.</p>
    </div>
  );
}

// Folder: src/pages/Login.js
import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <input type="email" placeholder="Email" className="border p-2 rounded mb-4 w-64" />
      <input type="password" placeholder="Password" className="border p-2 rounded mb-4 w-64" />
      <button className="bg-green-600 text-white px-6 py-2 rounded">Sign In</button>
    </div>
  );
}

// Folder: src/pages/AdminPanel.js
import React from 'react';

export default function AdminPanel() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <p className="text-gray-600 mt-2">Review uploads, control visibility, and manage content.</p>
    </div>
  );
}
