import React from "react";
import { Button } from "@/components/ui/button";
import AddUserForm from "@/components/admin/AddUserForm";

const AddNewUserPage = () => {
  return (
    <div className="px-20 bg-zinc-900 text-white min-h-screen">
      <header className="flex justify-between items-center py-2 border-b">
        <h1>Add New User</h1>
        <div className="flex justify-between items-center gap-2">
          <Button variant={"secondary"}>Back</Button>
        </div>
      </header>

      <main>
        <AddUserForm />
      </main>
    </div>
  );
};

export default AddNewUserPage;
