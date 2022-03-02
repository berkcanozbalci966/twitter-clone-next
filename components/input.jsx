import { PhotographIcon, XIcon } from "@heroicons/react/outline";
import { useState, useRef } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  function addImageToPost() {}

  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3`}>
      <img
        src="https://avatars.githubusercontent.com/u/54132791?s=400&u=279884898037b7ee7c04697e885ba34dd6c0a679&v=4"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            className="bg-transparent 
            outline-none text-[#d9d9d9]
             text-lg place-holder-gray-500
             tracking-wide w-full min-h-[50px]"
            placeholder="What's happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            rows="2"
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absoulute w-8 h-8 bg-[#15181c]
            hover:bg-[#272c26] rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                className="rounded-2xl max-h-80 object-contain"
                alt=""
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
                type="file"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
