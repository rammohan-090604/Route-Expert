import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const { imageUrl, link, courseDuration, title, description } = course;
  
  return (
    <Link
      to={link}
      className="relative block rounded-tr-3xl overflow-hidden border border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl bg-white"
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-80 w-full rounded-tr-3xl object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <strong className="text-2xl font-bold text-gray-900">{title}</strong>
          <div className="flex items-center space-x-1 text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63l-7.19.61 5.46 4.73-1.64 7.03z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63l-7.19.61 5.46 4.73-1.64 7.03z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63l-7.19.61 5.46 4.73-1.64 7.03z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M12 17.27l6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.63l-7.19.61 5.46 4.73-1.64 7.03z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L6.18 21 7.82 14l-5.46-4.73 7.19-.61L12 2l2.81 7.63 7.19.61-5.46 4.73L17.82 21z" />
            </svg>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link to="contactus">
          <span className="block rounded-md border border-blue-900 bg-blue-700 px-5 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-blue-900">
            Learn More
          </span>
          </Link>
          <span className="text-sm font-medium text-gray-500">{courseDuration}</span>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
