// 基本页面
const Home = resolve => require(['./views/Home.vue'],resolve);
// 首页
const HomeView = resolve => require(['./views/HomeView.vue'],resolve);
// 电影
const MovieView = resolve => require(['./views/MovieView.vue'],resolve);
const MovieDetailView = resolve => require(['./views/MovieDetailView.vue'],resolve);
// 电视剧
const TeleplayView = resolve => require(['./views/TeleplayView.vue'],resolve);
const TeleplayDetailView = resolve => require(['./views/TeleplayDetailView.vue'],resolve);
// 综艺
const ShowView = resolve => require(['./views/ShowView.vue'],resolve);
const ShowDetailView = resolve => require(['./views/ShowDetailView.vue'],resolve);
// 动漫
const AnimeView = resolve => require(['./views/AnimeView.vue'],resolve);
const AnimeDetailView = resolve => require(['./views/AnimeDetailView.vue'],resolve);
// 明星
const StarView = resolve => require(['./views/StarView.vue'],resolve);
const StarDetailView = resolve => require(['./views/StarDetailView.vue'],resolve);
// 搞笑
const FunnyView = resolve => require(['./views/FunnyView.vue'],resolve);
// 资讯
const NewView = resolve => require(['./views/NewView.vue'],resolve);
// 专题
const SpecialView = resolve => require(['./views/SpecialView.vue'],resolve);
// 分类
const Classify = resolve => require(['./views/Classify.vue'],resolve);
// 追番表
const Timeline = resolve => require(['./views/AnimeTimeline.vue'],resolve);
// 404 page
const NotFound = resolve => require(['./views/404.vue'],resolve);

let routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home',
        children: [
            {
                path: 'homeView',
                component: HomeView,
                name: 'HomeView'
            },
            {
                path: 'movieView',
                component: MovieView,
                name: 'MovieView'
            },
            {
                path: 'movieDetailView/:id',
                component: MovieDetailView,
                name: 'MovieDetailView'
            },
            {
                path: 'teleplayView',
                component: TeleplayView,
                name: 'TeleplayView'
            },
            {
                path: 'teleplayDetailView/:id',
                component: TeleplayDetailView,
                name: 'TeleplayDetailView'
            },
            {
                path: 'showView',
                component: ShowView,
                name: 'ShowView'
            },
            {
                path: 'showDetailView/:id',
                component: ShowDetailView,
                name: 'ShowDetailView'
            },
            {
                path: 'animeView',
                component: AnimeView,
                name: 'AnimeView'
            },
            {
                path: 'animeDetailView/:id',
                component: AnimeDetailView,
                name: 'AnimeDetailView'
            },
            {
                path: 'starView',
                component: StarView,
                name: 'StarView'
            },
            {
                path: 'funnyView',
                component: FunnyView,
                name: 'FunnyView'
            },
            {
                path: 'newView',
                component: NewView,
                name: 'NewView'
            },
            {
                path: 'specialView',
                component: SpecialView,
                name: 'SpecialView'
            }
        ]
    },
    {
        path: '/starDetailView/:id',
        component: StarDetailView,
        name: 'StarDetailView'
    },
    {
        path: '/classify',
        component: Classify,
        name: 'Classify'
    },
    {
        path: '/timeline',
        component: Timeline,
        name: 'Timeline'
    },
    {
        path: '/',
        redirect: { path: '/home/homeView' }
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export default routes;
