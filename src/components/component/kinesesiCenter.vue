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
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_4_76)">
          <rect
            x="17.057"
            y="24.5401"
            width="30.1552"
            height="30.1552"
            rx="15.0776"
            transform="rotate(-14.3681 17.057 24.5401)"
            fill="#55ACEE"
          />
          <g clip-path="url(#clip0_4_76)">
            <path
              d="M42.9433 27.54C42.3352 28.009 41.6517 28.3957 40.9038 28.6826C41.5734 28.0236 41.9921 27.1447 42.0555 26.209C41.4278 26.821 40.691 27.3375 39.8655 27.7256C38.9864 27.1855 37.881 26.9905 36.7851 27.2713C34.6805 27.8105 33.3982 29.902 33.921 31.9427C33.9952 32.2323 34.1012 32.5056 34.2354 32.7594C31.0289 33.4167 27.8442 32.665 25.392 30.9109C25.2038 31.5407 25.1785 32.2236 25.352 32.9008C25.6805 34.1828 26.643 35.1414 27.8353 35.5421C27.2057 35.683 26.5755 35.6673 25.9908 35.5221C25.9945 35.5376 25.9985 35.5531 26.0024 35.5687C26.4611 37.359 28.1573 38.516 29.9875 38.4088C29.6893 38.5752 29.3642 38.7065 29.0167 38.7956C28.7711 38.8585 28.5265 38.8965 28.2828 38.913C29.1438 40.2568 30.8248 40.9646 32.4999 40.5672C31.4497 41.8924 29.9579 42.9041 28.1726 43.3614C27.8651 43.4402 27.5573 43.5005 27.2504 43.5428C29.2054 44.1591 31.3651 44.2576 33.5171 43.7063C40.5261 41.9106 42.9164 35.2981 41.6654 30.4152C41.6244 30.2549 41.5799 30.0965 41.5319 29.9399C42.1429 29.2282 42.6223 28.4119 42.9433 27.54Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_4_76"
            x="0.323311"
            y="0.323364"
            width="70.1625"
            height="70.1625"
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
              result="effect1_foregroundBlur_4_76"
            />
          </filter>
          <clipPath id="clip0_4_76">
            <rect
              x="23.9109"
              y="30.508"
              width="19.1736"
              height="15.1791"
              rx="7.58954"
              transform="rotate(-14.37 23.9109 30.508)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </kinesis-element>
  </Kinesis-container>
</template>
