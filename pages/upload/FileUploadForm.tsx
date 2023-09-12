import React from "react";

function FileUploadForm() {
  return (
    <form>
      <label htmlFor="file-input" className="sr-only text-black">
        Choose file
      </label>
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500  file:bg-transparent file:border-0 file:bg-blue-600 file:mr-4 file:py-3 file:px-4 0 file:text-white"
      />
    </form>
  );
}

export default FileUploadForm;
