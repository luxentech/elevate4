// ملف 6: الكورسات (Courses)
const coursesData = [
    {
        id: "crs_001",
        type: "courses",
        category: "اقتصاد رقمي",
        name: "مسار الاقتصاد الرقمي | Digital Economy Pathway",
        imgInner: "Partners/digital_economy_inner.jpg", // مسار الصورة الداخلية من مجلد Partners
        imgOuter: "Partners/digital_economy_outer.jpg", // مسار الصورة الخارجية من مجلد Partners
        isFeatured: true, // جعل البطاقة مميزة
        tags: "#مسار_الاقتصاد_الرقمي #الاقتصاد_الرقمي #Digital_Economy #ELEVATE #فرص_الشباب #تدريب_مجاني #ريادة_الأعمال",
        deadline: "2026-08-08", // آخر موعد للتسجيل (قبل بدء البرنامج بيوم)
        description: "برنامج تدريبي مجاني من وزارة الشباب والرياضة لاكتساب أهم المهارات الرقمية المطلوبة في سوق العمل وتطوير مسارك المهني نحو مستقبل رقمي.",
        status: "visible"
    }
];

/* ➕ لإضافة كورس: انسخ آخر عنصر، ضع فاصلة، غير הـ id، وعدّل المحتوى أو הـ status. */
function injectCoursesData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    
    coursesData.forEach(comp => {
        // التحقق من عدم تكرار الكورس بناءً على الـ id
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
