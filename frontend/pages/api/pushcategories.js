import FormData from 'form-data';
import axios from "axios";
const jwtoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg5MDkyOTE1LCJleHAiOjE2OTE2ODQ5MTV9.BDQ0OMY8fBsuBKVxPPPsydVwhScSI0wt10Yc0uSE3og"
// const jwtoken=cookies.get("jwtoken")
console.log(jwtoken,"here")
let data = [
  
  {
    title: "Fruits",
    description:
      "Explore a wide variety of fresh, juicy fruits bursting with natural flavors. From succulent oranges and crisp apples to tropical delights like mangoes and pineapples, our selection of fruits is handpicked to ensure the highest quality. Enjoy the goodness of nature with every bite and indulge in a healthy lifestyle. Start your day with a nutritious fruit bowl or use them to create refreshing smoothies and delectable desserts.",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg",
    pageurl: "fruits",
  },
  {
    title: "Vegetables",
    description:
      " Vegetables are parts of plants that are consumed by humans or other animals as food.",
    image:
      "https://st4.depositphotos.com/12722406/25147/i/450/depositphotos_251470320-stock-photo-mud-pots-handicraft-products-market.jpg",
    pageurl: "vegetables",
  },
  {
    title: "Dairy Products",
    description:
      "Experience the creamy goodness of our premium dairy products that are sure to tantalize your taste buds. From rich and velvety milk to a variety of cheeses, yogurts, and butter, we take pride in offering you the finest dairy options available. Sourced from trusted local farms, our dairy products are carefully processed to retain their natural goodness, making them perfect for cooking, baking, or enjoying on their own.",
    image:
      "https://5.imimg.com/data5/ET/DN/MY-28606098/amul-dairy-products-500x500.jpg",
    pageurl: "dairyproducts",
  },
  {
    title: "Daily Needs",
    description:
      "Find all your daily essentials in one place, making your life more convenient and hassle-free. From household cleaning supplies and personal care items to pet care products and baby essentials, we've got you covered. Our carefully curated collection ensures top-notch quality and reliability, so you can focus on what matters most without worrying about running out of necessities.",
    image:
      "https://yespunjab.com/wp-content/uploads/2021/09/Junk-Food-Packaged.jpg",
    pageurl: "dailyneeds",
  },
  {
    title: "Groceries",
    description:
      "Discover a wide range of pantry staples and essential groceries that will stock your kitchen with everything you need. From cooking oils, grains, and spices to canned goods, snacks, and beverages, our selection ensures you have access to high-quality ingredients for all your culinary adventures. Shop with us and enjoy the convenience of getting your groceries delivered right to your doorstep.",
    image:
      "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/19/Pictures/food-shop_1e8c16ea-bbe5-11e8-95ec-91800d079bb4.jpg",
    pageurl: "groceries",
  },
  {
    title: "Potteries",
    description:
      "Enhance your dining experience with our exquisite range of pottery and tableware. From elegant dinner sets and beautiful serving platters to unique mugs and glassware, our collection is designed to elevate your meals and gatherings. Each piece is meticulously crafted by skilled artisans, combining functionality with aesthetic appeal. Browse through our selection and add a touch of artistry to your home.",
    image:
      "https://myrepublica.nagariknetwork.com/uploads/media/2019/August/clay%20pots.jpg",
    pageurl: "pottery",
  },
];

export default async function handler(req, res) {
  async function uploadImageToStrapi(imageUrl) {
    try {
      // Step 1: Download the image file from the URL
      const imageResponse = await fetch(imageUrl);
      const imageBuffer = await imageResponse.arrayBuffer();

      // Step 2: Create a FormData object and append the file
      const formData = new FormData();
      formData.append("files", new Uint8Array(imageBuffer), "image.jpg");
      formData.append("ref", "plugin::users-permissions.user");
      formData.append("refid", "1");
      formData.append("field", "image");

      // Step 3: Make an HTTP POST request to the Strapi API endpoint for uploading files
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtoken}`, // Include the bearer token in the Authorization header
        },
        body: formData,
      });

      const responseData = await response.json();
      console.log("Image uploaded successfully:", responseData);
      return responseData;
    } catch (error) {
      console.error("Error uploading image:", error);
      // res.status(401).json({ "error": error });
      throw error;
    }
  }

  try {
    // Iterate through each data entry
    for (const entry of data) {
      // Create the entry in Strapi
      const uploadData = await uploadImageToStrapi(entry.image);
      console.log(uploadData, "uploaddata");
      const strapiEntry = {
        title: entry.title,
        description: entry.description,
        image: uploadData[0].id, // Assuming the response contains the uploaded file data
        pageurl: entry.pageurl,
      };

      const createResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST}/categories-infos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtoken}`,
        },
        body: JSON.stringify(strapiEntry),
      });

      const final = await createResponse.json();
      // Handle createResponse if needed
      res.status(200).json({ final: final, uploadimg: uploadData });
    }
  } catch (error) {
    console.error("Error adding data to Strapi:", error);
    res.status(500).json({ error: error.message });
  }
}


