<template>
  <svg viewBox="0 0 360 500">
    <defs>
      <pattern
        id="manga-dots"
        width="7"
        height="7"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" />
      </pattern>
    </defs>
    <circle cx="180" cy="263" r="155" fill="url(#manga-dots)" />
    <path
      d="M111 445 89 367 64 302Q48 268 72 260L111 303 113 81Q112 47 134 47T157 81L164 222 176 209Q193 200 204 220 221 204 238 227 260 222 271 248L285 321Q289 357 254 396L241 445Z"
      fill="var(--paper)"
      stroke="currentColor"
      stroke-width="7"
      stroke-linejoin="round"
    />
    <path
      d="M113 304 144 334m22-102 3 67m40-66 6 62m29-48 9 59m-125 82q48-14 91 1"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      d="M126 337q54-52 112 0-53 50-112 0Z"
      fill="none"
      stroke="currentColor"
      stroke-width="6"
    />
    <circle cx="182" cy="337" r="19" fill="currentColor" />
    <circle cx="177" cy="331" r="5" fill="var(--paper)" />
    <path
      d="m182 276 0 27m-61-12 18 18m102-17-19 19M99 336h20m129 0h21"
      stroke="currentColor"
      stroke-width="4"
    />
  </svg>
</template>
