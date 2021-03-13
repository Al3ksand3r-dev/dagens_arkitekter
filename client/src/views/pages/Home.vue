<template>
  <div class="home">
    <app-header>
      <Slider
        :images="[
          {
            url: 'main-showcase-first',
            title: 'Dagens Arkitekter',
            text:
              'Dagens Arkitekter är ett modernt företag som tar fram praktiska och innovativa lösningar anpassade till livsstil och miljö.',
          },
          {
            url: 'main-showcase-second',
            title: 'Projektering & Rådgivning',
            text:
              'Dagens Arkitekter utvecklar tillsammans mer er unika och trivsamma miljöer för människor att växa i.',
          },
          {
            url: 'main-showcase-third',
            title: 'Försäljningsmaterial',
            text: 'Exteriör & interiör - 2D & 3D bilder.',
          },
          {
            url: 'main-showcase-fourth',
            title: 'Hemsida',
            text: 'Projektsida med solstudie & bostadsväljare.',
          },
          {
            url: 'main-showcase-fifth',
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
      titleSmall="Våra projekt"
      scrollTo="project"
      :imgUrl="{
        first: 'interior-natural-sun',
        second: 'interior-living-room',
      }"
    />
    <app-section
      title="Försäljningsmaterial."
      titleSmall="Välj material"
      scrollTo="material"
      :imgUrl="{
        first: 'interior-natural-sun',
        second: 'interior-living-room',
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
