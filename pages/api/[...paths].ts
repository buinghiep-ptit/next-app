// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'

type Data = {
  name: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  console.log('aaaa')
  return new Promise((resolve, reject) => {
    //convert cookies to header Authorization
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    //don't send cookies to API server
    // req.headers.cookie = ''
    const option = {
      target: process.env.API_APP_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    }
    proxy.web(req, res, option)

    proxy.once('proxyRes', () => resolve(true))
  })

  // res.status(200).json({ name: 'Path Math all here' });
}
