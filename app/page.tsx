import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0d1ff]">
      {/* Header */}
      <header className="bg-[#5b7fd9] p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="PlugPlayNow Logo" width={150} height={40} className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-2 text-white">
          <span className="font-medium">[username]</span>
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-[#3a5dc9] text-white">U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Banner */}
        <div className="bg-white rounded-lg overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <Image
                src="/controllers.png"
                alt="Gaming Controllers"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 flex items-center justify-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#333333]">PlugPlayNow</h1>
            </div>
          </div>
        </div>

        {/* XP Section */}
        <div className="mb-6">
          <div className="text-[#0a3b80] font-bold">[projectname] XP: 1,000</div>
          <div className="text-[#5b7fd9]">ppNOW GLOBAL XP: 3,000</div>
        </div>

        {/* Leaderboards and Missions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Leaderboards */}
          <div>
            <h2 className="text-2xl font-bold text-[#0a3b80] mb-4">LEADERBOARDS</h2>
            <div className="space-y-2">
              {[
                { name: "[Username]", score: "5,000" },
                { name: "[Username]", score: "4,900" },
                { name: "[Username]", score: "4,700" },
                { name: "[Username]", score: "4,300" },
                { name: "[Username]", score: "4,000" },
                { name: "[Username]", score: "3,900" },
                { name: "[Username]", score: "3,800" },
                { name: "[Username]", score: "3,700" },
                { name: "[Username]", score: "3,600" },
                { name: "[Username]", score: "3,400" },
                { name: "[Username]", score: "3,300" },
                { name: "[Username]", score: "3,200" },
              ].map((user, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-[#0a3b80]">{user.name}</span>
                  <span className="text-[#0a3b80] font-medium">{user.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Missions */}
          <div className="space-y-6">
            {/* New Missions */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a3b80] mb-4">NEW MISSIONS</h2>
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-[#0a3b80] font-bold">100 XP</div>
                    <div className="text-[#0a3b80] font-bold">Follow X Account</div>
                    <div className="text-[#0a3b80]">https://x.com/TheImhelAsis</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-[#3a9fe0] hover:bg-[#2e8fd0] text-white rounded-full px-4">CLICK HERE</Button>
                    <Button className="bg-[#b8c8ff] hover:bg-[#a8b8ff] text-[#5b7fd9] rounded-full px-4">DONE</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Missions */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a3b80] mb-4">PENDING MISSIONS</h2>
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-[#0a3b80] font-bold">30 XP</div>
                    <div className="text-[#0a3b80] font-bold">Like & ReTweet Post</div>
                    <div className="text-[#0a3b80]">https://x.com/TheImhelAsis</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-[#3a9fe0] hover:bg-[#2e8fd0] text-white rounded-full px-4">CLICK HERE</Button>
                    <Button className="bg-[#b8c8ff] hover:bg-[#a8b8ff] text-[#5b7fd9] rounded-full px-4">DONE</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Missions */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a3b80] mb-4">COMPLETED MISSIONS</h2>
              <div className="bg-white rounded-lg p-4 relative">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-[#0a3b80] font-bold">100 XP</div>
                    <div className="text-[#0a3b80] font-bold">Join Discord</div>
                    <div className="text-[#0a3b80]">https://x.com/TheImhelAsis</div>
                  </div>
                  <div className="absolute top-2 right-2 rotate-12">
                    <div className="bg-[#8cc63f] text-white font-bold px-4 py-1 rounded-md border-2 border-[#6ba22e]">
                      COMPLETED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
 