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
        <div className="md:col-span-2 shadow-red-600 rounded-lg shadow-sm">
          <div className="bg-red-600  text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Financial Freedom</h2>
            <h3 className="text-xl font-bold mb-4">Post Retirement</h3>
            <p className="text-sm">Continue being Awesome during your Golden Years</p>
          </div>
        </div>
      </div>

      {/* Responsive image added below the grid */}
      <div className="mt-6 flex lg:justify-end md:justify-center ">
        <img
          src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687199/Admin_pic_y1spiy.jpg"
          alt="Webinar Visual"
          className="w-90 h-90 shadow-gray-600 shadow-sm object-cover rounded-xs"
        />
      </div>
    </div>
  );
}
