"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

interface TitleContextType {
  title: string;
  subTitle: string;

  setTitle: (title: string) => void;
  setSubTitle: (subTitle: string) => void;
}

const TitleContext = createContext<TitleContextType | null>(null);

export const TitleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");

  return (
    <TitleContext.Provider value={{ title, setTitle, subTitle, setSubTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = () => {
  const context = useContext(TitleContext);

  if (!context) {
    throw new Error("useTitle must be used within a TitleProvider");
  }

  return context;
};
