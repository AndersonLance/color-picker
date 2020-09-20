<template>
  <div>
    <Modal v-if="modalVisible" 
      :modalPayload="modalPayload"
      :activeColor="activeColor"
      v-on:closeModal="closeModal"
    />
    <PaletteSideBar class="palette-sidebar"
      :palettes="palettes"
      :activePaletteId="activePaletteId"
      v-on:setActivePaletteId="setActivePaletteId"
    />
    <div id="mainContent">
      <div id="sidebarBtn" :style="{'color':activeColor.Primary[0]['primary-1-050']}">
        <font-awesome-icon icon="ellipsis-v" />
      </div>
      <ActivePaletteViewer
        :palettes="palettes"
        :activePaletteId="activePaletteId"
        :activePaletteColorCounts="activePaletteColorCounts"
        :activeColor="activeColor"
        v-on:showModal="showModal"
        v-on:showNotificationPill="showNotificationPill"
        :style="{'background-color':activeNeutralColor, 'height': '100vh', 'overflow-y':'scroll'}"
      />
      <div id="adminBtn" v-if="isAdmin">
        <router-link to="/admin"><font-awesome-icon icon="cog" /></router-link>
      </div><!-- end #adminBtn -->
      <NotificationPill v-if="notificationPillVisible"
        :notificationPillPayload="notificationPillPayload"
        :activeColor="activeColor"
        v-on:closeNotificationPill="closeNotificationPill"
      />
    </div><!-- end #mainContent -->
  </div>
</template>

<script>

import json from '../json/ColorPalettes.json';
import Modal from '../components/Modal.vue';
import NotificationPill from '../components/NotificationPill.vue';
import PaletteSideBar from '../components/PaletteSideBar.vue';
import ActivePaletteViewer from '../components/ActivePaletteViewer.vue';

export default {
  name: 'Home',
  components: {
    Modal,
    NotificationPill,
    PaletteSideBar,
    ActivePaletteViewer
  },
  data () {
    return {
      modalVisible: false,
      modalPayload: {},
      notificationPillVisible: false,
      notificationPillPayload: {},
      isAdmin: false,
      palettes: json.palettes,
      activePaletteId: 1,
      activePaletteColorCounts: {
        "Primary": 0,
        "Neutral": 0,
        "Supporting": 0
      }
    }
  },
  mounted() {
    this.getColorCounts();
  },
  computed: {
    activePaletteIndex() {
      return this.activePaletteId - 1;
    },
    activeColor() {
      return this.palettes[this.activePaletteIndex];
    },
    activeNeutralColor() {
      if (this.activeColor.Neutral) {
        // There is a neutral color in this palette
        return this.activeColor.Neutral[0]['neutral-1-200']; 
      } else {
        // There is NOT a neutral color in this palette - Use palette 1 neutral-1-200
        return "#BCCCDC";
      }
    }
  },
  methods: {
    setActivePaletteId(id) {
      this.activePaletteId = id;
      this.getColorCounts();
    },
    getColorCounts() {
      // Set counts
      this.activePaletteColorCounts.Primary = this.palettes[this.activePaletteIndex].Primary.length;
      if (this.palettes[this.activePaletteIndex].Neutral) {
        // There is at least one neutral color in this palette
        this.activePaletteColorCounts.Neutral = this.palettes[this.activePaletteIndex].Neutral.length;
      } else {
        // There are no neutral colors in this palette
        this.activePaletteColorCounts.Neutral = 0;
      }
      this.activePaletteColorCounts.Supporting = this.palettes[this.activePaletteIndex].Supporting.length;
    },
    showModal(payload) {
      this.modalPayload = payload;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    showNotificationPill(payload) {
      this.notificationPillPayload = payload;
      this.notificationPillVisible = true;
      // Close automatically after 3 seconds
      setTimeout(() => this.notificationPillVisible = false, 3000);
    },
    closeNotificationPill() {
      // Close notification pill because user clicked the close button
      this.notificationPillVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>

#sidebarBtn {
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 1.5rem;
  display: none; // Hidden by default
  cursor: pointer;
}

.palette-sidebar {
  height: 100vh;
  width: 250px;
  position: fixed;
  background-color: $neutral-1-050;
  overflow-y: auto;
}

#mainContent {
  margin-left: 250px;
}

#adminBtn {
  font-size: 1.3rem;
  position: absolute;
  right: 15px;
  top: 15px;

  a {
    color: $neutral-1-100;
  }
}

#adminBtn a:hover {
  color: $neutral-1-200;
}

@media only screen and (max-width: 1429px) {
  
  .palette-sidebar {
    display: none; // Hide sidebar on smaller screen sizes
  }

  #mainContent {
    margin-left: 0px;
  }

  #sidebarBtn {
    display: block;
  }
}

</style>
