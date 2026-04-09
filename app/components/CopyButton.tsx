"use client";

import { useState } from "react";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-4 bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors"
    >
      {copied ? "Copied! ✅" : "Copy to Clipboard"}
    </button>
  );
}
