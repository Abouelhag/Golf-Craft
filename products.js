// ============================================================
// 🛒 جولف كرافت – الملف الشامل للمحلات والمنتجات
// ============================================================

const shops = [
    { id: 'grocery',    name: 'بقالة',         emoji: '🛒', categories: ['dairy', 'pantry', 'beverages', 'cleaning'] },
    { id: 'vegetables', name: 'خضار وفاكهة',   emoji: '🥬', categories: ['fruits', 'vegetables'], image: 'https://i.ibb.co/rGYk6S2p/1.jpg' },
    { id: 'meat',       name: 'لحوم',          emoji: '🥩', categories: ['meat'], image: 'https://i.ibb.co/1tn52HjX/1.jpg' },
    { id: 'chicken',    name: 'دواجن',         emoji: '🍗', categories: ['poultry'], image: 'https://i.ibb.co/BHVVm2yP/1.jpg' },
    { id: 'coffee',     name: 'بن',            emoji: '☕', categories: ['coffee'], image: 'https://i.ibb.co/My5KmmTB/1.jpg' },
    { id: 'roastery',   name: 'محمصات',        emoji: '🥜', categories: ['snacks'], image: 'https://i.ibb.co/Qj3zfG96/1.jpg' },
    { id: 'spices',     name: 'عطارة',         emoji: '🌿', categories: ['spices'], image: 'https://i.ibb.co/GfxfwGp3/1.jpg' },
    { id: 'sandwiches', name: 'سندويتشات',     emoji: '🥪', categories: ['restaurant'], image: 'https://i.ibb.co/DDwqJCZ4/1.jpg' },
    { id: 'bakery',     name: 'مخبوزات',       emoji: '🥖', categories: ['bakery'], image: 'https://i.ibb.co/zhW7TY71/1.jpg' },
    { id: 'packages',   name: 'باقات شهرية',   emoji: '📦', categories: ['packages'], image: '' }
];

const products = [
    // ===== بقالة: ألبان وبيض =====
    { id: 14, name: 'بيض بلدي', emoji: '🥚', weight: '12 بيضة', price: 130.00, cat: 'dairy' },
    { id: 15, name: 'جبنة رومي', emoji: '🧀', weight: '1000 جم', price: 299.99, cat: 'dairy' },
    { id: 17, name: 'زبدة', emoji: '🧈', weight: '250 جم', price: 140.00, cat: 'dairy' },
    { id: 66, name: 'جبنة طعمة مثلثات', emoji: '🧀', weight: '8 قطع', price: 39.99, cat: 'dairy' },
    { id: 74, name: 'بخيره لبن كامل الدسم', emoji: '🥛', weight: '1000 مللي', price: 40.00, cat: 'dairy' },
    { id: 81, name: 'عبور لاند جبنة فيتا تتراباك', emoji: '🧀', weight: '500 جم', price: 54.99, cat: 'dairy' },
    { id: 82, name: 'المراعي جبنة فيتا شيدر تتراباك', emoji: '🧀', weight: '500 جم', price: 54.99, cat: 'dairy' },
    { id: 83, name: 'المراعي جبنة فيتا رومي تتراباك', emoji: '🧀', weight: '500 جم', price: 54.99, cat: 'dairy' },
    { id: 92, name: 'المراعي جبنة فيتا زيتون تتراباك', emoji: '🧀', weight: '500 جم', price: 54.99, cat: 'dairy' },
    { id: 93, name: 'جبنة دومتي فيتا تتراباك', emoji: '🧀', weight: '500 جم', price: 39.00, cat: 'dairy' },

    // ===== بقالة: مواد جافة =====
    { id: 27, name: 'أرز مصري فاخر', emoji: '🍚', weight: '1 كجم', price: 29.99, cat: 'pantry' },
    { id: 28, name: 'مكرونه روجينة بانواعها', emoji: '🍝', weight: '500 جم', price: 29.00, cat: 'pantry' },
    { id: 29, name: 'حلوه زيت خليط', emoji: '🫗', weight: '4.5 لتر', price: 344.99, cat: 'pantry' },
    { id: 33, name: 'سكر فاخر', emoji: '🍬', weight: '1000 جم', price: 33.99, cat: 'pantry' },
    { id: 52, name: 'تونه', emoji: '🥫', weight: '140 جم', price: 30.00, cat: 'pantry' },
    { id: 53, name: 'اندومي لحمة', emoji: '🍜', weight: '100 جم', price: 12.00, cat: 'pantry' },
    { id: 54, name: 'اندومي دجاج', emoji: '🍜', weight: '100 جم', price: 12.00, cat: 'pantry' },
    { id: 55, name: 'ملوخية مجمده', emoji: '🥬', weight: '400 جم', price: 16.00, cat: 'pantry' },
    { id: 56, name: 'أرز بسمتي', emoji: '🍚', weight: '1 كجم', price: 64.00, cat: 'pantry' },
    { id: 57, name: 'اندومي خضار', emoji: '🍜', weight: '100 جم', price: 12.00, cat: 'pantry' },
    { id: 61, name: 'بسلة بالجزر مجمده', emoji: '🥕', weight: '400 جم', price: 30.99, cat: 'pantry' },
    { id: 62, name: 'ملوخية مجمده (ماركة)', emoji: '🥬', weight: '400 جم', price: 28.99, cat: 'pantry' },
    { id: 63, name: 'بامية مونتانا مجمدة', emoji: '🌿', weight: '400 جم', price: 28.99, cat: 'pantry' },
    { id: 64, name: 'بيض ابيض مغلف', emoji: '🥚', weight: '30 بيضة', price: 130.99, cat: 'pantry' },
    { id: 65, name: 'بيض احمر مغلف', emoji: '🥚', weight: '30 بيضة', price: 130.99, cat: 'pantry' },
    { id: 68, name: 'كنور خلطة الباشاميل', emoji: '🍲', weight: '70 جم', price: 17.95, cat: 'pantry' },
    { id: 69, name: 'هارفست خل ابيض', emoji: '🍶', weight: '900 مللي', price: 23.99, cat: 'pantry' },
    { id: 70, name: 'سكر (1 كجم)', emoji: '🍬', weight: '1000 جرام', price: 32.99, cat: 'pantry' },
    { id: 71, name: 'مكرونه وزن انواع', emoji: '🍝', weight: '1000 جرام', price: 26.99, cat: 'pantry' },
    { id: 72, name: 'الزهار جلاش', emoji: '📜', weight: '600 جرام', price: 26.99, cat: 'pantry' },
    { id: 73, name: 'مشروم قطع', emoji: '🍄', weight: '400 جرام', price: 40.99, cat: 'pantry' },
    { id: 75, name: 'ريتش بيك بقسماط', emoji: '🍞', weight: '500 جم', price: 29.99, cat: 'pantry' },
    { id: 76, name: 'ماجي تتبيلة تسبيكة', emoji: '🧂', weight: '6 جم', price: 4.99, cat: 'pantry' },
    { id: 77, name: 'سويتال محلي بديل السكر ٥٠ كيس', emoji: '🧃', weight: '100 جم', price: 99.99, cat: 'pantry' },
    { id: 78, name: 'فاصوليا بيضاء وزن', emoji: '🫘', weight: '1000 جم', price: 74.99, cat: 'pantry' },
    { id: 79, name: 'دقيق ابيض وزن', emoji: '🌾', weight: '1000 جم', price: 22.99, cat: 'pantry' },
    { id: 80, name: 'عدس بجبة مستورد وزن', emoji: '🫘', weight: '1000 جم', price: 49.99, cat: 'pantry' },
    { id: 84, name: 'عدس اصفر وزن', emoji: '🫘', weight: '1000 جم', price: 49.99, cat: 'pantry' },
    { id: 85, name: 'جاردينيو صلصة طماطم', emoji: '🥫', weight: '320 جم', price: 34.99, cat: 'pantry' },
    { id: 86, name: 'توليو مشروم قطع', emoji: '🍄', weight: '400 جم', price: 40.99, cat: 'pantry' },
    { id: 87, name: 'شاي ناعم العروسة', emoji: '☕', weight: '100 جم', price: 22.20, cat: 'pantry' },
    { id: 88, name: 'سبانخ مونتانا مجمدة', emoji: '🥬', weight: '400 جم', price: 18.99, cat: 'pantry' },
    { id: 89, name: 'فاين فودز صلصة طماطم', emoji: '🥫', weight: '360 جم', price: 58.00, cat: 'pantry' },
    { id: 90, name: 'لسان عصفور الملكة', emoji: '🍲', weight: '400 جرام', price: 16.99, cat: 'pantry' },
    { id: 91, name: 'ملح طعام نور', emoji: '🧂', weight: '700 جرام', price: 20.95, cat: 'pantry' },
    { id: 94, name: 'شاي ناعم ليبتون', emoji: '☕', weight: '100 جم', price: 29.99, cat: 'pantry' },
    { id: 95, name: 'مربى فراوله حلواني', emoji: '🍓', weight: '750 جم', price: 70.00, cat: 'pantry' },

    // ===== بقالة: مشروبات =====
    { id: 21, name: 'عصير برتقال', emoji: '🧃', weight: '1 لتر', price: 70.00, cat: 'beverages' },
    { id: 22, name: 'مياه معدنية', emoji: '💧', weight: '6×1.5 لتر', price: 60.00, cat: 'beverages' },
    { id: 23, name: 'بيبسي كولا', emoji: '🥤', weight: '2 لتر', price: 44.00, cat: 'beverages' },
    { id: 67, name: 'جهينه عصير كوكتيل', emoji: '🧃', weight: '225 مللي', price: 9.25, cat: 'beverages' },
    { id: 98, name: 'بخيره عصير مانجو', emoji: '🥭', weight: '225 مللي', price: 9.25, cat: 'beverages' },

    // ===== بقالة: منظفات =====
    { id: 30, name: 'صابون سائل', emoji: '🧴', weight: '500 مل', price: 64.00, cat: 'cleaning' },
    { id: 31, name: 'منظف أرضيات', emoji: '🧹', weight: '1 لتر', price: 72.00, cat: 'cleaning' },
    { id: 32, name: 'منظف زجاج', emoji: '🪟', weight: '500 مل', price: 56.00, cat: 'cleaning' },
    { id: 58, name: 'سوفت روز مناديل ٣ طبقات ٥٠٠ منديل', emoji: '🧻', weight: '500 منديل', price: 95.00, cat: 'cleaning' },
    { id: 59, name: 'ريفولي صابون ١١٠ جرام ٤ قطع', emoji: '🧼', weight: '440 جم', price: 75.00, cat: 'cleaning' },
    { id: 60, name: 'كلوركس ابيض ٩٥٠ مللي ٢+١', emoji: '🧴', weight: '950 مللي', price: 80.00, cat: 'cleaning' },
    { id: 96, name: 'مسحوق غسيل اوتوماتيك برسيل', emoji: '🧺', weight: '2.5 كجم', price: 185.00, cat: 'cleaning' },
    { id: 97, name: 'مسحوق غسيل اوتوماتيك اوكسي', emoji: '🧺', weight: '2.5 كجم', price: 195.00, cat: 'cleaning' },
    { id: 99, name: 'اكياس قمامة سليد رول ٩٠×٧٠', emoji: '🗑️', weight: '1 رول', price: 135.00, cat: 'cleaning' },

    // ===== خضار وفاكهة =====
    { id: 101, name: 'طماطم', emoji: '🍅', weight: '1 كجم', price: 12.00, cat: 'vegetables' },
    { id: 102, name: 'بطاطس', emoji: '🥔', weight: '2 كجم', price: 18.00, cat: 'vegetables' },
    { id: 103, name: 'بصل', emoji: '🧅', weight: '1 كجم', price: 11.00, cat: 'vegetables' },
    { id: 104, name: 'جزر', emoji: '🥕', weight: '1 كجم', price: 9.00, cat: 'vegetables' },
    { id: 105, name: 'موز', emoji: '🍌', weight: '1 كجم', price: 18.00, cat: 'fruits' },
    { id: 106, name: 'تفاح أحمر', emoji: '🍎', weight: '1 كجم', price: 38.00, cat: 'fruits' },
    { id: 107, name: 'برتقال', emoji: '🍊', weight: '1 كجم', price: 16.00, cat: 'fruits' },

    // ===== لحوم =====
    { id: 130, name: 'لحمة مفرومة', emoji: '🥩', weight: '1 كجم', price: 260.00, cat: 'meat' },
    { id: 131, name: 'كبدة بلدي', emoji: '🍖', weight: '1 كجم', price: 180.00, cat: 'meat' },
    { id: 132, name: 'لحمة ضاني', emoji: '🥩', weight: '1 كجم', price: 320.00, cat: 'meat' },

    // ===== دواجن =====
    { id: 110, name: 'فراخ بيضاء', emoji: '🐔', weight: '1 كجم', price: 106.00, cat: 'poultry' },
    { id: 111, name: 'اوراك', emoji: '🍗', weight: '1 كجم', price: 115.00, cat: 'poultry' },
    { id: 112, name: 'صدور فراخ', emoji: '🍗', weight: '1 كجم', price: 130.00, cat: 'poultry' },

    // ===== بن =====
    { id: 140, name: 'بن فاتح', emoji: '☕', weight: '250 جم', price: 45.00, cat: 'coffee' },
    { id: 141, name: 'بن غامق', emoji: '☕', weight: '250 جم', price: 50.00, cat: 'coffee' },

    // ===== محمصات =====
    { id: 150, name: 'لب سوري', emoji: '🥜', weight: '250 جم', price: 35.00, cat: 'snacks' },
    { id: 151, name: 'فول سوداني', emoji: '🥜', weight: '250 جم', price: 30.00, cat: 'snacks' },

    // ===== عطارة =====
    { id: 160, name: 'كمون', emoji: '🌿', weight: '100 جم', price: 15.00, cat: 'spices' },
    { id: 161, name: 'كزبرة', emoji: '🌿', weight: '100 جم', price: 12.00, cat: 'spices' },

    // ===== سندويتشات =====
    { id: 120, name: 'فول مدمس', emoji: '🥣', weight: 'طبق', price: 15.00, cat: 'restaurant' },
    { id: 121, name: 'فلافل', emoji: '🧆', weight: 'سندوتش', price: 8.00, cat: 'restaurant' },
    { id: 122, name: 'بيض بالبسطرمة', emoji: '🍳', weight: 'طبق', price: 25.00, cat: 'restaurant' },

    // ===== مخبوزات =====
    { id: 170, name: 'عيش بلدي', emoji: '🍞', weight: '5 أرغفة', price: 20.00, cat: 'bakery' },
    { id: 171, name: 'كرواسون', emoji: '🥐', weight: '4 قطع', price: 64.00, cat: 'bakery' },
    { id: 172, name: 'خبز توست', emoji: '🍞', weight: 'رغيف', price: 30.00, cat: 'bakery' },
];

// إضافة 5% على جميع الأسعار
products.forEach(p => {
    p.price = Math.round(p.price * 1.05 * 100) / 100;
});

// --- الباقات الشهرية ---
const packages = [
    {
        id: 'pkg1', name: 'الباقة الأساسية', emoji: '📦',
        desc: 'لشخص بالغ واحد – شهرياً', discountPercent: 0, freeDelivery: true,
        priceFixed: 'ثبات السعر لمدة 3 أشهر مع الاشتراك',
        items: [
            { productId: 27, quantity: 2 }, { productId: 28, quantity: 2 }, { productId: 74, quantity: 3 },
            { productId: 14, quantity: 1 }, { productId: 70, quantity: 1 }, { productId: 30, quantity: 1 },
            { productId: 52, quantity: 2 }, { productId: 87, quantity: 1 }
        ]
    },
    {
        id: 'pkg2', name: 'الباقة العائلية', emoji: '👨‍👩‍👧‍👦',
        desc: 'أسرة (بالغَين + طفلَين) – شهرياً', discountPercent: 0, freeDelivery: true,
        priceFixed: 'ثبات السعر لمدة 3 أشهر مع الاشتراك',
        items: [
            { productId: 27, quantity: 4 }, { productId: 28, quantity: 4 }, { productId: 29, quantity: 1 },
            { productId: 74, quantity: 6 }, { productId: 14, quantity: 2 }, { productId: 70, quantity: 2 },
            { productId: 30, quantity: 1 }, { productId: 31, quantity: 1 }, { productId: 52, quantity: 4 },
            { productId: 87, quantity: 2 }, { productId: 79, quantity: 2 }
        ]
    },
    {
        id: 'pkg3', name: 'الباقة المميزة', emoji: '✨',
        desc: 'أسرة حتى 4 بالغين – شهرياً', discountPercent: 0, freeDelivery: true,
        priceFixed: 'ثبات السعر لمدة 3 أشهر مع الاشتراك',
        items: [
            { productId: 27, quantity: 6 }, { productId: 28, quantity: 6 }, { productId: 29, quantity: 2 },
            { productId: 74, quantity: 10 }, { productId: 14, quantity: 3 }, { productId: 70, quantity: 3 },
            { productId: 30, quantity: 2 }, { productId: 31, quantity: 2 }, { productId: 32, quantity: 1 },
            { productId: 52, quantity: 6 }, { productId: 87, quantity: 3 }, { productId: 79, quantity: 3 }
        ]
    }
];

function getPackageRealPrice(pkg) {
    let total = 0;
    pkg.items.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) total += product.price * item.quantity;
    });
    return Math.round(total * 100) / 100;
}

function getPackageContents(pkg) {
    return pkg.items.map(item => {
        const product = products.find(p => p.id === item.productId);
        return product ? `${item.quantity} × ${product.name} (${product.weight})` : '';
    }).filter(Boolean).join(' | ');
}

packages.forEach(pkg => {
    pkg.originalPrice = getPackageRealPrice(pkg);
    pkg.price = pkg.originalPrice;
    pkg.contents = getPackageContents(pkg);
});

let customPackage = null;

function createCustomPackage(name, items) {
    return {
        id: 'custom_' + Date.now(),
        name: 'باقة ' + name,
        emoji: '✨',
        desc: 'باقة مصممة خصيصاً – (التوصيل مجاني)',
        freeDelivery: true,
        priceFixed: 'ثبات السعر لمدة 3 أشهر',
        discountPercent: 0,
        items: items,
        isCustom: true
    };
}

function setCustomPackage(name, items) {
    customPackage = createCustomPackage(name, items);
    customPackage.originalPrice = getPackageRealPrice(customPackage);
    customPackage.price = customPackage.originalPrice;
    customPackage.contents = getPackageContents(customPackage);
    return customPackage;
}

function getAllPackages() {
    const all = [...packages];
    if (customPackage) all.push(customPackage);
    return all;
}
