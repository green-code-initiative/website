<template>
  <div class="pdf-slide-viewer">
    <div v-if="loading" class="loading">
      <p>Chargement du PDF...</p>
    </div>
    <div v-else-if="error" class="error">
      <p><strong>Erreur:</strong> {{ error }}</p>
    </div>
    <div v-else-if="renderedPages.length === 0" class="error">
      <p>Aucune page trouvée dans le PDF</p>
    </div>
    <div v-else class="swiper-container">
      <Swiper
        :modules="swiperModules"
        :navigation="true"
        :pagination="{ clickable: true }"
        :space-between="10"
        :slides-per-view="1"
        class="pdf-swiper"
      >
        <SwiperSlide v-for="(page, index) in renderedPages" :key="index">
          <div class="slide-content">
            <canvas 
              :ref="(el) => setCanvasRef(el as HTMLCanvasElement, index)"
              class="pdf-page"
            ></canvas>
            <div class="page-number">{{ index + 1 }} / {{ totalPages }}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, markRaw } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import dynamique pour éviter les erreurs SSR
let pdfjsLib: any = null;

const props = defineProps<{
  pdfUrl: string;
}>();

const swiperModules = [Navigation, Pagination];
const loading = ref(true);
const error = ref<string | null>(null);
const renderedPages = ref<any[]>([]);
const totalPages = ref(0);
const canvasRefs = ref<HTMLCanvasElement[]>([]);

const setCanvasRef = (el: HTMLCanvasElement | null, index: number) => {
  if (el) {
    canvasRefs.value[index] = el;
  }
};

const loadPdf = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    // Import dynamique de pdfjs-dist pour éviter les erreurs SSR
    if (!pdfjsLib) {
      pdfjsLib = await import("pdfjs-dist");
      
      // Configuration du worker PDF.js
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.mjs',
        import.meta.url
      ).toString();
    }
    
    const loadingTask = pdfjsLib.getDocument(props.pdfUrl);
    const pdf = await loadingTask.promise;
    totalPages.value = pdf.numPages;
    
    // Préparer les pages pour le rendu
    const pages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      // Empêcher Vue de rendre réactifs les objets PDF.js
      pages.push(markRaw(page));
    }
    
    renderedPages.value = pages;
    loading.value = false;
  } catch (err) {
    console.error('Erreur lors du chargement du PDF:', err);
    error.value = `Impossible de charger le PDF: ${err instanceof Error ? err.message : 'Erreur inconnue'}`;
    loading.value = false;
  }
};

const renderPage = async (page: any, index: number) => {
  const canvas = canvasRefs.value[index];
  if (!canvas) return;
  
  const context = canvas.getContext('2d');
  if (!context) return;
  
  const viewport = page.getViewport({ scale: 1.5 });
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  
  const renderContext = {
    canvasContext: context,
    viewport: viewport,
  };
  
  try {
    await page.render(renderContext).promise;
  } catch (err) {
    console.error(`Erreur rendu page ${index + 1}:`, err);
  }
};

// Watcher pour rendre les pages quand les données sont prêtes et que le composant n'est plus en loading
watch([renderedPages, loading], async ([pages, isLoading]) => {
  if (!isLoading && pages.length > 0) {
    await nextTick();
    
    // Attendre un peu plus pour que Swiper soit complètement monté
    setTimeout(async () => {
      for (let i = 0; i < pages.length; i++) {
        await renderPage(pages[i], i);
      }
    }, 200);
  }
});

onMounted(() => {
  // Ne charger PDF que côté client
  if (typeof window !== 'undefined') {
    loadPdf();
  }
});
</script>

<style lang="scss" scoped>
.pdf-slide-viewer {
  width: 100%;
  margin: 2rem 0;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  min-height: 200px;
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  
  p {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }
}

.error p {
  color: var(--error-color, #e74c3c);
}

.swiper-container {
  position: relative;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

.pdf-swiper {
  width: 100%;
  height: auto;
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: var(--primary-color);
    background: rgba(255, 255, 255, 0.9);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: -22px;
    
    &:after {
      font-size: 18px;
      font-weight: bold;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: scale(1.1);
    }
    
    &.swiper-button-disabled {
      opacity: 0.3;
      transform: none;
    }
  }
  
  :deep(.swiper-pagination) {
    position: relative;
    margin-top: 1rem;
    
    .swiper-pagination-bullet {
      background: var(--text-secondary);
      opacity: 0.5;
      
      &.swiper-pagination-bullet-active {
        background: var(--primary-color);
        opacity: 1;
      }
    }
  }
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  
  .pdf-page {
    max-width: 100%;
    max-height: 600px;
    width: auto;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: white;
  }
  
  .page-number {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
}

@media (max-width: 768px) {
  .pdf-swiper {
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      width: 36px;
      height: 36px;
      margin-top: -18px;
      
      &:after {
        font-size: 14px;
      }
    }
  }
  
  .slide-content .pdf-page {
    max-height: 400px;
  }
}
</style>
