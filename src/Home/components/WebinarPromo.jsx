

export default function WebinarPromo() {
    return (
      <div className="lg:pr-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Exclusive Webinar</h1>
            <p className="text-gray-600 mb-6">
              Learn how to maintain Physical, Mental & Financial well-being to make Retirement the best phase of life.
            </p>
            <a href="#" className="inline-flex items-center text-red-600 font-medium hover:underline">
              Register Now &rarr;
            </a>
          </div>
          <div className="md:col-span-2">
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">Financial Freedom</h2>
              <h3 className="text-xl font-bold mb-4">Post Retirement</h3>
              <p className="text-sm">Continue being Awesome during your Golden Years</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  