<template>
    <!-- SVG 1 枚で完結するマップコンポーネント (JSON 版) -->
    <div ref="wrap" class="relative w-full">
      <svg
        ref="svgEl"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="xMidYMid meet"
        class="w-full h-auto select-none"
      >
        <!-- 背景画像 -->
        <image :href="mapImageSrc" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" />
  
        <!-- 出店区画 -->
        <template v-for="cell in cells" :key="cell.id">
          <rect
            v-if="cell.kind === 'rect'"
            :x="cell.x"
            :y="cell.y"
            :width="cell.w"
            :height="cell.h"
            rx="4"
            ry="4"
            class="stall-shape"
            @click.stop="open(cell)"
          />
          <polygon
            v-else
            :points="cell.points"
            class="stall-shape"
            @click.stop="open(cell)"
          />
          <text
            :x="cell.cx"
            :y="cell.cy"
            text-anchor="middle"
            alignment-baseline="central"
            class="stall-no pointer-events-none"
          >{{ cell.label }}</text>
        </template>
      </svg>
  
      <!-- 店舗情報ポップアップ -->
      <transition name="fade">
        <div
          v-if="popup.visible"
          ref="popupEl"
          class="stall-popup absolute bg-white border border-slate-300 rounded shadow-lg p-3 w-[300px] z-20"
          :style="{ top: popup.top + 'px'}"
        >
          <button class="absolute top-1 right-1 text-xs" @click="popup.visible = false">×</button>
          <h3 class="font-semibold mb-2">No. {{ popup.cell.label }}</h3>
          <template v-if="popup.shop">
            <p class="text-sm mb-1"><strong>模擬店番号：</strong> {{ popup.shop.mogitenId }}</p>
            <p class="text-sm mb-1"><strong>団体:</strong> {{ popup.shop.organizationName }}</p>
            <p class="text-sm mb-1"><strong>模擬店名:</strong> {{ popup.shop.mogitenName }}</p>
            <p class="text-sm mb-3"><strong>出店日:</strong> {{ popup.shop.holdingTime_1 }} {{ popup.shop.holdingTime_2 }}</p>
          </template>
          <template v-if="popup.secondShop">
            <div class="border-t pt-3">
              <p class="text-sm mb-1"><strong>模擬店番号：</strong> {{ popup.secondShop.mogitenId }}</p>
              <p class="text-sm mb-1"><strong>団体:</strong> {{ popup.secondShop.organizationName }}</p>
              <p class="text-sm mb-1"><strong>模擬店名:</strong> {{ popup.secondShop.mogitenName }}</p>
              <p class="text-sm"><strong>出店日:</strong> {{ popup.secondShop.holdingTime_1 }} {{ popup.secondShop.holdingTime_2 }}</p>
            </div>
          </template>
          <p v-if="!popup.shop && !popup.secondShop" class="text-sm text-slate-500">この番号の店舗データは JSON に存在しません。</p>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  /**
   * JSON から店データを読み込み、SVG 区画と紐付けるバージョン
   * --------------------------------------------------------------
   * JSON スキーマ (例 mogiten.json)
   * {
   *   "mogiten": [ { mogitenId: "1", mogitenName: "…", … }, … ]
   * }
   */
  import { ref, reactive, nextTick, onMounted } from 'vue'
  import mapImage from '~/assets/img/mogiten/mogimap.jpg'
  import mogitenData from '/data/mogiten.json'
  
  /*****************
   * 1. 背景画像とSVGサイズ
   *****************/
  const mapImageSrc = mapImage
  const svgWidth = ref(1200)
  const svgHeight = ref(768)
  
  /*****************
   * 2. 区画定義 (viewBox 座標)
   *****************/
  const rawCells = [
    // 1-2
    { id: 1, label: "1-2", kind: 'rect', x: 285, y: 130, w: 55, h: 40 },
    // 3-4
    { id: 2, label: "3-4", kind: 'rect', x: 285, y: 170, w: 55, h: 40 },
    // 5-6
    { id: 3, label: "5-6", kind: 'rect', x: 285, y: 215, w: 55, h: 40 },
    // 7-8
    { id: 4, label: "7-8", kind: 'rect', x: 285, y: 260, w: 55, h: 40 },
    // 9-10
    { id: 5, label: "9-10", kind: 'rect', x: 285, y: 300, w: 55, h: 40 },
    // 11-12
    { id: 6, label: "11-12", kind: 'rect', x: 285, y: 345, w: 55, h: 40 },
    // 13-14
    { id: 7, label: "13-14", kind: 'rect', x: 285, y: 385, w: 55, h: 40 },
    // 15-16
    { id: 8, label: "15-16", kind: 'rect', x: 285, y: 430, w: 55, h: 40 },
    // 17-18
    { id: 9, label: "17-18", kind: 'rect', x: 285, y: 470, w: 55, h: 40 },
    // 19-20
    { id: 10, label: "19-20", kind: 'rect', x: 285, y: 515, w: 55, h: 40 },
    // 21-22
    { id: 11, label: "21-22", kind: 'rect', x: 285, y: 555, w: 55, h: 40 },
    // 23-24
    { id: 12, label: "23-24", kind: 'rect', x: 285, y: 600, w: 55, h: 40 },


    // 25-26
    { id: 13, label: "25-26", kind: 'rect', x: 285, y: 800, w: 55, h: 50 },
    // 27-28
    { id: 14, label: "27-28", kind: 'rect', x: 285, y: 850, w: 55, h: 45 },
    // 29-30
    { id: 15, label: "29-30", kind: 'rect', x: 285, y: 895, w: 55, h: 45 },
    // 31-32
    { id: 16, label: "31-32", kind: 'rect', x: 285, y: 940, w: 55, h: 45 },
    // 33-34
    { id: 17, label: "33-34", kind: 'rect', x: 285, y: 985, w: 55, h: 40 },
    // 35-36
    { id: 18, label: "35-36", kind: 'rect', x: 285, y: 1025, w: 55, h: 40 },
    // 37-38
    { id: 19, label: "37-38", kind: 'rect', x: 285, y: 1065, w: 55, h: 40 },
    // 39-40
    { id: 20, label: "39-40", kind: 'rect', x: 285, y: 1105, w: 55, h: 45 },
    // 41-42
    { id: 21, label: "41-42", kind: 'rect', x: 285, y: 1155, w: 55, h: 40 },
    // 43-44
    { id: 22, label: "43-44", kind: 'rect', x: 285, y: 1195, w: 55, h: 45 },
    // 45-46
    { id: 23, label: "45-46", kind: 'rect', x: 285, y: 1240, w: 55, h: 45 },

    // pintsArr:[{上},{左},{下},{右}]
    {
      id: 24, label: "47-48", kind: 'poly',
      pointsArr: [ { x: 612, y: 322 }, { x: 575, y: 370 }, { x: 615, y: 400 }, { x: 648, y: 355 } ],
    },
    {
      id: 25, label: "49-50", kind: 'poly',
      pointsArr: [ { x: 648, y: 355 }, { x: 615, y: 400 }, { x: 652, y: 422 }, { x: 682, y: 385 } ],
    },
    {
      id: 26, label: "51-52", kind: 'poly',
      pointsArr: [ { x: 682, y: 385 }, { x: 652, y: 422 }, { x: 688, y: 450 }, { x: 718, y: 412 } ],
    },
    {
      id: 27, label: "53-54", kind: 'poly',
      pointsArr: [ { x: 718, y: 412 }, { x: 688, y: 450 }, { x: 722, y: 477 }, { x: 752, y: 437 } ],
    },
    {
      id: 28, label: "55-56", kind: 'poly',
      pointsArr: [ { x: 752, y: 437 }, { x: 722, y: 477 }, { x: 758, y: 505 }, { x: 788, y: 465 } ],
    },
    {
      id: 29, label: "57-58", kind: 'poly',
      pointsArr: [ { x: 788, y: 465 }, { x: 758, y: 505 }, { x: 792, y: 533 }, { x: 825, y: 493 } ],
    },
    {
      id: 30, label: "59-60", kind: 'poly',
      pointsArr: [ { x: 825, y: 493 }, { x: 792, y: 533 }, { x: 828, y: 560 }, { x: 860, y: 523 } ],
    },
    {
      id: 31, label: "61-62", kind: 'poly',
      pointsArr: [ { x: 860, y: 523 }, { x: 828, y: 560 }, { x: 865, y: 588 }, { x: 895, y: 548 } ],
    },
  ]
  
  // 文字列化と重心算出
  const cells = rawCells.map(c => {
    if (c.kind === 'poly') {
      c.points = c.pointsArr.map(p => `${p.x},${p.y}`).join(' ')
      const sum = c.pointsArr.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 })
      c.cx = sum.x / c.pointsArr.length
      c.cy = sum.y / c.pointsArr.length
    } else {
      c.cx = c.x + c.w / 2
      c.cy = c.y + c.h / 2
    }
    return c
  })
  
  /*****************
   * 3. JSON をロードして Map 化
   *****************/
  const shopMap = ref({}) // { "1": { … }, "2": { … } }
  
  function loadShopJson() {
    const m = {}
    mogitenData.mogiten.forEach(item => { m[item.mogitenId] = item })
    shopMap.value = m
  }
  
  /*****************
   * 4. ポップアップ
   *****************/
  const wrap = ref(null)
  const popupEl = ref(null)
  const popup = reactive({ visible: false, cell: null, shop: null, secondShop: null, top: 0, left: 0 })
  
  function open(cell) {
    popup.cell = cell
    // ラベルから店舗番号を取得（例: "1-2" → ["1", "2"]）
    const numbers = cell.label.split('-')
    // 両方の店舗情報を取得
    const shops = numbers.map(num => shopMap.value[num] || null)
    popup.shop = shops[0] // 最初の店舗情報を表示
    popup.secondShop = shops[1] // 2番目の店舗情報を保存
    popup.visible = true

    nextTick(() => positionPopup(cell))
}
  
function positionPopup() {
  // svg の高さを取得して、その直下に配置
  const svgRect = svgEl.value.getBoundingClientRect()
  popup.top = svgRect.height + 6          // ← 6px マージンだけ
  // 横は CSS が 50% 中央寄せするので何もしない
}
  
  // 画像の実際のサイズを取得
  onMounted(() => {
    // 画像が既に読み込まれている場合
    if (document.readyState === 'complete') {
      const img = new Image()
      img.src = mapImageSrc
      img.onload = () => {
        svgWidth.value = img.naturalWidth
        svgHeight.value = img.naturalHeight
        loadShopJson()
      }
    } else {
      // 画像がまだ読み込まれていない場合
      window.addEventListener('load', () => {
        const img = new Image()
        img.src = mapImageSrc
        img.onload = () => {
          svgWidth.value = img.naturalWidth
          svgHeight.value = img.naturalHeight
          loadShopJson()
        }
      })
    }
  })
  </script>
  
  <style scoped lang="scss">  
  /***** 区画 *****/
  .stall-shape {
    fill: transparent;        // メインカラーを α で
    stroke: $tertiary-color;
    stroke-width: 1;
    cursor: pointer;
    transition: fill .15s;
  
    &:hover {
      fill: rgba(adjust-color($primary-color, $lightness: 10%), .55);
    }
  }
  
  .stall-no {
    font-family: map-get($font-styles, family), $parallel-font-family;
    font-weight: map-get($font-styles, weight);
    font-size: 14px;
    user-select: none;
    fill:transparent;
  }
  
  /***** ポップアップカード *****/
  .stall-popup {
    left: 50%;
    transform: translateX(-50%);
    background: $secondary-color;
    color: $tertiary-color;
    border: 1px solid $quaternary-color;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(#000, .12);
    padding: 0.75rem 1rem;
    width: 280px;
    line-height: 1.4;
    font-family: map-get($font-styles, family), $parallel-font-family;
    position: relative;
  
    /* × ボタン */
    > button {
      font-size: .75rem;
      font-weight: 700;
      line-height: 1;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      text-align: center;
      background: transparent;
      color: $tertiary-color;
      transition: background .12s;
  
      &:hover {
        background: rgba($quaternary-color, .35);
      }
    }
  
    h3 {
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $primary-color;
    }
  
    p {
      font-size: 0.85rem;
      & + p { margin-top: 0.2rem; }
      strong { font-weight: 600; }
    }
  
    .border-t {
      border-top: 1px dashed $quaternary-color;
      padding-top: 0.5rem;
      margin-top: 0.5rem;
    }
  
    /* 吹き出し矢印を上向きに変更 */
    &::before {
      content: '';
      position: absolute;
      top: -10px; // 上に移動
      left: 50%;
      transform: translateX(-50%);
      border-width: 0 6px 6px 6px;
      border-style: solid;
      border-color: transparent transparent $secondary-color transparent;
      filter: drop-shadow(0 -1px 1px rgba(#000,.1));
    }
  }
  
  /***** ポップアップフェード *****/
  .fade-enter-active,
  .fade-leave-active { transition: opacity .18s ease; }
  .fade-enter-from,
  .fade-leave-to    { opacity: 0; }
  </style>
  