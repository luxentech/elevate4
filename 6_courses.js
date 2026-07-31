// ملف 6: الكورسات (Courses)
const coursesData = [
    {
        id: "crs_digital_aug2026", // 👈 تم تغيير الـ id هنا لضمان التحديث عند جميع المستخدمين
        type: "courses",
        category: "اقتصاد رقمي",
        name: "مسار الاقتصاد الرقمي | Digital Economy Pathway",
        imgInner: "Partners/digital_economy_inner.jpg",
        imgOuter: "Partners/digital_economy_outer.jpg",
        isFeatured: true,
        tags: "#مسار_الاقتصاد_الرقمي #الاقتصاد_الرقمي #Digital_Economy #ELEVATE #فرص_الشباب #تدريب_مجاني #ريادة_الأعمال",
        deadline: "2026-08-08",
        description: `🚀 مسار الاقتصاد الرقمي | طريقك نحو مستقبل رقمي أقوى 🌐
في عالم يتغير بسرعة، أصبحت المهارات الرقمية هي مفتاح النجاح والتميز.
ومن هنا يأتي برنامج "مسار الاقتصاد الرقمي" ليمنحك فرصة حقيقية لاكتساب المعرفة والمهارات التي تؤهلك للمنافسة في سوق العمل الحديث وبناء مستقبل مهني واعد.

✨ انضم إلينا في رحلة تدريبية مميزة لاكتشاف عالم الاقتصاد الرقمي والتكنولوجيا، حيث ستتعرف على:
🔹 أساسيات ومفاهيم الاقتصاد الرقمي ودوره في تشكيل المستقبل.
🔹 أهم المهارات الرقمية المطلوبة في سوق العمل العالمي.
🔹 التجارة الإلكترونية وكيفية بناء الفرص في العالم الرقمي.
🔹 ريادة الأعمال والابتكار في العصر التكنولوجي.
🔹 الذكاء الاصطناعي والتحول الرقمي وتأثيرهما على مختلف المجالات.
🔹 فرص العمل والمسارات المهنية المتاحة في الاقتصاد الرقمي.

📅 موعد البرنامج:
من 9 أغسطس إلى 13 أغسطس 2026

🎓 الجهة المقدمة:
وزارة الشباب والرياضة
(الإدارة المركزية لتمكين النشء والشباب)

🎁 التدريب مجاني بالكامل
هذه فرصتك لتطوير مهاراتك، توسيع معرفتك، والانطلاق نحو مستقبل يعتمد على التكنولوجيا والابتكار. 🚀

📲 سارع بالتسجيل الآن وابدأ رحلتك نحو المستقبل الرقمي:
🔗 رابط التسجيل:
https://forms.cloud.microsoft/r/mDyYYmvRwY
أو قم بمسح رمز الـ QR الموجود بالإعلان، وانضم إلى قناة الواتساب لمعرفة جميع التفاصيل واستكمال إجراءات التسجيل.

📌 WhatsApp Channel:
https://whatsapp.com/channel/0029VbCaSol8fews70Y9FQ2l`,
        status: "visible"
    }
];

/* ➕ لإضافة كورس: انسخ آخر عنصر، ضع فاصلة، غير הـ id، وعدّل المحتوى أو הـ status. */
function injectCoursesData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    
    coursesData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { 
            existingCards.push(comp); 
            addedCount++; 
        }
    });
    
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { 
            App.renderOpportunities(); 
            App.updateHomeStats(); 
        }
    }
}

document.addEventListener('DOMContentLoaded', injectCoursesData);
