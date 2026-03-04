import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Factory, 
  Building2, 
  Warehouse, 
  BarChart3, 
  Store,
  ArrowDownCircle,
  ShieldCheck,
  FileText,
  UserPlus,
  ChevronLeft,
  AlertTriangle
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const WHATSAPP_MESSAGE = encodeURIComponent("السلام عليكم، أرغب في طلب خدمة حلول منصة مدد ورفع نسبة الالتزام في حماية الإجور.");
const WHATSAPP_URL = `https://wa.me/966596901871?text=${WHATSAPP_MESSAGE}`;
const WHATSAPP_NUMBER = "+966596901871";

const TopBar = () => (
  <div className="bg-primary text-white py-2 px-4 sticky top-0 z-50 flex justify-center items-center gap-2 shadow-md">
    <MessageCircle className="w-5 h-5 text-secondary" />
    <span className="text-sm md:text-base font-bold">
      تواصل معنا عبر واتساب: 
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mx-2 hover:text-secondary transition-colors" 
        dir="ltr"
      >
        {WHATSAPP_NUMBER}
      </a>
    </span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-height-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 blur-xl"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: ["0%", "10%", "-10%", "0%"],
              x: ["0%", "5%", "-5%", "0%"]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            style={{ 
              width: Math.random() * 300 + 100 + "px", 
              height: Math.random() * 300 + 100 + "px" 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-6">
            ارفع التزامك في حماية الإجور إلى <span className="text-secondary">100%</span> في منصة مُدد
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            وحل مشاكل الغرامات والملاحظات بدون تحويل رواتب!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            حلول للمنشآت الكبيرة (من موظف واحد إلى آلاف الموظفين) - نتعامل بسرعة واحترافية وبدون أي تعقيدات تقنية.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary hover:bg-emerald-600 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-2xl shadow-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                تواصل الآن عبر واتساب
              </a>
            </Tilt>
            <a 
              href="#services" 
              className="flex items-center gap-2 text-primary border-2 border-primary/20 bg-white/50 backdrop-blur-sm px-10 py-4 rounded-2xl text-xl font-bold hover:bg-primary/5 transition-all"
            >
              تعرف على الخدمة
              <ArrowDownCircle className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StepsSection = () => {
  const steps = [
    {
      title: "تتواصل معنا على واتساب",
      description: "لإرسال بيانات المنشأة المطلوبة لنبدأ فوراً في معالجة طلبك.",
      icon: <UserPlus className="w-12 h-12 text-blue-600" />,
      step: "01"
    },
    {
      title: "يتم الرد عليك",
      description: "ليتم طلب ملفات ورفعها من عندنا بطريقة احترافية ومضمونة.",
      icon: <FileText className="w-12 h-12 text-emerald-600" />,
      step: "02"
    },
    {
      title: "تأكيد رفع الالتزام",
      description: "نؤكد إزالة ملاحظة حماية الإجور ورفع الالتزام إلى 100% في مُدد.",
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      step: "03"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-black text-primary mb-4"
          >
            الخدمة في 3 خطوات بسيطة
          </motion.h2>
          <p className="text-gray-500 text-lg">نحن نهتم بكل التفاصيل لراحتك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Tilt key={idx} tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.02} className="h-full">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 h-full flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:scale-110"></div>
                <div className="text-5xl font-black text-blue-100 absolute top-4 right-6 group-hover:text-blue-200 transition-colors">
                  {step.step}
                </div>
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetsSection = () => {
  const targets = [
    { name: "مصانع", icon: <Factory className="w-8 h-8" /> },
    { name: "شركات", icon: <Building2 className="w-8 h-8" /> },
    { name: "مؤسسات", icon: <Warehouse className="w-8 h-8" /> },
    { name: "مكاتب استشارية", icon: <BarChart3 className="w-8 h-8" /> },
    { name: "منشآت كبيرة", icon: <Store className="w-8 h-8" /> }
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">
          نخدم جميع أنواع المنشآت في المملكة
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {targets.map((target, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-secondary group-hover:border-secondary transition-all shadow-lg">
                {target.icon}
              </div>
              <span className="text-xl font-bold">{target.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "كان عندي ملاحظة في منصة مُدد بسبب عمال في إجازة، تواصلت معهم وتم الحل في نفس اليوم! الخدمة سريعة وموثوقة جداً، أنصح بهم بشدة.",
      name: "أحمد محمد",
      role: "مدير مصنع"
    },
    {
      text: "نسبتنا كانت متدنية بسبب موظفين هاربين، الفريق رفع الالتزام ليوم 100% خلال ساعات قليلة بدون تعقيدات، وفرت غرامات كبيرة جداً.",
      name: "سارة العلي",
      role: "مؤسسة تجارية"
    },
    {
      text: "أنصح بهم بشدة! خدمتهم خلصت مشكلة الملاحظات في مُدد بسرعة فائقة وتوفير كبير في الغرامات، خدمة احترافية جداً!",
      name: "خالد السالم",
      role: "مدير مؤسسة"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center text-primary mb-16">
          ماذا يقول عملاؤنا؟
        </h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper !pb-14"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="!w-[300px] md:!w-[500px]">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-xl flex flex-col items-center text-center">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="text-xl font-black text-primary">{t.name}</h4>
                  <p className="text-gray-500 font-bold">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const AchievementCard = ({ percentage, month, status, colorClass, rotateClass }: { 
    percentage: string, 
    month: string, 
    status: string, 
    colorClass: string,
    rotateClass: string
  }) => (
    <div className={`bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 transform ${rotateClass} hover:rotate-0 transition-all duration-500 max-w-md w-full`}>
      <div className="flex flex-col items-center mb-6">
        <div className={`w-32 h-32 rounded-full border-8 ${colorClass} flex items-center justify-center mb-2 shadow-inner`}>
          <div className="text-center">
            <div className="text-3xl font-black text-gray-800">{percentage}</div>
            <div className="text-xs text-gray-500">{month} (NaN)</div>
          </div>
        </div>
        <h4 className="text-2xl font-black text-primary">مؤسسة الراقية</h4>
        <div className="text-gray-500 text-sm mt-1" dir="rtl">رقم موحد: 1 - 1907351</div>
        <div className="text-gray-500 text-sm" dir="rtl">الرقم الوطني الموحد: 7019474464</div>
      </div>
      
      <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <div className="text-sm font-bold text-gray-400">الدخول بصفة :</div>
        <div className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl flex items-center gap-2 text-primary font-bold shadow-sm">
          <Building2 className="w-4 h-4" />
          صاحب عمل
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <span className={`${status === '100%' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'} px-6 py-2 rounded-full font-bold text-lg shadow-sm`}>
          {status === '100%' ? 'بعد المعالجة: التزام 100%' : 'قبل المعالجة: التزام 0%'}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-primary mb-4"
          >
            نماذج من إنجازاتنا في منصة مُدد
          </motion.h2>
          <p className="text-gray-500 text-lg">نحول التزام منشأتك من الصفر إلى التميز في وقت قياسي</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AchievementCard 
              percentage="0%" 
              month="فبراير" 
              status="0%" 
              colorClass="border-gray-100 border-t-gray-200"
              rotateClass="-rotate-3"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="bg-secondary p-4 rounded-full text-white animate-pulse">
              <ChevronLeft className="w-8 h-8" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AchievementCard 
              percentage="100%" 
              month="فبراير" 
              status="100%" 
              colorClass="border-emerald-500 border-t-emerald-400"
              rotateClass="rotate-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1500} scale={1.02}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-red-600 to-red-900 rounded-[40px] p-12 md:p-20 text-center text-white shadow-[0_50px_100px_-20px_rgba(220,38,38,0.4)] overflow-hidden group"
          >
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)] animate-pulse"></div>
            </div>

            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-md rounded-full mb-8 shadow-2xl border border-white/30"
            >
              <AlertTriangle className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
              تخلص من ملاحظات حماية الإجور اليوم!
            </h2>
            <h3 className="text-2xl md:text-4xl font-black text-yellow-300 mb-8 drop-shadow-md">
              تحذير: بادر بالحل قبل صدور الغرامات...
            </h3>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              لا تنتظر حتى تصل المخالفة لمؤسستك. فريقنا المختص جاهز الآن لمساعدتك في رفع الالتزام إلى 100% وإزالة كافة ملاحظات مُدد فوراً وبطريقة نظامية.
            </p>
            
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-red-700 hover:bg-yellow-400 hover:text-red-900 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group-hover:rotate-1"
            >
              <MessageCircle className="w-8 h-8" />
              تواصل معنا الآن عبر واتساب
            </a>

            {/* 3D Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-400/20 rounded-full blur-3xl"></div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-right">
        <h3 className="text-2xl font-black text-white mb-2">حلول منصة مُدد وحماية الإجور</h3>
        <p className="text-lg">شريكك الموثوق في حلول الموارد البشرية والالتزام.</p>
      </div>
      
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
        <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
      </div>

      <div className="text-center md:text-left">
        <p className="font-bold">جميع الحقوق محفوظة © 2024</p>
      </div>
    </div>
  </footer>
);

export function App() {
  return (
    <div className="font-cairo selection:bg-secondary/30 selection:text-primary">
      <TopBar />
      <HeroSection />
      <AchievementsSection />
      <StepsSection />
      <TargetsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
      {/* Floating WhatsApp Button (Mobile) */}
      <a 
        href={WHATSAPP_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden bg-secondary text-white p-4 rounded-full shadow-2xl animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
