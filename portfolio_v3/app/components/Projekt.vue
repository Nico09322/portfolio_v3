<script setup>
    const props = defineProps({
    project: { type: Object, required: true },
    index: { type: Number, required: true }
    })

    const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() + 1)


    const blurAmount = computed(() => props.index === 0 ? 0 : props.index + 1);

    const offsetX = computed(() => props.index * 12)
    const offsetY = computed(() => props.index * -8)
    const scale = computed(() => 1 - props.index * 0.05)

    const isHovered = ref(false)

    const transformValue = computed(() => {
        const rotate = isHovered.value ? 0 : rotation
        return `translate(${offsetX.value}px, ${offsetY.value}px) rotate(${rotate}deg) scale(${scale.value})`
    }

    )

    const colors = ['#591F0A', '#EFA00B', '#D65108']
    const bgColor = colors[Math.floor(Math.random() * colors.length)]


</script>

<template>
  <NuxtLink :to="project.path" class="transition-all hover:rotate-0 duration-200 group lg:w-[75%] rounded-lg p-[1rem] flex flex-col justify-center items-start rotate-[var(--r)]  cursor-[url('/pointer.svg'),_pointer]" :class="index > 0 ? 'pointer-events-none' : ''" :style="{backgroundColor: bgColor ,filter: `blur(${blurAmount}px)`, transform: transformValue}" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <h3 class="font-kavoon text-[#FFFAEF] text-[2rem] mb-[0.5rem]">{{ project.title }}</h3>
    <p class="mb-[0.5rem] font-taviraj text-[#FFFAEF] text-[0.8f5rem]">{{ project.description }}</p>
    <div class="flex flex-row gap-[0.5rem] lg:gap-[1.5rem] mb-[1.5rem] w-[90%] flex-wrap">
        <div v-for="skill in project.skills" class="flex flex-row items-center justify-center font-taviraj text-[#FFFAEF] text-[0.75rem] lg:text-[1rem] gap-[0.5rem] bg-black/10 rounded-lg p-[0.5rem]">
            <img :src="skill.bild" :alt="skill.name" class="max-h-[1.3rem]"/>
            <div>{{ skill.name }}</div>
        </div>
    </div>

    <div class="flex overflow-hidden rounded-lg">
        <img v-if="project.image" :src="project.image" :alt="project.title" class="group-hover:scale-105 transition-all duration-200 rounded-lg" />
    </div>


  </NuxtLink>
</template>