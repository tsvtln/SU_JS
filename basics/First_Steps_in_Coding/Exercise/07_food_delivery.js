function FoodDelivery(input) {
    let prices = {
        chicken_menu: 10.35,
        fish_menu: 12.40,
        vegan_menu: 8.15
    };
    let [num_chicken_menus, num_fish_menus, num_vegan_menus] = input.map(Number);
    let menus_sum = (num_chicken_menus * prices["chicken_menu"]) + (num_fish_menus * prices["fish_menu"]) + (num_vegan_menus * prices["vegan_menu"]);
    menus_sum += (menus_sum * 0.2) + 2.5;
    console.log(menus_sum);
}
// FoodDelivery(["2", "4", "3"])
