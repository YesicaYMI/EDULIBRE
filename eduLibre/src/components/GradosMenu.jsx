import React from 'react';
import '../styles/GradosMenu.css';


function App() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white bg-opacity-50 border-4 border-white p-12 rounded-lg shadow-lg w-3/4">
        <div className="flex items-center mb-8">
          <svg width="57" height="53" viewBox="0 0 57 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.1808 46.865L10.7775 52.8182C9.25735 53.1363 7.73719 52.182 7.40465 50.6823L1.22899 21.9613C0.896455 20.507 1.89406 19.0528 3.46173 18.7347L33.865 12.7814C33.9125 12.8269 41.1808 46.865 41.1808 46.865Z" fill="#424242"/>
            {}
          </svg>

          <svg width="138" height="26" viewBox="0 0 138 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.81688 6.44V12.008H14.4169V15.496H4.81688V21.288H15.1209V25H0.592875V2.728H15.1209V6.44H4.81688Z" fill="#2E7D32" />
            {}
          </svg>
        </div>
        <span className="highlight">Vamos a escoger</span>
        <div className="Iconos">
          <OptionCard title="Por Materias" />
          <OptionCard title="Por grados" />
        </div>
      </div>
    </div>
  );
}

function OptionCard({ title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-green-300 p-8 rounded-lg mb-4 border-4 border-white shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
      </div>
      <div className="btn">
        <button className="bg-green-700 text-white py-2 px-4 rounded transition-colors hover:bg-green-800">Continue aqui</button>
      </div>
    </div>
  );
}

export default App;

