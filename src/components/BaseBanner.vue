<script>
export default {
    data () {
        return {
            bannerData: [
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/0875dc9d287e4d8fab61f84470d5d674.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/0875dc9d287e4d8fab61f84470d5d674.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/0875dc9d287e4d8fab61f84470d5d674.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/0875dc9d287e4d8fab61f84470d5d674.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                },
                {
                    url: '',
                    img: 'http://m.qiyipic.com/common/lego/20171204/0875dc9d287e4d8fab61f84470d5d674.jpg',
                    content: {
                        title: '独步天下',
                        dec: '看到飙泪! 东哥与葛戴终于相认了东哥与葛戴按时打算大啥的'
                    }
                }
            ]
        }
    },
    methods: {
        init() {
            new Swiper ('.swiper-container', {
                loop: true,             // 循环
                roundLengths: true,     // 宽高比例取整
                initialSlide: 0,        // 初始化索引    
                speed: 600,             // 滑动的持续时间
                slidesPerView: "auto",  // 设置slider容器能够同时显示的slides数量(carousel模式)。
                loopedSlides: 5,        // 搭配 slidesPerView 设置,一般设置 slides 的数量
                centeredSlides: true,   // centeredSlides true 滑块居中
                autoplay: true,         // 是否自动播放
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });  
        }
    },
    mounted() {
        this.init();
    }
}
</script>

<template>
    <section id="base-banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(item,index) in bannerData" :key="index" class="swiper-slide" title="" >
                    <a :href="item.url" :style="`background-image: url(${item.img})`">
                        <div class="c-lb">
                            <h3>{{ item.content.title }}</h3>
                            <p class="text-ellipsis">{{ item.content.dec }}</p>
                        </div>
                    </a>
                </div>
			</div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
		</div>
    </section>
</template>

<style lang="scss" scoped>
    #base-banner {
        padding: .231481rem 0 .416667rem 0;
    }
    .swiper-container {
        height: 5.305556rem;
        .swiper-slide {
            width: 95%;
            margin: 0 .074074rem;
            border-radius: .092593rem;
            a {
                display: block;
                width: 100%;
                height: 100%;
                position: relative;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: .092593rem;
                box-shadow: 0 -150px 90px 0px rgba(0, 0, 0, 0.4) inset;
                color: #fff;
                .c-lb {
                    position: absolute;
                    left: .305556rem;
                    bottom: .305556rem;
                    h3 {
                        display: inline;
                    }
                    p {
                        margin-top: .212963rem;
                        width: 6.518519rem;
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
#base-banner {
    .swiper-pagination {
        text-align: right;
        width: 95%;
        bottom: .342593rem;
    }
}

.swiper-pagination-bullet {
    width: .092593rem;
    height: .092593rem;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.4;
    transition: all .3s;
    &.swiper-pagination-bullet-active {
        width: .203704rem;
        height: .092593rem;
        background-color: #ff6a1f;
    }
}
.swiper-slide .c-lb {
    h3 {    
        font-size: 16px;
    }
    p {
        font-size: 12px;
    }
}
[data-dpr="2"] .swiper-slide .c-lb {
    h3 {    
        font-size: 32px;
    }
    p {
        font-size: 24px;
    }
}
[data-dpr="3"] .swiper-slide .c-lb {
    h3 {    
        font-size: 48px;
    }
    p {
        font-size: 36px;
    }
}
</style>

