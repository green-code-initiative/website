<script setup lang="ts">
import organizations from "@/assets/data/partner-organizations.json";
import PartnerOrganization from "@/components/partners/PartnerOrganization.vue";

const props = defineProps<{
  level?: "platinum" | "gold" | "silver";
  type?: "partner" | "sponsor";
  showBadge?: boolean;
}>();

interface PartnerOrg {
  name: string;
  img: string;
  width: number;
  height: number;
  level?: "platinum" | "gold" | "silver";
  type?: string[];
}

// Filtrer par niveau et type si spécifiés
const filteredOrganizations = (organizations as PartnerOrg[]).filter(org => {
  const levelMatch = !props.level || org.level === props.level;
  const typeMatch = !props.type || (org.type && org.type.includes(props.type));
  return levelMatch && typeMatch;
});

const levelConfig = {
  platinum: {
    title: "Partenaires Platinum",
    badge: "/img/partners/platinium-level.png",
    logoScale: 1,
  },
  gold: {
    title: "Partenaires Or",
    badge: "/img/partners/gold-level.png",
    logoScale: 1,
  },
  silver: {
    title: "Partenaires Argent",
    badge: "/img/partners/silver-level.png",
    logoScale: 1,
  },
};

const config = props.level ? levelConfig[props.level as keyof typeof levelConfig] : null;
</script>

<template>
  <div class="partner-level-list" :class="level ? `level-${level}` : ''">
    <div v-if="level && showBadge" class="level-header">
      <img :src="config?.badge" :alt="config?.title" class="level-badge" />
      <h3 class="level-title">{{ config?.title }}</h3>
    </div>
    
    <div class="partners-grid" :class="level ? `grid-${level}` : ''">
      <PartnerOrganization
        v-for="organization in filteredOrganizations"
        :key="organization.name"
        :name="organization.name"
        :logo="{
          filename: organization.img,
          width: organization.width * (config?.logoScale || 1),
          height: organization.height * (config?.logoScale || 1),
        }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner-level-list {
  width: 100%;
  margin-bottom: 3rem;
}

.level-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .level-badge {
    width: 80px;
    height: auto;
  }

  .level-title {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
  }
}

.partners-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  &.grid-platinum {
    gap: 3.5rem;
  }

  &.grid-gold {
    gap: 3rem;
  }

  &.grid-silver {
    gap: 2rem;
  }
}

// Styles spécifiques par niveau
.level-platinum {
  .level-header {
    .level-badge {
      width: 100px;
      animation: pulse 2s infinite;
    }

    .level-title {
      font-size: 2rem;
      background: linear-gradient(135deg, #a8a8a8 0%, #d4d4d4 50%, #a8a8a8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
  }
}

.level-gold {
  .level-header {
    .level-badge {
      width: 90px;
    }

    .level-title {
      font-size: 1.875rem;
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

.level-silver {
  .level-header {
    .level-title {
      font-size: 1.5rem;
      color: #808080;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@media screen and (max-width: 768px) {
  .level-header {
    .level-badge {
      width: 60px;
    }

    .level-title {
      font-size: 1.5rem;
    }
  }

  .level-platinum .level-header .level-title {
    font-size: 1.75rem;
  }

  .level-gold .level-header .level-title {
    font-size: 1.625rem;
  }

  .level-silver .level-header .level-title {
    font-size: 1.25rem;
  }

  .partners-grid {
    gap: 2rem;

    &.grid-platinum,
    &.grid-gold,
    &.grid-silver {
      gap: 2rem;
    }
  }
}
</style>
