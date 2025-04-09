import { useEffect } from 'react';

export function GoogleReviewsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="py-12 px-4 bg-black text-black">
      <div className="elfsight-app-19f040a2-5d3d-429e-8a57-8469da5ea875" data-elfsight-app-lazy></div>
    </div>
  );
}

