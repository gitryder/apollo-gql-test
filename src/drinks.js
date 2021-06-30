const drinks = [
    {
        id: 1,
        name: "Piña colada",
        description: "The piña colada is a cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice.",
        prepTime: 30,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Pina-Coladas_EXPS_THFM18_37191_C09_15_6b.jpg?resize=700,700"
    },
    {
        id: 2,
        name: "Negroni",
        description: "Don’t let the sweet red color of this drink fool you. A Negroni is not for the faint of heart. Made with gin, vermouth, Campari and a single orange peel, it lacks any sort of simple syrup to mask the punch of the alcohol’s strong, bitter flavor.",
        prepTime: 10,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/07/Extra-Dry-Negroni_1125273662.jpg?resize=700,700"
    },
    {
        id: 3,
        name: "Mimosa",
        description: "Recognized as the Bloody Mary’s brunch partner, the mimosa is a cocktail made with equal parts of sparkling wine and orange juice. Served in a champagne flute.",
        prepTime: 12,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/shutterstock_433800829_mimosa-e1542131971126.jpg?resize=700,700"
    },
    {
        id: 4,
        name: "Manhattan",
        description: "Dating back to the 1880s, the Manhattan remains one of the most ordered drinks in bars and lounges. Traditionally made with rye whiskey, sweet vermouth and bitters.",
        prepTime: 6,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/Manhattan-shutterstock_406171972.jpg?resize=700,700"
    },
    {
        id: 5,
        name: "Mai Tai",
        description: "Considered to be one of the original tiki cocktails, the Mai Tai was invented by Victor Jules Bergeron, aka Trader Vic. His original recipe called for light rum, dark rum, lime juice, orange curacao, orgeat syrup and rock candy syrup with a mint garnish.",
        prepTime: 7,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/Mai-Tai-shutterstock_449441362.jpg?resize=700,700"
    },
    {
        id: 6,
        name: "Planter’s Punch",
        description: "Dating back more than a century, Planter’s Punch is made with dark rum, grenadine, pineapple juice and a splash of club soda.",
        prepTime: 13,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/planters-punch-shutterstock_654809410-1200x1200.jpg?resize=700,700"
    },
    {
        id: 7,
        name: "Cosmopolitan",
        description: "Originally created in the late 1980s after the release of Absolut Citron, the Cosmopolitan is made with citrus vodka, Cointreau, cranberry juice and fresh lime juice",
        prepTime: 10,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/08/shutterstock_483955966.jpg?resize=700,700"
    },
    {
        id: 8,
        name: "Bloody Mary",
        description: "While its origins may be debated, most recipes involve equal parts vodka and tomato juice mixed with additions like lemon juice, hot sauce, Worcestershire sauce, horseradish, fresh herbs, brown sugar and cracked black pepper.",
        prepTime: 10,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Dill-Bloody-Marys_EXPS_SDDJ19_37046_E07_19_1b.jpg?resize=700,700"
    },
    {
        id: 9,
        name: "Black Russian",
        description: "Made simply with two parts coffee liqueur and five parts vodka, a black Russian like this is the White Russian’s older brother",
        prepTime: 6,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/07/black-russian-cocktail-vodka-coffee-shutterstock_1035562495.jpg?resize=700,700"
    },
    {
        id: 10,
        name: "Mojito",
        description: "Said to be the favorite drink of Ernest Hemingway, a mojito is served in a highball glass over ice with muddled mint, white rum, lime juice, simple syrup and a splash of club soda.",
        prepTime: 20,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/06/mojito-shutterstock_588115346.jpg?resize=700,700"
    },
    {
        id: 11,
        name: "Screwdriver",
        description: "Made with just vodka and orange juice, a screwdriver is a simple yet tasty cocktail. Some say that this drink got its name because it was created by oil workers who would use a screwdriver to mix the ingredients since spoons were not always readily available.",
        prepTime: 10,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/07/Screwdriver.jpg?resize=700,700"
    },
    {
        id: 12,
        name: "Sidecar",
        description: "While the English and French both lay claim to this cognac-based drink, both agree that it was named after a customer who arrived at their bar in the sidecar of a motorcycle. Shaken with ice, cognac, Cointreau and lemon juice, the ingredients are strained and then garnished with a single orange twist.",
        prepTime: 15,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/04/Old-Vermont-shutterstock_605962400.jpg?resize=700,700"
    },
    {
        id: 13,
        name: "Tequila Sunrise",
        description: "The modern tequila sunrise was created in the 1970s by mixing tequila, orange juice and grenadine. It became popular after Mick Jagger tried the cocktail and began ordering it all across America during a tour.",
        prepTime: 10,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/04/Tequila-Sunrise-shutterstock_431091331.jpg?resize=700,700"
    },
    {
        id: 14,
        name: "White Russian",
        description: "This cocktail will forever be a part of American pop culture thanks to the film The Big Lebowski. Made with vodka, coffee liqueur and cream, the cream is often shaken before being poured over the other ingredients to enhance the creaminess of the drink.",
        prepTime: 5,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/shutterstock_482166883-copy.jpg?resize=700,700"
    },
    {
        id: 15,
        name: "Zombie",
        description: "Created by Donn Beach, the father of tiki culture in the United States, the zombie is made by mixing three different kinds of rum, lime juice, Falernum, bitters, Pernod and grenadine with a combination of cinnamon syrup and grapefruit juice.",
        prepTime: 12,
        hasAlcohol: true,
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/08/Zombie-shutterstock_1108499210.jpg?resize=700,700"
    }
];

exports.getAllDrinks = () => {
    return drinks;
};

exports.getDrinkCount = () => {
    return drinks.length;
};

exports.getDrinkById = (id) => {
    return drinks[id-1];
};
