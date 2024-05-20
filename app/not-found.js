export default function notFound() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl md:text-7xl p-5"><span className="font-bold">404</span> Page Not Found</h1>
            <p className="text-md text-justify p-5">"Oops! Looks like you've stumbled into the void. Don't worry, we're experts at finding lost pages. Let's navigate back together!"</p>
            <a href="./" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-400 duration-100">Back to Homepage</a>
        </div>
    )
}
