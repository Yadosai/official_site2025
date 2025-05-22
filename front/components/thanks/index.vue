<template>
    <div class="thanksEyeCatch">
        <p class="thanksEyeCatchTitle">協賛団体</p>
        <div class="thanksabout">
            <p>やどかり祭は地域のたくさんの企業や団体からの支援金で成り立っております。</p><p>委員一同、毎年のご支援に深く感謝申し上げます。</p><p>この一覧の中には筑波大生が生活の中でも大変お世話になっているところもあります。新入生はぜひ足を運んでみてください。</p>
        </div>
    </div>
    <div class="bigsponsorContainer">
        <sponsorItem sponsorUrl="https://mentoru.jp/info/tsukuba.html" sponsorLogoUrl="/img/mentoru.jpg" :sponsorDescript="MentoruText"/>
        <sponsorItem sponsorUrl="https://share.google/9LdguqAqQ8h0WncqU" sponsorLogoUrl="/img/yorimichi.jpg" :sponsorDescript="YorimichiTextorimichiText"/>
    </div>
    
    <div class="sponsorsContainer">
        <div class="miniCon">
            <span>銀の豚</span>
            <span>つくば電気空調株式会社</span>
            <span>小山商会</span>
            <span>めんどえステーションつくば</span>
            <span>香陵住販株式会社</span>
            <span>パリミキ</span>
            <span>SALON DES CENT</span>
            <span>上総屋不動産株式会社</span>
            <span>PLUS-1 CAFE GARDEN</span>
            <span>飯岡医院</span>
            <span>大成不動産株式会社</span>
            <span>春日歯科医院</span>
            <span>有限会社岩崎電機</span>
            <span>どら焼き専門店・志ち乃</span>
            <span>PROGRESS</span>
            <span>ASA学園都市</span>
            <span>定食食堂</span>
            <span>スタジオオンツリーサイクル</span>
            <span>suplis hair design</span>
            <span>レストラン夢屋</span>
        </div>
        <div class="miniCon">
            <span>平砂理容室</span>
            <span>ぴすとろ椿々 追越店</span>
            <span>セブンイレブン つくば松見公園店</span>
            <span>桜ヶ丘歯科センター</span>
            <span>有限会社細田金物店</span>
            <span>井上サイクル</span>
            <span>甲聞堂</span>
            <span>かつ天</span>
            <span>灯禾軒</span>
            <span>菱光建設株式会社</span>
            <span>プリムローズ</span>
            <span>一誠商事</span>
            <span>肉のいなげや</span>
            <span>Layout9</span>
            <span>お酒とごはん わかたろう</span>
            <span>からおけBanBanつくば学園店</span>
            <span>フライングガーデンつくば西平塚店</span>
            <span>株式会社アジア住販</span>
            <span>桂不動産</span>
            <span>本家かまどや つくば春日店</span>
        </div>
        <div class="miniCon">
            <span>あじ彩</span>
            <span>ファミリーマートつくば葛城店</span>
            <span>ガーリーショット</span>
            <span>カラオケボイス</span>
            <span>Cruise</span>
            <span>ル・パン グリ・グリ</span>
            <span>Cafe4</span>
            <span>つけめん・まぜそば むじゃき</span>
            <span>青山がらり</span>
            <span>有限会社オンザロードつくば</span>
            <span>朝日印刷株式会社</span>
            <span>らぁめんえびすや</span>
            <span>フライパン</span>
            <span>株式会社秀和不動産</span>
            <span>ばばば</span>
            <span>つくばデザイン不動産</span>
            <span>カードックオノノ</span>
            <span>ごう家</span>
            <span>松見タクシー</span>
            <span>七福軒</span>
        </div>
        <div class="miniCon">
            <span>ミート&デリ プラム</span>
            <span>Bettei</span>
            <span>N's café</span>
            <span>WALK大学前通り店</span>
            <span>有限会社柿本サンソウジング</span>
            <span>百香亭 筑波大学店</span>
            <span>免キラ★つくばベース</span>
            <span>ミュージックプラント</span>
            <span>自家焙煎コーヒーファクトリー</span>
            <span>よりみちベーカリー</span>
            <span>ホワイトバジル</span>
            <span>フリーダイヤ</span>
            <span>大将別館</span>
            <span>Beer & café engi</span>
            <span>ラーメン逆流</span>
            <span>株式会社井上フード（カレー屋＆粉クリ）</span>
        </div>
    </div>
</template>

<script>
import sponsorItem from '~/components/thanks/sponsorItem'

export default {
    components: { sponsorItem },
    data() {
        return {
            SeirokuyaText: "",
            YorimichiText: "",
            MentoruText: ""
        };
    }
}
</script>

<style lang="scss">
.thanksEyeCatch {
    display: flex;
    padding: 25px;
    margin: 0;
    flex-direction: column;
    align-items: center;
    background-color: $quaternary-color;
}

.thanksEyeCatchTitle {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 24px;
    margin: 0;
}

.thanksabout {
    background-color: $primary-color;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    padding: 5px;
    margin: 0;
    text-align: center;
}
.thanksabout p {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
}
.bigsponsorContainer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0;
}
.sponsorsContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
    padding: 50px;
    margin: 0;
}
.miniCon {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: fit-content;
    width: fit-content;
    align-content: flex-start;
    gap: 5px;
    margin: 0;
}
.miniCon span {
    font-style: map-get($font-styles, style);
    font-weight: map-get($font-styles, weight);
    line-height: map-get($font-styles, line-height);
    font-family: map-get($font-styles, family);
    font-size: 14px;
    width: fit-content;
    margin: 0;
}

@media (min-width: 950px) {
    .thanksEyeCatchTitle {
        font-size: 40px;
    }
}
</style>
