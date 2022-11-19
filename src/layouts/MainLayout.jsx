import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className="flex flex-row gap-x-10 w-full h-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
