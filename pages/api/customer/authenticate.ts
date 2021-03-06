// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' })
  }
  return new Promise((resolve, reject) => {
    //don't send cookies to API server
    // req.headers.cookie = ''
    const option = {
      target: process.env.API_AUTH_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    }
    const handleLoginResponse: ProxyResCallback = proxyRes => {
      let body = ''
      proxyRes.on('data', chunk => {
        body += chunk
      })
      proxyRes.on('end', () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          //convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })
          ;(res as NextApiResponse)
            .status(200)
            .json({ message: 'login successfully' })
        } catch {
          ;(res as NextApiResponse)
            .status(500)
            .json({ message: 'something went wrong' })
          reject()
        }

        resolve(true)
      })
    }
    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, option)
  })
}
