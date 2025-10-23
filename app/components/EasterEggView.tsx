export default function EasterEggView() {
  const messages = Array(500).fill("You are amazing and you will rock your thesis! ❤️")

  return (
    <div className="fixed inset-0 bg-brand-pink-500 bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="text-white text-center">
        <h2 className="text-5xl font-bold mb-8">A Special Message for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {messages.map((msg, index) => (
            <div key={index} className="bg-white text-brand-pink-700 p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-md">{msg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}