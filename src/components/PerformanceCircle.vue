<template>
    <div class="performanceCircle" :style='circleStyle'>
        <div class='innerValue'>
            {{ score }}
        </div>
        <div class='maxValue'>
            /100
        </div>
        <div class='backCircle'>
            <svg width="160px" height="160px">
                <circle cx="80" cy="80" r="70" stroke-linecap="round"/>
            </svg>
        </div>
        <div class='frontCircle'>
            <svg width="160px" height="160px">
                <circle cx="80" cy="80" r="70" stroke-linecap="round" :style='{"stroke-dashoffset": angel}'/>
            </svg>
        </div>
    </div>
</template>

<script>

var scale = 1.5

export default {
    data() {
        return {
            circleStyle: {
                height: `${160 * scale}px`,
                transform: `scale(${scale})`
            }
        }
    },
    props: {
        value: Number
    },
    computed: {
        angel() {
            return 472 * (1 - this.value)
        },
        score() {
            return Math.round(this.value * 100)
        }
    }
}
</script>

<style scoped>

    .performanceCircle {
        display: grid;
        align-items: center;
        justify-items: center;

        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .innerValue {
        position: absolute;

        font-family: system-ui;

        font-weight: bolder;
        font-size: 70px;

        transform: translate(0px, -5px)
    }

    .maxValue {
        font-family: system-ui;
        position: absolute;
        transform: translate(0px, 35px)
    }

    svg {
        transform: scaleX(-1) rotate(-90deg)
    }
    
    .frontCircle {
        position: absolute;
    }

    .backCircle {
        position: absolute;
    }

    .frontCircle circle {
        stroke: #0f3881;
    }

    .backCircle circle {
        stroke: #d7d7d7;
    }

    circle {
        position: absolute;
        fill: none;
        stroke-width: 10px;
        stroke-dasharray: 472;
    }
</style>