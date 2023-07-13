// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookies from "js-cookie";
export default function handler(req, res) {

const jwtoken=Cookies.get("jwtoken")
  res.status(200).json({ name: jwtoken,success:true })
}
