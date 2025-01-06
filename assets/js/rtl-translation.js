const translations = {
  ar: {
    links: {
      Home: "الصفحة الرئيسية",
      listings: "القوائم",
      account: {
        account: "الحساب",
        auth: {
          authPage: "صفحات التسجيل",
          signIn: "تسجيل الدخول",
          signUp: "التسجيل",
          passRecovery: "استعادة كلمة المرور",
        },
        myProfile: "حسابى",
        myListings: "قوائمى",
        reviews: "المراجعات",
        fav: "المفضله",
        payDetails: "معلومات الدفع",
        accSettings: "اعدادات الحساب",
      },
      pages: {
        pages: "الصفحات",
        about: "نبذة عنا",
        blog: "المدونه",
        Contact: "اتصل بنا",
        help: "المساعده",
        error: "خطأ 404",
        terms: "الشروط والأحكام",
      },
      profile: {
        profile: "الملف الشخصي",
        myAccount: "حسابى",
        myListingsf: "قوائمى",
        addListings: "إضافة قوائم",
        helpCenter: "مركز المساعده",
        privacy: "سياسة الخصوصية",
      },
      quickLinks: {
        quickLinks: "روابط سريعة",
        dailyRen: "الإيجار اليومي",
        loTerm: "الإيجار طويل الأجل",
        popOffers: "العروض الشائعة",
      },
    },

    btn: {
      propAdd: {
        property: "خاصية",
        add: "أضافة",
      },
      search: "بحث",
      findHo: "ابحث عن منزل",
      placeAd: "ضع إعلاناً",
      findRetal: "ابحث عن إيجار",
      verf: "تم التحقق",
      new: "جديد",
      featured: "مميز",
      startNow: "ابدأ الأن",
      from: "تبدأ من"
    },

    text: {
      heroheading: "طريقة سهلة للعثور على عقار مثالي",
      heroP: "نحن نقدم خدمة متكاملة لبيع أو شراء أو تأجير العقارات.",
      offer: "عرض",
      houses: "المنازل",
      apart: "شقق سكنية",
      rooms: "غرف",
      commer: "تجاري",
      daily: "الإيجار اليومي",
      newBuil: "المبانى الجديده",
      more: "المزيد",
      offices: "المكاتب",
      wareH: "المستودعات",
      retSpa: "مساحات البيع بالتجزئة",
      townH: "منازل ريفية",
      vacH: "بيوت العطلات",
      buyProp: "اشتر عقاراً",
      sellProp: "بيع عقار",
      rentProp: "استئجار عقار",
      topOffers: "أفضل العروض",
      forRent: "للإيجار",
      forSale: "للبيع",
      addedtod: "تمت الإضافة اليوم",
      calcprop: "احسب تكلفة عقارك",
      calcpropP:
        "التقييم العقاري هو إجراء يسمح لك بتحديد متوسط القيمة السوقية للعقارات (شقة، منزل، أرض، إلخ).",
      searchByCity: "البحث حسب المدينة",
      partners: "شركاؤنا",
      topAgents: "كبار وكلاء العقارات",
      agent1: "وكيل مجموعة إمبريال العقارية",
      agent2: "وكيل مجموعة أوربان نيست العقارية",
      agent3: "وكيل عقارات برايم باث للعقارات",
      agent4: "وكيل عقارات هاربور فيو",
      latestBlog: "أحدث المدونات",
      blog1t: "نصيحة الإيجار",
      blog1h: "ما يجب معرفته عند استئجار شقة",
      blog1p:
        "من الصعب جداً العثور على شقة جيدة للإيجار طويل الأجل في المدن الكبيرة. وبالإضافة إلى ذلك، يمكن أن يواجه المستأجرون المحتملون مشاكل...",
      blog2t: "نصائح استثمارية",
      blog2h: "أنواع المساكن الفاخرة",
      blog2p:
        "ما هو السكن الفاخر واضح لكل شخص. السكن يتميز بمزيد من الراحة والداخلية والجودة والجودة وال...",
      blog3t: "تحسين المنزل",
      blog3h: "كيفية تحديث منزلك بميزانية محدودة",
      blog3p:
        "ليس من الضروري أن يكون تحديث منزلك مكلفاً. فيما يلي بعض النصائح المناسبة لميزانيتك لإضفاء لمسة عصرية على منزلك...",
      by: "بواسطة",
      advice: "احصل على نصائح حصرية",
      dowFinder: "تنزيل تطبيق Finder",
      dowP: "اعثر على كل ما تحتاجه لشراء وبيع واستئجار العقارات في تطبيقنا الجديد Finder!",
      allright: " © جميع الحقوق محفوظة. صُنع بواسطة",
    },
  },
};

const direction = localStorage.getItem("direction");

if (direction === "rtl") {
  // Links
  document.getElementById("home").innerText = translations.ar.links.Home;
  document.getElementById("listings").innerText =
    translations.ar.links.listings;
  document.getElementById("account").innerText =
    translations.ar.links.account.account;
  document.getElementById("auth").innerText =
    translations.ar.links.account.auth.authPage;
  document.getElementById("signIn").innerText =
    translations.ar.links.account.auth.signIn;
  document.querySelectorAll(".signUp").forEach(e => {
    e.innerText = translations.ar.links.account.auth.signUp;
  })
  document.getElementById("passrecovery").innerText =
    translations.ar.links.account.auth.passRecovery;
  document.getElementById("passrecovery").innerText =
    translations.ar.links.account.auth.passRecovery;
  document.getElementById("myProfile").innerText =
    translations.ar.links.account.myProfile;
  document.getElementById("myListings").innerText =
    translations.ar.links.account.myListings;
  document.getElementById("reviews").innerText =
    translations.ar.links.account.reviews;
  document.getElementById("fav").innerText = translations.ar.links.account.fav;
  document.getElementById("payment").innerText =
    translations.ar.links.account.payDetails;
  document.getElementById("settings").innerText =
    translations.ar.links.account.accSettings;
  document.getElementById("pages").innerText =
    translations.ar.links.pages.pages;
  document.getElementById("about").innerText =
    translations.ar.links.pages.about;
  document.getElementById("blog").innerText = translations.ar.links.pages.blog;
  document.getElementById("contact").innerText =
    translations.ar.links.pages.Contact;
  document.getElementById("help").innerText = translations.ar.links.pages.help;
  document.getElementById("error").innerText =
    translations.ar.links.pages.error;
  document.getElementById("terms").innerText =
    translations.ar.links.pages.terms;
  document.querySelectorAll(".quickLinks").forEach(li => {
    li.innerText = translations.ar.links.quickLinks.quickLinks;
  });
  document.querySelectorAll(".profile").forEach(li => {
    li.innerText = translations.ar.links.profile.profile;
  });

  document.getElementById("dailyRen").innerText = translations.ar.links.quickLinks.dailyRen
  document.getElementById("loTerm").innerText = translations.ar.links.quickLinks.loTerm
  document.getElementById("buyProperty").innerText = translations.ar.text.buyProp;
  document.getElementById("sellProperty").innerText = translations.ar.text.sellProp;
  document.getElementById("popOffers").innerText = translations.ar.links.quickLinks.popOffers
  document.getElementById("myAccount").innerText = translations.ar.links.profile.myAccount
  document.getElementById("myListingsf").innerText = translations.ar.links.profile.myListingsf
  document.getElementById("addListings").innerText = translations.ar.links.profile.addListings
  document.getElementById("helpCenter").innerText = translations.ar.links.profile.helpCenter
  document.getElementById("privacy").innerText = translations.ar.links.profile.privacy

  // btns
  document.getElementById("add").innerText = translations.ar.btn.propAdd.add;
  document.getElementById("property").innerText =
    translations.ar.btn.propAdd.property;
  document.getElementById("search").innerText = translations.ar.btn.search;
  document.getElementById("findHo").innerText = translations.ar.btn.findHo;
  document.getElementById("placeAd").innerText = translations.ar.btn.placeAd;
  document.getElementById("findRetal").innerText =
    translations.ar.btn.findRetal;
  document.querySelectorAll(".verf").forEach((e) => {
    e.innerText = translations.ar.btn.verf;
  });
  document.querySelectorAll(".new").forEach((e) => {
    e.innerText = translations.ar.btn.new;
  });
  document.querySelectorAll(".startNow").forEach((e) => {
    e.innerText = translations.ar.btn.startNow;
  });
  document.querySelectorAll(".from").forEach((e) => {
    e.innerText = translations.ar.btn.from;
  });

  // text
  document.getElementById("heroheading").innerText =
    translations.ar.text.heroheading;
  document.getElementById("heroP").innerText = translations.ar.text.heroP;
  document.querySelectorAll(".offer").forEach((e) => {
    e.innerText = translations.ar.text.offer;
  });

  document.getElementById("houses").innerText = translations.ar.text.houses;
  document.getElementById("apart").innerText = translations.ar.text.apart;
  document.getElementById("commer").innerText = translations.ar.text.commer;
  document.getElementById("daily").innerText = translations.ar.text.daily;
  document.getElementById("newBuil").innerText = translations.ar.text.newBuil;
  document.getElementById("more").innerText = translations.ar.text.more;
  document.getElementById("offices").innerText = translations.ar.text.offices;
  document.getElementById("wareH").innerText = translations.ar.text.wareH;
  document.getElementById("retSpa").innerText = translations.ar.text.retSpa;
  document.getElementById("townH").innerText = translations.ar.text.townH;
  document.getElementById("vacH").innerText = translations.ar.text.vacH;
  document.getElementById("buyProp").innerText = translations.ar.text.buyProp;
  document.getElementById("sellProp").innerText = translations.ar.text.sellProp;
  document.getElementById("rentProp").innerText = translations.ar.text.rentProp;
  document.getElementById("topOffers").innerText =
    translations.ar.text.topOffers;
  document.querySelectorAll(".forRent").forEach((e) => {
    e.innerText = translations.ar.text.forRent;
  });
  document.querySelectorAll(".forSale").forEach((e) => {
    e.innerText = translations.ar.text.forSale;
  });
  document.querySelectorAll(".apart").forEach((e) => {
    e.innerText = translations.ar.text.apart;
  });
  document.querySelectorAll(".houses").forEach((e) => {
    e.innerText = translations.ar.text.houses;
  });
  document.querySelectorAll(".rooms").forEach((e) => {
    e.innerText = translations.ar.text.rooms;
  });
  document.querySelectorAll(".commer").forEach((e) => {
    e.innerText = translations.ar.text.commer;
  });
  document.getElementById("addedtod").innerText = translations.ar.text.addedtod;
  document.querySelectorAll(".featured").forEach((e) => {
    e.innerText = translations.ar.btn.featured;
  });
  document.getElementById("calcprop").innerText = translations.ar.text.calcprop;
  document.getElementById("calcpropP").innerText =
    translations.ar.text.calcpropP;
  document.getElementById("searchByCity").innerText =
    translations.ar.text.searchByCity;
  document.getElementById("partners").innerText = translations.ar.text.partners;
  document.getElementById("topAgents").innerText =
    translations.ar.text.topAgents;
  document.getElementById("agent1").innerText = translations.ar.text.agent1;
  document.getElementById("agent2").innerText = translations.ar.text.agent2;
  document.getElementById("agent3").innerText = translations.ar.text.agent3;
  document.getElementById("agent4").innerText = translations.ar.text.agent4;
  document.getElementById("latestBlog").innerText =
    translations.ar.text.latestBlog;
  document.querySelectorAll(".by").forEach((e) => {
    e.innerText = translations.ar.text.by;
  });
  document.getElementById("blog1t").innerText = translations.ar.text.blog1t;
  document.getElementById("blog1h").innerText = translations.ar.text.blog1h;
  document.getElementById("blog1p").innerText = translations.ar.text.blog1p;
  document.getElementById("blog2t").innerText = translations.ar.text.blog2t;
  document.getElementById("blog2h").innerText = translations.ar.text.blog2h;
  document.getElementById("blog2p").innerText = translations.ar.text.blog2p;
  document.getElementById("blog3t").innerText = translations.ar.text.blog3t;
  document.getElementById("blog3h").innerText = translations.ar.text.blog3h;
  document.getElementById("blog3p").innerText = translations.ar.text.blog3p;
  document.getElementById("advice").innerText = translations.ar.text.advice;
  document.getElementById("dowFinder").innerText = translations.ar.text.dowFinder;
  document.getElementById("dowP").innerText = translations.ar.text.dowP;
  document.getElementById("allright").innerText = translations.ar.text.allright;
}
