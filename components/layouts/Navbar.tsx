import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className=" sticky top-0 z-50 bg-blue-500">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block " href="/">
              <span className="text-white font-bold text-xl ">E-vault</span>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:bg-white hover:text-black px-4 py-3 rounded-xl ease-in"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:bg-white hover:text-black px-4 py-3 rounded-xl ease-in"
                    href="/uploadSection"
                  >
                    File Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:bg-white hover:text-black px-4 py-3 rounded-xl ease-in"
                    href="/profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white rounded border px-4 py-2">
                  Open
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-100 rounded-lg text-black">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>File Upload</DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
