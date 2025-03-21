async function getImages() {
    const res = await fetch('/api/getImages');
    const images = await res.json();
    return images;
  }
  
  export default getImages;