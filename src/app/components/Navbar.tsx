export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-transparent">
      {/* Left section */}
      <div>
        <div className="text-xs text-gray-400 mb-1">
          Pages <span className="text-white"> / Dashboard</span>
        </div>
        <div className="text-sm font-bold text-white">Dashboard</div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search box */}
        <div className="relative">
          <img
            src="/search.svg"
            alt="Search"
            className="absolute left-3.5 top-3  "
          />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-10 pr-4 text-sm py-2 rounded-[15px] bg-[#0F1535] border border-[0.5px] border-[#E2E8F04D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1583f7] w-44"
          />
        </div>

        {/* Sign in */}
        <div className="flex items-center text-white space-x-2 cursor-pointer hover:text-[#1583f7] transition">
          <img src="/profile.svg" alt="User" className="w-4 h-4" />
          <span className="text-sm text-[#718096]">Sign In</span>
        </div>

        {/* Settings */}
        <div className="cursor-pointer hover:text-[#1583f7] transition">
          <img src="/setting.svg" alt="Settings" className="w-4 h-4" />
        </div>

        {/* Notification */}
        <div className="cursor-pointer hover:text-[#1583f7] transition">
          <img src="/notification.svg" alt="Notifications" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
