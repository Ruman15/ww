// 1. 
enum DaysOfWeek {
    MONDAY = 'Понедельник',
    TUESDAY = 'Вторник',
    WEDNESDAY = 'Среда',
    THURSDAY = 'Четверг',
    FRIDAY = 'Пятница',
    SATURDAY = 'Суббота',
    SUNDAY = 'Воскресенье'
}

console.log("Days of the Week:");
for (const day in DaysOfWeek) {
    if (DaysOfWeek.hasOwnProperty(day)) {
        console.log(DaysOfWeek[day as keyof typeof DaysOfWeek]);
    }
}

// 2. 
enum Months {
    JANUARY = 'Январь',
    FEBRUARY = 'Февраль',
    MARCH = 'Март',
    APRIL = 'Апрель',
    MAY = 'Май',
    JUNE = 'Июнь',
    JULY = 'Июль',
    AUGUST = 'Август',
    SEPTEMBER = 'Сентябрь',
    OCTOBER = 'Октябрь',
    NOVEMBER = 'Ноябрь',
    DECEMBER = 'Декабрь'
}

function getMonthByNumber(number: number): void {
    const month = Months[Object.keys(Months)[number - 1] as keyof typeof Months];
    if (month) {
        console.log(month);
    } else {
        console.log("Некорректный номер месяца!");
    }
}


console.log("\nMonth by number 5:");
getMonthByNumber(5);

// 3. 
enum Colors {
    RED = 'Красный',
    BLUE = 'Синий',
    GREEN = 'Зелёный',
    YELLOW = 'Жёлтый',
    BLACK = 'Чёрный'
}

function displayColor(color: Colors): void {
    console.log(`Выбран ${color} цвет`);
}


console.log("\nSelected color:");
displayColor(Colors.RED);

// 4. 
enum Planets {
    MERCURY = 'Меркурий',
    VENUS = 'Венера',
    EARTH = 'Земля',
    MARS = 'Марс',
    JUPITER = 'Юпитер',
    SATURN = 'Сатурн',
    URANUS = 'Уран',
    NEPTUNE = 'Нептун'
}

function getPlanetOrder(planet: Planets): number {
    const index = Object.values(Planets).indexOf(planet);
    if (index !== -1) {
        return index + 1;
    } else {
        console.log("Неизвестная планета!");
        return -1;
    }
}


console.log("\nPlanet order for Earth:");
console.log(getPlanetOrder(Planets.EARTH));

// 5. 
enum Fruits {
    APPLE = 'Яблоко',
    PEAR = 'Груша',
    ORANGE = 'Апельсин',
    BANANA = 'Банан',
    GRAPE = 'Виноград'
}

function checkFruit(fruit: string): void {
    if (Object.values(Fruits).includes(fruit as Fruits)) {
        console.log("Этот фрукт вкусный!");
    } else {
        console.log("Неизвестный фрукт!");
    }
}

console.log("\nCheck if Apple is a fruit:");
checkFruit(Fruits.APPLE); 
