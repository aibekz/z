import Image from "next/image";
import { FaXTwitter, FaInstagram, FaThreads, FaBluesky } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="text-center">
        <div className="flex items-center justify-center gap-6">
          <Image
            src="/favicon.svg"
            alt="DevZ Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
          <h1 className="text-4xl font-bold text-black dark:text-white">
            DevZCodes
          </h1>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-8">
          <a 
            href="https://x.com/devzcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-black dark:text-white dark:hover:text-gray-400 transition-colors"
          >
            <FaXTwitter size={32} />
          </a>
          <a 
            href="https://threads.net/@devzcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-black dark:text-white dark:hover:text-gray-400 transition-colors"
          >
            <FaThreads size={32} />
          </a>
          <a 
            href="https://instagram.com/devzcodes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-black dark:text-white dark:hover:text-gray-400 transition-colors"
          >
            <FaInstagram size={32} />
          </a>
          <a 
            href="https://bsky.app/profile/devzcodes.bsky.social" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-black dark:text-white dark:hover:text-gray-400 transition-colors"
          >
            <FaBluesky size={32} />
          </a>
        </div>
      </main>
    </div>
  );
}
