<script setup>
    import {ScrollSmoother} from "gsap/ScrollSmoother"
    import { gsap } from "gsap";

    gsap.registerPlugin(ScrollSmoother); 

    const route = useRoute()
    const { data: page } = await useAsyncData(route.path, () =>
    queryCollection('projects').path(route.path).first()
    )

    onMounted(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })

        const smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: "#smooth-content",
            smooth: 0.7
        });

    })


</script>

<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <article v-if="page" class="bg-[#FFFAEF] p-[2rem] text-[#454545] pl-[12.5%] pr-[12.5%]">
                <div class="mb-[2rem] mt-[5rem]">
                    <NuxtLink to="/#projekte">
                        <img src="../../assets/svg/back.svg" alt="zurück" class="hover:scale-150 duration-100 scale-125 pl-[1rem]"/>
                    </NuxtLink>
                </div>
                <h1 class="font-kavoon text-[5rem]">{{ page.title }}</h1>
                <ContentRenderer :value="page" class="font-taviraj"/>
                <div class="flex flex-row gap-[1.5rem] mt-[1rem] mb-[1rem] w-[90%]">
                    <div v-for="skill in page.skills" class="flex flex-row items-center justify-center font-taviraj gap-[0.5rem] bg-black/10 rounded-lg p-[0.5rem]">
                        <img :src="skill.bild" :alt="skill.name" class="max-h-[1.3rem]"/>
                        <div>{{ skill.name }}</div>
                    </div>
                </div>
                <div v-if="page.gallery?.length" class="mt-[3rem] font-taviraj opacity-55">Bilder:</div>
                <div v-if="page.gallery?.length" class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mt-[1rem] gap-[0.5rem]">
                    <img v-for="(img, i) in page.gallery" :key="img" :src="img" alt="`${page.title} ${i + 1}`" class="max-h-[25rem] rounded-lg "/>
                </div>
            </article>
        </div>
    </div>
  
</template>