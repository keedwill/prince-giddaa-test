const PurchaseOptionsData: {
  title: string;
  subTitle: string;
  description: string;
  explanation: string;
  features: string[];
}[] = [
  {
    title: "Mortgages",
    subTitle: "THE SLOW TURTLE",
    description:
      "Imagine you want to buy a house, but you don’t have all the money upfront. A mortgage is like a loan from a bank or a lender that helps you buy the house now, and you pay back the loan over time, usually with interest. It’s a way to spread out the cost of buying a house over several years instead of paying for it all at once. Once you pay off the mortgage, you own the house outright.",
    explanation:
      "Picture getting a mortgage as a turtle competing against a rabbit: though the rabbit may dash ahead initially, reflecting short-term plans, the turtle’s steady but gradual pace, similar to mortgage payments, ensures stability and the ability to own a home without stressing your finances by coughing a large amount of money at once to buy a home.",
    features: [
      "For budget conscious people without the money to make large payments.",
      "Mostly offered by banks & financial institutions",
      "Typically attracts payment of interest",
      "Payment periods are usually long term (Typically between 10 - 30 years)",
      "Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.",
    ],
  },
  {
    title: "Payment Plans",
    subTitle: "THE GALLOPING HORSE",
    description:
      "Imagine you’re looking to buy your dream house, but you don’t have all the money saved up. A payment plan is a structured arrangement where you agree to pay for your home over a period of time instead of all at once. It allows you to split the cost into smaller, manageable payments spread out over months, or years until the full amount is paid off. This makes the purchase of your dream home more affordable and accessible by breaking down the total cost into more managable payments, usually monthly.",
    explanation:
      "Picture a horse galloping with a rabbit and a turtle. It is not quite as fast as the rabbit, but not nearly as slow as the turtle. It wants to get to the finish line quickly, but won’t beat the rabbit, but will beat the turtle, Similarly, a payment plan allows you to purchase a property over a short period of time, but not as short as an outright purchase, but not as long as mortgage. You make periodic payments over a short period of time.",

    features: [
      "For people who want pocket friendly options, but don’t want to pay interest",
      "Mostly offered by property Developers",
      "Usually zero (0%) interest. Payment plans usally don’t attract interest.",
      "Payment periods are usually short term (6 Months - 3 Years)",
      "Like ,mortgages, monthly payments are also fixed, but may change if the property developer experiences issues during development. If periodic payments are subject to change, the developer usually states it in your offer letter.",
    ],
  },
  {
    title: "Ouright Purchase",
    subTitle: "THE SWIFT RABBIT",
    description:
      "The outright purchase of a house refers to buying a home directly without the need for financing through a mortgage or creation of flexible payment plans by developers. In this scenario, you pay the entire purchase price upfront using your own funds or savings, without relying on a loan from a bank or flexible payment options from developers. This means that once the transaction is complete, the you own the property outright, without any debt or ongoing payments to a lender or property developer.",
    explanation:
      "Picture a rabbit running with a turtle or a horse. It wants to get to its destination quickly an knows it has the pace to get there without needing to stop or receivie assistance from anyone. It can go all the way, by itself. Similarly, with outright purchases, you don’t need anyone to help you. You can and are able to buy the property by yourself 100%. After you pay, the house is your, no repayments needed. Go Rabbit, go!",
    features: [
      "For people who have the ability to make large purchases at once.",
      "Mostly offered by property Developers",
      "Usually zero (0%) interest. Payment plans usally don’t attract interest.",
      "There are no payment periods. This requires a one-time payment.",
      "This requires one lump sum payment, upon which the property is fully yours.",
    ],
  },
];

export default PurchaseOptionsData;
