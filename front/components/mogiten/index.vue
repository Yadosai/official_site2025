<template>
    <div id="mogitenEyeCatch">
        <p>模擬店情報</p>
        <p class="mapintroduction">（マップ上の番号をタップすると簡易的な模擬店情報がすぐに確認できます）</p>
    </div>
    <div id="mogitenMapContainer">
        <mogitenOverlay class="map-overlay" />
    </div>
    <div id="mogitenItemContainer">
        <item v-for="mogiten in mogitenData" :key="mogiten.mogitenId"
            :mogitenName="mogiten.mogitenName"
            :mogitenFontSize="mogiten.mogitenFontSize"
            :organizationName="mogiten.organizationName"
            :mogitenIntroduction="mogiten.mogitenIntroduction"
            :mogitenId="mogiten.mogitenId"
            :holdingTime_1="mogiten.holdingTime_1"
            :holdingTime_2="mogiten.holdingTime_2" />
    </div>
</template>

<script>
import item from '~/components/mogiten/item'
import mogitenData from '~/data/mogiten.json'
import mogitenOverlay from '~/components/mogiten/overlay'

export default {
    components: { item, mogitenOverlay },
    data() {
        return {
            mogitenData: mogitenData.mogiten
        }
    }
}
</script>

<style lang="scss" scoped>
#mogitenEyeCatch {
    background: $quaternary-color;
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
}

#mogitenEyeCatch p {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 24px;
    margin: 0;
}

#mogitenEyeCatch .mapintroduction {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-size: 14px;
    margin: 0;
}

#mogitenMapContainer {
    display: flex;
    padding: 25px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}

#mogitenMapContainer img,
#mogitenMapContainer .map-overlay {
    width: 70%;
    height: auto;
    margin: 0 auto;
}

#mogitenItemContainer {
    background: $quaternary-color;
    display: flex;
    padding: 25px;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 25px;
    align-self: stretch;
    flex-wrap: wrap;
}

@media (min-width: 950px) {
    #mogitenEyeCatch p {
        font-size: 40px;
    }

    #mogitenEyeCatch .mapintroduction {
        font-size: 15px;
    }

    #mogitenMapContainer img,
    #mogitenMapContainer .map-overlay {
        width: 650px;
        height: auto;
    }
}
</style>