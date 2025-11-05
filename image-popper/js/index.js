// document.querySelector("#center")
// addEventListener("mousemove", function(dets) {
// console.log(dets.clientX , dets.clientY) ;
// })
// Throttle Function
    const throttleFunction = (func, delay) => {
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
          prev = now;
          return func(...args);
        }
      };
    };
    document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
      var div = document.createElement("div");
      div.classList.add("popImage");
      div.style.left = dets.clientX + "px";
      div.style.top = dets.clientY + "px";

      var img = document.createElement("img");
      img.setAttribute("src", "https://images.pexels.com/photos/34358325/pexels-photo-34358325.jpeg");
      div.appendChild(img);
      document.body.appendChild(div);

      gsap.to(img, {
        y: "0",
        ease: Power2,
        duration: 0.6
      });
      gsap.to(img, {
        y: "100%",
        delay: 0.6,
        ease: Power3,
        // duration: 0.2
      });

      setTimeout(function()  {
        div.remove();
      }, 1000);
    }, 400));