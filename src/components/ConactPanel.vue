<template>
	<section class="aboutSection" v-if="isOpenConactPanel">
		<div>
			<div class="sentence revealAnimation animate">
				<h1>『 Thông tin liên lạc của Trần Lê Quyền』</h1>
			</div>
		</div>
		<div class="textContainer animate">
			<h2>Contact</h2>
			<div>
			
				<a href="https://www.facebook.com/Gumq4/" target="_blank">
					<span>Facebook</span>
				</a>
				<a href="mailto:tranquyen14042000@gmail.com/" target="_blank">
					<span>Email</span>
				</a>
				<a href="https://www.instagram.com/gumq4_/" target="_blank">
					<span>Instagram</span>
				</a>
			</div>
		</div>
		<div class="textContainer animate">
			<h2>Other</h2>
			<div>
				
				<a href="https://github.com/gumq" target="_blank">
					<span>github</span>
				</a>
				<a href="https://zalo.me/0389150134" target="_blank">
					<span>Zalo</span>
				</a>

			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from 'gsap';
export default {
	name: 'ConactPanel',
	props: ['isOpenConactPanel', 'isMobile']
};
</script>

<style lang="less">
.aboutSection {
	color: white;
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	.sentence {
		display: inline-block;
	}
}

.textContainer {
	opacity: 0;
	h2 {
		display: inline-block;
		border-bottom: 1px solid rgb(224, 224, 224);
	}
	span {
		color: #ffffff;
		// padding: 0px 2vw;
		pointer-events: auto;
		min-width: 150px;
		display: inline-block;
		&:hover {
			cursor: pointer;
			color: #f0f8ff;
		}
	}
	&.animate {
		animation: textEntry 1s forwards;
	}
}

@keyframes textEntry {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.revealAnimation {
	position: relative;
	h1 {
		margin: 0;
		opacity: 0;
	}
	&.animate {
		h1 {
			animation: textFadein 0.1s 0.5s forwards;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			z-index: 10;
		}
		&:before {
			background-color: white;
			animation: revealAnimation 1s ease;
		}
	}
}

@keyframes revealAnimation {
	0% {
		width: 0;
		left: 0;
	}
	65% {
		width: 100%;
		left: 0;
	}
	100% {
		width: 0;
		left: 100%;
	}
}

@keyframes textFadein {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
