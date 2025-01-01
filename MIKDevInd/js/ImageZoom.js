/*!ImageZoom v1.0.0 | (c) Ilman Hendrawan Saputra | MIKDevInd/license */
export class ImageZoom {
  constructor(classImg) {
    this.classImg = classImg;
    this.zoomLevel = 1;
    this.isCtrlPressed = false;
    this.currentPopup = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.lastTouchDistance = 0;
    this.startX = 0;
    this.startY = 0;

    this.init();
    this.addGlobalListeners();
  }

  init() {
    const images = document.querySelectorAll(this.classImg);
    images.forEach(image => {
      image.addEventListener('click', (event) => {
        this.createPopup(image.src);
      });
    });
  }

  addGlobalListeners() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Control') {
        this.isCtrlPressed = true;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.key === 'Control') {
        this.isCtrlPressed = false;
      }
    });
  }

  createPopup(imageSrc) {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = 0;
    popup.style.left = 0;
    popup.style.right = 0;
    popup.style.bottom = 0;
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '1000';
    popup.style.overflow = 'hidden';

    const zoomImage = document.createElement('img');
    zoomImage.src = imageSrc;
    zoomImage.style.transition = 'transform 0.25s ease';
    zoomImage.style.transformOrigin = 'center center';
    popup.appendChild(zoomImage);

    document.body.appendChild(popup);
    this.currentPopup = popup;

    zoomImage.style.transform = `scale(${this.zoomLevel})`;

    this.addPopupListeners(popup, zoomImage);
  }

  addPopupListeners(popup, zoomImage) {
    popup.addEventListener('wheel', (event) => {
      event.preventDefault();

      if (this.isCtrlPressed) {
        if (event.deltaY < 0) {
          this.zoomLevel *= 1.1;
        } else {
          this.zoomLevel *= 0.9;
        }
        zoomImage.style.transform = `scale(${this.zoomLevel})`;
      } else {
        this.offsetX += event.deltaX * 0.5 * this.zoomLevel;
        this.offsetY += event.deltaY * 0.5 * this.zoomLevel;
        zoomImage.style.transform = `scale(${this.zoomLevel}) translate(${this.offsetX}px, ${this.offsetY}px)`;
      }
    });

    popup.addEventListener('touchstart', (e) => {
      if (e.touches.length == 2) {
        this.lastTouchDistance = Math.sqrt(
          Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) +
          Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
        );
      } else if (e.touches.length === 1) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
      }
    });

    popup.addEventListener('touchmove', (e) => {
      if (e.touches.length == 2) {
        let newTouchDistance = Math.sqrt(
          Math.pow(e.touches[0].clientX - e.touches[1].clientX, 2) +
          Math.pow(e.touches[0].clientY - e.touches[1].clientY, 2)
        );

        if (newTouchDistance !== this.lastTouchDistance) {
          let zoomFactor = newTouchDistance / this.lastTouchDistance;
          this.zoomLevel *= zoomFactor;
          zoomImage.style.transform = `scale(${this.zoomLevel})`;
          this.lastTouchDistance = newTouchDistance;
        }
      } else if (e.touches.length === 1) {
        let moveX = e.touches[0].clientX - this.startX;
        let moveY = e.touches[0].clientY - this.startY;

        this.offsetX += moveX * 0.8 * this.zoomLevel;
        this.offsetY += moveY * 0.8 * this.zoomLevel;

        zoomImage.style.transform = `scale(${this.zoomLevel}) translate(${this.offsetX}px, ${this.offsetY}px)`;

        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
      }
    });

    popup.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        this.lastTouchDistance = 0;
      }
    });

    popup.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  }
}