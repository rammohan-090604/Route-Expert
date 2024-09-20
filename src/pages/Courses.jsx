import React from 'react';
import CourseCard from './CourseCard';
import "../styles/common.css";

function Courses() {
    const courseList = [
        {
          imageUrl: 'https://i.postimg.cc/1X3CMqZH/Designer-1.jpg',
          link: '/contactus',
          courseDuration: "80 hours",
          title: 'C Programming',
          description: 'Understand the basics of C programming, the foundational language for many modern languages and systems.',
        },
        {
          imageUrl: 'https://i.postimg.cc/DZjdvptr/Designer-2.jpg',
          link: '/contactus',
          courseDuration: "100 hours",
          title: 'Python Programming',
          description: 'Learn the fundamentals of Python, a powerful programming language used in web development, data science, and more.',
        },
        {
          imageUrl: 'https://i.postimg.cc/cCPRYg16/Designer-3.jpg',
          link: '/contactus',
          courseDuration: "110 hours",
          title: 'Core Java Development',
          description: 'Master the core concepts of Java, the language behind Android apps and enterprise-level applications.',
        },
        {
          imageUrl: 'https://i.postimg.cc/rphQsp4R/Designer-1.jpg',
          link: '/contactus',
          courseDuration: "150 hours",
          title: 'Java Full Stack Development',
          description: 'Become a full-stack developer using Java, learning both front-end and back-end technologies to build robust applications.',
        },
        {
          imageUrl: 'https://i.postimg.cc/63kV44pq/Designer-2.jpg',
          link: '/contactus',
          courseDuration: "160 hours",
          title: 'Python Full Stack Development',
          description: 'Gain expertise in full-stack development using Python, covering everything from front-end frameworks to backend services.',
        },
        {
          imageUrl: 'https://i.postimg.cc/cLL3HBBT/Designer-3.jpg',
          link: '/contactus',
          courseDuration: "140 hours",
          title: 'MEARN Stack Development',
          description: 'Learn full-stack development with the MERN stack (MongoDB, Express.js,Angular, React, Node.js) to build powerful web applications.',
        },
        {
          imageUrl: 'https://i.postimg.cc/VNbdrGr9/Designer-4.jpg',
          link: '/contactus',
          courseDuration: "120 hours",
          title: 'MEAN Stack Development',
          description: 'Dive into full-stack development with the MEAN stack, including MongoDB, Express.js, Angular, and Node.js.',
        },
        {
          imageUrl: 'https://i.postimg.cc/RhPMbKJV/Designer-5.jpg',
          link: '/contactus',
          courseDuration: "90 hours",
          title: 'MySQL Database Management',
          description: 'Learn the ins and outs of MySQL, a widely-used relational database management system essential for back-end development.',
        },
        {
          imageUrl: 'https://i.postimg.cc/dtrFyb4V/Designer-6.jpg',
          link: '/contactus',
          courseDuration: "95 hours",
          title: 'Oracle Database Management',
          description: 'Master Oracle, the enterprise-level database management system, used in large-scale applications worldwide.',
        },
    ];
      
  return (
    <div className="padding-class courses-padding relative overflow-hidden min-h-screen bg-gray-50">
            <div className="relative p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-32">
                    <h1 className="text-6xl font-bold text-gray-800">Courses</h1>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courseList.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </div>
    
  );
}

export default Courses;
