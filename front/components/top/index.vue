<template>
    <div id="eyeCatch">
        <img src="~/assets/img/top/2025topimage.jpg" class="img-background">
        <div class="text-overlay">
            <p class="eyeCatchTitle">やどかり祭</p>
            <p class="eyeCatchSubtitle">～<ruby>祭開始<rt>再スタート</rt></ruby>～</p>
            <p class="eyeCatchDate">5/30,6/1</p>
        </div>
        
    </div>
    <div id="updateInfo">
        <p class="updateInfoTitle">ご報告</p>
        <div class="updateInfoContent">
            <updataInfoItem updateDate="" contentText="このたび、5月30日(金)の宿舎祭前夜祭にて、社会工学類1年2・4クラスの模擬店「クレープ&スムージークレイジー」において、ブラスチック片が混入したスムージー約8食のうち、4食が提供されていたことが判明しました。20時頃に委員が状況を確認し、ただちに販売の中止を命じました。該当商品はすべて廃棄するよう指示し、出店団体には厳重注意を行いました。6月1日(日)の本祭において同団体からはスムージーの提供は行いませんでした。また、提供されたスムージーのうち2食は、すでに委員会で回収済みです。現在のところ健康被害の報告はございませんが、体調に不安がある方はyadosai.tkb@gmail.com までご連絡ください。各種SNSのDMでも対応しております。" />
        </div>
    </div>
    <div id="LinkButtons">
        <buttonItem textHighlightedFirst="模" textMiddlePart="擬店" colorType="black" position="left"
            navigateTo="mogiten" />
        <buttonItem textHighlightedFirst="企" textMiddlePart="画" colorType="white" position="right"
            navigateTo="kikaku" />
        <buttonItem textHighlightedFirst="新" textMiddlePart="歓" colorType="black" position="left" navigateTo="sinkan" />
        <buttonItem textHighlightedFirst="協" textMiddlePart="賛企業" colorType="white" position="right"
            navigateTo="thanks" />
        <buttonItem textHighlightedFirst="出" textMiddlePart="演団体" colorType="black" position="left"
            navigateTo="performer" />
        <buttonItem textHighlightedFirst="A" textMiddlePart="bout" colorType="white" position="right"
            navigateTo="about" />
        <buttonItem textHighlightedFirst="Q" textMiddlePart="&" textHighlightedLast="A" colorType="black"
            position="left" navigateTo="QA" />
        <buttonItem textHighlightedFirst="そ" textMiddlePart="の他" colorType="white" position="right"
            navigateTo="other" />
    </div>
    <div id="trafficRule">
        <p class="trafficTitle">当日の交通規制について</p>
        <img class="trafficImg" src="~/assets/img/top/trafficRole.png">
    </div>
</template>

<script>
import buttonItem from '~/components/top/buttonItem'
import updataInfoItem from '~/components/top/updataInfoItem'

export default {
    components: { buttonItem, updataInfoItem },
}
</script>

<style lang="scss">
#eyeCatch {
    position: relative;
    height: 60vh;
    overflow: hidden;
}

.img-background {
    background-position: center;
    background-size: cover;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.text-overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.eyeCatchTitle {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    width: 50px;
    position: absolute;
    right: 0px;
    top: 25px;
    color: $secondary-color;
    text-align: center;
    font-size: 32px;
    margin: 0px;
    white-space: nowrap;
    writing-mode: vertical-rl;
}

.eyeCatchSubtitle {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    position: absolute;
    left: 15px;
    bottom: 20px;
    color: $secondary-color;
    font-size: 20px;
    margin: 0px;
}

.eyeCatchDate {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    position: absolute;
    right: 10px;
    bottom: 20px;
    color: $secondary-color;
    text-align: center;
    font-size: 20px;
    margin: 0px;
}

#updateInfo {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    align-self: stretch;
}

.updateInfoTitle {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    align-self: stretch;
    color: $secondary-color;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    margin: 0px;
}

.updateInfoContent {
    display: flex;
    padding: 0px 25px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
}

#LinkButtons {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
}

#trafficRule {
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    align-self: stretch;
}

.trafficTitle {
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    align-self: stretch;
    color: $secondary-color;
    text-align: center;
    font-size: 24px;
    margin: 0px;
}

.trafficImg {
    width: 60%;
    height: auto;
}

.photoattention{
    font-family: map-get($font-styles, family);
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    align-self: stretch;
    color: white;
    text-align: center;
    font-size: 10px;
    margin: 0;
}

@media (min-width: 950px) {
    #eyeCatch {
        height: calc(100vh - 60px);
    }

    .eyeCatchTitle {
        width: 100px;
        right: 30px;
        margin-top: 30px;
        font-size: 30vh;
        line-height: 1.2;
        font-size: 10vh;
    }

    .eyeCatchSubtitle {
        left: 16px;
        bottom: 20px;
        font-size: 5vh;
    }

    .eyeCatchDate {
        right: 10px;
        bottom: 20px;
        font-size: 5vh;
    }

    .updateInfoTitle {
        font-size: 40px;
    }

    .trafficTitle {
        font-size: 40px;
    }

    .trafficImg {
        width: 650px;
        height: auto;
    }

    .photoattention{
        font-size: 20px;
    }
}
</style>
