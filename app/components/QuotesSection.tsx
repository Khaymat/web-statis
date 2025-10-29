export default function QuotesSection() {
  return (
    <div className="py-20 px-4">
      <h2 className="text-6xl font-great-vibes text-center mb-12 text-[rgb(var(--primary))]">Her Quotes</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[rgba(var(--input),0.5)] p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-lg text-center text-[rgb(var(--foreground-rgb))]">"This is a placeholder for a beautiful quote."</p>
        </div>
        <div className="bg-[rgba(var(--input),0.5)] p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-lg text-center text-[rgb(var(--foreground-rgb))]">"This is another placeholder for a beautiful quote."</p>
        </div>
        <div className="bg-[rgba(var(--input),0.5)] p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-lg text-center text-[rgb(var(--foreground-rgb))]">"And one more placeholder for a beautiful quote."</p>
        </div>
      </div>
    </div>
  );
}