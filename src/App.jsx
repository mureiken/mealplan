import React, { useState } from 'react';
import { Download } from 'lucide-react';

const MealPlanApp = () => {
  const [activeTab, setActiveTab] = useState('Monday');

  const mealPlan = {
    Monday: {
      protein: "Chicken",
      carb: "Rice",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "150g chicken breast (30g P) + 100g oats + 1 banana + 1 tbsp peanut butter",
          partner: "120g chicken breast (25g P) + 80g oats + ½ banana + lactose-free milk",
          teen: "100g oats + 200ml milk + ½ cup yoghurt + 1 banana",
          child: "50g oats + 150ml milk + ¼ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "180g chicken thighs (36g P) + 200g brown rice + mixed vegetables (cabbage, carrots, peppers)",
          partner: "150g chicken thighs (30g P) + 150g brown rice + mixed vegetables",
          teen: "120g chicken + 150g rice + vegetables",
          child: "70g chicken + 100g rice + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 10 almonds + 1 apple",
          partner: "1 scoop Diet Fuel (25g P) + small yoghurt",
          teen: "1 orange + ½ cup yoghurt + handful sunflower seeds",
          child: "½ apple + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "180g chicken breast (36g P) + 150g rice + large salad (tomatoes, spinach, avocado)",
          partner: "150g chicken breast (30g P) + 100g rice + large salad",
          teen: "100g chicken + 120g rice + salad",
          child: "70g chicken + 80g rice + salad"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 apple",
          partner: "1 orange",
          teen: "½ apple + 5 almonds",
          child: "½ banana"
        }
      ]
    },
    Tuesday: {
      protein: "Fish",
      carb: "Ugali",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "3 whole eggs + 2 egg whites (30g P) + 100g oats + spinach + 1 banana",
          partner: "3 whole eggs (20g P) + 80g oats + spinach + ½ banana",
          teen: "2 eggs + 100g oats + 200ml milk + ½ cup yoghurt",
          child: "1 egg + 50g oats + 150ml milk + ¼ cup yoghurt"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "200g tilapia fillet (40g P) + 200g ugali + sukuma wiki (kales) + tomatoes",
          partner: "160g tilapia (32g P) + 150g ugali + sukuma wiki",
          teen: "130g tilapia + 150g ugali + sukuma wiki",
          child: "80g tilapia + 100g ugali + sukuma wiki"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 banana + 10 almonds",
          partner: "1 scoop Diet Fuel (25g P) + small Greek yoghurt",
          teen: "1 banana + ½ cup yoghurt + chia seeds",
          child: "½ orange + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "180g Nile perch (36g P) + 150g ugali + mixed vegetables (cabbage, carrots)",
          partner: "150g Nile perch (30g P) + 120g ugali + mixed vegetables",
          teen: "110g fish + 130g ugali + vegetables",
          child: "70g fish + 90g ugali + vegetables"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 orange",
          partner: "1 apple",
          teen: "½ banana",
          child: "½ apple"
        }
      ]
    },
    Wednesday: {
      protein: "Beef",
      carb: "Potatoes",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "150g lean beef mince (30g P) + 100g oats + 1 banana + vegetables",
          partner: "120g lean beef mince (24g P) + 80g oats + ½ banana + lactose-free milk",
          teen: "100g oats + 200ml milk + 1 cup yoghurt + 1 banana",
          child: "50g oats + 150ml milk + ½ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "180g lean beef (36g P) + 250g boiled potatoes + mixed vegetables + kidney beans (50g)",
          partner: "150g lean beef (30g P) + 200g potatoes + mixed vegetables + kidney beans (40g)",
          teen: "120g beef + 180g potatoes + vegetables",
          child: "70g beef + 120g potatoes + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 apple + 1 tbsp peanut butter",
          partner: "1 scoop Diet Fuel (25g P) + small yoghurt + berries",
          teen: "1 apple + ½ cup Greek yoghurt + sunflower seeds",
          child: "½ orange + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "170g beef stew (34g P) + 200g mashed potatoes + large salad + avocado",
          partner: "140g beef stew (28g P) + 150g mashed potatoes + large salad",
          teen: "100g beef stew + 150g potatoes + salad",
          child: "70g beef stew + 100g potatoes + salad"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 banana",
          partner: "1 apple",
          teen: "½ apple + 5 almonds",
          child: "½ banana"
        }
      ]
    },
    Thursday: {
      protein: "Chicken",
      carb: "Sweet Potatoes",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "150g chicken breast (30g P) + 100g oats + 1 banana + Greek yoghurt (50g)",
          partner: "120g chicken breast (25g P) + 80g oats + ½ banana + lactose-free milk",
          teen: "100g oats + 200ml milk + ½ cup yoghurt + 1 banana",
          child: "50g oats + 150ml milk + ¼ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "180g chicken thighs (36g P) + 250g baked sweet potatoes + broccoli & carrots",
          partner: "150g chicken thighs (30g P) + 200g sweet potatoes + broccoli & carrots",
          teen: "120g chicken + 180g sweet potatoes + vegetables",
          child: "70g chicken + 120g sweet potatoes + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 orange + 10 almonds",
          partner: "1 scoop Diet Fuel (25g P) + small yoghurt + chia seeds",
          teen: "1 banana + ½ cup Greek yoghurt",
          child: "½ apple + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "170g grilled chicken (34g P) + 200g sweet potato wedges + mixed salad + pumpkin",
          partner: "140g grilled chicken (28g P) + 150g sweet potato wedges + mixed salad",
          teen: "110g chicken + 150g sweet potatoes + salad",
          child: "70g chicken + 100g sweet potatoes + salad"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 apple",
          partner: "1 orange",
          teen: "½ banana",
          child: "½ apple"
        }
      ]
    },
    Friday: {
      protein: "Fish",
      carb: "Rice",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "4 whole eggs scrambled (24g P) + 100g oats + 1 banana + avocado (¼)",
          partner: "3 whole eggs (18g P) + 80g oats + ½ banana + avocado (¼)",
          teen: "2 eggs + 100g oats + 200ml milk + ½ cup yoghurt",
          child: "1 egg + 50g oats + 150ml milk + ¼ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "200g tilapia fillet (40g P) + 200g brown rice + mixed vegetables + green grams (50g)",
          partner: "160g tilapia (32g P) + 150g brown rice + mixed vegetables + green grams (40g)",
          teen: "130g fish + 150g rice + vegetables",
          child: "80g fish + 100g rice + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 banana + 1 tbsp peanut butter",
          partner: "1 scoop Diet Fuel (25g P) + Greek yoghurt + berries",
          teen: "1 orange + ½ cup yoghurt + sunflower seeds",
          child: "½ banana + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "180g grilled fish (36g P) + 150g white rice + large salad + chickpeas (50g)",
          partner: "150g grilled fish (30g P) + 120g white rice + large salad + chickpeas (40g)",
          teen: "110g fish + 130g rice + salad",
          child: "70g fish + 90g rice + salad"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 orange",
          partner: "1 apple",
          teen: "½ apple + 5 almonds",
          child: "½ orange"
        }
      ]
    },
    Saturday: {
      protein: "Beef",
      carb: "Ugali/Millet",
      meals: [
        {
          meal: "Breakfast (Post-Workout)",
          time: "10:00 a.m.",
          ken: "150g lean beef mince (30g P) + 100g oats + 1 banana + vegetables",
          partner: "120g lean beef mince (24g P) + 80g oats + ½ banana + lactose-free milk",
          teen: "100g oats + 200ml milk + 1 cup yoghurt + 1 banana",
          child: "50g oats + 150ml milk + ½ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch",
          time: "1:00 p.m.",
          ken: "180g beef stew (36g P) + 200g millet ugali + sukuma wiki + black beans (50g)",
          partner: "150g beef stew (30g P) + 150g millet ugali + sukuma wiki + black beans (40g)",
          teen: "120g beef + 150g ugali + vegetables",
          child: "70g beef + 100g ugali + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 apple + 10 almonds",
          partner: "1 scoop Diet Fuel (25g P) + small Greek yoghurt",
          teen: "1 banana + ½ cup yoghurt + chia seeds",
          child: "½ apple + ¼ cup yoghurt"
        },
        {
          meal: "Dinner",
          time: "7:00 p.m.",
          ken: "170g roast beef (34g P) + 150g ugali + mixed vegetables + pumpkin",
          partner: "140g roast beef (28g P) + 120g ugali + mixed vegetables",
          teen: "100g beef + 130g ugali + vegetables",
          child: "70g beef + 90g ugali + vegetables"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 banana",
          partner: "1 orange",
          teen: "½ banana",
          child: "½ apple"
        }
      ]
    },
    Sunday: {
      protein: "Flexible (Pizza/Leftovers)",
      carb: "Flexible",
      meals: [
        {
          meal: "Breakfast",
          time: "10:00 a.m.",
          ken: "4 egg omelette (24g P) + 2 slices wholemeal bread + avocado (½) + 1 banana",
          partner: "3 egg omelette (18g P) + 2 slices wholemeal bread + avocado (½)",
          teen: "2 eggs + 2 slices bread + 200ml milk + ½ cup yoghurt",
          child: "1 egg + 1 slice bread + 150ml milk + ¼ cup yoghurt + ½ banana"
        },
        {
          meal: "Lunch (Homemade Pizza)",
          time: "1:00 p.m.",
          ken: "3 slices homemade pizza (chicken, cheese, vegetables) (35g P) + large side salad",
          partner: "2.5 slices homemade pizza (chicken, cheese) (28g P) + side salad",
          teen: "2 slices pizza + side salad",
          child: "1.5 slices pizza + vegetables"
        },
        {
          meal: "Snack",
          time: "4:00 p.m.",
          ken: "1 scoop whey protein (25g P) + 1 banana + 1 tbsp peanut butter",
          partner: "1 scoop Diet Fuel (25g P) + Greek yoghurt",
          teen: "1 apple + ½ cup yoghurt + handful nuts",
          child: "½ orange + ¼ cup yoghurt"
        },
        {
          meal: "Dinner (Leftovers or Light)",
          time: "7:00 p.m.",
          ken: "180g grilled chicken (36g P) + 200g roasted potatoes + large salad",
          partner: "150g grilled chicken (30g P) + 150g roasted potatoes + large salad",
          teen: "120g chicken + 150g potatoes + salad",
          child: "70g chicken + 100g potatoes + salad"
        },
        {
          meal: "Evening Snack",
          time: "8:30 p.m.",
          ken: "1 apple",
          partner: "1 orange",
          teen: "½ banana + 5 almonds",
          child: "½ apple"
        }
      ]
    }
  };

  const groceryList = {
    "Proteins": [
      { item: "Chicken breast", amount: "2.5 kg" },
      { item: "Chicken thighs", amount: "2.0 kg" },
      { item: "Lean beef/beef stew meat", amount: "2.5 kg" },
      { item: "Lean beef mince", amount: "1.0 kg" },
      { item: "Tilapia fillet", amount: "2.0 kg" },
      { item: "Nile perch fillet", amount: "1.5 kg" },
      { item: "Whole eggs", amount: "4 dozen (48 eggs)" },
    ],
    "Dairy & Supplements": [
      { item: "Whole milk", amount: "4 liters" },
      { item: "Lactose-free milk", amount: "2 liters" },
      { item: "Greek yoghurt", amount: "2 kg" },
      { item: "Natural yoghurt", amount: "1.5 kg" },
      { item: "Cheese (for pizza)", amount: "500 g" },
      { item: "Whey protein powder", amount: "1 container (ensure 14+ servings)" },
      { item: "USN Diet Fuel Ultra Lean", amount: "1 container" },
      { item: "Creatine monohydrate", amount: "150 g (for month)" },
    ],
    "Grains & Carbs": [
      { item: "Rolled oats", amount: "2.5 kg" },
      { item: "Brown rice", amount: "3.0 kg" },
      { item: "White rice", amount: "1.5 kg" },
      { item: "Maize flour (for ugali)", amount: "3.0 kg" },
      { item: "Millet flour", amount: "1.5 kg" },
      { item: "Wholemeal bread", amount: "2 loaves" },
      { item: "Brown bread", amount: "1 loaf" },
      { item: "Pizza dough ingredients", amount: "As needed (flour, yeast)" },
    ],
    "Vegetables": [
      { item: "Kales (sukuma wiki)", amount: "2 bunches" },
      { item: "Spinach", amount: "2 bunches" },
      { item: "Cabbage", amount: "2 medium heads" },
      { item: "Broccoli", amount: "1 kg" },
      { item: "Cauliflower", amount: "1 head" },
      { item: "Carrots", amount: "2 kg" },
      { item: "Tomatoes", amount: "2 kg" },
      { item: "Onions", amount: "1.5 kg" },
      { item: "Bell peppers (mixed colors)", amount: "1 kg" },
      { item: "Lettuce/salad greens", amount: "2 heads" },
      { item: "Pumpkin", amount: "1 medium" },
    ],
    "Tubers": [
      { item: "Potatoes", amount: "5 kg" },
      { item: "Sweet potatoes", amount: "4 kg" },
    ],
    "Legumes": [
      { item: "Kidney beans (dried/canned)", amount: "500 g" },
      { item: "Black beans", amount: "300 g" },
      { item: "Green grams", amount: "300 g" },
      { item: "Chickpeas", amount: "400 g" },
    ],
    "Fruits": [
      { item: "Bananas", amount: "3 dozen (36)" },
      { item: "Apples", amount: "2 dozen (24)" },
      { item: "Oranges", amount: "2 dozen (24)" },
      { item: "Lemons", amount: "6" },
      { item: "Avocados", amount: "10" },
      { item: "Berries (optional)", amount: "500 g" },
    ],
    "Nuts, Seeds & Fats": [
      { item: "Almonds", amount: "500 g" },
      { item: "Sunflower seeds", amount: "300 g" },
      { item: "Chia seeds", amount: "200 g" },
      { item: "Flax seeds", amount: "200 g" },
      { item: "Peanut butter", amount: "500 g jar" },
      { item: "Cold-pressed canola oil", amount: "1 liter" },
      { item: "Olive oil", amount: "500 ml" },
    ],
    "Pantry Essentials": [
      { item: "Black coffee", amount: "As needed" },
      { item: "Salt", amount: "As needed" },
      { item: "Black pepper", amount: "As needed" },
      { item: "Garlic", amount: "2 bulbs" },
      { item: "Ginger", amount: "200 g" },
      { item: "Mixed herbs/spices", amount: "As needed" },
    ]
  };

  const dailyStructure = [
    { time: "8:00 a.m.", meal: "Pre-Workout", description: "Black coffee + 1 banana (Ken only)" },
    { time: "8:30-9:30 a.m.", meal: "Workout", description: "Resistance training + cardio (Ken: 5x/week, Partner: 3-5x/week)" },
    { time: "10:00 a.m.", meal: "Breakfast (Post-Workout)", description: "High protein meal" },
    { time: "1:00 p.m.", meal: "Lunch", description: "Balanced meal with protein, carbs, vegetables" },
    { time: "4:00 p.m.", meal: "Snack", description: "Protein shake or yoghurt-based snack" },
    { time: "7:00 p.m.", meal: "Dinner", description: "Moderate protein, controlled carbs, plenty of vegetables" },
    { time: "8:30 p.m.", meal: "Evening Fruit", description: "Light family bedtime snack" }
  ];

  const tabs = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Grocery List', 'Daily Structure'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Family Meal Plan</h1>
          <p className="text-slate-600 mb-4">Complete 7-day nutrition plan with grocery shopping list</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="text-sm font-semibold text-blue-900">Ken (45, 78kg)</div>
              <div className="text-xs text-blue-700">2,200 kcal | 150g protein</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-900">Lillian (40, 83kg)</div>
              <div className="text-xs text-purple-700">1,800 kcal | 120g protein</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-green-900">Ethan (14 yrs)</div>
              <div className="text-xs text-green-700">1,600 kcal | 90g protein</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-orange-900">Amy (5 yrs)</div>
              <div className="text-xs text-orange-700">1,200 kcal | 60g protein</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-slate-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-all ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'Daily Structure' && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Daily Meal Structure</h2>
            <div className="space-y-3">
              {dailyStructure.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="text-blue-600 font-semibold w-32">{item.time}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">{item.meal}</div>
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Supplement Schedule</h3>
              <ul className="text-sm text-amber-800 space-y-1">
                <li><strong>Ken:</strong> Creatine 5g (post-workout) + Whey protein (post-workout or 4pm snack)</li>
                <li><strong>Lillian:</strong> USN Diet Fuel Ultra Lean (as meal replacement or post-workout)</li>
                <li><strong>Both:</strong> Take with plenty of water throughout the day</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'Grocery List' && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Weekly Grocery Shopping List</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={20} />
                Export List
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(groceryList).map(([category, items]) => (
                <div key={category} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-slate-700 mb-3 pb-2 border-b border-slate-200">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-sm">
                        <span className="text-slate-700">{item.item}</span>
                        <span className="font-semibold text-slate-900">{item.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Shopping Tips</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Buy proteins in bulk and freeze portions for the week</li>
                <li>• Pre-wash and chop vegetables on Sunday for easier meal prep</li>
                <li>• Cook rice, ugali, and beans in large batches</li>
                <li>• Lactose-free milk is essential for Lillian</li>
              </ul>
            </div>
          </div>
        )}

        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(activeTab) && (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-800">{activeTab}</h2>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  Protein: {mealPlan[activeTab].protein}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                  Carb: {mealPlan[activeTab].carb}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {mealPlan[activeTab].meals.map((meal, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-slate-800">{meal.meal}</h3>
                    <span className="text-blue-600 font-semibold">{meal.time}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-900 mb-2">Ken (Adult Male)</div>
                      <p className="text-sm text-blue-800">{meal.ken}</p>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-900 mb-2">Lillian (Adult Female)</div>
                      <p className="text-sm text-purple-800">{meal.partner}</p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-900 mb-2">Ethan (14 years old)</div>
                      <p className="text-sm text-green-800">{meal.teen}</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="font-semibold text-orange-900 mb-2">Amy (5 years old)</div>
                      <p className="text-sm text-orange-800">{meal.child}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">Daily Totals (Approximate)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-slate-600">Ken</div>
                  <div className="font-semibold text-slate-900">~2,200 kcal | 150g protein</div>
                </div>
                <div>
                  <div className="text-slate-600">Lillian</div>
                  <div className="font-semibold text-slate-900">~1,800 kcal | 120g protein</div>
                </div>
                <div>
                  <div className="text-slate-600">Ethan</div>
                  <div className="font-semibold text-slate-900">~1,600 kcal | 90g protein</div>
                </div>
                <div>
                  <div className="text-slate-600">Amy</div>
                  <div className="font-semibold text-slate-900">~1,200 kcal | 60g protein</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealPlanApp;