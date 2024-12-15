"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

// context props type for admin sidebar state
interface AdminSidebarContextProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// create context for admin sidebar
const AdminSidebarContext = createContext<AdminSidebarContextProps | undefined>(
  undefined
);

// custom hook to use admin sidebar context in components
export const useAdminSidebar = () => {
  const context = useContext(AdminSidebarContext);
  if (context === undefined) {
    throw new Error(
      "useAdminSidebar must be used within a AdminSidebarProvider"
    );
  }
  return context;
};

// provider to wrap the app with admin sidebar context provider and manage state
export const AdminSidebarProvider = ({
  children, // children components
}: Readonly<{ children: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(true); // state to manage sidebar open/close

  // function to toggle sidebar state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // check if sidebar state is saved in local storage and set it to state on mount of component
  useEffect(() => {
    // get local storage value
    const localValue = localStorage.getItem("adminSidebar");

    if (localValue === "true") {
      setIsOpen(true); // set sidebar state to true
    } else {
      setIsOpen(false); // set sidebar state to false
    }
  }, []);

  // save sidebar state to local storage on change of state value
  useEffect(() => {
    localStorage.setItem("adminSidebar", isOpen.toString());
  }, [isOpen]);

  return (
    <AdminSidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </AdminSidebarContext.Provider>
  );
};
