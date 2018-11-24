<template>
	<header >
		<p class="left">
			<a@click="back()" class="back">
				<img src="../../assets/images/recommend/back.png" />
			</a>
			<span>{{title}}</span>
		</p>
		<p class="right">
			<router-link to="/search">
				<img src="../../assets/images/recommend/seach.png" />
			</router-link>
		</p>
	</header>
</template>

<script >
	
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		props:['title'],
		
	}
</script>
<style scoped>

		.back{
			display: inline-block;
			height: 50px;
			vertical-align: middle;
		}
		.left{
			float: left;
		}
		.right{
			float: right;
		}
		header{
			position: fixed;
		    height: 50px;
		    background: #ededed;
		    overflow: hidden;
		    padding: 0 4%;
		    width: 92%;
		    z-index: 10;
		}
		.left img{
		    width: 30px;
		    height: 30px;
		    overflow: hidden;
		    margin: 8px 10px 0 0;

		}
		header span{
		    font: 16px/50px "微软雅黑";
		    color: #010101;
		    font-weight: bold;
		    display: inline-block;
		    height: 50px;
		
		}
		.right img{
		    width: 1.31rem;
    		height: 1.31rem;
		    overflow: hidden;
    		margin-top: .93rem;
		}
		
</style>