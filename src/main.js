import './assets/a.css'
import './assets/b.css'
import './assets/c.css'
import './assets/d.css'


import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpg'
import image11 from './images/11.jpg'

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, 1000));

const appendImage = (src) => {
    console.log('append', src);
    const img = document.createElement('img');
    img.src = src;
    document.getElementById('container').appendChild(img);
}

void (async () => {
    // await sleep(2000)

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
    for (const src of images) {
        appendImage(src);
        // await sleep();
    }

})()