<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>
<template>
  <kinesis-container>
    <kinesis-element
      :strength="20"
      :type="translate"
      :transformOrigin="center"
      :originX="0"
    >
      <svg
        class="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_4_166)">
          <circle cx="33" cy="33" r="13" fill="#FC881D" />
        </g>
        <defs>
          <filter
            id="filter0_f_4_166"
            x="0"
            y="0"
            width="66"
            height="66"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_4_166"
            />
          </filter>
        </defs>
      </svg>
    </kinesis-element>
  </kinesis-container>
</template>
