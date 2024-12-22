import SigninFrom from "@/components/global/signin-from";
import React from "react";

const SigninPage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-28 h-screen">
      <header className="py-4">
        <h1>Logo</h1>
      </header>
      <main>
        <SigninFrom />
      </main>
      <footer></footer>
    </div>
  );
};

export default SigninPage;
