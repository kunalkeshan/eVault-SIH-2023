import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-center space-x-3 text-gray-600 lg:justify-start">
              <Link href="/" className="flex space-x-3">
                <SiBlockchaindotcom className="text-3xl" />
                <span className="text-gray-600 text-xl">Legal Ledger</span>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Secure Legal Records Management with Blockchain Technology -
              Scalable and Integrated Solution
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/uploadSection"
              >
                File Upload
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="/profile"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
