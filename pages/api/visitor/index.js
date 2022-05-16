// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import prisma from '@lib/prisma';

export default async function handler(
  req,
  res
) {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true
      }
    });

    return res.status(200).json({ total: totalViews._sum.count });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
