import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Heart" className="text-blue-600" size={32} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Центр здоровья
                </h1>
                <p className="text-sm text-gray-600">
                  Красноармейск, Саратовская область
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#directions"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Направления
              </a>
              <a
                href="#specialists"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Специалисты
              </a>
              <a
                href="#prices"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ваше здоровье —<br />
                наша забота
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Современный медицинский центр с опытными специалистами в области
                кардиологии, терапии и диагностики
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/de406bdd-642c-49d6-b3fe-87a0b36071f2.jpg"
                alt="Медицинский центр"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши направления
            </h2>
            <p className="text-lg text-gray-600">
              Профессиональная медицинская помощь по основным направлениям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Heart"
                  className="mx-auto mb-4 text-red-500"
                  size={48}
                />
                <CardTitle className="text-xl">Кардиология</CardTitle>
                <CardDescription>
                  Диагностика и лечение заболеваний сердечно-сосудистой системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ЭКГ и холтеровское мониторирование</li>
                  <li>• Эхокардиография</li>
                  <li>• Консультации кардиолога</li>
                  <li>• Лечение гипертонии</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Stethoscope"
                  className="mx-auto mb-4 text-blue-500"
                  size={48}
                />
                <CardTitle className="text-xl">Терапия</CardTitle>
                <CardDescription>
                  Общая терапия и лечение внутренних болезней
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Общие консультации терапевта</li>
                  <li>• Лечение ОРВИ и гриппа</li>
                  <li>• Ведение хронических заболеваний</li>
                  <li>• Профилактические осмотры</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Activity"
                  className="mx-auto mb-4 text-green-500"
                  size={48}
                />
                <CardTitle className="text-xl">Диагностика</CardTitle>
                <CardDescription>
                  Современные методы диагностики и лабораторные исследования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• УЗИ органов и систем</li>
                  <li>• Лабораторные анализы</li>
                  <li>• Функциональная диагностика</li>
                  <li>• Рентгенография</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши специалисты
            </h2>
            <p className="text-lg text-gray-600">
              Опытные врачи с многолетним стажем
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/4c271542-5431-43f0-bb14-104e2f7f7444.jpg"
                  alt="Команда врачей"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Иванова А.В.</CardTitle>
                <Badge variant="secondary">Кардиолог</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Стаж: 15 лет</p>
                <p className="text-sm text-gray-500">
                  Специализация: заболевания сердца, гипертония, профилактика
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/4c271542-5431-43f0-bb14-104e2f7f7444.jpg"
                  alt="Команда врачей"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Петров С.И.</CardTitle>
                <Badge variant="secondary">Терапевт</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Стаж: 12 лет</p>
                <p className="text-sm text-gray-500">
                  Специализация: внутренние болезни, профилактика,
                  диспансеризация
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/img/4c271542-5431-43f0-bb14-104e2f7f7444.jpg"
                  alt="Команда врачей"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle>Сидорова М.П.</CardTitle>
                <Badge variant="secondary">Диагност</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Стаж: 10 лет</p>
                <p className="text-sm text-gray-500">
                  Специализация: УЗИ, функциональная диагностика
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Цены на услуги
            </h2>
            <p className="text-lg text-gray-600">
              Доступные цены на качественную медицинскую помощь
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Кардиология</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Консультация кардиолога</span>
                    <span className="font-semibold">2500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ЭКГ</span>
                    <span className="font-semibold">800 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Эхокардиография</span>
                    <span className="font-semibold">3200 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Холтер мониторинг</span>
                    <span className="font-semibold">4500 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Терапия</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Консультация терапевта</span>
                    <span className="font-semibold">2000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Профосмотр</span>
                    <span className="font-semibold">1500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Диспансеризация</span>
                    <span className="font-semibold">3500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Справка</span>
                    <span className="font-semibold">500 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Диагностика</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>УЗИ органов брюшной полости</span>
                    <span className="font-semibold">2200 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Анализ крови общий</span>
                    <span className="font-semibold">600 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Анализ крови биохимический</span>
                    <span className="font-semibold">1200 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рентгенография</span>
                    <span className="font-semibold">1800 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для записи на прием
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Как нас найти</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="MapPin"
                    className="text-blue-600 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-medium">Адрес:</p>
                    <p className="text-gray-600">
                      г. Красноармейск, Саратовская область
                    </p>
                    <p className="text-gray-600">ул. Центральная, 15</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Телефон:</p>
                    <p className="text-gray-600">+7 (845) 123-45-67</p>
                    <p className="text-gray-600">+7 (903) 987-65-43</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Режим работы:</p>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                    <p className="text-gray-600">Сб: 9:00 - 16:00</p>
                    <p className="text-gray-600">Вс: выходной</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">info@zdravcenter.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Записаться на прием
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <input
                        className="w-full p-3 border rounded-lg"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        className="w-full p-3 border rounded-lg"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Специалист
                      </label>
                      <select className="w-full p-3 border rounded-lg">
                        <option>Выберите специалиста</option>
                        <option>Кардиолог</option>
                        <option>Терапевт</option>
                        <option>Диагност</option>
                      </select>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Heart" className="text-blue-400" size={24} />
                <h3 className="text-lg font-semibold">Центр здоровья</h3>
              </div>
              <p className="text-gray-400">
                Современный медицинский центр в Красноармейске. Ваше здоровье —
                наша главная задача.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    href="#directions"
                    className="hover:text-white transition-colors"
                  >
                    Направления
                  </a>
                </li>
                <li>
                  <a
                    href="#specialists"
                    className="hover:text-white transition-colors"
                  >
                    Специалисты
                  </a>
                </li>
                <li>
                  <a
                    href="#prices"
                    className="hover:text-white transition-colors"
                  >
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Красноармейск, ул. Центральная, 15</li>
                <li>+7 (845) 123-45-67</li>
                <li>info@zdravcenter.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Центр здоровья. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
