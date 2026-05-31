function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function getStudent(nationalId) {

  // تحويل الرقم لنص
  nationalId = String(nationalId).trim();

  // فتح الشيت
  var sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("النتيجة نهائي");

  // قراءة البيانات
  var data = sheet
    .getDataRange()
    .getDisplayValues();

  // المرور على الصفوف
  for (var i = 1; i < data.length; i++) {

    // الرقم القومي من الشيت
    var sheetNational =
      String(data[i][0]).trim();

    // تنظيف الرقم
    sheetNational =
      sheetNational.replace(/\s/g, '');

    nationalId =
      nationalId.replace(/\s/g, '');

    // التطابق
    if (sheetNational === nationalId) {

      return {

        // بيانات الطالبة
        name: data[i][1],
        seat: data[i][2],
        grade: data[i][3],

        // عربي
        arabic_month: data[i][4],
        arabic_behavior: data[i][5],
        arabic_homework: data[i][6],
        arabic_eval: data[i][7],
        arabic_exam: data[i][8],
        arabic_total: data[i][9],
        arabic_avg: data[i][10],
        arabic_final: data[i][11],

        // إنجليزي
        english_month: data[i][12],
        english_behavior: data[i][13],
        english_homework: data[i][14],
        english_eval: data[i][15],
        english_exam: data[i][16],
        english_total: data[i][17],
        english_avg: data[i][18],
        english_final: data[i][19],

        // دراسات
        social_month: data[i][20],
        social_behavior: data[i][21],
        social_homework: data[i][22],
        social_eval: data[i][23],
        social_exam: data[i][24],
        social_total: data[i][25],
        social_avg: data[i][26],
        social_final: data[i][27],

        // رياضيات
        math_month: data[i][28],
        math_behavior: data[i][29],
        math_homework: data[i][30],
        math_eval: data[i][31],
        math_exam: data[i][32],
        math_total: data[i][33],
        math_avg: data[i][34],
        math_final: data[i][35],

        // علوم
        science_month: data[i][36],
        science_behavior: data[i][37],
        science_homework: data[i][38],
        science_eval: data[i][39],
        science_exam: data[i][40],
        science_total: data[i][41],
        science_avg: data[i][42],
        science_final: data[i][43],

        // دين
        religion_month: data[i][44],
        religion_behavior: data[i][45],
        religion_homework: data[i][46],
        religion_eval: data[i][47],
        religion_exam: data[i][48],
        religion_total: data[i][49],
        religion_avg: data[i][50],
        religion_final: data[i][51],

        // أنشطة
        computer: data[i][52],
        activity1: data[i][53],
        sport: data[i][54],
        art: data[i][55],
        activity2: data[i][56],
        music: data[i][57],

        // النتيجة
        grand_total: data[i][58],
        grand_final: data[i][59],
        status: data[i][60]

      };

    }

  }

  return null;

}