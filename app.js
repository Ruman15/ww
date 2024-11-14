// 1. 
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["MONDAY"] = "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A";
    DaysOfWeek["TUESDAY"] = "\u0412\u0442\u043E\u0440\u043D\u0438\u043A";
    DaysOfWeek["WEDNESDAY"] = "\u0421\u0440\u0435\u0434\u0430";
    DaysOfWeek["THURSDAY"] = "\u0427\u0435\u0442\u0432\u0435\u0440\u0433";
    DaysOfWeek["FRIDAY"] = "\u041F\u044F\u0442\u043D\u0438\u0446\u0430";
    DaysOfWeek["SATURDAY"] = "\u0421\u0443\u0431\u0431\u043E\u0442\u0430";
    DaysOfWeek["SUNDAY"] = "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log("Days of the Week:");
for (var day in DaysOfWeek) {
    if (DaysOfWeek.hasOwnProperty(day)) {
        console.log(DaysOfWeek[day]);
    }
}
// 2. 
var Months;
(function (Months) {
    Months["JANUARY"] = "\u042F\u043D\u0432\u0430\u0440\u044C";
    Months["FEBRUARY"] = "\u0424\u0435\u0432\u0440\u0430\u043B\u044C";
    Months["MARCH"] = "\u041C\u0430\u0440\u0442";
    Months["APRIL"] = "\u0410\u043F\u0440\u0435\u043B\u044C";
    Months["MAY"] = "\u041C\u0430\u0439";
    Months["JUNE"] = "\u0418\u044E\u043D\u044C";
    Months["JULY"] = "\u0418\u044E\u043B\u044C";
    Months["AUGUST"] = "\u0410\u0432\u0433\u0443\u0441\u0442";
    Months["SEPTEMBER"] = "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C";
    Months["OCTOBER"] = "\u041E\u043A\u0442\u044F\u0431\u0440\u044C";
    Months["NOVEMBER"] = "\u041D\u043E\u044F\u0431\u0440\u044C";
    Months["DECEMBER"] = "\u0414\u0435\u043A\u0430\u0431\u0440\u044C";
})(Months || (Months = {}));
function getMonthByNumber(number) {
    var month = Months[Object.keys(Months)[number - 1]];
    if (month) {
        console.log(month);
    }
    else {
        console.log("Некорректный номер месяца!");
    }
}
console.log("\nMonth by number 5:");
getMonthByNumber(5);
// 3. 
var Colors;
(function (Colors) {
    Colors["RED"] = "\u041A\u0440\u0430\u0441\u043D\u044B\u0439";
    Colors["BLUE"] = "\u0421\u0438\u043D\u0438\u0439";
    Colors["GREEN"] = "\u0417\u0435\u043B\u0451\u043D\u044B\u0439";
    Colors["YELLOW"] = "\u0416\u0451\u043B\u0442\u044B\u0439";
    Colors["BLACK"] = "\u0427\u0451\u0440\u043D\u044B\u0439";
})(Colors || (Colors = {}));
function displayColor(color) {
    console.log("\u0412\u044B\u0431\u0440\u0430\u043D ".concat(color, " \u0446\u0432\u0435\u0442"));
}
console.log("\nSelected color:");
displayColor(Colors.RED);
// 4. 
var Planets;
(function (Planets) {
    Planets["MERCURY"] = "\u041C\u0435\u0440\u043A\u0443\u0440\u0438\u0439";
    Planets["VENUS"] = "\u0412\u0435\u043D\u0435\u0440\u0430";
    Planets["EARTH"] = "\u0417\u0435\u043C\u043B\u044F";
    Planets["MARS"] = "\u041C\u0430\u0440\u0441";
    Planets["JUPITER"] = "\u042E\u043F\u0438\u0442\u0435\u0440";
    Planets["SATURN"] = "\u0421\u0430\u0442\u0443\u0440\u043D";
    Planets["URANUS"] = "\u0423\u0440\u0430\u043D";
    Planets["NEPTUNE"] = "\u041D\u0435\u043F\u0442\u0443\u043D";
})(Planets || (Planets = {}));
function getPlanetOrder(planet) {
    var index = Object.values(Planets).indexOf(planet);
    if (index !== -1) {
        return index + 1;
    }
    else {
        console.log("Неизвестная планета!");
        return -1;
    }
}
console.log("\nPlanet order for Earth:");
console.log(getPlanetOrder(Planets.EARTH));
// 5. 
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\u042F\u0431\u043B\u043E\u043A\u043E";
    Fruits["PEAR"] = "\u0413\u0440\u0443\u0448\u0430";
    Fruits["ORANGE"] = "\u0410\u043F\u0435\u043B\u044C\u0441\u0438\u043D";
    Fruits["BANANA"] = "\u0411\u0430\u043D\u0430\u043D";
    Fruits["GRAPE"] = "\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434";
})(Fruits || (Fruits = {}));
function checkFruit(fruit) {
    if (Object.values(Fruits).includes(fruit)) {
        console.log("Этот фрукт вкусный!");
    }
    else {
        console.log("Неизвестный фрукт!");
    }
}
console.log("\nCheck if Apple is a fruit:");
checkFruit(Fruits.APPLE);
