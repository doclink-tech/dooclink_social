import React from "react";
import { DataTable } from "./_component/DocumentTable";
import NavBar from "@/components/layout/Navbar";
import DocumentNav from "./_component/DocumentNav";

const DocumentsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto p-4">
        <DocumentNav />
        <DataTable />
      </div>
    </div>
  );
};

export default DocumentsPage;
