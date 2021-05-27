<template>
  <div class="home">
    <app-header>
      <Slider
        :images="[
          {
            url: 'main-showcase-first',
            title: 'Dagens Arkitekter',
            text: 'Dagens Arkitekter är ett modernt företag som tar fram praktiska och innovativa lösningar anpassade till livsstil och miljö',
          },
          {
            url: 'main-showcase-second',
            title: 'Projektering & Rådgivning',
            text: 'Dagens Arkitekter utvecklar unika och trivsamma miljöer för människor att växa i',
          },
          {
            url: 'main-showcase-third',
            title: 'Visualisering',
            text: 'Fotorealistiska interiör & exteriör 3D-bilder',
          },
          {
            url: 'main-showcase-fourth',
            title: 'Projekthemsida',
            text: 'Framtagning av projekthemsida för dina projekt',
          },
        ]"
      />
    </app-header>
    <app-section
      title="Vi erbjuder våra kunder helhetslösningar från idé till verklighet."
      titleSmall="Om oss"
      scrollTo="about"
      :imgUrl="{
        first: 'interior-natural-sun',
        second: 'interior-living-room',
      }"
    />
    <Services />
    <app-section
      title="Projektering & Rådgivning."
      titleSmall=""
      scrollTo="project"
      :imgUrl="{
        first: 'exterior_1',
        second: 'hus_4',
      }"
    />
    <app-section
      title="Visualisering"
      titleSmall=""
      scrollTo="material"
      :imgUrl="{
        first: 'interior_1',
        second: 'interior_2',
      }"
    />

    <app-section
      title="Projekthemsida"
      titleSmall=""
      scrollTo="material"
      :imgUrl="{
        first: 'interior_1',
        second: 'interior_2',
      }"
    />
  </div>
</template>

<script>
import Slider from "@/components/ui/Slider.vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppSection from "@/components/articles/AppSection.vue";
import Services from "@/components/articles/Services.vue";
export default {
  name: "Home",
  components: {
    Slider,
    AppHeader,
    AppSection,
    Services,
  },
};
</script>
