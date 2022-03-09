                         // ANIMATIONS TIMELINE 

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

                              // FONCTION POUR ANCRE RETOUR EN HAUT
function backToTop(){
    const btn = document.querySelector('.btnAncre');
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
}
backToTop();


