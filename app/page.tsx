export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-emerald-950" style={{fontFamily: "system-ui, sans-serif"}}>
      <div className="bg-emerald-950 text-white text-center py-2 text-sm">
        Осталось <strong>2 места</strong> в мае
      </div>
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block bg-emerald-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Сайты для бизнеса в Казахстане
        </span>
        <h1 className="text-5xl font-black leading-tight mb-6 tracking-tight">
          Твои конкуренты уже получают<br />
          <span className="text-yellow-600">клиентов из интернета.</span><br />
          А ты?
        </h1>
        <p className="text-xl text-emerald-800 mb-10 max-w-2xl mx-auto">
          Пока у тебя нет сайта — клиенты уходят к тем у кого есть. Я сделаю тебе продающий сайт за 3 дня.
        </p>
        <a href="https://t.me/wyikai" target="_blank" rel="noreferrer"
          className="inline-block bg-emerald-900 text-white text-xl font-bold px-10 py-5 rounded-2xl hover:bg-emerald-800 transition-colors">
          Написать в Telegram
        </a>
        <p className="text-emerald-700 text-sm mt-4">Бесплатная консультация. Отвечаю за 30 минут.</p>
      </section>
      <section className="bg-emerald-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12">Узнаёшь себя?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Клиенты спрашивают есть ли у вас сайт — и уходят","Реклама в Instagram уже не работает как раньше","Конкуренты в топе Google, а ты нет","Нет времени разбираться как сделать сайт самому","Знакомые делали — получилось некрасиво","Не знаешь сколько это стоит"].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-stone-50 border border-red-100 rounded-xl p-4">
                <span className="text-red-500 text-xl">x</span>
                <p className="text-emerald-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-4">Что ты получишь</h2>
        <div className="space-y-4">
          {[
            {icon:"lightning",title:"Готово за 3 дня",desc:"Никаких подождите месяц. Через 3 дня сайт уже работает."},
            {icon:"phone",title:"Идеально на телефоне",desc:"95% клиентов зайдут с телефона. Сайт будет идеальным на любом экране."},
            {icon:"target",title:"Заточен на продажи",desc:"Каждая кнопка ведёт к одному — клиент должен написать тебе."},
            {icon:"search",title:"Google найдёт тебя",desc:"Базовое SEO в подарок — жители твоего города найдут тебя в поиске."},
            {icon:"free",title:"Хостинг навсегда бесплатный",desc:"Сайт живёт на Vercel — это бесплатно. Ты не платишь ничего после."},
            {icon:"fix",title:"Правки без доп. оплаты",desc:"В течение 7 дней после сдачи правлю всё что не понравится."},
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 border border-emerald-200 rounded-xl p-5 hover:border-yellow-400 transition-colors">
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-emerald-800">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12">Прозрачные цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {name:"Старт",price:"50 000 тг",usd:"~$99",features:["1 страница","Контакты и карта","Форма заявки","Мобильная версия","Хостинг бесплатно"],popular:false},
              {name:"Бизнес",price:"100 000 тг",usd:"~$199",features:["До 5 страниц","Галерея работ","Отзывы клиентов","SEO оптимизация","Правки 14 дней"],popular:true},
              {name:"Магазин",price:"200 000 тг",usd:"~$399",features:["Каталог товаров","Корзина и оплата","Управление заказами","До 50 товаров"],popular:false},
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 border-2 bg-stone-50 ${plan.popular ? "border-yellow-600 shadow-xl" : "border-emerald-200"}`}>
                {plan.popular && <div className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">ПОПУЛЯРНЫЙ</div>}
                <h3 className="font-black text-xl mb-1">{plan.name}</h3>
                <div className="mb-4"><span className="text-3xl font-black">{plan.price}</span><span className="text-emerald-700 text-sm ml-2">{plan.usd}</span></div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm"><span className="text-yellow-600 font-bold">ok</span>{f}</li>))}
                </ul>
                <a href="https://t.me/wyikai" target="_blank" rel="noreferrer"
                  className={`block text-center py-3 rounded-xl font-bold transition-colors ${plan.popular ? "bg-emerald-900 text-white hover:bg-emerald-800" : "bg-emerald-100 text-emerald-950 hover:bg-gray-200"}`}>
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-12">Как это работает</h2>
        <div className="space-y-8">
          {[
            {step:"01",title:"Пишешь мне в Telegram",desc:"Рассказываешь о бизнесе. 15 минут разговора."},
            {step:"02",title:"Я делаю макет",desc:"За 24 часа показываю первый вариант. Ты говоришь что менять."},
            {step:"03",title:"Финальная версия",desc:"Через 3 дня сайт готов и размещён в интернете."},
            {step:"04",title:"Получаешь клиентов",desc:"Кидаешь ссылку везде. Клиенты находят тебя сами."},
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <span className="text-5xl font-black text-green-100 w-16 shrink-0">{item.step}</span>
              <div className="pt-2">
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-emerald-800">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 text-center px-6">
        <p className="text-yellow-600 font-semibold mb-3">Осталось 2 места в мае</p>
        <h2 className="text-4xl font-black mb-4">Готов начать?</h2>
        <p className="text-emerald-800 mb-10 max-w-lg mx-auto">Напиши прямо сейчас и получи бесплатную консультацию</p>
        <a href="https://t.me/wyikai" target="_blank" rel="noreferrer"
          className="inline-block bg-emerald-900 text-white text-xl font-bold px-10 py-5 rounded-2xl hover:bg-emerald-800 transition-colors">
          Написать в Telegram
        </a>
        <p className="text-emerald-700 text-sm mt-4">Отвечаю в течение 30 минут</p>
      </section>
      <footer className="border-t border-emerald-100 py-6 text-center text-emerald-700 text-sm">
        2026 — Сайты для бизнеса в Казахстане
      </footer>
    </main>
  );
}
