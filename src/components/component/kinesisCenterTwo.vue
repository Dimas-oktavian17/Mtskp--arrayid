<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>
<template>
  <Kinesis-container>
    <kinesis-element
      :strength="20"
      :type="translate"
      :transformOrigin="center"
      :originY="50"
    >
      <svg
        class="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10.7695"
          width="41.6101"
          height="41.6101"
          rx="4"
          transform="rotate(15 10.7695 0)"
          fill="#1977F3"
        />
        <g clip-path="url(#clip0_4_64)">
          <path
            d="M21.1312 41.7146C29.6687 44.0022 38.4442 38.9357 40.7318 30.3981C43.0195 21.8606 37.9529 13.0851 29.4154 10.7975C20.8778 8.50985 12.1023 13.5764 9.81468 22.1139C7.52706 30.6514 12.5936 39.4269 21.1312 41.7146Z"
            fill="#1977F3"
          />
          <path
            d="M30.093 32.3379L31.9754 28.0518L27.6885 26.9031L28.4655 24.0032C28.7929 22.7814 29.7105 21.7482 31.6322 22.2631L33.5822 22.7856L34.6016 18.9813C34.6016 18.9813 32.913 18.2049 31.2217 17.7518C27.6913 16.8058 24.8094 18.3263 23.7708 22.2023L22.8581 25.6088L18.932 24.5569L17.7344 29.0264L21.6605 30.0784L18.7661 40.8804C19.5198 41.2152 20.3094 41.4944 21.1312 41.7146C21.9529 41.9347 22.7769 42.0856 23.5965 42.1748L26.4909 31.3727L30.093 32.3379Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_64">
            <rect
              x="13.9574"
              y="6.65314"
              width="32.0078"
              height="32.0078"
              rx="4"
              transform="rotate(15 13.9574 6.65314)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </kinesis-element>
  </Kinesis-container>
</template>
