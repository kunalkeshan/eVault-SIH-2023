// import dynamic from "next/dynamic";
import { useState } from "react";
import { NFTStorage, File } from 'nft.storage'
import mime from 'mime';
import fs from 'fs';
import path from 'path';

// const DynamicFileUploadForm = dynamic(() => import("./FileUploadForm"), {
//   ssr: false, // Disable server-side rendering for this component
// });

export default function uploadSection() {

  const [filePath, setFilePath] = useState(null);
  const [name, setName] = useState('');
  const [url, setUrl] = useState(null);
  const [ipfsimage, setIpfsimage] = useState(null);
  const [description, setDescription] = useState('');
  // const[trait,setTrait]=useState('');
  // const[value,setValue]=useState('');
  const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM0QThkRENiMGM1MjQwQTJDYjdBMzIwZGRGMDg5QUJhMERDNDVDZkYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MjE5NTgzMzEwMywibmFtZSI6InRwZyJ9.ncleHk0ziyvHC-8RSKo07nxdgJ9OidmguX_YzX-L0p4'

  const storeNFT = async (e, filePath , name , description) => {
    e.preventDefault();
    console.log(filePath instanceof File)
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    var res = await nftstorage.store({
        image : filePath,
        name : name,
        description : description,
        // atttributes : [{
        //     "trait_type" : trait,
        //     "value": value
        // }]
    })

    console.log(res)
    setUrl(res.url)
    setIpfsimage("https://ipfs.io/ipfs/"+(res.data.image.href).slice(7))
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <div className="text-left sm:text-left px-9">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Upload your files 🎉
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            It&apos;s easy to upload files here on a secured blockchain. just fill in
            the details and we will handle the rest!
          </p>
        </div>
        <form className="py-4 px-9" onSubmit={(e) => e.preventDefault()}>
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
              onChange={(e)=>setName(e.target.value)}
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
              onChange={(e)=>setDescription(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>
            <input
              type="file"
              name="file-input"
              id="file-input"
              onChange={(e) => setFilePath(e.target.files[0])}
              className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500  file:bg-transparent file:border-0 file:bg-blue-600 file:mr-4 file:py-3 file:px-4 0 file:text-white"
            />
          </div>

          <div>
            <button 
              className="hover:shadow-form w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={(e) => storeNFT(e, filePath, name, description)}
            >
              Send File
            </button>
          </div>
        </form>
        <label>Metadata : {url}</label>
        {<img src={ipfsimage} width='30%' />}
      </div>
    </div>
  );
}
