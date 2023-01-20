// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require("@strapi/strapi").factories;
const PaytmChecksum = require("paytmchecksum");
const https = require("https");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async pre(ctx) {
    var paytmParams = {};
    let params = ctx.request.body;
    console.log(params);

    const entry = await strapi.entityService.create("api::order.order", {
      data: {
        email: params.email,
        orderid: params.orderid,
        paymentinfo: null,
        products: params.cart,
        address: params.address,
        name: params.name,
        transactionid: null,
        amount: params.amount,
        status: "pending",
      },
    });

    paytmParams.body = {
      requestType: "Payment",
      mid: process.env.MID,
      websiteName: "VMart",
      orderId: params.orderid,
      callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/api/orders/posttransaction`,
      txnAmount: {
        value: params.amount,
        currency: "INR",
      },
      userInfo: {
        custId: "CUST_001",
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    let checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      process.env.MKEY
    );
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);
    const gettoken = async () => {
      return new Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          hostname: "securegw-stage.paytm.in" /* for Production */, // hostname: 'securegw.paytm.in',

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.MID}&orderId=${params.orderid}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            resolve(response);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    let myr = await gettoken();
    ctx.send(myr);
  },


  
  async post(ctx) {
    let params = ctx.request.body;
    ctx.send(params);

    const entries = await strapi.entityService.findMany("api::order.order", {
      fields: ["id"],
      filters: { orderid: params.ORDERID },

    });
    
    let id = entries[0].id;


    const entry = await strapi.entityService.update("api::order.order", id, {
      data: {
        transactionid: params.TXNID,
        paymentinfo: params,
        status: params.STATUS,
      },
      
    });
    console.log(params,"params asli wale")
    params?ctx.redirect(`${process.env.NEXT_PUBLIC_FHOST}/success`):ctx.redirect(`${process.env.NEXT_PUBLIC_FHOST}/orders`)


    //     BANKNAME:
    // Kotak Bank
    // BANKTXNID:
    // 14543076069
    // CHECKSUMHASH:
    // GgnfkQRz4wHgv+J0Wr9asN6BJ0sasnzYSy61SdRZk6wawY6Qft1d871/yAnH/TG8kTM2ENgZ8EsiUkcVuyZtgsQvVNQtXCddGVGj7pCcVyc=
    // CURRENCY:
    // INR
    // GATEWAYNAME:
    // NKMB
    // MID:
    // kUwlsd90506126528048
    // ORDERID:
    // Oid8092
    // PAYMENTMODE:
    // NB
    // RESPCODE:
    // 01
    // RESPMSG:
    // Txn Success
    // STATUS:
    // TXN_SUCCESS
    // TXNAMOUNT:
    // 30.00
    // TXNDATE:
    // 2022-12-11 11:09:33.0
    // TXNID:
    // 20221211111212800110168057004308523
  },
}));
