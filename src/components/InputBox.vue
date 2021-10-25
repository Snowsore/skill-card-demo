<template>
    <div class='borderBox'>
        <div class='grid-item name'><slot></slot></div>
        <div class='grid-item input'><input :placeholder='placeholder' v-model='value'/></div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
        placeholder: String,
    },
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style scoped>
    ::placeholder {
        color: #00000050;
    }

    .borderBox {

        display: grid;
        grid-template-columns: 1fr 2fr;
        outline: 2px solid #5371a4;
        border-radius: 3px;

        margin-top: 25px;
        margin-bottom: 15px;
        
        text-align: center;
    }

    .borderBox .grid-item:not(:first-child) {
        border-left: 2px solid #5371a4;
    }

    .name {
        padding: 10px;
    }
    
    .input {
        padding: 10px;
    }

    input {
        display: block;

        width: 100%;
        height: 100%;

        border: none;
        border-width: 0;

        text-overflow: ellipsis;
        
        font-size: 1.2rem;
    }

    input:focus {
        outline:none!important;
    }

</style>