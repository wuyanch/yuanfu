<template>
    <div class="develop-page">
        <div class="develop">
            <div class="develop-content">
                <img :src="src" alt="">
                <p>身份验证失败，请关闭重新进入</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'develop',
    data(){
        return{
            src: require('@/assets/img/guoqi.png')
        }
    },
    created(){
        this.enterpriseCurName = localStorage.getItem('YF_mainstream_project');
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.develop{
    padding: 10px 15px;
    margin-top: 50px;
}
.develop-content{
    font-size: 12px;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    p{
        font-size: 14px;
        margin-top: 20px;
    }
}
.button-btn{
    text-align: center;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    button{
        width: 150px;
        height: 38px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        margin-top: 30px;
        &:first-child{
            background: inherit;
            border: 1px solid #60b3ff;
            color: #60b3ff;
        }
    }

}
</style>