// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseBody {
  framework: 'Next.js' | 'React.js'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
): void {
  res.status(200).json({ framework: 'Next.js' })
}
