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


document.getElementById('view-report').addEventListener('click', function() {
    const requiredFields = ['school-name', 'teacher-name', 'visitor-name', 'date', 'class', 'period', 'lesson-title', 'lesson-number'];
    let allFieldsFilled = true;

    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field.value) {
            allFieldsFilled = false;
            alert('يرجى تعبئة جميع الحقول!');
        }
    });

    if (allFieldsFilled) {
        // قم بعرض التقرير هنا
        generateReport();
    }
});


document.getElementById('view-report').addEventListener('click', function() {
    let reportHTML = `
        <div class="report-container">
            <h1 class="report-title">تقرير التقييم التفصيلي</h1>
            <div class="report-section">
                <span class="report-label">اسم المدرسة:</span>
                <span class="report-value">${document.getElementById('school-name').value}</span>
            </div>
            <div class="report-section">
                <span class="report-label">اسم المعلم:</span>
                <span class="report-value">${document.getElementById('teacher-name').value}</span>
            </div>
            <div class="report-section">
                <span class="report-label">التاريخ:</span>
                <span class="report-value">${document.getElementById('date').value}</span>
            </div>
            <div class="report-section">
                <span class="report-label">مجموع التقييم:</span>
                <span class="report-value">${totalScore}</span>
            </div>
            <button id="share-report">مشاركة التقرير كصورة</button>
        </div>
    `;
    
    document.body.innerHTML = reportHTML;

    document.getElementById('share-report').addEventListener('click', function() {
        html2canvas(document.body).then(canvas => {
            let imgData = canvas.toDataURL('image/png');
            let link = document.createElement('a');
            link.href = imgData;
            link.download = 'report.png';
            link.click();
        });
    });
});



document.getElementById('share-report').addEventListener('click', function() {
    html2canvas(document.body).then(canvas => {
        let imgData = canvas.toDataURL('image/png');
        let link = document.createElement('a');
        link.href = imgData;
        link.download = 'report.png';
        link.click();
    });
});


document.getElementById('share-report').addEventListener('click', function() {
    html2canvas(document.body).then(canvas => {
        let imgData = canvas.toDataURL('image/png');
        let link = document.createElement('a');
        link.href = imgData;
        link.download = 'report.png';
        link.click();
    });
});


document.getElementById('back-to-evaluation').addEventListener('click', function() {
    document.getElementById('report-section').classList.add('hidden');  // إخفاء التقرير
    document.getElementById('screen2').classList.remove('hidden');  // عرض الشاشة الثانية
});


function generateReport() {
    let reportHTML = `
        <div class="report-container">
            <h1 class="report-title">تقرير التقييم التفصيلي</h1>

            <!-- بيانات الشاشة الأولى -->
            <table class="report-table">
                <tr>
                    <td><strong>اسم المدرسة:</strong></td>
                    <td>${document.getElementById('school-name').value}</td>
                </tr>
                <tr>
                    <td><strong>اسم المعلم:</strong></td>
                    <td>${document.getElementById('teacher-name').value}</td>
                </tr>
                <tr>
                    <td><strong>اسم الزائر:</strong></td>
                    <td>${document.getElementById('visitor-name').value}</td>
                </tr>
                <tr>
                    <td><strong>التاريخ:</strong></td>
                    <td>${document.getElementById('date').value}</td>
                </tr>
                <tr>
                    <td><strong>الصف:</strong></td>
                    <td>${document.getElementById('class').value}</td>
                </tr>
                <tr>
                    <td><strong>الحصة:</strong></td>
                    <td>${document.getElementById('period').value}</td>
                </tr>
                <tr>
                    <td><strong>عنوان الدرس:</strong></td>
                    <td>${document.getElementById('lesson-title').value}</td>
                </tr>
                <tr>
                    <td><strong>رقم الزيارة:</strong></td>
                    <td>${document.getElementById('lesson-number').value}</td>
                </tr>
            </table>

            <h2>الدرجات التفصيلية حسب المجالات:</h2>

            <!-- مجال خطط التدريس -->
            <h3>خطط التدريس</h3>
            <table class="report-table">
                <tr><td>توافق التخطيط اليومي مع الخطة الفصلية:</td><td>${document.getElementById('plan-alignment').value}/1</td></tr>
                <tr><td>التنوع في الأهداف وتسلسلها:</td><td>${document.getElementById('goal-diversity').value}/1</td></tr>
                <tr><td>التنوع في استراتيجيات التدريس:</td><td>${document.getElementById('strategy-diversity').value}/1</td></tr>
                <tr><td>تنوع مصادر التعلم:</td><td>${document.getElementById('resource-diversity').value}/1</td></tr>
                <tr><td>مراعاة التمايز بين الطلبة:</td><td>${document.getElementById('student-needs').value}/1</td></tr>
            </table>

            <!-- مجال بيئة التعلم الصفية -->
            <h3>بيئة التعلم الصفية</h3>
            <table class="report-table">
                <tr><td>إدارة واستثمار زمن التعلم:</td><td>${document.getElementById('time-management').value}/1</td></tr>
                <tr><td>إثارة دافعية الطلبة للتعلم:</td><td>${document.getElementById('student-motivation').value}/1</td></tr>
                <tr><td>إدارة تعلم الطلبة وسلوكهم:</td><td>${document.getElementById('student-behavior').value}/1</td></tr>
                <tr><td>توفير بيئة تعلم آمنة:</td><td>${document.getElementById('safe-environment').value}/1</td></tr>
                <tr><td>التنوع في أساليب التعزيز:</td><td>${document.getElementById('reinforcement-diversity').value}/1</td></tr>
            </table>

            <!-- مجال فاعلية التدريس -->
            <h3>فاعلية التدريس</h3>
            <table class="report-table">
                <tr><td>توظيف أساليب تقويم تراعي التمايز:</td><td>${document.getElementById('differentiation-assessment').value}/1</td></tr>
                <tr><td>تقديم تغذية راجعة:</td><td>${document.getElementById('feedback-provision').value}/1</td></tr>
                <tr><td>مشاركة أهداف التعلم:</td><td>${document.getElementById('learning-goals').value}/1</td></tr>
                <tr><td>تفعيل التقييم الذاتي:</td><td>${document.getElementById('peer-evaluation').value}/1</td></tr>
                <tr><td>تقديم تغذية راجعة (تكوينية ختامية):</td><td>${document.getElementById('final-feedback').value}/1</td></tr>
            </table>

            <!-- مجال المصادر والموارد التعليمية (الشاشة 7) -->
            <h3>المصادر والموارد التعليمية</h3>
            <table class="report-table">
                <tr><td>توظيف المصادر والوسائل التعليمية:</td><td>${document.getElementById('resource-utilization').value}/1</td></tr>
                <tr><td>توظيف المنصات الرقمية والتفاعلية:</td><td>${document.getElementById('digital-platform-utilization').value}/1</td></tr>
                <tr><td>توظيف مركز ومصادر التعلم والمختبرات:</td><td>${document.getElementById('center-resource-utilization').value}/1</td></tr>
                <tr><td>إشراك الطلبة في استخدام المصادر والموارد التعليمية:</td><td>${document.getElementById('student-involvement').value}/1</td></tr>
                <tr><td>ملائمة المصادر والموارد بما يحقق أهداف الدرس:</td><td>${document.getElementById('resource-appropriateness').value}/1</td></tr>
            </table>

            <!-- مجال التحصيل الدراسي -->
            <h3>التحصيل الدراسي</h3>
            <table class="report-table">
                <tr><td>اكتساب المهارات الأساسية:</td><td>${document.getElementById('basic-skills').value}/1</td></tr>
                <tr><td>مستوى تحصيل الطلبة:</td><td>${document.getElementById('lesson-skills').value}/2</td></tr>
                <tr><td>التحصيل المستمر:</td><td>${document.getElementById('continuous-assessment').value}/2</td></tr>
            </table>

            <!-- مجال التقدم الدراسي -->
            <h3>التقدم الدراسي</h3>
            <table class="report-table">
                <tr><td>تقدم الطلبة في الأعمال الفردية والجماعية:</td><td>${document.getElementById('individual-group-progress').value}/2</td></tr>
                <tr><td>التقدم أثناء الحصة في المعارف والمهارات:</td><td>${document.getElementById('bloom-progress').value}/2</td></tr>
                <tr><td>قدرة الطلبة على فهم المعارف:</td><td>${document.getElementById('knowledge-application').value}/1</td></tr>
            </table>

            <!-- مجال مهارات التعلم من أجل المستقبل -->
            <h3>مهارات التعلم من أجل المستقبل</h3>
            <table class="report-table">
                <tr><td>مشاركة الطلبة في القيادة وتنظيم عملية التعلم:</td><td>${document.getElementById('leadership-participation').value}/1</td></tr>
                <tr><td>قدرة الطلبة على التعاون والتواصل:</td><td>${document.getElementById('collaboration-communication').value}/1</td></tr>
                <tr><td>توظيف مهارات التفكير العليا:</td><td>${document.getElementById('high-order-thinking').value}/2</td></tr>
                <tr><td>توظيف المهارات التقنية:</td><td>${document.getElementById('technical-skills').value}/1</td></tr>
            </table>

            <!-- مجال القيم والاتجاهات الإيجابية -->
            <h3>القيم والاتجاهات الإيجابية</h3>
            <table class="report-table">
                <tr><td>يحرص الطلبة على تقديم الأعمال الصفية بإتقان:</td><td>${document.getElementById('classwork-diligence').value}/1</td></tr>
                <tr><td>يظهر الطلبة توجهات إيجابية نحو التعلم:</td><td>${document.getElementById('positive-attitude').value}/1</td></tr>
                <tr><td>يظهر الطلبة انضباطاً ذاتياً في الموقف التعليمي:</td><td>${document.getElementById('self-discipline').value}/2</td></tr>
                <tr><td>يبدي الطلبة أخلاقيات التعلم:</td><td>${document.getElementById('learning-ethics').value}/1</td></tr>
            </table>

            <!-- مجال الممارسات المهنية -->
            <h3>الممارسات المهنية</h3>
            <table class="report-table">
                <tr><td>مشاركات مهنية للمعلم حسب احتياجاته:</td><td>${document.getElementById('professional-participation').value}/1</td></tr>
                <tr><td>نقل أثر المشاركات المهنية:</td><td>${document.getElementById('impact-transfer').value}/1</td></tr>
                <tr><td>التعاون مع الزملاء للتطوير المهني:</td><td>${document.getElementById('colleague-collaboration').value}/1</td></tr>
                <tr><td>ممارسة التأمل والتفكر في التدريس:</td><td>${document.getElementById('reflection-practice').value}/1</td></tr>
                <tr><td>تحليل البيانات المتعلقة بتعلم الطلبة:</td><td>${document.getElementById('data-analysis').value}/1</td></tr>
            </table>

            <!-- مجال المبادرات والأنشطة التربوية -->
            <h3>المبادرات والأنشطة التربوية</h3>
            <table class="report-table">
                <tr><td>تقديم مبادرات فاعلة تدعم العملية التعليمية:</td><td>${document.getElementById('effective-initiatives').value}/2</td></tr>
                <tr><td>التفاعل الإيجابي مع الأنشطة التربوية:</td><td>${document.getElementById('positive-interaction').value}/2</td></tr>
                <tr><td>التفاعل الإيجابي مع المجتمع المحلي:</td><td>${document.getElementById('community-interaction').value}/1</td></tr>
            </table>

            <h3>المجموع الكلي:</h3>
            <div class="total-score">
                <strong>${totalScore}</strong>
			            <!-- زر مشاركة -->
            <button id="share-report" class="share-btn">مشاركة</button>	

            <!-- زر طباعة -->
            <button id="print-report" class="print-btn">طباعة</button>
        </div>
    `;
    document.body.innerHTML = reportHTML;

    // وظيفة زر المشاركة لتحويل التقرير إلى صورة ومشاركتها
    document.getElementById('share-report').addEventListener('click', function() {
        html2canvas(document.body).then(canvas => {
            // تحويل التقرير إلى صورة
            let imgData = canvas.toDataURL('image/png');
            let link = document.createElement('a');
            link.href = imgData;
            link.download = 'التقرير-التفصيلي.png';  // اسم ملف الصورة
            link.click();  // تحميل الصورة

            // هنا يمكنك استخدام API أخرى لمشاركة الصورة على وسائل التواصل
            // أو نسخ الصورة في الحافظة.
        });
    });
    // وظيفة زر الطباعة لطباعة التقرير
    document.getElementById('print-report').addEventListener('click', function() {
        window.print();  // طباعة الصفحة
    });
}
