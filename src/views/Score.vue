<template>
    <div class='scoreView' :class='{hidden: loading}'>
        <div class='bookmark'>
            <div class='bookmarkFlip'></div>
            <div class='bookmarkRibbon'></div>
            <div class='bookmarkText'>Coding Skills</div>
        </div>
        <div class='content'>
            <div class='performance'>
                <div class='performanceTitle'>
                    <div class='h1'>General Performance</div>
                    <div class='h2'>Score</div>
                </div>
                <div class='circleContainer'>
                    <PerformanceCircle :value='candidate.overall_score' />
                </div>
            </div>
            <div class='skills'>
                <SkillPentagon v-model='select' :skills='candidate.skills' />
            </div>
            <div class='badges'>
                <h1 class='h2'>Source By</h1>
                <div class='sourceButtons'>
                    <SourceButton type='github' url=''/>
                    <SourceButton type='stack' url=''/>
                    <SourceButton type='google' url=''/>
                </div>
                <div v-if='select' class='highlight'>
                    <p>Highlight repositores related to <strong>{{ select }}</strong>:</p>
                    <Info/>
                    <Info/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import PerformanceCircle from '@/components/PerformanceCircle.vue'
import SkillPentagon from '@/components/SkillPentagon.vue'
import SourceButton from '@/components/SourceButton.vue'
import Info from '@/components/Info.vue'

import api from '@/api.js'

export default {
    data() {
        return {
            score: 0.3,
            select: '',
            candidate: {},
            loading: true
        }
    },
    mounted() {
        api.fetchSkills({
            skill_names: ["Swimming"], 
            account_info: [["academic","123456789"], ["stackoverflow", "123456789"], ["github", "123456789"]], 
            appid: "123456789"
        }).then(data => {
            this.candidate = data;
            this.loading = false
        })
    },
    components: {
        PerformanceCircle,
        SkillPentagon,
        SourceButton,
        Info
    }
}
</script>

<style scoped>

    .scoreView {
        max-width: 1800px;
        background: #ffffff;
        padding: 10px;
        box-shadow: 0px 0px 8px 3px #00000030;
        border-radius: 5px;

        margin-top: 10px;
        margin-bottom: 50px;
        padding: 30px 30px 30px 30px;

		max-width: 1400px;
		width: 90%;

		border: 2px solid #888;
        
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        
        
        opacity: 1;
        transition: all 1s;
        transform: scale(1);
    }

    .hidden {
        transform: scale(0);
        opacity: 0;
    }

    .bookmark {
        position: relative;
    }

    .bookmarkFlip {
        position: absolute;

        width: 0;
        height: 0;

        border-bottom: 15px solid #0f3881;
        border-left: 15px solid transparent;
        top: -20px;
        left: -45px;
    }

    .bookmarkRibbon {
        position: absolute;
        border: 35px solid #ffd111;
        border-left: 0;
        border-right: 30px solid transparent;
        width: 250px;
        top: -5px;
        left: -45px;
    }

    .bookmarkText {
        position: absolute;
        top: 13px;
        left: 0px;

        letter-spacing: 2px;
        font-style: italic;
        font-size: 28px;
        font-weight: bolder;
        color: #234478;
    }

    .performance {
        width: 350px;
    }

    .circleContainer {
        transform: translate(20px, 20px)
    }

    .performanceTitle {
        text-align: left;
        margin-top: 60px;
    }

    .h1 {
        text-align: left;
        font-weight: normal;
        font-size: 2rem;
    }

    .h2 {
        text-align: left;
        font-weight: bolder;
        font-size: 2rem;
        letter-spacing: 1px;
    }

    .content {
        display: flex;
        padding-top: 30px;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .skills {
        display: grid;
        justify-items: center;
        align-items: center;
        margin-top: 30px;
    }

    .badges {
        width: 400px;
    }

    .sourceButtons {
        display: flex;
    }

    .highlight {
        text-align: left;
        font-size: 1.2rem;
    }
</style>