import dynamic from "next/dynamic";

const DynamicFileUploadForm = dynamic(() => import("./FileUploadForm"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function uploadSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <div className="text-left sm:text-left px-9">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Upload your files 🎉
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            It's easy to upload files here on a secured blockchain. just fill in
            the details and we will handle the rest!
          </p>
        </div>
        <form className="py-4 px-9">
          <div className="mb-5">
            <label
              htmlFor="fileName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              File Name
            </label>
            <input
              type="text"
              name="fileName"
              id="fileName"
              placeholder="Enter your file name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="fileDescription"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              File Description
            </label>
            <input
              type="text"
              name="fileDescription"
              id="fileDescription"
              placeholder="Enter your file name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>
            <DynamicFileUploadForm />
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Send File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
