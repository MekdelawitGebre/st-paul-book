"use client";

import { Send, Facebook, Instagram } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full bg-gray-100 py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left Section - Author Name */}
        <div className="flex-1">
          <h3 className="text-blue-900 font-bold text-lg">ቄስ ዶ/ር ዳዊት ፈቀደ</h3>
        </div>

        {/* Middle Section - Subtitle */}
        <div className="flex-1 text-center">
          <p className="text-blue-900 text-sm">ነገ ምን ይመስላል አዲስ ነገር</p>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex-1 flex justify-end space-x-4">
          <div className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center">
            <Send className="w-4 h-4 text-blue-900" />
          </div>
          <div className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center">
            <Facebook className="w-4 h-4 text-blue-900" />
          </div>
          <div className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center">
            <Instagram className="w-4 h-4 text-blue-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
