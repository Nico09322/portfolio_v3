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
    <div ref="root" class="w-[40rem] h-[40rem]  p-[1rem] rounded-lg flex flex-col flex-shrink-0" :style="{backgroundColor: bgColor}">
        <img :src="props.url" class="rounded-lg"/>
        <div>
            <h3 class="font-kavoon text-[#FFFAEF] text-[2rem]">{{ props.name }}</h3>
            <p class=" font-taviraj text-[#FFFAEF]">{{ props.desc }}</p>
        </div>
    </div>
</template>