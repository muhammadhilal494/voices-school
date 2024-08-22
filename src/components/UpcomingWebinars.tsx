'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

// data/webinars.js
const featuredwebinars = [
    {
      title: "Building Modern Web Applications with Next.js",
      description: "Learn how to build fast, scalable web applications using Next.js.",
      slug: "building-modern-web-applications-nextjs",
      isFeatured: true,
    },
    {
      title: "Introduction to React",
      description: "A beginner-friendly webinar to get you started with React.",
      slug: "introduction-to-react",
      isFeatured: false,
    },
    {
      title: "Advanced State Management with Redux",
      description: "Master advanced state management techniques using Redux in your applications.",
      slug: "advanced-state-management-redux",
      isFeatured: true,
    },
    {
      title: "Deploying Next.js Applications",
      description: "Learn how to deploy your Next.js applications to various hosting providers.",
      slug: "deploying-nextjs-applications",
      isFeatured: false,
    },
  ];
  
//   export default webinars;
  

  return (
    <div className=" p-12 bg-gray-900">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6">
            <div className=" text-center">
                <h2 className=" text-base text-teal-600 font-semibold tracking-wide upppercase">
                    FEATURED WEBINARS
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
                 sm: text-4xl">Enhance Your Musical Journey 
                </p>
            </div>
            <div className="mt-10">
                <HoverEffect items={featuredwebinars.map(webinar =>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                ))} />
            </div>
            <div className="mt-10 text-center">
                <Link href={"/"}
                className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
                 hover:bg-gray-100 transition duration-200">
                    View all Webinars
                 </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars