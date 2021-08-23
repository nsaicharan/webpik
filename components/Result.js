import { forwardRef } from 'react';

const Result = forwardRef(({ screenshot, inputRef }, ref) => {
  function handleAnotherScreenshot() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    inputRef.current.focus({ preventScroll: true });
  }

  return (
    <div className="flex items-center min-h-screen" ref={ref}>
      <div className="max-w-3xl mx-auto py-8 px-5 sm:px-8">
        <p className="text-gray-900">Here is your screenshot:</p>
        <img
          src={screenshot.data}
          alt={screenshot.name}
          className="mt-4 border"
        />
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center items-center">
          <a
            href={screenshot.data}
            download={screenshot.name}
            className="btn btn-primary"
          >
            Download
          </a>
          <button
            className="btn btn-secondary mt-5 sm:mt-0 sm:ml-6"
            onClick={handleAnotherScreenshot}
          >
            Take Another Screenshot
          </button>
        </div>
      </div>
    </div>
  );
});

export default Result;
