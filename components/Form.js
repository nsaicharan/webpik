import { forwardRef, useState } from 'react';

const Form = forwardRef(({ setScreenshot, resultRef }, ref) => {
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      const { url } = Object.fromEntries(new FormData(e.target));
      const response = await fetch('/api/screenshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const { screenshot, pageTitle } = await response.json();

      setScreenshot({
        data: `data:image/png;base64, ${screenshot}`,
        name: pageTitle,
      });

      setTimeout(() => {
        window.scrollTo({
          top: resultRef.current.offsetTop,
          behavior: 'smooth',
        });

        e.target.reset();
      }, 300);
    } catch (error) {
      alert('Something went wrong. Please recheck the URL and try again.');
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
      }, 750);
    }
  }

  return (
    <form action="#" className="mt-14" onSubmit={handleSubmit}>
      <label htmlFor="url" className="sr-only">
        Enter URL
      </label>
      <input
        ref={ref}
        className="px-3 md:px-5 py-3 block w-full border outline-none rounded text-md md:text-lg shadow-sm"
        type="url"
        id="url"
        name="url"
        placeholder="Enter URL like https://twitter.com"
        required
      />

      <button
        className={`btn btn-primary mt-5 relative md:text-lg ${
          isProcessing && 'cursor-not-allowed'
        }`}
      >
        <span className={`${isProcessing && 'invisible'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top h-5 w-5 -ml-0.5 mr-2 mt-[1px] md:w-6 md:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Capture Screenshot
        </span>

        <span
          className={`absolute inset-0 grid place-items-center invisible 
            ${isProcessing && '!visible'}`}
        >
          <svg
            className="animate-spin ml-2 mr-3 h-5 w-5 text-white md:w-6 md:h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Processing"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      </button>
    </form>
  );
});

export default Form;
