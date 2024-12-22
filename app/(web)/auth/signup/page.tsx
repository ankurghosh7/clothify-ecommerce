import React from "react";
import SignupFrom from "@/components/global/signup-form";
const SignupPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-28 h-screen">
      <header className="py-4">
        <h1>Logo</h1>
      </header>
      <main>
        <SignupFrom />
      </main>
      <footer></footer>
    </div>
  );
};

export default SignupPage;
