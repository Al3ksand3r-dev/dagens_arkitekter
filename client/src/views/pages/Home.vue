<template>
  <div class="home">
    <app-header>
      <Slider
        :images="[
          {
            url: 'main-showcase-first',
            title: 'Dagens Arkitekter',
            text:
              'Dagens Arkitekter är ett modernt företag som tar fram praktiska och innovativa lösningar anpassade till livsstil och miljö. Vi tar stort ansvar och skapar framtiden för dagens samhälle.',
          },
          {
            url: 'main-showcase-second',
            title: 'Projektering & Rådgivning',
            text:
              'Dagens Arkitekter utvecklar tillsammans mer er unika och trivsamma miljöer för människor att växa i.',
          },
        ]"
      />
    </app-header>
    <About />
    <Services />
  </div>
</template>

<script>
import Slider from "@/components/ui/Slider.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import About from "@/components/articles/About.vue";
import Services from "@/components/articles/Services.vue";
export default {
  name: "Home",
  components: {
    Slider,
    AppHeader,
    About,
    Services,
  },
};
</script>

<style lang="scss" scoped></style>
