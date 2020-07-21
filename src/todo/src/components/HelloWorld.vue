<template>
	<div class="main">
		<div class="mainleft">
			<img src="./../assets/tb.png" alt="" class="ltb">
			<img src="./../assets/xz.png" alt="" class="lxz lhover">
			<img src="./../assets/bk.png" alt="" class="selectbk">
			<img src="./../assets/xy.png" alt="" class="lxy">
			<img src="./../assets/ls.png" alt="" class="lls">
			<img src="./../assets/bz.png" alt="" class="lbz">
			<img src="./../assets/sz.png" alt="" class="lsz">
		</div>
		<div class="mainleftseparate"></div>
		<div class="maincontent">
			<div class="topcontent"></div>
			<div class="separat"></div>
			<div class="bodycontent"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}
	function bodyScroll(event){
		event.preventDefault();
	}
	document.body.addEventListener('touchmove',bodyScroll,false);
	document.body.style.position='fixed';
	document.body.style.width='100%';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body,
	th,
	td,
	div {
		font-family: arial
	}
	
	p,
	form,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	h3 {
		margin: 0;
		padding: 0;
		list-style: none
	}

	input {
		padding-top: 0;
		padding-bottom: 0;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}
	
	table,
	img {
		border: 0
	}

	html,
	body {
		color: #333;
		text-align: center;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #F2F0F6;
		overflow:hidden;
	}
	
	.main {
		margin: 0 auto;
		background-color: white;
		width: 80%;
		height: 800px;
		position: relative;
		margin-top: 440px;
		transform: translateY(-50%);
		border-radius: 25px;
		-moz-border-radius: 25px;
		display:flex;
		text-align: center;
	}
	
	.mainleft {
		float: left;
		width: 60px;
		height: 100%;
		flex:none;
	}
	
	.mainleftseparate {
		float: left;
		width: 5px;
		height: 100%;
		background-color: #EBEAEE;
		flex:none;
	}
	
	.maincontent {
		float: left;
		overflow: hidden;
		height: 100%;
		-webkit-border-top-right-radius: 25px;
		-moz-border-radius-topleft: 25px;
		-webkit-border-bottom-right-radius: 25px;
		-moz-border-radius-bottomright: 25px;
		background-color: #F9F8F9;
		flex:1;
		margin: 0 auto;
	}

	.ltb {
		margin-top: 5px;
	}

	.lxz {
		margin-top: 94px;
	}

	.selectbk {
		float: left;
		margin-top: 94px;
	}
	.lxy {
		margin-top: 1px;
	}
	.lls {
		margin-top: 1px;
	}

	.lbz {
		margin-top: 400px;
	}

	.lsz {
		margin-top: 5px;
	}

	.ltb:hover,.lxz:hover,.lls:hover,.lxy:hover,.lbz:hover,.lsz:hover{
		transform:scale(1.05);
		-ms-transform:scale(1.05);
		-moz-transform:scale(1.05);
		-webkit-transform:scale(1.05);
		-o-transform:scale(1.1);
		-moz-box-shadow: 5px 5px 4px #888888;
		box-shadow: 5px 5px 4px #888888;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		cursor: pointer;

	}
	.lhover{
		transform:scale(1.05);
		-ms-transform:scale(1.05);
		-moz-transform:scale(1.05);
		-webkit-transform:scale(1.05);
		-o-transform:scale(1.1);
		-moz-box-shadow: 5px 5px 4px #888888;
		box-shadow: 5px 5px 4px #888888;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
		cursor: pointer;
	}


	.topcontent {
		background-color: #f9f3ff;
		height: 10%;
		width: 80%;
	}

	.separat {
	}

	.bodycontent {
	}
</style>