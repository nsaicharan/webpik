import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webpik - Online Website Screen Capture Tool</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="grid place-items-center min-h-screen bg-yellow-100">
        <div className="w-full max-w-3xl py-8 px-4">
          <h1 className="flex justify-center text-6xl text-gray-900 font-bold">
            <div className="relative">
              Webpik
              <span className="absolute bottom-2 -right-5 w-3 h-3 rounded-full bg-yellow-400 not-sr-only"></span>
            </div>
          </h1>

          <p className="mt-7 text-center text-gray-900 text-xl md:text-2xl">
            Take beautiful, full-page screenshot of web pages
          </p>

          <form action="#" className="mt-14">
            <label htmlFor="url" className="sr-only">
              Enter URL
            </label>
            <input
              className="px-3 md:px-5 py-3 block w-full border outline-none rounded text-md md:text-lg shadow-sm"
              type="url"
              id="url"
              placeholder="Enter URL like https://stripe.com"
              required
            />

            <button
              className="mt-5 px-8 py-3 uppercase text-md md:text-lg tracking-wide text-white bg-yellow-400 rounded-full outline-none transition hover:bg-yellow-500 focus:bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-500 focus:outline-none"
              style={{
                textShadow:
                  '0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%)',
              }}
            >
              Capture Screenshot
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
