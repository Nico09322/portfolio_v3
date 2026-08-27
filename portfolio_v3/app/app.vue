<script setup>
let smoother = null

const scrollTargets = {}

function registerSmoother(instance) {
  smoother = instance
}

function registerTarget(name, el) {
  scrollTargets[name] = el
}

function scrollToSection(target) {
  if (!smoother) {
    // Smoother existiert noch nicht (z. B. Seite lädt gerade) -> zur Home navigieren
    navigateTo(`/#${target}`)
    return
  }
  if (target === 'home') {
    smoother.scrollTo(0, true)
  } else if (scrollTargets[target]) {
    smoother.scrollTo(scrollTargets[target], true, "top 15%")
  }
}

provide('scrollToSection', scrollToSection)
provide('registerSmoother', registerSmoother)
provide('registerTarget', registerTarget)
</script>

<template>
  <div class="cursor-[url('/cursor.svg'),_auto]">
    <Nav />
    <NuxtPage />

  </div>
</template>
