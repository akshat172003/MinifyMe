"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Copy, Link2, CheckCircle2 } from "lucide-react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);
  const [warning, setWarning] = useState("");

  const generate = async () => {
    if (!url.trim()) {
      setWarning("Please enter a valid URL.");
      return;
    }

    setWarning(""); // clear warning if input is valid

    const bodyContent = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: bodyContent,
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl || data.shortUrl}`);
      setUrl("");
      setshorturl("");
      console.log(data);
    } catch (error) {
      console.error("Error generating short URL:", error);
      setWarning("Something went wrong. Try again!");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-lg bg-gradient-to-br from-purple-50 to-white my-16 p-8 rounded-2xl shadow-lg flex flex-col gap-6 border border-purple-200">
      <h1 className="font-extrabold text-3xl text-gray-900 text-center">
        🔗 Shorten Your URL
      </h1>
      <p className="text-gray-600 text-center text-sm">
        Paste your long URL below and get a simple, shareable link instantly.
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Long URL</label>
          <input
            type="text"
            value={url}
            className="mt-1 w-full p-4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Enter or paste your URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Custom Short URL</label>
          <input
            type="text"
            value={shorturl}
            className="mt-1 w-full p-4 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Enter a custom alias (optional)"
            onChange={(e) => setshorturl(e.target.value)}
          />
        </div>

        {warning && <p className="text-red-600 text-sm">{warning}</p>}

        <button
          onClick={generate}
          className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          Generate Link
        </button>
      </div>

      {generated && (
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl flex items-center justify-between gap-2 animate-fadeIn">
          <div className="flex items-center gap-2 text-purple-800 font-mono text-sm break-all">
            <Link2 size={18} />
            <Link target="_blank" href={generated} className="hover:underline">
              {generated}
            </Link>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition"
          >
            {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Shorten;
