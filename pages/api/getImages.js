import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'public/album');
  const imageExtensions = ['.jpeg', '.jpg', '.png'];

  const images = fs.readdirSync(directoryPath).filter(file => 
    imageExtensions.includes(path.extname(file).toLowerCase())
  );

  res.status(200).json(images);
}