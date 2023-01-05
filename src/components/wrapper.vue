<script setup>
import navVue from "./nav.vue";
import footerVue from "./footer.vue";
import mainVue from "./main.vue";
import featureVue from "./feature.vue";
import bgsecondary from "./component/bgsecondary.vue";
import Bgtwo from "./component/bgtwo.vue";
</script>
<template>
  <!-- wrapper -->
  <div class="relative">
    <!-- main section -->
    <!-- footer bg -->
    <Bgtwo></Bgtwo>
    <div
      class="absolute w-full h-[44.938rem] top-[203.438rem] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectanglefour.svg')]"
    >
      <!-- header -->
      <div class="flex flex-row items-center gap-[1.875rem] pt-32">
        <!-- header wrapper -->
        <div class="flex flex-col items-start justify-center">
          <div class="pb-[0.625rem] flex flex-row items-center gap-[0.625rem]">
            <!-- svg -->
            <svg
              width="45"
              height="2"
              viewBox="0 0 45 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="45"
                height="2"
                transform="matrix(1 0 0 -1 0 2)"
                fill="white"
              />
            </svg>
            <p class="order-1 text-base font-semibold font-header">
              ALTERNATIVES
            </p>
          </div>
          <h1 class="order-2 text-4xl font-bold text-white font-header">
            Karena Tool Kita Ini Nggak Ada Apa-Apanya, Inilah Alternatifnya!
          </h1>
        </div>
      </div>
      <!-- deskripsi -->
      <p class="order-1 text-base font-normal text-white font-header grow">
        Seperti yang lo tau sendiri ya, tool ini tuh nggak ada apa-apanya.
        Barangkali lo udah serius gitu butuh tool untuk sosial media, maka dari
        itu kita kasih 2 alternatif yang bisa lo pake untuk sosial media lo.
      </p>
    </div>
    <!-- feature  -->
    <div
      class="absolute w-full h-[2330px] left-0 top-[1067px] bg-mainPrimary pt-[30rem]"
    >
      <!-- wrapper feature -->
      <div
        class="container flex flex-row items-center py-[6.25rem] gap-[8.188rem]"
      >
        <!-- wrapper deskripsi -->
        <div class="flex flex-col items-start">
          <!-- header -->
          <div class="flex flex-row items-center gap-[0.625rem] pb-[0.625rem]">
            <!-- svg -->
            <svg
              width="45"
              height="3"
              viewBox="0 0 45 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="45"
                height="2"
                transform="matrix(1 0 0 -1 0 2.5)"
                fill="#FC881D"
              />
            </svg>
            <!-- header text -->
            <h1 class="text-base font-semibold font-header text-homeSecondary">
              KENAPA SIH?
            </h1>
          </div>
          <h2
            class="order-2 pb-5 text-4xl font-bold font-header text-homePrimary"
          >
            Kenapa Kami Tidak Memberikan Insight Apapun?
          </h2>
          <!-- deskripsi -->
          <p
            class="order-4 text-base font-normal font-header text-homePrimary opacity-60 pb-[3.125rem]"
          >
            Di sini kita akan klarifikasi mengapa kita tidak memberikan insight
            apapun di tool ini kepada kamu. Pada dasarnya hal ini kami lakukan
            semata-mata ingin menyelamatkan planet bumi.
          </p>
          <!-- button -->
          <div
            class="flex flex-row justify-center items-center py-5 px-[1.875rem] bg-homePrimary rounded-full order-6 shadow-btnfeature"
          >
            <h1 class="text-base font-bold font-main text-secondary2">
              Pelajari Lebih Lanjut
            </h1>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.5L16 12.5L12 8.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12.5H16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <!-- wrapper fitur -->
        <div class="order-1">
          <!-- top feature -->
          <div class="flex flex-row items-start gap-[1px]">
            <!-- box one -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
            <!-- box two -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
          </div>
          <!-- bottom feature -->
          <div class="flex flex-row items-start gap-[1px]">
            <!-- box three -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
            <!-- box four -->
            <div
              class="flex flex-col items-start p-[2.188rem] gap-[1.1188rem] bg-homePrimary"
            >
              <!-- header -->
              <div class="flex flex-row items-center gap-[1.313rem]">
                <!-- icon -->
                <div
                  class="flex flex-row justify-center items-center p-[0.625rem] rounded-[0.313rem]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.66663C14.1421 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 14.1421 1.66663 10 1.66663C5.85786 1.66663 2.5 2.78591 2.5 4.16663C2.5 5.54734 5.85786 6.66663 10 6.66663Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 10C17.5 11.3833 14.1667 12.5 10 12.5C5.83333 12.5 2.5 11.3833 2.5 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 4.16663V15.8333C2.5 17.2166 5.83333 18.3333 10 18.3333C14.1667 18.3333 17.5 17.2166 17.5 15.8333V4.16663"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1
                  class="order-1 text-base font-semibold text-white font-header"
                >
                  Database
                </h1>
              </div>
              <!-- deskripsi -->
              <p class="order-1 text-base font-normal text-white">
                Data insight yang banyak kan bakal disimpen di database, ya kalo
                datanya banyak kan jadi gede juga size database-nya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end wrapper feature-->
      <!-- wrapper reasons -->
      <div class="container flex flex-col items-center py-[6.25rem] gap-16">
        <!-- head wrapper -->
        <div class="flex flex-col items-center">
          <h1
            class="text-base font-semibold font-header text-homeSecondary pb-[0.625rem]"
          >
            TERUS GIMANA?
          </h1>
          <h2
            class="order-2 pb-5 text-4xl font-bold text-center font-header text-homePrimary"
          >
            Terus Ngapain Dong Kalo Nggak Ada Insight Apapun?
          </h2>
          <p
            class="text-base text-center font-header text-homePrimary opacity-60"
          >
            Ya nggak tau, salah sendiri lu ngapain ke website ini. Tapi ada tiga
            kemungkinan kenapa lo bisa ada di website ini. Ketiga kemungkinan
            itu akan gwej jabarkan di bawah ini dengan ilustrasinya hehehe.
          </p>
        </div>
        <!-- end head wrapper -->
        <!-- wrapper deskripsi -->
        <div class="flex flex-row items-start gap-[1.938rem] order-1">
          <!-- box one -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAKNklEQVR4Ae2dbawcVRnHb0HUJlYT0xQ1KCDYyzxn9ibSqKnaYCRCxERTY9MUE0xIIcUPQEJqNAE+iP1SE4yhktRgGvec2Vu3FrkRSFQI5YPxpSiGwgeSEqzoFRMUi7UvXi5/8zyzc/fu7e6dl93ZnZdnk83szst5+f/Oc+bMmXOeMzWlH1VAFVAFVAFVQBVQBVQBVUAVUAVUgXErAExdgMc/8W60GlfB+dfBmp2w5h40zfdgzX75OvNDOPMDBLQHTbodTf/LCBqb0PIvxlOfedu40xwXH6dJ0sZp5LRymjntnAfOS5SvMI/3wJlbJO+sAWuBqQvi4ij0cREgaHwYztwIax6Epd/A0jycOQNn3oIlxHwX4OhfcPQ8LP0EztwJZz6GNr1rUhnnuCUNnBZJEz0vabS0EJMXSJ4576yBaGEeFG1YowIW4IEao23eC+dvhTNNOHoZSTIfDzsUqEn/hKUnYP07YM2V47ACqX04LomTngCnIVkBjSvAfJwL8cuhVv5W1m6gsJM+gObMBjh/F6z3a7HSJNCyn7MIZ16Cpe/CNRp5gBawHLbEIXEtxlpp9vxwAT4TaufvYi0nzXMpfqm2AvoqnPntyKw1jVDO/AXOfAeBd+lSoob8wWFJmBx2mrSM5twF0ZI1neDtSCSE9a6GpUNjsNjVqzuuMp35E6zZgQOXvTMrX75WwuCwRlcNr572QYUivF8fYo2z5ifzdR0hdnbusdkyMChjw+0/JQ26wzOXpM0cDs9c0mkMnpqA1Q7WUNoxZucwBTeVFmhtXA9H34c1pwslRFQwxJrpaW7tJs1Y2DKWa5K07gfDiNIw8q05LZq3Nq5PmqdM52H2qsvgzMOwlG+DYxQCBfQiAu+GuIzC0efB544iznzD4Iblw8wgLk+ZjuOgfwUc/aoEQnQtzNFfEdA2YGrNykzzPjnG5+QLppueUcTDDA76V6zMz1D/0Zy5vHRwu2LOI6AvrRSA93U6HUYLoBtvfuEy5ObM5SvzlOl/+HxLj5SqlK8UmRsqrcY1kQD8u4ANxHQFwtEjQz8vo715LZy3b+KPDCuBZfnv/D8g8D4iX/6dJYwiXSONSW8fM4oKbuqt9EyFz2PpSleRhFieFmfmwN/l+8r8m9k4f1dqsHwBAvo4LJ2ojBgMMuwQKeijUOzLl0FGdoJZpYKMuel1CPyfVQpumS01Lu3Mam56XWLIcP7NsHROAWe2qkHWltf+c8wsEWDMTn8Alp5RuKWBGxWaZ5hdLOTOi/Wq3aciEaq7DdsXd64KOByCYo6q9ZbOesOCG5ijzHAgZBlC4sz/FHBJATM7Z27sCxhteru8241rsenxolfzh5jleZDRNgRn/qbWW1LrjQyPGbYNnQ9YhnUmGu1Y9BJc7/SFja1begDLALPA/Fitt+TWG1kxs1w+7jocpWGeVcAVAezMs8x0yYoxSx+Fo9cUcFUA02vMtAs4HKiuj0dRFVf2rTwu+VuXAZapGPVunJQd6sr0O9Pt1YKjvVo9V6R6jkA72tu1YGseUsAVA2zNQwJYZgE6c1ABVwwwM+VZi9i/6SIE5qcKuGKAmen+TReFgHl+UVR367Yqjc1DIWCefc9zeRVsVcCG+WCmUW8WAvOAAq5cFf1AtxXd9O5WwBUD3PTu7gK23k2VGNyut5moen4L1rtpGWDaAmf+o1ZcESsOWW7pAm7Thzo+L6rV0KivRR/HrP/BZYA3rw2911SkBNcXbGiggfnleXOWOu4L1IKrUDict2/JeqMfcObreg+uSA3Wb0IaLG2BpTcUcukhn0SLPh0Z7tIWbXpfx22gVtPlrqaP9R38jva2C+HIqgWX3IKZYXvbhUuWu/wHArpVOzxKDLjfkNkewAc9H878Xa24tJDn0SKznGnPb/Fg58yjCrikgJldnCtHeVxiUy93Q6N+DUVmFvi39Vhsvz+wM9OV881Rj8J6gtn1Y9qzL2xNmwNqwSWrpp05MLD13EOYPexY7wtw5r8KuSSQmVUCv5xLnNHe9B5YOqKAywLYe4qZLQFM8qPzTPymQi44ZGfe5BVdkjDtOUe87fAstXo0UMrc6v5jIu86PXQ7f+DoLu3ZKrAFS88V3dWPXaJ94JEelo6pFRcW8jFmlAjmoJPEb1YZPLzX71ayyGs5DeKWeD8Oe++Hpd+rFRfMip35Hb/iTQxytRPhzNdg6axCLgzks8xkNWapjsliivoSojgtbWd+zkxSQYw7GY6ulXX76nevKw5Y1p59qTTNZ+N4pT4u84itd79W05Oupr37E/c5p6Ucrr7CS8hNOpM1jZ+X3BvVaiuD4HccluqLiHEXcn6hMMjR6CBYWfZ31i1Unx7jBsx+VOJGa2QB2u+acGkaek6r6jHdKhw9x5r3Y5HbPjjzFVg6qZBzh3yStc4N5KCAxXlLuDq2jt/Kq7oOXybsFV8bg0DkuV+WACjbgpV5wcgjXJ4luJqL/jzhRmGHa+/KGvfF6hDIQ/BxhunMS2nWQI545LIFrzev9+NRFvCTrGkusLIEKvfjwHwblha00TV0o2sBrCV7qSvSRwbqOQoU8JCAWcO0A+jGVRAQeJfC0dMKOTPkI6zhuHhligfWuxqWXlDIqSG/0OOlPZP6Y7oIzr8Oll5RyIkhvwLrf25MeEYTDazZoetAJAAsa2WYHaNRfYyhhEv1+Lep349VIb8hq6xHTkPHyGckUXUGCezWeU59IMvcL2934R6H0pKXNRGduVcH7fVA5kFz9/ZdYzCtwEU4n72uwZn7FLJAZrj3neeJrgighkmDQA57u+o8/Pas9FK1N68dRsvCXtuFbE7X7xHKnK403KjUhY5e6FuwdKo2kNm9r6Nv4vEr3xHpUOmtNLyadDssvV4DyK+D88oroNTp0/EFwlNiXq0w5Fdl2s8gz3NVBw5MrYE1X4Sl4xWEfFzyhqk1VecYmz848ykE5mhlIHNeZv1Pxma8TieIfy6eVFXuuciLkDwk8FdVJ7hRXtGc2SBrODlzpnTWzGnm9aeaMxui/Oi2jwLyrGz9O+DoH6WBzGnllnJVOzD6cBpqV/gmylyPMnj54TQG5vqlZeSGynnNLpYpMtbMwtK5AlrzOXDaxj2lpGplAHPT6zrunIrjx5p9arOLqbnpdVXTeyL5kSq71bim415xcYLWzHEfAaelrC/pJ0IwYaRhK5v2TGQoEA+tCWiPtpITwsp6WtjFSdcioCfHNNB+QeJiHyV17XLMCmuY69DauB7W4+FAf86typawvd0c1zBp1WszKiB92S1/Bk36ERz9e2SgOSwOk8PWvuSMdEZ4Gb9nlWdR6z+GYXrB5Fr/MQmrLu9uR8gh96DCRyp/e3jPTNHdKd2M9CScv10ffXLHNHwE4UQ4fzus94uYkSOn5BwGW9QJX8PLUd0QxKID7wZYcrA0L76vwyWD5mUfH9POivIXAJm/7BoNOO8b4bfRqN0QmvJj1ByoAqqAKqAKqAKqgCqgCqgCqoAqMAoF/g8dbImwzgbYWAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
          <!-- box two -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
          <!-- box three -->
          <div class="flex flex-col items-start gap-3">
            <!-- svg -->
            <div
              class="w-[23.25rem] h-[12.5rem] rounded-[0.625rem] bg-homePrimary opacity-5 flex flex-col items-center justify-center"
            >
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="94" height="94" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_7_14"
                      transform="scale(0.00833333)"
                    />
                  </pattern>
                  <image
                    id="image0_7_14"
                    width="120"
                    height="120"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <!-- deskripsi -->
            <h1
              class="font-header font-semibold text-[1.375rem] leading-[1.875rem] order-1"
            >
              Kamu Tidak Punya Kekasih
            </h1>
            <p class="order-2 font-header text-secondary opacity-60">
              Sudah pasti orang yang tidak punya kekasih akan memiliki waktu
              luang yang banyak, jadi ya lo iseng aja gitu datang ke website
              ini.
            </p>
          </div>
        </div>
        <!-- end wrapper deskripsi -->
      </div>
      <!-- end wrapper reasons -->
    </div>
    <!-- secondary home bg -->
    <bgsecondary></bgsecondary>
    <!-- primary home bg -->
    <div
      class="absolute w-full h-[1240px] bg-cover bg-[url('https://dimas-oktavian17.github.io/assets/iconFigma/Rectangleone.svg')]"
    >
      <section class="container box-border pt-32">
        <mainVue></mainVue>
        <featureVue></featureVue>
      </section>
    </div>
    <!-- navbar -->
    <navVue></navVue>
  </div>
</template>
