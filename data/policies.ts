import { company } from "./company";

export const faqItems = [
  {
    question: "What does GOGETTER ENTERPRISES LLC sell?",
    answer:
      "We carry contemporary everyday products across travel, workspace, home, kitchen, fitness, outdoor, apparel, accessories, organization, and productivity. The assortment is built around useful design rather than a single category.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes. Standard shipping is free on orders over $75 within the contiguous United States. Orders under $75 have a flat rate of $9.99. Express shipping is available at checkout for $14.99.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping delivers in 3–5 business days. Express shipping delivers in 1–2 business days. Orders placed on business days typically ship within 1–2 days. You will receive a tracking number once the order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused and in original packaging. Visit the Returns page for step-by-step instructions or use the contact form for help.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Once your order ships, you will receive a tracking number. You can also use the Track Order page with your order number and email address.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently we ship within the United States only, including Alaska and Hawaii. Join the newsletter if you want to hear when that changes.",
  },
  {
    question: "How do I use a coupon code?",
    answer:
      "Enter your coupon code in the coupon field on the cart page and select Apply. Valid codes update the order total immediately. One coupon per order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay. Checkout on this site is a demonstration flow.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Use the contact form on the Contact page. Direct email and phone details will be published here when they are available.",
  },
];

export const shippingPolicy = {
  title: "Shipping Policy",
  description: `How ${company.name} delivers orders.`,
  sections: [
    {
      title: "Processing Time",
      content:
        "Orders are typically processed within 1–2 business days. Weekend and holiday orders ship the next business day.",
    },
    {
      title: "Shipping Methods & Rates",
      content: "",
      list: [
        "Standard Shipping (3–5 business days): $9.99 — FREE on orders over $75",
        "Express Shipping (1–2 business days): $14.99",
        "Alaska & Hawaii: Standard rates apply; delivery may take 5–7 business days",
      ],
    },
    {
      title: "Order Tracking",
      content:
        "Once your order ships, you will receive a confirmation with a tracking number. You can also check status on the Track Order page.",
    },
    {
      title: "Shipping Restrictions",
      content:
        "We currently ship to all 50 US states. We do not ship to PO boxes for express orders. Oversized items may require additional time.",
    },
    {
      title: "Lost or Damaged Packages",
      content:
        "If a package arrives damaged or does not arrive within 10 business days of the estimated delivery date, submit a note through the contact form. We will work with the carrier to resolve it.",
    },
  ],
};

export const returnPolicy = {
  title: "Return Policy",
  description: `How to return an unused ${company.name} order.`,
  sections: [
    {
      title: "30-Day Return Window",
      content:
        "You may return most items within 30 days of delivery for a refund or exchange. Items must be unused and in original packaging.",
    },
    {
      title: "How to Start a Return",
      content: "",
      list: [
        "Submit a return request through the contact form with your order number",
        "We will send return instructions within one business day",
        "Pack items securely in original packaging",
        "Drop off at any authorized shipping location",
        "Refunds are processed within 5–7 business days of receiving the return",
      ],
    },
    {
      title: "Non-Returnable Items",
      content: "",
      list: [
        "Items marked as final sale",
        "Used or altered products",
        "Items without original packaging",
        "Gift cards",
      ],
    },
    {
      title: "Exchanges",
      content:
        "Need a different size or color? Send a note through the contact form and we will arrange an exchange when stock allows.",
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  description: `Refund timing and eligibility for ${company.name} orders.`,
  sections: [
    {
      title: "Refund Eligibility",
      content:
        "Refunds are available for items returned within 30 days of delivery in unused condition with original packaging. Sale items are eligible unless marked as final sale.",
    },
    {
      title: "Refund Processing Time",
      content:
        "Once we receive and inspect your return, refunds are processed within 5–7 business days to the original payment method. Banks may take additional time to post the credit.",
    },
    {
      title: "Partial Refunds",
      content: "",
      list: [
        "Items with obvious signs of use may receive a partial refund",
        "Items returned without original packaging may incur a 15% restocking fee",
        "Shipping costs are non-refundable unless the return is due to our error",
      ],
    },
    {
      title: "Defective or Wrong Items",
      content:
        "If you receive a defective or incorrect item, contact us through the form immediately. We will arrange a return and either refund or replace the item.",
    },
    {
      title: "Questions",
      content: "For refund questions, use the contact form. Direct contact details will be added when they are available.",
    },
  ],
};

export const privacyPolicy = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects information on this website.`,
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you visit the site, create a demo account, or place a demo order, we may collect the name, email, and shipping details you enter in forms. We also use cookies to remember cart, wishlist, and recently viewed items on your device.",
    },
    {
      title: "How We Use Your Information",
      content: "",
      list: [
        "Process and fulfill orders",
        "Respond to customer service requests",
        "Send order-related notices when email is provided",
        "Improve the website and catalog",
        "Prevent fraud and keep checkout secure",
      ],
    },
    {
      title: "Information Sharing",
      content:
        "We do not sell personal information. Data is shared only with service providers needed to operate the store, such as payment processors and shipping carriers, and only as required to complete a request.",
    },
    {
      title: "Cookies",
      content:
        "We use cookies and local storage to remember your cart, wishlist, and recently viewed products. You can disable cookies in your browser; some features may then not persist.",
    },
    {
      title: "Your Rights",
      content:
        "You may request access to, correction of, or deletion of personal data submitted through this site by using the contact form.",
    },
    {
      title: "Contact",
      content: `For privacy-related questions, use the contact form on this website. Mailing and email details for ${company.name} will be published when they are available.`,
    },
  ],
};

export const termsPolicy = {
  title: "Terms & Conditions",
  description: `Please read these terms before using the ${company.name} website.`,
  sections: [
    {
      title: "Acceptance of Terms",
      content: `By accessing the ${company.name} website, you agree to these Terms and Conditions. If you do not agree, do not use the site.`,
    },
    {
      title: "Products & Pricing",
      content:
        "We aim to display accurate descriptions, images, and pricing. Errors may occur. We may correct errors and update information at any time. Prices are in US dollars.",
    },
    {
      title: "Orders & Payment",
      content:
        "Placing an order is an offer to purchase. Checkout on this site is a demonstration experience and does not process live payments. We may refuse or cancel any order.",
    },
    {
      title: "Intellectual Property",
      content: `Site content — including text, images, logos, and design — is the property of ${company.name} unless otherwise noted and is protected by applicable law.`,
    },
    {
      title: "Limitation of Liability",
      content: `${company.name} is not liable for indirect, incidental, or consequential damages arising from use of the website or products. Total liability will not exceed the amount paid for the product in question.`,
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by applicable United States law. Specific venue details will be added when a registered address is published.",
    },
  ],
};
