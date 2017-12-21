// 基本页面
const Home = resolve => require(['./views/Home.vue'],resolve);
const HomeView = resolve => require(['./views/BaseHomeView.vue'],resolve);
const MovieView = resolve => require(['./views/BaseMovieView.vue'],resolve);
const MovieDetailView = resolve => require(['./views/BaseMovieDetailView.vue'],resolve);
const TeleplayView = resolve => require(['./views/BaseTeleplayView.vue'],resolve);
const TeleplayDetailView = resolve => require(['./views/BaseTeleplayDetailView.vue'],resolve);
const ShowView = resolve => require(['./views/BaseShowView.vue'],resolve);
const ShowDetailView = resolve => require(['./views/BaseShowDetailView.vue'],resolve);
const AnimeView = resolve => require(['./views/BaseAnimeView.vue'],resolve);
const AnimeDetailView = resolve => require(['./views/BaseAnimeDetailView.vue'],resolve);
const StarView = resolve => require(['./views/BaseStarView.vue'],resolve);
const FunnyView = resolve => require(['./views/BaseFunnyView.vue'],resolve);
const NewView = resolve => require(['./views/BaseNewView.vue'],resolve);
const SpecialView = resolve => require(['./views/BaseSpecialView.vue'],resolve);
// 分类
const Classify = resolve => require(['./views/BaseClassify.vue'],resolve);
// 追番表
const Timeline = resolve => require(['./views/BaseAnimeTimeline.vue'],resolve);
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
