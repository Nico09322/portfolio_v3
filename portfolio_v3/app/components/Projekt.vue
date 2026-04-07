<script setup>

    import {ScrollTrigger} from "gsap/ScrollTrigger";
    import { gsap } from "gsap";
        
    gsap.registerPlugin(ScrollTrigger);

    const props = defineProps({
        name: String,
        url: String,
        desc: String,
        skills: String,
    })

    const root = ref(null);
    const rotate = Math.floor(Math.random() * 10 -5);
    const hover = () => {
        gsap.to(root.value, {
            x: "-=10",  // Relativ zur aktuellen Position
            y: "-=10",
            duration: 0,
            ease: "power2.out"
        })
    };

    const leave = () => {
        gsap.to(root.value, {
            x: "+=10",  // Relativ zur aktuellen Position
            y: "+=10",
            duration: 0.1,
            ease: "power2.out"
        })
    }

    defineExpose({
    root
    });

    const colors = [
        "#EFA00B",
        "#D65108",
        "#591F0A"
    ]

    const bgColor = colors[Math.floor(Math.random() * colors.length)]


    

</script>

<template>
    <div ref="root" class="w-[40rem] h-[40rem] p-[1rem] rounded-lg flex flex-col flex-shrink-0 hover:shadow-[10px_10px_0px_0px_rgba(0,_0,_0,_1)] hover:duration-200" :style="{backgroundColor: bgColor, transform: `rotate(${rotate}deg`}" @mouseenter="hover" @mouseleave="leave">
        <img :src="props.url" class="rounded-lg" alt=""/>
        <div>
            <h3 class="font-kavoon text-[#FFFAEF] text-[2rem]">{{ props.name }}</h3>
            <p class=" font-taviraj text-[#FFFAEF]">{{ props.desc }}</p>
        </div>
    </div>
</template>