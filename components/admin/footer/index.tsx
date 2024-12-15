import React from "react";

const AdminFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2021 All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <p className="text-end">
              Designed by{" "}
              <a href="https://www.shadcn.com" target="_blank">
                Shadcn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
