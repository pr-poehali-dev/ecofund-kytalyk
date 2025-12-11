import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: "Мониторинг популяции стерха",
      description: "Систематическое наблюдение за численностью и миграционными путями стерхов в Якутии",
      icon: "Binoculars",
      image: "https://cdn.poehali.dev/files/22 Стерх в небе.JPG"
    },
    {
      title: "Восстановление мест обитания",
      description: "Сохранение и восстановление водно-болотных угодий для гнездования краснокнижных птиц",
      icon: "Trees",
      image: "https://cdn.poehali.dev/files/Тундра 1.png.jpg"
    },
    {
      title: "Образовательные программы",
      description: "Экологическое просвещение школьников и студентов о важности сохранения биоразнообразия",
      icon: "GraduationCap",
      image: "https://cdn.poehali.dev/files/Экоуроки.png"
    }
  ];

  const team = [
    { name: "Анна Соловьёва", role: "Директор фонда", avatar: "A" },
    { name: "Иван Петров", role: "Орнитолог", avatar: "И" },
    { name: "Мария Николаева", role: "Координатор волонтёров", avatar: "М" }
  ];

  const lessons = [
    { title: "Кто такой стерх?", description: "Узнайте о белом журавле — символе Якутии" },
    { title: "Редкие виды Якутии", description: "Краснокнижные животные и растения республики" },
    { title: "Почему важно сохранять природу?", description: "Значение биоразнообразия для экосистемы" },
    { title: "Журавли Якутии", description: "Виды журавлей, обитающих в регионе" },
    { title: "Охрана природы", description: "Методы защиты редких видов в Якутии" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/yuvarlak-icinde-simge-seklinde-ucan-leylek-sticker-mavi-400x400.png" 
              alt="Логотип Кыталык" 
              className="h-12 w-auto"
            />
            <span className="text-2xl text-foreground" style={{fontFamily: 'Cormorant, serif', fontWeight: 600, letterSpacing: '0.02em'}}>Экологический фонд</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition">О фонде</a>
            <a href="#projects" className="text-foreground hover:text-primary transition">Проекты</a>
            <a href="#lessons" className="text-foreground hover:text-primary transition">Уроки</a>
            <a href="#volunteer" className="text-foreground hover:text-primary transition">Волонтёрство</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Поддержать</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Сохраняем стерхов <span className="text-primary">вместе</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Экологический фонд "Кыталык" защищает популяцию белого журавля и других краснокнижных видов в Республике Саха (Якутия)
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Heart" className="mr-2" size={20} />
                  Помочь проекту
                </Button>
                <Button size="lg" variant="outline">Узнать больше</Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/22 Стерх в небе.JPG" 
                alt="Стерх в полёте" 
                className="shadow-2xl w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Чем мы помогаем стерхам?</h2>
            <p className="text-lg text-muted-foreground">Три направления нашей работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Защищаем</h3>
              <p className="text-muted-foreground">
                Охраняем места гнездования, проводим мониторинг популяции и предотвращаем угрозы для стерхов
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="BookOpen" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Просвещаем</h3>
              <p className="text-muted-foreground">
                Проводим экологические уроки, рассказываем о важности сохранения редких видов
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="HandHeart" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Помогаем</h3>
              <p className="text-muted-foreground">
                Реабилитируем раненых птиц, восстанавливаем природные территории
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Актуальные проекты</h2>
            <p className="text-lg text-muted-foreground">Над чем мы работаем сейчас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name={project.icon} className="text-primary" size={24} />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Подробнее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Участники фонда</h2>
            <p className="text-lg text-muted-foreground">Команда профессионалов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-all">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="lessons" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Экологические уроки</h2>
            <p className="text-lg text-muted-foreground">Узнайте больше о природе Якутии</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {lessons.map((lesson, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-blue-50/50">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {lesson.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {lesson.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="volunteer" className="py-20 px-4 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Users" className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-6">Станьте волонтёром</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к нашей команде и помогите сохранить природу Якутии для будущих поколений
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">677000, Республика Саха (Якутия), г. Якутск, ул. Кирова, 18 В, офис 1207</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (914) 300-50-50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">kytalyk2020@mail.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/yuvarlak-icinde-simge-seklinde-ucan-leylek-sticker-mavi-400x400.png" 
                  alt="Логотип Кыталык" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="text-xl" style={{fontFamily: 'Cormorant, serif', fontWeight: 600, letterSpacing: '0.02em'}}>Экологический фонд</span>
              </div>
              <p className="text-white/70">Сохраняем природу Якутии</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition">О фонде</a></li>
                <li><a href="#projects" className="hover:text-white transition">Проекты</a></li>
                <li><a href="#lessons" className="hover:text-white transition">Уроки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Участие</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#volunteer" className="hover:text-white transition">Волонтёрство</a></li>
                <li><a href="#" className="hover:text-white transition">Поддержать</a></li>
                <li><a href="#contact" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 Экологический фонд "Кыталык". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;