// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TFileList } from '../../client/core/types'

type Data = {
  files: TFileList;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ files: [
      {
          filename: '/src/main.jsx',
          fileContent: `
            import React from 'react';
            import ReactDOM from 'react-dom';
            
            ReactDOM.render('fdsfdsafds', document.getElementById('root'))
            `
      }
  ] })
}
