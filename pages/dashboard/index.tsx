import React from "react";

function index() {
  const Files = [
    {
      id: 1,
      name: "File 1",
      description: "File 1 description",
      url: "www.google.com",
    },
    {
      id: 2,
      name: "File 2",
      description: "File 2 description",
      url: "www.google.com",
    },
    {
      id: 3,
      name: "File 3",
      description: "File 3 description",
      url: "www.google.com",
    },
  ];
  return (
    <div className="w-screen h-auto md:h-screen py-4 flex flex-col justify-around align-center">
      <h1 className="font-extrabold text-xl md:text-3xl text-center my-12 md:my-0">
        Welcome to Document Library !
      </h1>
      <div className="w-[95%] md:w-[75%] mx-auto  border-[1px] h-auto md:h-[60%] md:overflow-y-auto shadow-2xl rounded-xl">
        <div className="md:sticky top-0 bg-white  border-x-[1px] p-4 border-[1px] flex w-full justify-around items-center font-bold">
          <div>File Name</div>
          <div>Description </div>
          <div>View file</div>
        </div>
        {Files.map((file) => (
          <div
            className="p-4 border-[1px] flex w-full justify-around items-center"
            key={file.id}
          >
            <div>{file.name}</div>
            <div>{file.description}</div>
            <a
              className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href={file.url}
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ms-4">
                View
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
