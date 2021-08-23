import { useRef, useState } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';

export default function Home() {
  const [screenshot, setScreenshot] = useState({});
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  return (
    <>
      <div className="grid place-items-center min-h-screen bg-yellow-100">
        <div className="w-full max-w-3xl py-8 px-5 sm:px-8">
          <h1 className="text-6xl font-bold text-gray-900 text-center">
            Webpik
            <span className="inline-block w-3 h-3 ml-1 bg-yellow-500 rounded-full"></span>
          </h1>

          <p className="mt-7 text-gray-900 text-center text-xl md:text-2xl">
            Take high-resolution, full-page screenshot of web pages
          </p>

          <Form
            ref={inputRef}
            setScreenshot={setScreenshot}
            resultRef={resultRef}
          />
        </div>
      </div>

      {screenshot.data && (
        <Result ref={resultRef} screenshot={screenshot} inputRef={inputRef} />
      )}
    </>
  );
}
