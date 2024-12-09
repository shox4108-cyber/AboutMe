gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
        // effects is the special command wich can help to add effects to each content
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, { 
        opacity: 0,
        scrollTrigger: {
            trigger:'.hero-section',
            start: 'center',
            end: '820',
            scrub: true,
        } 
        // scrub is returing elements showing when you come back
        // trigger is focusing on what thing it will change
     })

    let itemsL = gsap.utils.toArray('.gallery-left .gallery-item')

     itemsL.forEach(item => {
        gsap.fromTo(item, { x: -50, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true,
            }
         })
     })

     let itemsR = gsap.utils.toArray('.gallery-right .gallery-item')

     itemsR.forEach(item => {
        gsap.fromTo(item, { x: 50, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true,
            }
         })
     })
    
}
