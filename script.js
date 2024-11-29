document.addEventListener('DOMContentLoaded', function () {
    const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.querySelector(".left-arrow-wrap .arrow");
    const rightArrow = document.querySelector(".right-arrow-wrap .arrow");
    const imgBox = document.getElementById("imgBox");
    const name = document.getElementById("name");
    const country = document.getElementById("country");
    const description = document.getElementById("description");
  
    let people = [
        {
          photo: "url('https://www.bestratedincanada.com/wp-content/uploads/William-Shatner.jpg')",
          name: "William Shatner",
          country: "Europe",
          description: "We’re so grateful for the hardworking team who helped us build our dream home. The designers listened to all our ideas, and the workers brought them to life with precision and passion. They paid attention to even the smallest details and made sure everything was perfect. Our home feels unique, comfortable, and beautifully made. Thank you to everyone who made it happen."
        },
        {
          photo: 'url("https://imgix.ranker.com/user_node_img/1551/31000870/original/31000870-photo-u1974903819?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300")',
          name: "Ana de Armas",
          country: "Spanish",
          description: "The construction crew was equally impressive. They were punctual, respectful of my space, and kept the work area clean and organized each day. I could see the quality and craftsmanship in every aspect of their work, which made me feel confident throughout the entire process. They even managed to finish slightly ahead of schedule, which was a pleasant surprise!"
        },
        {
          photo: "url('https://imgix.ranker.com/user_node_img/24/467933/original/467933-photo-u-357197709?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300')",
          name: "Anna Paquin",
          country: "Canada",
          description: "After months of planning, this team brought my vision to life, and I’m blown away by the results! My home looks brand new, with stunning design touches that make it feel modern yet cozy. They took my ideas and improved them in ways I hadn’t even considered, making every room more functional and visually appealing. The builders were friendly, careful, and always kept the place tidy. I can’t thank them enough for making this renovation such a positive experience!"
        },
        {
          photo: "url('https://imgix.ranker.com/user_node_img/113/2258001/original/2258001-photo-u1678657098?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300')",
          name: "Tom Hanks",
          country: "America",
          description: "I’m so impressed by the quality and professionalism of this team. From day one, they made me feel comfortable and involved in every decision. The designer had a keen eye for balancing aesthetics and practicality, and the construction team’s attention to detail was incredible. They added custom shelves, redesigned my kitchen layout, and even added some clever storage solutions I hadn’t thought of. Now my home feels more open, organized, and stylish than ever. Truly top-notch work!"
        },
        {
          photo: "url('https://imgix.ranker.com/user_node_img/43/843540/original/843540-photo-u-1372706150?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300')",
          name: "Denzel Washington",
          country: "New York",
          description: "I recently hired this team to remodel my kitchen and add some custom design elements, and the outcome is absolutely stunning! The designer helped me choose materials and colors that fit my style, and the contractor ensured every detail was executed perfectly. The workers were reliable, friendly, and left everything clean at the end of each day. Now, my kitchen is not only beautiful but also so much more functional. I couldn’t be happier!"
        },
      ];

    imgBox.style.backgroundImage = people[0].photo;
    name.innerText = people[0].name;
    country.innerText = people[0].country;
    description.innerText = people[0].description;
    let currentPerson = 0;
  

    function slide(side, personNumber) {
      let descriptionHeight = description.offsetHeight + "px";
      
      setTimeout(() => {
        imgBox.style.backgroundImage = people[personNumber].photo;
      }, 0);
      setTimeout(() => {
        description.style.height = descriptionHeight;
      }, 100);
      setTimeout(() => {
        name.innerText = people[personNumber].name;
      }, 200);
      setTimeout(() => {
        country.innerText = people[personNumber].country;
      }, 300);
      setTimeout(() => {
        description.innerText = people[personNumber].description;
      }, 400);
    }

    function setNextCardLeft() {
      if (currentPerson === 3) {
        currentPerson = 0;
      } else {
        currentPerson++;
      }
      slide("left", currentPerson);
    }
  
    function setNextCardRight() {
      if (currentPerson === 0) {
        currentPerson = 3;
      } else {
        currentPerson--;
      }
      slide("right", currentPerson);
    }
  

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
            
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = item.querySelector('img').src;
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <img src="${imgSrc}" alt="Lightbox Image">
            <span class="lightbox-close">&times;</span>
          </div>
        `;
        
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
          document.body.removeChild(lightbox);
        });
        
        lightbox.addEventListener('click', function(e) {
          if (e.target === lightbox) {
            document.body.removeChild(lightbox);
          }
        });
      });
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', function() {
        item.classList.toggle('active');
      });
    });
  })
  const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const closeButton = document.querySelector('.lightbox-close');


galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});


closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
  
