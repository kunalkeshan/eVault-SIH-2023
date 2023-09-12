import Link from "next/link";
export default function Hero() {
  return (
    <div className="p-24">
      {/* hero section here */}
      <div>
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24 xl:ml-8">
            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl ">
              Revolutionary way to save your legal document
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Secure Legal Records Management with Blockchain Technology -
              Scalable and Integrated Solution
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/auth/SignIn"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up!
              </Link>

              <Link
                href="/auth/Login"
                className="inline-block rounded-lg bg-gray-300 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Login
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div className="h-48 overflow-hidden rounded-xl bg-gray-100 shadow-lg lg:h-auto xl:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo"
              className="h-full w-full object-cover object-center "
            />
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-3xl mt-6">
              Our competitive advantage
            </h2>

            <p className="mx-auto max-w-screen-md text-left text-gray-500 md:text-lg"></p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Decentralized
                </h3>
                <p className="mb-2 text-gray-500">
                  Legal Ledger uses decentralization to ensure that your legal
                  records are secure and accessible from multiple locations,
                  reducing the risk of data loss.
                </p>
                <a
                  href="#"
                  className="font-bold text-blue-500 transition duration-100 hover:text-blue-700 active:text-blue-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end --> */}
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Immutable
                </h3>
                <p className="mb-2 text-gray-500">
                  With Legal Ledger, your legal documents are stored in an
                  unalterable state, guaranteeing their integrity and
                  reliability over time.
                </p>
                <a
                  href="#"
                  className="font-bold text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end --> */}
            {/* <!-- feature - start --> */}

            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  Secure
                </h3>
                <p className="mb-2 text-gray-500">
                  Legal Ledger prioritizes top-tier security measures, including
                  encryption and authentication, to protect your sensitive legal
                  records from unauthorized access.
                </p>
                <a
                  href="#"
                  className="font-bold text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700"
                >
                  More
                </a>
              </div>
            </div>
            {/* <!-- feature - end --> */}
            {/* <!-- feature - start --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
