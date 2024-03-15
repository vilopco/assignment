class ImageBuilder {
  constructor() {
    this.init();
  }

  async init() {
    const images = await fetchImages();
    for (let i = 0; i < 1000; i++) {
      this.renderImage(images[i], i);
    }
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      observer.observe(input);
    });
  }

  renderImage = (image, index) => {
    const container = document.querySelector("#image-grid");
    const inputDiv = document.createElement("div");
    inputDiv.innerHTML = `
      <input type="checkbox" id="checkbox-${index}" image-url=${image} />
    `;
    container.appendChild(inputDiv);
  };
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const imageUrl = element.getAttribute("image-url");
        element.style.backgroundImage = `url(${imageUrl})`;
        observer.unobserve(element);
      }
    });
  },
  {
    root: null,
    threshold: [1],
  }
);

const fetchImages = async () => {
  const response = await fetch(
    "https://imiwkhfqgckbpe5qhiyusahjxe0dmrba.lambda-url.us-east-1.on.aws/"
  );
  const data = await response.json();
  return data.images;
};

const imageBuilder = new ImageBuilder();
