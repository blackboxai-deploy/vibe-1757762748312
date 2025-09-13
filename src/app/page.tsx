export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, World! 👋
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to your simple Next.js application
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500">Built with Next.js & Tailwind CSS</span>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                Ready to build something amazing?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}