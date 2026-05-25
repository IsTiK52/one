export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          Доступно для новых клиентов
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Сделаю вам сайт<br />за 3 дня
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
          Лендинг, портфолио или интернет-магазин. Современный дизайн, быстрая загрузка, деплой на Vercel.
        </p>
        <a href="https://t.me/wyikai" target="_blank" rel="noreferrer"
          className="inline-block bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
          Написать и заказать
        </a>
        <p className="text-gray-400 text-sm mt-4">Отвечаю в течение часа</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Что я делаю</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Лендинг", price: "от $99", desc: "Одна страница которая продаёт." },
            { icon: "🛒", title: "Магазин", price: "от $199", desc: "Каталог, корзина, оплата через Stripe." },
            { icon: "💼", title: "Портфолио", price: "от $79", desc: "Сайт-визитка для фрилансера." },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="text-sm font-semibold text-green-600">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Как это работает</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Пишешь мне", desc: "Рассказываешь что нужно в Telegram" },
              { step: "02", title: "Я делаю", desc: "За 3 дня готов дизайн и рабочий сайт" },
              { step: "03", title: "Получаешь", desc: "Сайт онлайн, ты доволен" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-3xl font-bold text-gray-200 w-12 shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Готов начать?</h2>
        <p className="text-gray-500 mb-8">Первая консультация бесплатно</p>
        <a href="https://t.me/wyikai" target="_blank" rel="noreferrer"
          className="inline-block bg-black text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
          Написать в Telegram
        </a>
      </section>

      <footer className="border-t border-gray-100 py-6 text-center text-gray-400 text-sm">
        2026 — Сделано на Next.js + Vercel
      </footer>
    </main>
  );
}
