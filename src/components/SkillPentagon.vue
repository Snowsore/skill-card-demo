<template>
    <div class='container'>
		<div class='buttonContainer'>
			<div  class='skillButton' v-for='(skill, index) in skills' :key='index'>
				<div class='skillOffset' :style='{transform: offsetOfTranslate(180, skills.length, index)}'>
					<SkillButton :selected='value == skill.name' @click='value = skill.name'>{{ skill.name }}</SkillButton>
				</div>
			</div>
		</div>
        <svg width='200px' height='200px'>
			<g transform='matrix(1 0 0 -1 100 100)'>
				<circle class='dash' v-for='n in circleDash()' :key='n' :r='n'/>
				<circle class='circle' r='100'/>
				<path class='solid' :d='dashline()'/>
				<path class='trans' :d='path()' fill='#ffd200a0'/>
			</g>
        </svg>
    </div>
</template>

<script>

import SkillButton from '@/components/SkillButton.vue'

function rotateLine(l, a) {
	var r = a * (Math.PI / 180)
	var x = Math.cos(r) * l
	var y = Math.sin(r) * l
	return [x, y]
}

export default {
    data() {
        return {
			circleNumber: 7,
        }
    },
	props: {
		modelValue: String,
		skills: Object
	},
    emits: ['update:modelValue'],
	methods: {
		rotateByNumber(l, n, i) {
			return rotateLine(l, 360 / (n) * i - 90)
		},
		offsetOfTranslate(l, n, i) {
			return `translate(${this.rotateByNumber(l, n, i).join("px, ")}px)`
		},
		path() {
			if(!this.skills) return
			var l = this.skills.length
			var d = 360 / l
			var p = `M ${rotateLine(Math.max(0, this.skills[l - 1].score * 100), 90 - d * (l - 1)).join(' ')} `
			for(let i = 0; i < l; i++) {
				p += `L ${rotateLine(Math.max(0, this.skills[i].score * 100), 90 - d * i).join(' ')} `
			}
			return p
		},
		dashline() {
			if(!this.skills) return
			var l = this.skills.length
			var d = 360 / l
			var p = ''
			for(let i = 0; i < l; i++) {
				p += 'M 0 0'
				p += `L ${rotateLine(1 * 100, 90 - d * i).join(' ')} `
			}
			return p
		},
		circleDash() {
			var arr = []
			for(let i = 0; i < this.circleNumber; i++) {
				arr.push(100 / this.circleNumber * (i + 1))
			}
			return arr
		}
	},
	computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
	},
	components: {
		SkillButton
	}
}
</script>

<style scoped>

	.container {
		display: grid;
		justify-items: center;
		align-items: center;

		width: 500px;
		height: 400px;
	}

	.circle {
		stroke: black;
		stroke-width: 1;
		fill: none;
	}

	.dash {
		stroke: #00000030;
		stroke-width: 1;
		stroke-dasharray: 3;
		fill: none;
	}

	.solid {
		stroke: black;
		stroke-width: 1;
	}

	.trans {
		stroke: #00000030;
		stroke-width: 1;
	}

	.buttonContainer {
		position: absolute;

        display: grid;
        justify-items: center;
        align-items: center;

		width: 300px;
		height: 300px;
		

	}

	.skillButton {
		position: absolute;
	}

</style>