<template>
  <h1>Loves Portfolio</h1>
  <section class="about">
    <h2>Detta är jag</h2>
    <p>Jag heter Love Efraimsson och jag är 34 år gammal. Jag bor i Göteborg med min fru och två katter. På fritiden tränar jag och umgås med familj och vänner. Just nu arbetar jag på Swedish Match där jag är maskinoperatör. Här nedan ser nu vad jag hittills har lärt mig på min resa till att bli fullstack-utvecklare!</p>
    <p>Tidigare har jag läst en utbildning inom frontend. Men jag kände att jag även ville ha dels kunskapen men också förståelsen vad som händer på baksidan av projekten och det tycker jag att jag är på god väg att få. Jag har upptäckt att jag tycker att det är minst lika kul med backend och att arbeta med databaser!</p>
  </section>
  
  <section class="knowledge">
    <h2>Mina kunskaper</h2>
    <ul>
      <li>C#</li>
      <li>Vue</li>
      <li>Swagger API</li>
      <li>SQL och MongoDB; lägga till, ta bort, redigera</li>
      <li>Visual Studio och Visual Studio Code</li>
      <li>Express.js</li>
      <li>Entity Framework</li>
      <li>Ansluta till databaser i olika miljöer</li>
      <li>Anpassa projekt till Visual Studio 2026</li>
      <li>Anpassa projekt när det kommit nyare metoder än i föreläsningarna</li>
      <li>Googla och ta reda på saker själv</li>
    </ul>
  </section>
  
  <ProjectsList />
  
</template>

<script>
  import ProjectsList from '@/components/ProjectsList.vue';

  export default {
    components: {
      ProjectsList
    }
  }
</script>