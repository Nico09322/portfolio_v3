<script setup>
    import { SplitText } from "gsap/SplitText";
    import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import {ScrollSmoother} from "gsap/ScrollSmoother"
    import { gsap } from "gsap";
    import bild from "./assets/img/Nico_Pies_Bewerbungsfoto.jpg"
    import bildGroß from "./assets/img/Nico_Pies_foto_groß.jpg"

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollSmoother); 
        gsap.registerPlugin(DrawSVGPlugin); 
        gsap.registerPlugin(SplitText);

    const headline = ref(null);
    const splitHeadline = ref(null);
    const splitNav = ref(null);
    const nav = ref(null);
    const mounted = ref(false);
    const name = ref(null);
    const splitName = ref(null);
    const navDivider = ref(null);
    const profilePic = ref(null);
    const unterstrichRef = ref(null);
    const scrollRef = ref(null);
    const navOpt = ref(null);
    const navChars = ref(null);
    const picScribble = ref(null);
    const picWrapper = ref(null);
    const profileInfo = ref(null);
    const JS = ref(null);
    const nuxt = ref(null);
    const vue = ref(null);
    const tailwind = ref(null);
    const strapi = ref(null);
    const supabase = ref(null);
    const figma = ref(null);
    const email = ref(null);
    const github = ref(null);
    const linkedin = ref(null);
    const ueberMich = ref(null);
    const card = ref([]);
    const projekte = ref(null);
    const loaded = ref(false);
    const projectData = ref(null);    
    let smoother;

    const loadData = async () => {
        console.log('🔵 loadData wird aufgerufen');
        
        try {
            const response = await $fetch('/api/projects');
            console.log('✅ Response:', response);
            projectData.value = response;
            loaded.value = true;
            console.log(projectData.value)
        } catch (err) {
            console.error('❌ Error:', err);
            loaded.value = true;
        }
    }

    onMounted(() =>{

            
        loadData()


        mounted.value = true;
        splitHeadline.value = SplitText.create(headline.value, {type: "chars"});
        splitName.value = SplitText.create(name.value,{type: "words"} );
        splitNav.value = SplitText.create(nav.value, {type: "words"});
        navChars.value = SplitText.create(navOpt.value, {type: "chars, lines"});


        smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: "#smooth-content",
            smooth: 0.7
        });

        const projektContainer = document.querySelector('.projekt-container');

        if (projektContainer) {
            gsap.to(projektContainer, {
                x: () => -(projektContainer.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: projektContainer,
                    start: "top 20%",
                    end: () => `+=${projektContainer.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
        }


        gsap.from(splitHeadline.value.chars, {
            duration: 0.5,
            y: 250,
            stagger: 0.03,
            delay: 0.5,
            ease: "power2.out"
        });

        gsap.from(splitName.value.words, {
            duration: 0.5,
            y: 100,
            stagger: 0.075,
            delay: 1,
            ease: "power2.out"
        })

        gsap.from(navDivider.value,{
            y: -200,
            duration: 0.75,
            delay: 0.75,
            ease: "power2.inOut"
        })

        gsap.from(profilePic.value,{
            y: -200,
            duration: 0.75,
            delay: 1,
            ease: "power2.inOut"
        })

        gsap.from(nav.value,{
            y: -200,
            duration: 0.5,
            delay: 1.25,
            ease: "power2.inOut",
            stagger: 0.05
        })

        gsap.from(unterstrichRef.value.querySelectorAll("path"), {
            duration: 0.2, 
            drawSVG:0,
            ease: "power2.inOut",
            stagger: 0.2,
            delay: 1.5
        })

        gsap.from(scrollRef.value.querySelectorAll("path"), {
            duration: 0.15, 
            drawSVG:0,
            ease: "power2.inOut",
            stagger: 0.15,
            delay: 2
        })

        gsap.from(picScribble.value.querySelectorAll("path"),{
            duration: 0.75, 
            drawSVG:0,
            ease: "power2.inOut",
            stagger: 0.3,
            delay: 0.5,
            scrollTrigger: picScribble.value
        })

        gsap.to(picWrapper.value, {
            x: 350,
            rotate: 10,
            duration: 0.75,
            ease: "power2.inOut",
            scrollTrigger: picWrapper.value,
        })

        gsap.to(profileInfo.value, {
            x: -250,
            y: -100,
            rotate: -10,
            duration: 0.75,
            delay: 0.25,
            ease: "power2.inOut",
            scrollTrigger: picWrapper.value,
        })
        
        gsap.to(JS.value, {
            x: 30,
            y: -70,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,
        })

        gsap.to(nuxt.value, {
            x: 100,
            y: -40,
            rotate: 5,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })

        gsap.to(vue.value, {
            x: 110,
            y: -10,
            rotate: 7,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })

        gsap.to(tailwind.value, {
            x: -100,
            y: -75,
            rotate: -7,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })

        gsap.to(strapi.value, {
            x: 20,
            y: -40,
            rotate: 2,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })    

        gsap.to(supabase.value, {
            x: -280,
            y: -150,
            rotate: -15,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })    

        gsap.to(figma.value, {
            x: -170,
            y: -130,
            rotate: -10,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })
        
        gsap.to(email.value, {
            x: -430,
            y: -100,
            rotate: -5,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.25,
            scrollTrigger: picWrapper.value,            
        })

        gsap.to(github.value, {
            x: -420,
            y: -15,
            rotate: -8,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.3,
            scrollTrigger: picWrapper.value,            
        }) 
        
        gsap.to(linkedin.value, {
            x: -400,
            y: 70,
            rotate: -11,
            duration: 0.75,
            ease: "power2.inOut",
            delay: 0.35,
            scrollTrigger: picWrapper.value,            
        }) 


        card.value.forEach((cardComponent) => {
            if (cardComponent?.root) {
                gsap.to(cardComponent.root, {
                    rotation: Math.floor(Math.random() * 10) - 3,
                    duration: 0,
                    
                    ease: "power2.inOut",
                    scrollTrigger: cardComponent.root
                });
            }
        });
        
      
    })

    const hoverNav = (e) => {
        gsap.to(navChars.value.chars, {
            y: -25,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: 0.05
        })
    }

    const leaveNav = (e) => {
        gsap.to(navChars.value.chars, {
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
            stagger: {
                each: 0.05,
                from: "end"
            }
        })
    }

    const hoverHeadline = (e) => {
        gsap.killTweensOf(e.target);
        gsap.to(e.target, {
            y: -10,
            x: -8,
            duration: 0.15,
            ease: "power2.inOut"
        })
    }

    const leaveHeadline = (e) => {
        gsap.to(e.target, {
            y: 0,
            x: 0,
            duration: 0.075,
            ease: "power2.inOut"
        })
    }

    const rotateNico = (e) => {
        gsap.to(e.target,{
            rotation: 90,
            duration: 0.5,
            ease: "power2.inOut"
        })
    }

    const idleNico = (e) => {
        gsap.to(e.currentTarget,{
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut"
        })
    }

    const picHover = (e) => {
        gsap.to(e.target, {
            x: 340,
            y: -10,
            duration: 0
        })
    }
    const picLeave = (e) => {
        gsap.to(e.target, {
            x: 350,
            y: 0,
            duration: 0.1
        })
    }

    const emailHover = (e) => {
        gsap.killTweensOf(e.target);        
        gsap.to(e.target, {
            x: "-=10", 
            y: "-=10",
            duration: 0,
            ease: "power2.out"
        })
    }

    const emailLeave = (e) => {
        gsap.killTweensOf(e.target);
        gsap.to(e.target, {
            x: "+=10", 
            y: "+=10",
            duration: 0.1,
            ease: "power2.out"
        })
    }

    const clickHome = () => {
        smoother.scrollTo(0, true)
    }

    const clickAbout = () => {
        smoother.scrollTo(ueberMich.value, true, "top 20%")
    }

    const clickProjekt = () => {
        smoother.scrollTo(projekte.value, true, "top 15%")
    }

    const openGit = () => {
        window.open("https://github.com/Nico09322", "_blank", "noopener,noreferrer")
    }

    const openMail = () => {
        window.location.href = "mailto:mail@nicopies.de"
    }

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/nico-pies-688228275/", "_blank", "noopener,noreferrer")
    }

</script>

<template>
        <div class="bg-[#FFFAEF] w-full h-[200vh]" id="smooth-wrapper">
            <div id="smooth-content">
                <div class="w-full h-[5rem] flex flex-row place-content-between gap-[3rem] items-center pr-[3rem] pl-[1rem]">
                            <div ref="profilePic" class="w-[3.5rem] h-[3.5rem] bg-[#EFA00B] rounded-full flex items-center justify-center">
                                <img :src="bild" alt="" class="w-[2.9rem] rounded-full"/>
                            </div>
                            <div ref="nav" class="flex flex-row gap-[3rem] font-taviraj text-[#454545]">
                                <div @click="clickHome" class="cursor-pointer group hover:scale-110 duration-150">
                                    <span class="group-hover:text-[#EFA00B] duration-150">H</span>
                                    <span class="group-hover:text-[#D65108] duration-150">O</span>
                                    <span class="group-hover:text-[#591F0A] duration-150">M</span>
                                    <span class="group-hover:text-[#0267C1] duration-150">E</span>
                                </div>
                                <div @click="clickAbout" class="cursor-pointer group hover:scale-110 duration-150">
                                    <span class="group-hover:text-[#EFA00B] duration-150">Ü</span>
                                    <span class="group-hover:text-[#D65108] duration-150">B</span>
                                    <span class="group-hover:text-[#591F0A] duration-150">E</span>
                                    <span class="group-hover:text-[#0267C1] duration-150">R</span>&nbsp;
                                    <span class="group-hover:text-[#EFA00B] duration-150">M</span>
                                    <span class="group-hover:text-[#D65108] duration-150">I</span>
                                    <span class="group-hover:text-[#591F0A] duration-150">C</span>
                                    <span class="group-hover:text-[#0267C1] duration-150">H</span>                                    
                                </div>
                                <div @click="clickProjekt" class="cursor-pointer group hover:scale-110 duration-150">
                                    <span class="group-hover:text-[#EFA00B] duration-150">P</span>
                                    <span class="group-hover:text-[#D65108] duration-150">R</span>
                                    <span class="group-hover:text-[#591F0A] duration-150">O</span>
                                    <span class="group-hover:text-[#0267C1] duration-150">J</span>
                                    <span class="group-hover:text-[#EFA00B] duration-150">E</span>
                                    <span class="group-hover:text-[#D65108] duration-150">K</span>
                                    <span class="group-hover:text-[#591F0A] duration-150">T</span>
                                    <span class="group-hover:text-[#0267C1] duration-150">E</span>                                    
                                </div>
                            </div>
                </div>
                        <div ref="navDivider" class="w-full h-[0.15rem] bg-[#F5F0E4]"></div>
                        <div class="flex flex-col gap-[2rem] justify-center items-center w-full h-[100vh]">
                            <div class="overflow-hidden">
                                <h1 ref="headline" class="font-raleway font-black text-[16vw] text-[#454545] leading-[0.9]">
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#0267C1] left-0 ">P</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">P</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#33ADFF] left-0 ">O</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">O</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#EFA00B] left-0 ">R</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">R</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#D65108] left-0 ">T</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">T</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#591F0A] left-0 ">F</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">F</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#0267C1] left-0 ">O</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">O</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#EFA00B] left-0 ">L</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">L</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#D65108] left-0 ">I</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">I</span>

                                    </div>
                                    <div class="relative inline-block">
                                        <span class="absolute text-[#591F0A] left-0 ">O</span>
                                        <span @pointerenter="hoverHeadline" @pointerleave="leaveHeadline" class="">O</span>

                                    </div>
                                </h1>                 
                            </div>
                            <div class="overflow-hidden flex flex-col items-end">
                                <h2 ref="name" class="font-kavoon text-[3rem] leading-0"><span class="text-[#EFA00B]" @mouseenter="rotateNico" @mouseleave="idleNico">Nico</span> <span class="text-[#D65108]">Pies</span></h2>
                                <svg ref="unterstrichRef" width="139" height="17" viewBox="0 0 139 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9.07437C1.53291 9.07437 2.06581 9.07437 24.6558 7.7421C47.2458 6.40984 91.8767 3.74531 137.86 1.00003" stroke="#33ADFF" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M49.446 15.9375C51.4444 15.8043 53.4428 15.6711 66.7958 14.47C80.1487 13.269 104.796 11.0041 130.189 8.67062" stroke="#33ADFF" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="absolute right-[20rem] top-[80vh]">
                                <svg ref="scrollRef" width="96" height="161" viewBox="0 0 96 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M66.467 66.2659C68.6728 71.56 70.8787 76.8541 73.118 83.9931C75.3573 91.1321 77.5632 99.9556 78.9201 110.457C80.2771 120.958 80.7182 132.87 81.1728 145.142" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M70.0673 146.061C70.876 146.87 73.1122 149.308 76.4419 152.944C80.6384 157.527 82.0466 158.583 82.3182 158.823C83.6141 159.968 84.3542 153.972 88.9399 148.125C90.0763 146.612 90.9585 145.457 92.1818 143.928C92.7311 143.208 93.1355 142.602 93.5521 141.977" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M15.5849 36.0418C14.5791 35.7032 10.302 36.1502 7.18484 37.0544C5.96862 37.4072 4.86684 37.9586 3.79673 38.5207C2.69966 39.097 2.04257 40.5492 1.59048 42.1255C1.36921 42.8971 1.5854 43.7019 1.92235 44.3284C3.19428 46.6933 6.42798 46.9867 9.53332 47.554C11.2632 47.8699 12.7572 48.0061 13.9949 48.5665C17.1993 50.0175 17.0512 52.5168 17.1087 53.5869C17.2341 55.9174 12.7741 56.8074 9.95324 57.3187C7.93155 57.3763 6.22141 57.2645 5.09542 57.0393C4.5282 56.9259 3.96944 56.8141 2.37782 56.3603" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M25.4056 35.0259C23.9427 35.2494 22.1411 36.1502 21.0067 37.7282C19.6487 39.6173 19.4252 42.5776 19.647 44.838C19.8746 47.1566 21.5587 49.1269 23.4229 50.4866C25.514 51.1655 29.1036 51.6193 32.3952 50.6644C32.9641 50.3799 33.4111 50.1564 34.549 49.9261" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M33.8715 30.9622C34.5454 32.0831 35.673 34.5653 36.5772 36.5413C37.7449 39.0931 38.3822 40.9995 39.2863 42.8078C39.5132 43.2616 39.7367 43.7086 39.6284 43.7154C37.7875 43.8305 38.0503 40.0039 37.6541 37.1271C37.3553 34.9575 38.0435 33.2243 38.9443 32.2676C40.7527 30.4 41.9955 29.4992 42.8387 28.6543C43.3467 28.2564 44.0172 27.9212 45.3853 27.5757" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M56.8992 23.1735C58.8024 23.1735 63.0964 23.6205 65.8631 24.8616C68.0192 25.8288 68.5214 28.4698 69.0327 31.0621C69.5103 33.4831 68.1963 35.9199 66.6182 37.4421C64.7333 39.2604 62.331 40.2139 59.9554 40.6135C57.3434 41.0529 55.5514 37.1797 54.3645 35.092C52.5029 31.8177 51.9347 29.5061 51.6503 27.3015C51.5226 26.3119 52.6052 25.5473 53.5619 24.9276C54.6303 24.4197 55.7648 24.0776 56.9466 23.9083C57.5697 23.8507 58.2402 23.8507 58.9311 23.8507" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M69.7675 4.54816C70.5532 5.22205 72.1312 7.46725 75.2298 17.2083C76.7884 22.108 78.3352 25.8555 80.5397 28.9219C81.4981 30.0479 82.6291 31.2941 83.8686 32.4776C84.4375 32.9907 84.8845 33.3259 85.0064 33.3327" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M77.5563 1.50031C78.0033 3.522 79.5814 7.79904 80.6007 10.41C81.7168 13.2687 82.6292 16.7256 84.0972 21.404C86.1307 25.4287 87.5971 26.3295 88.723 27.1185C89.2903 27.4606 89.849 27.6841 91.102 27.9144" stroke="#33ADFF" stroke-width="3" stroke-linecap="round"/>
                                </svg>

                            </div>
                        </div>
                <div class="mt-[10rem] h-[50rem] flex items-center flex-col relative">
                    <h2 ref="ueberMich" class="font-kavoon text-[3rem]"><span class="text-[#D65108]">ÜBER</span> <span class="text-[#591F0A]">MICH</span></h2>
                    <div ref="picWrapper" class="p-[1rem] bg-[#EFA00B] rounded-lg relative mt-[8rem] z-20"> 
                        <img :src="bildGroß" alt="" class="rounded-lg w-[20rem]"/>
                            <svg ref="picScribble" class="absolute top-[3.5rem] right-[7.8rem] z-10 scale-[145%]" width="71" height="90" viewBox="0 0 71 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.09237 53.9853C1.29379 53.9853 0.682763 51.9889 1.17885 43.6734C2.19451 26.6487 5.91585 13.8751 7.32546 10.4509C7.91664 9.01478 8.33578 8.22454 9.43987 10.9076C12.9919 19.5396 14.5913 30.3487 15.5956 33.4069C18.0444 40.8642 18.2212 18.0978 19.2254 17.9859C22.412 17.6308 21.6514 24.3291 22.1535 26.5434C22.3881 27.5775 22.8553 28.3583 23.4603 27.0727C28.4353 16.5008 32.1115 5.03024 35.7596 1.05249C36.7621 -0.0406517 37.3809 16.1437 38.482 31.6131C39.751 49.4425 48.8635 8.62383 51.48 6.80888C52.6027 6.03015 53.6973 6.1918 54.511 6.89056C59.6555 11.3084 57.9503 27.6807 58.2528 39.2934C58.4329 46.2075 62.772 21.9697 66.2083 16.6852C67.019 16.664 67.8175 18.0615 68.4286 21.3768C69.0396 24.6921 69.4389 29.8829 69.8503 35.2309" stroke="#33ADFF" stroke-width="2" stroke-linecap="round"/>
                                <path d="M27.4761 88.6216C27.4761 88.4687 27.7819 87.7017 28.4365 86.8884C28.9404 86.2624 29.5615 88.0771 29.9438 88.3123C32.4293 89.8412 33.6489 85.614 35.3091 84.8389C35.7032 84.6549 36.1189 84.8354 36.3923 85.0278C36.9287 85.405 37.1292 86.1469 37.4756 86.4574C38.5501 87.4205 40.058 84.0708 41.2977 83.524C42.4139 83.0316 42.7644 85.7577 43.6148 86.7285C45.2501 88.5955 47.0094 83.5286 48.5178 82.9841C49.9187 82.4784 50.6449 84.9884 51.2219 85.4136C52.7207 86.5181 54.7346 83.7603 56.3948 83.1775C56.8 83.0353 57.2047 83.2135 57.5163 83.4058C59.1828 84.4342 59.6052 86.995 59.9134 87.5372C60.1012 87.8676 60.6085 86.6938 61.1855 86.1539C61.8386 85.5428 63.0763 85.6094 64.1178 85.7623C64.5476 85.9152 64.777 86.2211 64.9717 86.5316C65.1663 86.8421 65.3192 87.1479 65.7085 88.3899" stroke="#33ADFF" stroke-width="2" stroke-linecap="round"/>
                            </svg>



                    </div>
                    <div ref="profileInfo" class="w-[18rem] h-[13rem] bg-[#D65108] rounded-lg p-[1rem] absolute top-60 z-10" >
                        <div class="w-full h-full bg-[#591F0A] rounded-lg p-[1rem] font-taviraj">
                            <div class="flex flex-col pointer-events-none">
                                <h3 class="font-kavoon text-[2rem] text-[#EFA00B]">Nico <span class="text-[#FFFAEF]">21</span></h3>
                                <div class="flex flex-row items-center gap-3 mt-[1rem]">
                                    <Icon name="ic:round-school" class=" bg-[#D65108] w-[2rem] h-[2rem]"/>
                                    <p class="text-[#FFFAEF]">FH Südwestfahlen</p>
                                </div>
                                <div class="flex flex-row items-center gap-3">
                                    <Icon name="tabler:map-pin-filled" class=" bg-[#D65108] w-[2rem] h-[2rem]"/>
                                    <p class="text-[#FFFAEF]">Hagen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" absolute top-60 font-taviraj text-[#FFFAEF] flex flex-col">
                        <div ref="JS" class="bg-[#591F0A] w-[10rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="skill-icons:javascript" class="w-[2rem] h-[2rem]"/>
                            <p>Javascript</p>
                        </div>
                        <div ref="nuxt" class="bg-[#EFA00B] w-[7rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="skill-icons:nuxtjs-dark" class="w-[2rem] h-[2rem]"/>
                            <p>Nuxt</p>
                        </div>
                        <div ref="vue" class="bg-[#D65108] w-[7rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="devicon:vuejs" class="w-[2rem] h-[2rem]"/>
                            <p>Vue</p>
                        </div>
                        <div ref="tailwind" class="bg-[#EFA00B] w-[9rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="vscode-icons:file-type-tailwind" class="w-[2rem] h-[2rem]"/>
                            <p>Tailwind</p>
                        </div>  
                        <div ref="strapi" class="bg-[#591F0A] w-[7rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="logos:strapi-icon" class="w-[2rem] h-[2rem]"/>
                            <p>Strapi</p>
                        </div>
                        <div ref="supabase" class="bg-[#D65108] w-[9rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="skill-icons:supabase-dark" class="w-[2rem] h-[2rem]"/>
                            <p>Supabase</p>
                        </div>   
                        <div ref="figma" class="bg-[#D65108] w-[9rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 -z-10 ">
                            <Icon name="skill-icons:figma-dark" class="w-[2rem] h-[2rem]"/>
                            <p>Figma</p>
                        </div>  
                        <div ref="email" class="bg-[#33ADFF] w-[7.5rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 z-0 absolute top-[3rem] right-[5rem] hover:shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] hover:duration-200" @mouseenter="emailHover" @mouseleave="emailLeave" @click="openMail">
                            <Icon name="dashicons:email" class="w-[2rem] h-[2rem]"/>
                            <p>Email</p>
                        </div> 
                        <div ref="github" class="bg-[#0267C1] w-[8rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 z-0 absolute top-[4rem] right-[5rem] hover:shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] hover:duration-200" @mouseenter="emailHover" @mouseleave="emailLeave" @click="openGit">
                            <Icon name="ri:github-fill" class="w-[2rem] h-[2rem]"/>
                            <p>Github</p>
                        </div>                                                                                                     
                        <div ref="linkedin" class="bg-[#33ADF] w-[9rem] h-[4rem] rounded-lg flex flex-row items-center p-[1rem] gap-3 z-0 absolute top-[5rem] right-[5rem] hover:shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] hover:duration-200" @mouseenter="emailHover" @mouseleave="emailLeave" @click="openLinkedIn">
                            <Icon name="mdi:linkedin" class="w-[2rem] h-[2rem]"/>
                            <p>LinkedIn</p>
                        </div>  
                    </div>
                </div>
                <div class="mt-[10rem]">

                    <div class="projekt-wrapper overflow-hidden mb-[5rem]">
                        <h2 ref="projekte" class="flex justify-center font-kavoon text-[3rem] text-[#D65108] w-full">PROJEKTE</h2> 
                        <div class="projekt-container flex flex-col">
                           
                            <div class="flex flex-row gap-[3rem] h-[100vh] mt-[5rem] mr-[5rem] ml-[5rem]">
                                <Projekt ref="card" v-if="projectData?.data" v-for="project in projectData.data" :name="project.Title" :url="project.Hero.url" :desc="project.Description" :skills="project.Skills"/>                            
                            </div>

                        </div> 
                    </div>
                </div> 

  
            </div>
        </div>  
</template>


