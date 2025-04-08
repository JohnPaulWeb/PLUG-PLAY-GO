import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
    {/* Header */}
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <div className="bg-[#FF5500] p-4 mr-6">
          <span className="text-3xl font-bold">UP</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            {/* <Globe className="w-5 h-5" /> */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {/* <MessageSquare className="w-5 h-5" /> */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {/* <X className="w-5 h-5" /> */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {/* <Telegram className="w-5 h-5" /> */}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {/* <Mail className="w-5 h-5" /> */}
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
          <Link href="#" className="hidden md:block text-white hover:text-gray-300">
            Partner Leaderboard
          </Link>
          <Link href="#" className="hidden md:block text-white hover:text-gray-300">
            <div className="flex items-center">
              {/* <Globe className="w-5 h-5 mr-1" /> */}
              OpenSea
            </div>
          </Link>
          <Link href="#" className="hidden md:block text-white hover:text-gray-300">
            Add Wallets
          </Link>
          <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white">CONNECT WALLET</Button>
        </div>
      </header>

      <div className="relative w-full overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
            src="/cat.jpg"
            alt="Uprising Banner"
            fill
            className="object-cover"
            priority
          />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>


        <div className="absolute -bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="black"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">


          </div>
        </div>

      </div>
  );
}
 