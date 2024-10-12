// عند النقر على زر "بدأ التقييم"
document.getElementById('start-evaluation').addEventListener('click', function() {
    const teacherName = document.getElementById('teacher-name').value;
    const visitorName = document.getElementById('visitor-name').value;
    const date = document.getElementById('date').value;
    const className = document.getElementById('class').value;
    const schoolName = document.getElementById('school-name').value;
    const lessonTitle = document.getElementById('lesson-title').value;

    if (!teacherName || !visitorName || !date || !className || !schoolName || !lessonTitle) {
        alert('يرجى تعبئة جميع الحقول المطلوبة!');
        return;
    }

    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

// زر الرجوع إلى الصفحة الرئيسية (من الشاشة الثانية إلى الشاشة الأولى)
document.getElementById('back-to-screen1').addEventListener('click', function() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen1').classList.remove('hidden');
});

// أزرار فتح الشاشات المختلفة للتقييم من الشاشة الثانية
document.getElementById('teaching-assessment').addEventListener('click', function() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

document.getElementById('student-performance').addEventListener('click', function() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen9').classList.remove('hidden');
});

document.getElementById('student-development').addEventListener('click', function() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen10').classList.remove('hidden');
});

document.getElementById('leadership-governance').addEventListener('click', function() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen11').classList.remove('hidden');
});

// أزرار البنود في شاشة التدريس والتقويم
document.getElementById('teaching-plans').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen4').classList.remove('hidden');
});

document.getElementById('classroom-environment').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen5').classList.remove('hidden');
});

document.getElementById('teaching-effectiveness').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen6').classList.remove('hidden');
});

document.getElementById('resources-assessment').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen7').classList.remove('hidden');
});

document.getElementById('learning-assessment').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen8').classList.remove('hidden');
});

// زر الرجوع إلى الشاشة الثانية من شاشة التدريس والتقويم
document.getElementById('back-to-screen2').addEventListener('click', function() {
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

// أزرار الرجوع من الشاشات التفصيلية إلى الشاشة السابقة
document.getElementById('back-to-screen3-from-plans').addEventListener('click', function() {
    document.getElementById('screen4').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

document.getElementById('back-to-screen3-from-environment').addEventListener('click', function() {
    document.getElementById('screen5').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

document.getElementById('back-to-screen3-from-effectiveness').addEventListener('click', function() {
    document.getElementById('screen6').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

document.getElementById('back-to-screen3-from-resources').addEventListener('click', function() {
    document.getElementById('screen7').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

document.getElementById('back-to-screen3-from-learning-assessment').addEventListener('click', function() {
    document.getElementById('screen8').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');
});

// أزرار الرجوع من الشاشات الرئيسية إلى الشاشة الثانية
document.getElementById('back-to-screen2-from-performance').addEventListener('click', function() {
    document.getElementById('screen9').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

document.getElementById('back-to-screen2-from-development').addEventListener('click', function() {
    document.getElementById('screen10').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

document.getElementById('back-to-screen2-from-governance').addEventListener('click', function() {
    document.getElementById('screen11').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
});

// عند النقر على زر "التحصيل الدراسي"
document.getElementById('student-achievement').addEventListener('click', function() {
    document.getElementById('screen9').classList.add('hidden');
    document.getElementById('screen12').classList.remove('hidden');
});

// زر الرجوع من شاشة التحصيل الدراسي إلى الشاشة التاسعة
document.getElementById('back-to-screen9-from-achievement').addEventListener('click', function() {
    document.getElementById('screen12').classList.add('hidden');
    document.getElementById('screen9').classList.remove('hidden');
});

// عند النقر على زر "التقدم الدراسي"
document.getElementById('student-progress').addEventListener('click', function() {
    document.getElementById('screen9').classList.add('hidden');
    document.getElementById('screen13').classList.remove('hidden');
});

// زر الرجوع من شاشة التقدم الدراسي إلى الشاشة التاسعة
document.getElementById('back-to-screen9-from-progress').addEventListener('click', function() {
    document.getElementById('screen13').classList.add('hidden');
    document.getElementById('screen9').classList.remove('hidden');
});

// عند النقر على زر "مهارات التعلم من أجل المستقبل"
document.getElementById('future-skills').addEventListener('click', function() {
    document.getElementById('screen9').classList.add('hidden');
    document.getElementById('screen14').classList.remove('hidden');
});

// زر الرجوع من شاشة مهارات التعلم من أجل المستقبل إلى الشاشة التاسعة
document.getElementById('back-to-screen9-from-future-skills').addEventListener('click', function() {
    document.getElementById('screen14').classList.add('hidden');
    document.getElementById('screen9').classList.remove('hidden');
});

// عند النقر على زر "القيم والاتجاهات الإيجابية في التعلم"
document.getElementById('positive-values').addEventListener('click', function() {
    document.getElementById('screen10').classList.add('hidden'); // إخفاء شاشة النمو الشخصي للطلبة
    document.getElementById('screen15').classList.remove('hidden'); // إظهار شاشة القيم والاتجاهات الإيجابية في التعلم
});

// زر الرجوع من شاشة "القيم والاتجاهات الإيجابية في التعلم" إلى شاشة "النمو الشخصي للطلبة"
document.getElementById('back-to-screen10-from-positive-values').addEventListener('click', function() {
    document.getElementById('screen15').classList.add('hidden'); // إخفاء شاشة القيم والاتجاهات الإيجابية
    document.getElementById('screen10').classList.remove('hidden'); // إظهار شاشة النمو الشخصي للطلبة
});

// عند النقر على زر "الممارسات المهنية للتعلم المستمر"
document.getElementById('continuous-learning').addEventListener('click', function() {
    document.getElementById('screen11').classList.add('hidden'); // إخفاء شاشة القيادة والإدارة والحوكمة
    document.getElementById('screen16').classList.remove('hidden'); // إظهار شاشة الممارسات المهنية للتعلم المستمر
});

// زر الرجوع من شاشة "الممارسات المهنية للتعلم المستمر" إلى شاشة "القيادة والإدارة والحوكمة"
document.getElementById('back-to-screen11-from-professional-practices').addEventListener('click', function() {
    document.getElementById('screen16').classList.add('hidden'); // إخفاء شاشة الممارسات المهنية للتعلم المستمر
    document.getElementById('screen11').classList.remove('hidden'); // إظهار شاشة القيادة والإدارة والحوكمة
});

// عند النقر على زر "المبادرات والأنشطة التربوية في المجتمع المدرسي"
document.getElementById('community-initiatives').addEventListener('click', function() {
    document.getElementById('screen11').classList.add('hidden'); // إخفاء شاشة القيادة والإدارة والحوكمة
    document.getElementById('screen17').classList.remove('hidden'); // إظهار شاشة المبادرات والأنشطة التربوية في المجتمع المدرسي
});

// زر الرجوع من شاشة "المبادرات والأنشطة التربوية في المجتمع المدرسي" إلى شاشة "القيادة والإدارة والحوكمة"
document.getElementById('back-to-screen11-from-community-initiatives').addEventListener('click', function() {
    document.getElementById('screen17').classList.add('hidden'); // إخفاء شاشة المبادرات والأنشطة التربوية في المجتمع المدرسي
    document.getElementById('screen11').classList.remove('hidden'); // إظهار شاشة القيادة والإدارة والحوكمة
});



// عند النقر على زر "القيم والاتجاهات الإيجابية"
document.getElementById('positive-values').addEventListener('click', () => {
    showScreen('screen15');
});

// زر الرجوع من شاشة "القيم والاتجاهات الإيجابية" إلى شاشة "النمو الشخصي للطلبة"
document.getElementById('back-to-screen10-from-positive-values').addEventListener('click', () => {
    showScreen('screen10');
});

// عند النقر على زر "الممارسات المهنية للتعلم المستمر"
document.getElementById('continuous-learning').addEventListener('click', () => {
    showScreen('screen16');
});

// زر الرجوع من شاشة "الممارسات المهنية للتعلم المستمر" إلى شاشة "القيادة والإدارة"
document.getElementById('back-to-screen11-from-professional-practices').addEventListener('click', () => {
    showScreen('screen11');
});

// عند النقر على زر "المبادرات والأنشطة التربوية في المجتمع المدرسي"
document.getElementById('community-initiatives').addEventListener('click', () => {
    showScreen('screen17');
});

// زر الرجوع من شاشة "المبادرات والأنشطة التربوية في المجتمع المدرسي" إلى شاشة "القيادة والإدارة"
document.getElementById('back-to-screen11-from-community-initiatives').addEventListener('click', () => {
    showScreen('screen11');
});














// تعريف المتغيرات
let totalScore = 0; // مجموع التقييم الكلي

// دالة لحفظ التقييم
function saveEvaluation(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const form = event.target.closest('form'); // الحصول على الفورم المرتبط بزر الحفظ
    const inputs = form.querySelectorAll('.evaluationInput'); // جمع جميع المدخلات
    let score = 0; // المتغير لحساب درجات التقييم

    // التحقق من القيم المدخلة وحساب المجموع
    let valid = true;
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (value >= parseFloat(input.min) && value <= parseFloat(input.max)) {
            score += value;
        } else {
            alert("تأكد من إدخال درجات ضمن النطاق المسموح به.");
            valid = false; // عدم السماح بالحفظ إذا كانت الدرجات خارج النطاق
        }
    });

    // إضافة الدرجة الحالية للمجموع الكلي إذا كانت المدخلات صحيحة
    if (valid) {
        totalScore += score;

        // تحديث عرض المجموع الكلي
        document.getElementById('score').textContent = totalScore;

        // تعطيل زر الحفظ بعد الضغط عليه
        const saveButton = form.querySelector('.save-btn');
        saveButton.disabled = true;
        saveButton.textContent = "تم الحفظ";
    }
}

// دالة لإظهار الشاشة المطلوبة وإخفاء الشاشات الأخرى
function showScreen(screenId) {
    document.querySelectorAll('.container > div').forEach(screen => {
        if (screen.id === screenId) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}

// التنقل بين الشاشات حسب الحاجة
document.getElementById('start-evaluation').addEventListener('click', () => {
    showScreen('screen2');
});

// الرجوع من الشاشة الثانية إلى الشاشة الأولى
document.getElementById('back-to-screen1').addEventListener('click', () => {
    showScreen('screen1');
});

// الانتقال إلى شاشة بنود التدريس والتقويم
document.getElementById('teaching-assessment').addEventListener('click', () => {
    showScreen('screen3');
});

// الانتقال إلى شاشة إنجاز الطلبة
document.getElementById('student-performance').addEventListener('click', () => {
    showScreen('screen9');
});

// الانتقال إلى شاشة النمو الشخصي للطلبة
document.getElementById('student-development').addEventListener('click', () => {
    showScreen('screen10');
});

// الانتقال إلى شاشة القيادة والإدارة والحوكمة
document.getElementById('leadership-governance').addEventListener('click', () => {
    showScreen('screen11');
});

// أزرار الرجوع من الشاشات التفصيلية إلى الشاشة السابقة
document.getElementById('back-to-screen3-from-plans').addEventListener('click', () => {
    showScreen('screen3');
});

document.getElementById('back-to-screen3-from-environment').addEventListener('click', () => {
    showScreen('screen3');
});

document.getElementById('back-to-screen3-from-effectiveness').addEventListener('click', () => {
    showScreen('screen3');
});

document.getElementById('back-to-screen3-from-resources').addEventListener('click', () => {
    showScreen('screen3');
});

document.getElementById('back-to-screen3-from-learning-assessment').addEventListener('click', () => {
    showScreen('screen3');
});

// الانتقال إلى شاشة التحصيل الدراسي
document.getElementById('student-achievement').addEventListener('click', () => {
    showScreen('screen12');
});

// زر الرجوع من شاشة التحصيل الدراسي إلى شاشة إنجاز الطلبة
document.getElementById('back-to-screen9-from-achievement').addEventListener('click', () => {
    showScreen('screen9');
});

// زر الرجوع من شاشة التقدم الدراسي إلى شاشة إنجاز الطلبة
document.getElementById('back-to-screen9-from-progress').addEventListener('click', () => {
    showScreen('screen9');
});

// زر الرجوع من شاشة "مهارات التعلم من أجل المستقبل" إلى شاشة "إنجاز الطلبة"
document.getElementById('back-to-screen9-from-future-skills').addEventListener('click', () => {
    showScreen('screen9');
});

// عند النقر على زر "القيم والاتجاهات الإيجابية في التعلم"
document.getElementById('positive-values').addEventListener('click', () => {
    showScreen('screen15');
});

// زر الرجوع من شاشة "القيم والاتجاهات الإيجابية" إلى شاشة "النمو الشخصي للطلبة"
document.getElementById('back-to-screen10-from-positive-values').addEventListener('click', () => {
    showScreen('screen10');
});

// الانتقال إلى شاشة الممارسات المهنية للتعلم المستمر
document.getElementById('continuous-learning').addEventListener('click', () => {
    showScreen('screen16');
});

// زر الرجوع من شاشة "الممارسات المهنية للتعلم المستمر" إلى شاشة "القيادة والإدارة"
document.getElementById('back-to-screen11-from-professional-practices').addEventListener('click', () => {
    showScreen('screen11');
});

// الانتقال إلى شاشة "المبادرات والأنشطة التربوية في المجتمع المدرسي"
document.getElementById('community-initiatives').addEventListener('click', () => {
    showScreen('screen17');
});

// زر الرجوع من شاشة "المبادرات والأنشطة التربوية في المجتمع المدرسي" إلى شاشة "القيادة والإدارة"
document.getElementById('back-to-screen11-from-community-initiatives').addEventListener('click', () => {
    showScreen('screen11');
});
