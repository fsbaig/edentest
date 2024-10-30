import { Menu } from "lucide-react";
import { ShoppingCart, Search, Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white text-black max-w-screen-3xl mx-auto border-b border-gray-200 fixed top-0 w-full z-10">
      {/* Left Section: Logo */}
      <div>
        <h2 className="font-bold text-2xl text-black">edenrobe</h2>
      </div>

      {/* Center Section: Nav buttons */}
      <ul className="hidden md:flex items-center space-x-8 text-lg font-semibold">
        <li>
          <Link href="/" className="hover:text-gray-600">
            Merak - BlockArt
          </Link>
        </li>
        <li className="relative flex items-center">
          <Link href="/" className="hover:text-gray-600">
            Summer Unstitched
          </Link>
          <span className="ml-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded font-bold absolute -top-2 left-full">New</span>
        </li>
        <li className="relative flex items-center">
          <Link href="/" className="text-red-600 hover:text-red-700">
            Sale
          </Link>
          <span className="ml-2 bg-red-600 text-white text-[10px] px-0.5 py-0.5 rounded font-bold absolute -top-2 left-full">Flat 50%</span>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600">Women</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600">Men</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600">Boys</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600">Girls</Link>
        </li>
        <li>
          <Link href="/" className="hover:text-gray-600">Fragrance</Link>
        </li>
      </ul>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:text-gray-600">
          <Truck className="w-6 h-6" />
        </Link>
        <Link href="/" className="hover:text-gray-600">
          <Search className="w-6 h-6" />
        </Link>
        <Link href="/" className="hover:text-gray-600 relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">0</span>
        </Link>
        <Link href="/" className="hover:text-gray-600">
          <FaWhatsapp className="w-6 h-6 text-green-500" />
        </Link>
      </div>

      {/* Mobile Menu Trigger */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="space-y-4 p-4 text-lg font-semibold">
            <li><Link href="/">Merak - BlockArt</Link></li>
            <li><Link href="/">Summer Unstitched</Link></li>
            <li><Link href="/" className="text-red-600">Sale</Link></li>
            <li><Link href="/">Women</Link></li>
            <li><Link href="/">Men</Link></li>
            <li><Link href="/">Boys</Link></li>
            <li><Link href="/">Girls</Link></li>
            <li><Link href="/">Fragrance</Link></li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
