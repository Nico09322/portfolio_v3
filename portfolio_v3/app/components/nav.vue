<script setup>
    import { SplitText } from "gsap/SplitText";
    import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
    import {ScrollTrigger} from "gsap/ScrollTrigger"
    import {ScrollSmoother} from "gsap/ScrollSmoother"
    import { gsap } from "gsap";
    import bild from "./assets/img/Nico_Pies_Bewerbungsfoto.jpg"

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollSmoother); 
    gsap.registerPlugin(DrawSVGPlugin); 
    gsap.registerPlugin(SplitText);

    const nav = ref(null)
    const profilePic = ref(null)
    const navDivider = ref(null)

    // Wird von index.vue bereitgestellt, falls wir dort sind (Smoother existiert)
    const scrollToSection = inject('scrollToSection', null)

    function goTo(target) {
    if (scrollToSection) {
        // Wir sind auf der Home-Page, Smoother ist verfügbar
        scrollToSection(target)
    } else {
        // Wir sind auf einer anderen Seite, erst zurück navigieren
        navigateTo(`/#${target}`)
    }
    }

    onMounted(() => {
    gsap.from(navDivider.value, { y: -200, duration: 0.75, delay: 0.75, ease: "power2.inOut" })
    gsap.from(profilePic.value, { y: -200, duration: 0.75, delay: 1, ease: "power2.inOut" })
    gsap.from(nav.value, { y: -200, duration: 0.5, delay: 1.25, ease: "power2.inOut", stagger: 0.05 })
    })
</script>

<template>
  <div class="bg-[#FFFAEF] w-full fixed h-[5rem] flex flex-row place-content-between gap-[3rem] items-center pr-[3rem] pl-[1rem] z-40">
    <div ref="profilePic" class="w-[3.5rem] h-[3.5rem] bg-[#EFA00B] rounded-full flex items-center justify-center">
      <img src="../assets/img/Nico_Pies_Bewerbungsfoto.jpg" alt="" class="w-[2.9rem] rounded-full" />
    </div>
    <div ref="nav" class="flex flex-row gap-[3rem] font-taviraj text-[#454545]">
      <div @click="goTo('home')" class="cursor-pointer group hover:scale-110 duration-150">
        <span class="group-hover:text-[#EFA00B] duration-150">H</span>
        <span class="group-hover:text-[#D65108] duration-150">O</span>
        <span class="group-hover:text-[#591F0A] duration-150">M</span>
        <span class="group-hover:text-[#0267C1] duration-150">E</span>
      </div>
      <div @click="goTo('ueberMich')" class="cursor-pointer group hover:scale-110 duration-150">
        <span class="group-hover:text-[#EFA00B] duration-150">Ü</span>
        <span class="group-hover:text-[#D65108] duration-150">B</span>
        <span class="group-hover:text-[#591F0A] duration-150">E</span>
        <span class="group-hover:text-[#0267C1] duration-150">R</span>&nbsp;
        <span class="group-hover:text-[#EFA00B] duration-150">M</span>
        <span class="group-hover:text-[#D65108] duration-150">I</span>
        <span class="group-hover:text-[#591F0A] duration-150">C</span>
        <span class="group-hover:text-[#0267C1] duration-150">H</span>
      </div>
      <div @click="goTo('projekte')" class="cursor-pointer group hover:scale-110 duration-150">
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
  <div ref="navDivider" class="z-50 w-full h-[0.15rem] fixed top-[5rem] left-0 bg-[#F5F0E4]"></div>
</template>