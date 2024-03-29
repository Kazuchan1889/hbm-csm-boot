import React from 'react';


function side() {
  const navigateToHomePage = () => {
    // Change the page URL to the home page
    window.location.href = '/main'; // Replace '/home' with the actual path to your home page
  };
  const navigateToabtPage = () => {
    // Change the page URL to the home page
    window.location.href = '/About'; // Replace '/home' with the actual path to your home page
  };
  const navigateTosetPage = () => {
    // Change the page URL to the home page
    window.location.href = '/Lod'; // Replace '/home' with the actual path to your home page
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-white">
      {/* Sidebar header */}
      <div className="flex items-center justify-center h-16">
        <span>Sidebar</span>
      </div>

      {/* Sidebar content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Menu items */}
        <div className="mb-auto">
          <button className="w-full py-2 text-left hover:bg-gray-800" onClick={navigateToHomePage} >Home</button>
          <button className="w-full py-2 text-left hover:bg-gray-800" onClick={navigateToabtPage} >About Us</button>
          <button className="w-full py-2 text-left hover:bg-gray-800" onClick={navigateTosetPage} >Login</button>
        </div>

        {/* Setting button */}
        <div className="mt-auto flex justify-center items-center">
          <button className="flex justify-center items-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default side;
