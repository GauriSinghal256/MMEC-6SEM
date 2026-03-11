import React from "react";
import Sidebar from "../../components/Sidebar";
import PostCard from "../../components/PostCard";
import SuggestionCard from "../../components/SuggestionCard";

const posts = [
  {
    name: "Ann Levin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "2 hours ago",
    text: "Hello everybody! We are preparing a new Prada campaign.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    name: "James Dorwart",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "5 hours ago",
    text: "Just wrapped up an amazing collab shoot in the mountains.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
  },
  {
    name: "Jocelyn Westervelt",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    time: "Yesterday",
    text: "New reel dropping tonight. Stay tuned!",
    image: "",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-in fade-in">

      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex justify-center">

        <div className="w-full max-w-6xl flex gap-10 px-8 py-10 animate-in fade-in">

          {/* Feed */}
          <div className="flex-1 max-w-2xl space-y-6">
          
            {/* Posts */}
            {posts.map((post, i) => (
              <div
                key={i}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <PostCard {...post} />
              </div>
            ))}

          </div>

          {/* Right Panel */}
          <div className="hidden lg:block w-[300px]">

            <div className="sticky top-10 space-y-6 animate-in slide-in-from-right-5">

              <SuggestionCard />

              {/* Trends */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-lg transition-shadow">

                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Trending
                </h3>

                <div className="space-y-2 text-sm text-gray-600">

                  <div className="hover:text-blue-600 cursor-pointer transition-colors">
                    #ReactDevelopment
                  </div>

                  <div className="hover:text-purple-600 cursor-pointer transition-colors">
                    #Hackathon
                  </div>

                  <div className="hover:text-green-600 cursor-pointer transition-colors">
                    #OpenSource
                  </div>

                  <div className="hover:text-pink-600 cursor-pointer transition-colors">
                    #StartupIdeas
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Create Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full text-sm font-medium hover:shadow-xl transition transform hover:scale-110 animate-pulse">
        + Create Post
      </button>

    </div>
  );
}