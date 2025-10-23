export default function QuotesSection() {
  return (
    <div className="py-20 px-4 bg-brand-pink-100 text-brand-pink-900">
      <h2 className="text-4xl font-bold text-center mb-12">Her Quotes</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">"This is a placeholder for a beautiful quote."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">"This is another placeholder for a beautiful quote."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">"And one more placeholder for a beautiful quote."</p>
        </div>
      </div>
    </div>
  );
}