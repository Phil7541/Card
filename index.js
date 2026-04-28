Vue.createApp({
  data() {
    return {
      navbarVisible: false,
      projects: [
        { "name": "E-Paper Business Card", 
          "description": "Batteryless e-paper business card with NFC integration", 
          "keyPoints": [
            "Designed ultra-thin hardware enclosure with removable FPC access",
            "Built batch flashing pipeline using SPI + ESP32 driver board",
            "Integrated NFC tag for instant contact sharing",
            "Optimised layout for low-resolution multi-colour e-paper display"
          ],
          "link": "",
          "image": {
            "url": "",
            "altText": ""
          } },
          { "name": "ESP32 Sensor Hub API", 
          "description": "Low-power sensor hub exposing environmental data via REST API", 
          "keyPoints": [
            "Built RESTful API for multi-device querying",
            "Integrated SHT31 sensor with periodic sampling + error handling",
            "Implemented SNTP time sync for accurate timestamping",
            "Designed for low network overhead and reliability"
          ],
          "link": "" },
          { "name": "Raspberry Pi Personal Dashboard", 
          "description": "Customisable dashboard aggregating sensor data and system info", 
          "keyPoints": [
            "Modular widget system for dynamic display layout",
            "Integrated ESP32 sensor data over HTTP",
            "Built using Python with async data fetching",
            "Designed for multi-display setups"
          ],
          "link": "",
          "image": {
            "url": "",
            "altText": ""
          } },
      ],
      linkedinIcon: "assets/icons/linkedin-yellow.png",
      githubIcon: "assets/icons/github-yellow.png",
      emailIcon: "assets/icons/email-yellow.png"
    }
    
  },
  methods: {
    handleScroll() {
      const header = document.querySelector("header");
      const rect = header.getBoundingClientRect();

      this.navbarVisible = rect.bottom <= 0;
    },
  },
  computed: {
    
  },
  watch: {

  },
  mounted() {
  const header = document.querySelector("header");

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.navbarVisible = !entry.isIntersecting;
      },
      { threshold: [0, 0.1] }
    );

    this.observer.observe(header);
  },
  unmounted() {
    this.observer.disconnect();
  }
}).mount('#app')