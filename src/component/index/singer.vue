<template>
	<main class="main">
		<p></p>
		<ul class="clear">
			<li v-for="(v,i) in this.$store.state.list">
				<router-link to="/singerlist">
					<img :src="v.src" />
					<p>{{v.con}}</p>
				</router-link>
			</li>
		</ul>
		
	</main>
</template>

<script >
	export default{

	}
</script>
<style scoped>
	

	.main{
		margin-top: 6rem;
		margin-bottom: 4.3rem;
	}
	.main>p{
		height: 1.3rem;
	}
	.main>ul{
	    width: 103%;
	    padding: 0 3%;
	    overflow: hidden;
	}
	.main>ul>li{
	    width: 23%;
	    overflow: hidden;
	    margin: 0 9% .62rem 1%;
	    float: left;
	    cursor: pointer;
	}
	.main img{
		width: 100%;
	}
	.main>ul>li p{
		color: #000000;
		height: 40px;
	}
</style>