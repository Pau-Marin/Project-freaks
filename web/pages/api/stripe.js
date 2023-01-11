import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const lineItems = req.body.map((item) => {
    const img = item.image[0].asset._ref;
    const newImage = img
      .replace("image-", "https://cdn.sanity.io/images/tfb2nbxf/production/")
      .replace("-webp", ".webp");

    return {
      price_data: {
        currency: "usd",
        // product_data: {
        //   name: item.name,
        //   images: [newImage],
        // },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    };
  });
  // console.log("req\n", req);
  console.log("BODY", req.body);

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        // payment_method_types: ["card"],//SEVERAL ENABLED BY DEFAULT
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1LaRsRFaU3SEv1gL6OG1MTGq" },
          { shipping_rate: "shr_1LaQstFaU3SEv1gLpsH2vstp" },
        ],
        line_items: lineItems,
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
