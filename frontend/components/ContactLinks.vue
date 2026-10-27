<script setup lang="ts">
import { ArrowUpRight, Check, Copy } from "lucide-vue-next";
const store = useCvStore();
const { text } = useStudioCopy();
const copied = ref(false);
const copyError = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
async function copyEmail() {
  copyError.value = false;
  try {
    await navigator.clipboard.writeText(store.profile?.email || "");
    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
    }, 3000);
  } catch {
    copyError.value = true;
  }
}
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <div v-if="store.profile" class="contact-links">
    <a class="contact-email" :href="`mailto:${store.profile.email}`"
      >{{ store.profile.email }}<ArrowUpRight :size="27" aria-hidden="true"
    /></a>
    <div class="contact-socials">
      <a
        :href="store.profile.github_url"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub<ArrowUpRight :size="16" aria-hidden="true" /></a
      ><a
        :href="store.profile.linkedin_url"
        target="_blank"
        rel="noopener noreferrer"
        >LinkedIn<ArrowUpRight :size="16" aria-hidden="true" /></a
      ><button type="button" @click="copyEmail">
        <Check v-if="copied" :size="15" aria-hidden="true" /><Copy
          v-else
          :size="15"
          aria-hidden="true"
        />{{ copied ? text.copied : text.copyEmail }}
      </button>
    </div>
    <p class="contact-note" role="status">
      {{ copyError ? text.copyFailed : text.contactNote }}
    </p>
  </div>
</template>
